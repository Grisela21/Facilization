create or replace procedure pr_grisela_MID_RATE_ex_FCUST is

l_branch_code CYTMS_RATES.Branch_Code%TYPE:='000';
l_ccy1  CYTMS_RATES.CCY1%TYPE:= 'ALL';
l_ccy2  CYTMS_RATES.CCY2%TYPE:='USD';
l_result varchar(500);
begin
   l_result:= pr_GRISELA_MID_RATE_FCUST(l_branch_code, l_ccy1, l_ccy2);
   dbms_output.put_line(l_result);
  end;
