CREATE OR REPLACE FUNCTION fn_grisela_convert_money_FCUST  (
p_branch_code CYTMS_RATES.Branch_Code%TYPE,
p_ccy1  CYTMS_RATES.CCY1%TYPE,
p_ccy2  CYTMS_RATES.CCY2%TYPE ,
p_amountOfMoney  number )return number is
l_ccy_dont_exists Exception;
l_sum number;
l_ccy_decimals number;
l_mid_rate varchar(200);

begin
  
  l_mid_rate:= fn_grisela_MID_RATE_FCUST(p_branch_code ,p_ccy1  ,p_ccy2 ); --get the mid_rate from the function
  
  if l_mid_rate='Kto CCY nuk egzistojne ne databaze' then 
      raise l_ccy_dont_exists; --errror if ccyt doesnt exists in database
  end if;
  -- getthe decimal
  Select distinct CCY_DECIMALS
  into l_ccy_decimals
  from CYTMS_CCY_DEFN_MASTER
  where CCY_CODE= p_ccy2;
   
   if l_ccy_decimals <=0 then
       raise NO_DATA_FOUND;
   end if;
    
    
  l_sum:= p_amountOfMoney * l_mid_rate;
  l_sum:=ROUND(l_sum, l_ccy_decimals);
  return l_sum;
  
  exception
     WHEN NO_DATA_FOUND THEN  
            
            dbms_output.put_line('Per kete CCY rrumballikimi do te jete me 0 shifra pas presjes pasi nuk ndodhet ne databzen tone');
             l_sum:= p_amountOfMoney * l_mid_rate;
             l_sum:=ROUND(l_sum, 0);
              return l_sum;
 
  when l_ccy_dont_exists then
                dbms_output.put_line('Nuk mund te bejme veprime me keto CCY te dhena');

    return 0;
    
  end;
