create table STTM_GRISELA_USHTRIMI2
(

  relationship        VARCHAR2(255),
  description         VARCHAR2(255),
  category            VARCHAR2(255),
  product_restriction VARCHAR2(255),
  record_stat               CHAR(1),
  auth_stat                 CHAR(1),
  mod_no                    NUMBER,
  maker_id                  VARCHAR2(12),
  maker_dt_stamp            DATE,
  checker_id                VARCHAR2(12),
  checker_dt_stamp          DATE,
  once_auth                 CHAR(1) default 'N',
  Constraint PK_STTM_GRISELA_USHTRIMI2 Primary key(category)
)

Create synonym STTMS_GRISELA_USHTRIMI2 for STTM_GRISELA_USHTRIMI2;
