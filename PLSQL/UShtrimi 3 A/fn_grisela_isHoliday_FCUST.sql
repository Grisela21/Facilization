CREATE OR REPLACE FUNCTION fn_grisela_isHoliday_FCUST (
p_myDay in date, p_n in number,p_HorW out varchar2,p_error_message out varchar  )return boolean as
  l_myDay DATE :=p_myDay;
  l_myDay_new DATE;
  l_result BOOLEAN;
  l_day  STTMS_LCL_HOLIDAY.HOLIDAY_LIST%TYPE;
  l_date number(2);
  l_month number(2);
  l_year number(4);
  l_count number;
   
BEGIN 
  --create the new day
   l_myDay_new:=TO_DATE(l_myDay+p_n,'DD/MM/YY');
   
   dbms_output.put_line( 'The date required by you is '|| l_myDay_new);
   
 -- divide the date into day, month, year
   select EXTRACT( day FROM l_myDay_new ) into  l_date  FROM DUAL;  
 
   select EXTRACT( month FROM l_myDay_new ) into  l_month  FROM DUAL;   
  
   select EXTRACT( year FROM l_myDay_new ) into  l_year  FROM DUAL;   

  
  
  -- controlling first if this data exists in database
  SELECT count(*) 
    INTO l_count
    FROM STTMS_LCL_HOLIDAY
  WHERE STTMS_LCL_HOLIDAY.YEAR = l_year and STTMS_LCL_HOLIDAY.Month= l_month;
  
  
  IF l_count>0 then --if exists
                    --- take from database the string for that year and month
                    
        SELECT HOLIDAY_LIST
        INTO l_day
        FROM STTMS_LCL_HOLIDAY
        WHERE STTMS_LCL_HOLIDAY.YEAR = l_year and STTMS_LCL_HOLIDAY.Month= l_month;
        --DBMS_OUTPUT.put_line (l_day);
        
        
        
        
        --take the required day 
        p_HorW:=SUBSTR(l_day, l_date,1);
            -- DBMS_OUTPUT.put_line(p_HorW);
            ---controlling if it is holiday or working day
            
         IF p_HorW ='H' THEN
             l_result :=TRUE;
         ELSE
             l_result:= FALSE ;
         END IF;
         
         
         --returning the result
        DBMS_OUTPUT.put_line('Pergjigja per ju eshte :');
        RETURN l_result ;
    
  ELSE   --if data doesn't exists then raiean exception
    RAISE NO_DATA_FOUND;
  END IF;       
         
EXCEPTION
   WHEN NO_DATA_FOUND THEN
       p_error_message:='Kjo date nuk nodhet ne databaze';
       DBMS_OUTPUT.PUT_LINE(p_error_message);
       RETURN l_result ;
  
   WHEN OTHERS THEN --is used to trap all remaining exceptions that have not been handled 
       p_error_message:='Gabim ne funksion';
       DBMS_OUTPUT.PUT_LINE(p_error_message);
       RETURN l_result ;
  
 
 END fn_grisela_isHoliday_FCUST;
