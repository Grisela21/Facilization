create or replace procedure pr_GRISELA_XML_FCUST as
      



      l_p_directory  varchar2(30)  := 'GRISELA_XMLDIRECTORY'; -- "/home/oracle/grisela/"
      l_p_filename   varchar2(260) := 'xml.xml';

      l_file_id    grisela_FileDetails.File_Id%type;
BEGIN
   


 BEGIN
      insert into grisela_FileDetails (file_id, xml_data, filename, insert_date, file_location)
    values (
      grisela_FileDetails_seq.Nextval
    , xmltype(bfilename(l_p_directory, l_p_filename), nls_charset_id('AL32UTF8'))
    , l_p_filename
    , sysdate
    , l_p_directory
    )
    returning file_id into l_file_id ;
commit;
 dbms_output.put_line('success1'||l_file_id);
 end;
 
BEGIN
   insert into GRISELA_BANKTABLE (ENDTOENDID, AMT, CCY, IBAN,BIC,file_id)
    select x.*, l_file_id
    from GRISELA_FILEDETAILS t
       ,  XMLTABLE('/Msg/Docs/Doc/Cctinit/Document/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf'
           passing t.xml_data
              COLUMNS
        "ENDTOENDID" varchar2(15) PATH 'PmtId/EndToEndId',
        "AMT" number PATH 'Amt/InstdAmt',
        "CCY" varchar2(3) PATH 'Amt/InstdAmt/@Ccy',
        "IBAN" varchar2(20) PATH 'CdtrAcct/Id/IBAN',
        "BIC" varchar2(12)  PATH 'CdtrAgt/FinInstnId/BIC'
   
         ) x 
           
          where t.file_id =l_file_id ;    
         COMMIT;
end;


 dbms_output.put_line('success2');
 
 exception
   when NO_DATA_FOUND then
      dbms_output.put_line('no data found');
      when others then
        dbms_output.put_line('ERROR');

  END pr_GRISELA_XML_FCUST;
