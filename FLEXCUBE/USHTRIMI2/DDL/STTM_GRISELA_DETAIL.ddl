CREATE  TABLE STTM_GRISELA_DETAIL
(
   category    VARCHAR2(255),
   product_code varchar2 (155), 
   Constraint STTM_GRISELA_DETAIL Primary key(category,product_code)
  

)


Create synonym STTMS_GRISELA_DETAIL for STTM_GRISELA_DETAIL;
