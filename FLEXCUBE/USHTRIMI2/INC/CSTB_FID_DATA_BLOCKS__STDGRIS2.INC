DELETE CSTB_FID_DATA_BLOCKS A  WHERE A.FUNCTION_ID = 'STDGRIS2' ;
INSERT INTO CSTB_FID_DATA_BLOCKS(FUNCTION_ID,BLOCK_NAME,BLOCK_NO,BLOCK_TYPE,BLOCK_PARENT,RELATION_TYPE,MULTI_RECORD,BLOCK_TITLE,XSD_NODE,DSN_LIST,DSN_LIST_1,DSN_LIST_2,FLD_TAG_FIELDS,FLD_TAG_FIELDS_1,FLD_TAG_FIELDS_2,FLD_TAG_XSD_TAGS,FLD_TAG_XSD_TAGS_1,FLD_TAG_XSD_TAGS_2) VALUES(
'STDGRIS2',
'BLK_MASTER',
1,
'NORMAL',
NULL,
'1',
'N',
NULL,
'Master',
'STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~STTMS_GRISELA_USHTRIMI2~',
NULL,
NULL,
'CATEGORY~DESCRIPTION~PRODUCT_RESTRICTION~RELATIONSHIP~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH~',
NULL,
NULL,
'CATEGORY~DESCRIPTION~PRODUCT_RESTRICTION~RELATIONSHIP~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH~',
NULL,
NULL);
INSERT INTO CSTB_FID_DATA_BLOCKS(FUNCTION_ID,BLOCK_NAME,BLOCK_NO,BLOCK_TYPE,BLOCK_PARENT,RELATION_TYPE,MULTI_RECORD,BLOCK_TITLE,XSD_NODE,DSN_LIST,DSN_LIST_1,DSN_LIST_2,FLD_TAG_FIELDS,FLD_TAG_FIELDS_1,FLD_TAG_FIELDS_2,FLD_TAG_XSD_TAGS,FLD_TAG_XSD_TAGS_1,FLD_TAG_XSD_TAGS_2) VALUES(
'STDGRIS2',
'BLK_DETAIL',
2,
'NORMAL',
'BLK_MASTER',
'N',
'Y',
NULL,
'Detail',
'STTMS_GRISELA_DETAIL~STTMS_GRISELA_DETAIL~',
NULL,
NULL,
'CATEGORY~PRODUCT_CODE~',
NULL,
NULL,
'CATEGORY~PRODUCT_CODE~',
NULL,
NULL);
COMMIT;