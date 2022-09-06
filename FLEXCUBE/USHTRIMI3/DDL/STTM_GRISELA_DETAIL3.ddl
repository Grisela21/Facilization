CREATE  TABLE STTM_GRISELA_DETAIL3
(
 customer_type varchar2(150),
 customer_category varchar2(150),
 field_description varchar (155), 
 mandatory_validations varchar2(150),
 Constraint STTM_GRISELA_DETAIL3 Primary key(customer_type,customer_category,field_description)
);
Create synonym STTMS_GRISELA_DETAIL3 for STTM_GRISELA_DETAIL3;
