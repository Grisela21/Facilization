CREATE OR REPLACE FUNCTION fn_grisela_does_contract_exist_no_FCUST (
 p_udf_name VARCHAR2, p_udf_value VARCHAR2, p_fc_module varchar2 )return  VARCHAR2 is
 
 l_cotract_field_num cstm_product_udf_fields_map.field_num%TYPE;
 l_result varchar2(50):='yes, contract exist';
 l_contract_field_name cstm_contract_userdef_fields.field_val_1%TYPE;
 l_count number;
 
 begin
  --1- get field_num from table
  select FIELD_NUM
  into l_cotract_field_num
  from cstm_product_udf_fields_map
  where cstm_product_udf_fields_map.field_name= p_udf_name;
                  -- DBMS_OUTPUT.put_line(l_cotract_field_num);
                  
                  
  --2- choose from which field_vule should  we take the valuue
  
  
  
   /*  CASE l_cotract_field_num
      WHEN 1 THEN
    l_contract_field_name := 'FIELD_VAL_1' ;
     WHEN 2 THEN
    l_contract_field_name := 'FIELD_VAL_2';
     WHEN 3 THEN
    l_contract_field_name := 'FIELD_VAL_3';
     WHEN 4 THEN
    l_contract_field_name := 'FIELD_VAL_4';
     WHEN 5 THEN
    l_contract_field_name := 'FIELD_VAL_5';
     WHEN 6 THEN
    l_contract_field_name := 'FIELD_VAL_6';
     WHEN 7 THEN
    l_contract_field_name := 'FIELD_VAL_7';
     WHEN 8 THEN
    l_contract_field_name := 'FIELD_VAL_8';
     WHEN 9 THEN
    l_contract_field_name := 'FIELD_VAL_9';
     WHEN 10 THEN
    l_contract_field_name := 'FIELD_VAL_10';
     WHEN 11 THEN
    l_contract_field_name := 'FIELD_VAL_11';
     WHEN 12 THEN
    l_contract_field_name := 'FIELD_VAL_12';
  ELSE
    -- RAISE CASE_NOT_FOUND;
   DBMS_OUTPUT.PUT_LINE( 'gabim ne databaze' );
  END CASE;
    DBMS_OUTPUT.PUT_LINE( l_contract_field_name );  */  ------- zgjedhje para se te dija konkatinimin
    
    
    
    
    
    
 l_contract_field_name:= 'FIELD_VAL_'||l_cotract_field_num;
 
 
  --3- control if the contract exists
 
  EXECUTE IMMEDIATE 'select count(*)  from cstm_contract_userdef_fields where '|| l_contract_field_name||'='''||p_udf_value||'''  and module =''' || p_fc_module ||''' ' into l_count;
     if l_count >0 then
       return l_result;
     else
         l_result:='no, contract does not exists';
         return l_result;
      end if;
    
  
  
  
exception
    when no_data_found then
      return 'no, contract does not exist';
    when others then
      return 'error ';
  
   --DBMS_OUTPUT.PUT_LINE( l_contract_field_name );

  end fn_grisela_does_contract_exist_no_FCUST;
