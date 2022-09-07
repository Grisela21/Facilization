CREATE  TABLE STTM_GRISELA_USHTRIMI4
(

reference varchar2(150),
description varchar2(150),
  record_stat               CHAR(1),
  auth_stat                 CHAR(1),
  mod_no                    NUMBER,
  maker_id                  VARCHAR2(12),
  maker_dt_stamp            DATE,
  checker_id                VARCHAR2(12),
  checker_dt_stamp          DATE,
  once_auth                 CHAR(1) default 'N',
Constraint PK_STTM_GRISELA_USHTRIMI4 Primary key(reference)
);

Create synonym STTMS_GRISELA_USHTRIMI4 for STTM_GRISELA_USHTRIMI4;
