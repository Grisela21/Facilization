CREATE OR REPLACE FUNCTION fn_grisela_find_MID_RATE_FCUST  (
p_branch_code CYTMS_RATES.Branch_Code%TYPE,
p_ccy1  CYTMS_RATES.CCY1%TYPE,
p_ccy2  CYTMS_RATES.CCY2%TYPE )return varchar2 is

l_mid_rate varchar2(200);

begin
 Select mid_rate into l_mid_rate
 from CYTMS_RATES
 Where BRANCH_CODE=p_branch_code AND CCY1=p_ccy1  AND CCY2=p_ccy2 AND rate_type='STANDARD';
 ---if exist
 return l_mid_rate;
 
            exception
               WHEN NO_DATA_FOUND THEN
                        --check the other case
                  begin
                           Select mid_rate into l_mid_rate
                           from CYTMS_RATES
                           Where BRANCH_CODE=p_branch_code AND CCY1=p_ccy2  AND CCY2=p_ccy1 AND rate_type='STANDARD';
                           -- it is true the other case
                            return 1/TO_NUMBER(l_mid_rate);
                            exception
                               WHEN NO_DATA_FOUND THEN
                               l_mid_rate:=null;
                               return l_mid_rate;
                   end;
 
 end;
