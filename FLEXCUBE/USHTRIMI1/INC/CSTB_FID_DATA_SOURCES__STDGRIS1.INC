DELETE CSTB_FID_DATA_SOURCES A  WHERE A.FUNCTION_ID = 'STDGRIS1' ;
INSERT INTO CSTB_FID_DATA_SOURCES(FUNCTION_ID,NODE_NAME,NODE_NO,TABLE_NAME,NODE_TYPE,NODE_MANDATORY,PARENT_NODE,RELATION_WITH_PARENT,REL_TYPE,MULTI_RECORD,PK_COLS,PK_TYPES,COLUMN_NAME_LIST,COLUMN_NAME_LIST_1) VALUES(
'STDGRIS1',
'STTMS_GRISELA_USHTRIMI1',
1,
'STTM_GRISELA_USHTRIMI1',
'NORMAL',
'N',
NULL,
NULL,
'1',
'N',
'GROUP_CODE',
'VARCHAR2',
'DESCRIPTION~EXPOSURE_CATEGORY~GROUP_CODE~GROUP_STATUS~GROUP_TYPE~SINCE~MAKER_ID~MAKER_DT_STAMP~CHECKER_ID~CHECKER_DT_STAMP~MOD_NO~RECORD_STAT~AUTH_STAT~ONCE_AUTH~',
NULL);
COMMIT;