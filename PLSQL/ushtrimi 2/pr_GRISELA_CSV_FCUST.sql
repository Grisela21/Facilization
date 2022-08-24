CREATE OR REPLACE PROCEDURE pr_GRISELA_CSV_FCUST
AS
   l_file_name   VARCHAR2 (150);
   l_file_type   UTL_FILE.file_type;
   l_line        VARCHAR2 (255);
   l_CCY1      VARCHAR2(3);
   l_CCY2        VARCHAR2(3);
   l_mid_rate      NUMBER;
   l_EXCH_DATE      DATE;
   l_var_help      varchar2(30);
 
BEGIN
   l_file_name   := 'grisela.csv';
   --open file
   l_file_type   := UTL_FILE.fopen ('GRISELA_CSVDIR', l_file_name, 'R');
   -- loop into it line per line
       loop
         begin
        utl_file.get_line(l_file_type,l_line);
      
        l_CCY1 :='EUR'; --CCY1 is constant
        
         l_var_help:=regexp_substr(l_line, '[^,]+',1,1); --searches for the characters other than comma followed by a non-comma character in the source string.

         l_CCY2 := regexp_substr(l_var_help, '[^1 =]+',1,1); --holds the  CCY2

          if length(l_var_help)>3 then  
        l_CCY1 := regexp_substr(l_var_help, '[^1 =]+',1,2); --holds CCY1 in case that is specified
         end if;

         l_mid_rate:=regexp_substr(l_line, '[^,]+',1,2); --holds mid_rate
           l_EXCH_DATE:=TO_DATE(regexp_substr(l_line, '[^,]+',1,3), 'dd/mm/yyyy'); -- holds exch_date
          dbms_output.put_line( l_CCY1 || '|' || l_CCY2 ||  '|' || l_mid_rate || '|' || l_EXCH_DATE );


---inserting the values into table
 begin
         insert into GRISELA_CSVTABLE(CCY1,CCY2,MID_RATE,EXCH_DATE)

         values (l_CCY1,l_CCY2,l_mid_rate,l_EXCH_DATE);
         commit;
end;

EXCEPTION 
  WHEN No_Data_Found THEN
   EXIT;
    when others then
        dbms_output.put_line('ERROR');
 END;
end loop;

IF UTL_FILE.IS_OPEN(l_file_type) THEN
dbms_output.put_line('File is Open');
end if;

UTL_FILE.FCLOSE(l_file_type);
END;

