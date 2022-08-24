create or replace procedure pr_grisela_does_contract_exist_no_ex_FCUST is

l_contract_field_name varchar2(20):='CL_EXT_ACCOUNT_NO';
l_result varchar2(50);
l_contract_field_value varchar2(152):= '000HPDD202760007';
l_contract_module varchar2(152):= 'SI';
BEGIN

   l_result:= fn_grisela_does_contract_exist_no_FCUST (l_contract_field_name, l_contract_field_value, l_contract_module);
  dbms_output.put_line(l_result);
  END;
