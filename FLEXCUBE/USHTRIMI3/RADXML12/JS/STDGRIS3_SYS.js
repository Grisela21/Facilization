/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software Product. 
**  Copyright (c) 2008 ,2022, Oracle and/or its affiliates.
**  All rights reserved.
**  
**  No part of this work may be reproduced, stored in a retrieval system, 
**  adopted or transmitted in any form or by any means, electronic, mechanical, photographic, 
**  graphic, optic recording or otherwise, translated in any language or computer language, 
**  without the prior written permission of Oracle and/or its affiliates.
**  
**  Oracle Financial Services Software Limited.
**  Oracle Park, Off Western Express Highway,
**  Goregaon (East),
**  Mumbai - 400 063,
**  India.
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : STDGRIS3_SYS.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/

//***** Code for criteria Search *****
var criteriaSearch  = 'N';
//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR THE SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var fieldNameArray = {"BLK_MAIN":"CUSTOMER_CATEGORY~CUSTOMER_TYPE~MASTER_ID~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_DETAIL":"DETAIL_ID~FIELD_DESCRIPTION~MANDATORY_VALIDATIONS~MASTER_ID"};

var multipleEntryPageSize = {"BLK_DETAIL" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_USTRIMI3__TAB_MAIN":"BLK_DETAIL"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_MAIN">CUSTOMER_CATEGORY~CUSTOMER_TYPE~MASTER_ID~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_MAIN" RELATION_TYPE="N" TYPE="BLK_DETAIL">DETAIL_ID~FIELD_DESCRIPTION~MANDATORY_VALIDATIONS~MASTER_ID</FN>'; 
msgxml += '    </FLD>'; 

var strScreenName = "CVS_USTRIMI3";
var qryReqd = "Y";
var txnBranchFld = "" ;
var originSystem = "";
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR SUMMARY SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var msgxml_sum=""; 
msgxml_sum += '    <FLD>'; 
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_MAIN">AUTHSTAT~TXNSTAT~CUSTOMER_CATEGORY~CUSTOMER_TYPE~MASTER_ID</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDGRIS3";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_MAIN";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_MAIN" : "","BLK_DETAIL" : "BLK_MAIN~N"}; 

 var dataSrcLocationArray = new Array("BLK_MAIN","BLK_DETAIL"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDGRIS3.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDGRIS3.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_MAIN__MASTER_ID";
pkFields[0] = "BLK_MAIN__MASTER_ID";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
var modifyAmendArr = new Array(); 
var closeAmendArr = new Array(); 
var reopenAmendArr = new Array(); 
var reverseAmendArr = new Array(); 
var deleteAmendArr = new Array(); 
var rolloverAmendArr = new Array(); 
var confirmAmendArr = new Array(); 
var liquidateAmendArr = new Array(); 
var queryAmendArr = new Array(); 
var authorizeAmendArr = new Array(); 
//----------------------------------------------------------------------------------------------------------------------

var subsysArr    = new Array(); 

//----------------------------------------------------------------------------------------------------------------------

//***** CODE FOR LOVs *****
//----------------------------------------------------------------------------------------------------------------------
var lovInfoFlds = {"BLK_MAIN__CUSTOMER_CATEGORY__LOV_CUSTOMER_CATGEORY_G":["BLK_MAIN__CUSTOMER_CATEGORY~","","N",""]};
var offlineLovInfoFlds = {};
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR TABS *****
//----------------------------------------------------------------------------------------------------------------------
var strHeaderTabId = 'TAB_HEADER';
var strFooterTabId = 'TAB_FOOTER';
var strCurrentTabId = 'TAB_MAIN';
//--------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------
var multipleEntryIDs = new Array("BLK_DETAIL");
var multipleEntryArray = new Array();
var multipleEntryCells = new Array();
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY VIEW SINGLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR ATTACHED CALLFORMS *****
 //----------------------------------------------------------------------------------------------------------------------

 var CallFormArray= new Array(); 

 var CallFormRelat=new Array(); 

 var CallRelatType= new Array(); 


 var ArrFuncOrigin=new Array();
 var ArrPrntFunc=new Array();
 var ArrPrntOrigin=new Array();
 var ArrRoutingType=new Array();


 // Code for Loading Cluster/Custom js File Starts
 var ArrClusterModified=new Array();
 var ArrCustomModified=new Array();
 // Code for Loading Cluster/Custom js File ends

ArrFuncOrigin["STDGRIS3"]="CUSTOM";
ArrPrntFunc["STDGRIS3"]="";
ArrPrntOrigin["STDGRIS3"]="";
ArrRoutingType["STDGRIS3"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDGRIS3"]="N";
ArrCustomModified["STDGRIS3"]="Y";

 // Code for Loading Cluster/Custom js File ends


 /* Code For OBIEE functionalities */ 
var obScrArgName  = new Array(); 
var obScrArgSource  = new Array(); 
//***** CODE FOR SCREEN ARGS *****
//----------------------------------------------------------------------------------------------------------------------
var scrArgName = {};
var scrArgSource = {};
var scrArgVals = {};
var scrArgDest = {};
//***** CODE FOR SUB-SYSTEM DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
var dpndntOnFlds = {};
var dpndntOnSrvs = {};
//***** CODE FOR TAB DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR CALLFORM TABS *****
//----------------------------------------------------------------------------------------------------------------------
var callformTabArray = new Array(); 
//***** CODE FOR ACTION STAGE DETAILS *****
//----------------------------------------------------------------------------------------------------------------------
var actStageArry = {};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------