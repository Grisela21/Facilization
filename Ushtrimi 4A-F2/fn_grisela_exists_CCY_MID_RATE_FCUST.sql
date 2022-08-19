CREATE OR REPLACE FUNCTION fn_grisela_exists_CCY_MID_RATE_FCUST  (
p_branch_code CYTMS_RATES.Branch_Code%TYPE,
p_ccy  CYTMS_RATES.CCY1%TYPE)return number is
p_count number;

begin
  
 Select count(*) into p_count
   from CYTMS_RATES
   Where BRANCH_CODE=p_branch_code AND (CCY1=p_ccy  or  CCY2=p_ccy) AND rate_type='STANDARD'  ;
   --dbms_output.put_line(g_count);
   return p_count;
   
   end;
