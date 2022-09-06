CREATE  TABLE STTM_GRISELA_USHTRIMI1
(
 Group_code varchar2(35),
 Description varchar2(255),
 Exposure_category varchar2(35) ,
 Group_Status varchar2(35),
 Since Date,
 Group_Type varchar2(35),
 record_stat               CHAR(1),
  auth_stat                 CHAR(1),
  mod_no                    NUMBER,
  maker_id                  VARCHAR2(12),
  maker_dt_stamp            DATE,
  checker_id                VARCHAR2(12),
  checker_dt_stamp          DATE,
  once_auth                 CHAR(1) default 'N',
   Constraint PK_STTM_GRISELA_USHTRIMI1 Primary key(Group_code)
  
);
Create synonym STTMS_GRISELA_USHTRIMI1 for STTM_GRISELA_USHTRIMI1;
