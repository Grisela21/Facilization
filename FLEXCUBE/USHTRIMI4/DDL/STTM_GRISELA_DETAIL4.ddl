
CREATE  TABLE STTM_GRISELA_DETAIL4
(

reference varchar2(150),
subject varchar2(150),
description varchar2(150),
d_user varchar2(150),
d_date varchar2(150),

Constraint PK_STTM_GRISELA_DETAIL4 Primary key(reference,subject)
);
Create synonym STTMS_GRISELA_DETAIL4 for STTM_GRISELA_DETAIL4;
