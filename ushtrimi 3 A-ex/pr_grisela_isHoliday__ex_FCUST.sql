create or replace procedure pr_grisela_isHoliday__ex_FCUST is

l_date date:=TO_DATE('03 02 2020','DD/MM/YYYY');
l_HorW varchar2(1):=null;
l_error_message varchar(40):=null;
l_result boolean;
BEGIN

   l_result:= fn_grisela_isHoliday_FCUST (l_date,-1,l_HorW, l_error_message);
  dbms_output.put_line(
   case
      when l_result then 'TRUE'
      when l_result is null then 'NULL'
      else 'FALSE'
   end
);
  END;
