DELETE GWTM_AMEND_NODES A  WHERE A.EXT_SYSTEM = 'FLEXCUBE' AND RAD_FUNCTION_ID = 'STDGRIS1' ;
INSERT INTO GWTM_AMEND_NODES(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,NEW_ALLOWED,DELETE_ALLOWED,ALL_RECORDS,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS1_EXECUTEQUERY',
'STTMS_GRISELA_USHTRIMI1',
'N',
'N',
'Y',
'STDGRIS1',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_NODES(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,NEW_ALLOWED,DELETE_ALLOWED,ALL_RECORDS,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS1_NEW',
'STTMS_GRISELA_USHTRIMI1',
'N',
'N',
'Y',
'STDGRIS1',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_NODES(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,NEW_ALLOWED,DELETE_ALLOWED,ALL_RECORDS,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDGRIS1_MODIFY',
'STTMS_GRISELA_USHTRIMI1',
'Y',
'Y',
'Y',
'STDGRIS1',
'FLEXCUBE');
COMMIT;