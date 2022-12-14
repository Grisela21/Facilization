DELETE GWTM_AMEND_FIELDS A  WHERE A.EXT_SYSTEM = 'FLEXCUBE' AND RAD_FUNCTION_ID = 'STDGRIS4' ;
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_USHTRIMI4',
'DESCRIPTION',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_USHTRIMI4',
'MAKER_ID',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_USHTRIMI4',
'MAKER_DT_STAMP',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'ACCOUNT',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'AMOUNT',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'CCY',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'EMAIL',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'M_DATE',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'PHONE_NUMBER',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'PRIORITY',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_MAIN',
'REFERENCE',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_DETAIL4',
'DESCRIPTION',
'STDGRIS4',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_FIELDS(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,FIELD_NAME,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS4_MODIFY',
'STTMS_GRISELA_DETAIL4',
'SUBJECT',
'STDGRIS4',
'FLEXCUBE');
COMMIT;