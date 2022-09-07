CREATE  TABLE STTM_GRISELA_MAIN
(

reference varchar2(150),
costumer_number varchar2(150),
costumer_name varchar2(150),
phone_number number,
email varchar2(150),
account varchar2(150),
priority varchar2(150),
amount  varchar2(150),
ccy varchar2(150),
m_date varchar2(150),

Constraint PK_STTM_GRISELA_MAIN Primary key(reference,costumer_number,costumer_name)
);
Create synonym STTMS_GRISELA_MAIN for STTM_GRISELA_MAIN;
