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
**  File Name          : STDGRIS4_SYS.js
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
var fieldNameArray = {"BLK_MASTER":"DESCRIPTION~REFERENCE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_MAIN":"ACCOUNT~AMOUNT~CCY~COSTUMER_NAME~COSTUMER_NUMBER~EMAIL~M_DATE~PHONE_NUMBER~PRIORITY~REFERENCE","BLK_DETAIL":"DESCRIPTION~D_DATE~D_USER~REFERENCE~SUBJECT"};

var multipleEntryPageSize = {"BLK_DETAIL" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_USTRIMI4__TAB_DETAIL":"BLK_DETAIL"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_MASTER">DESCRIPTION~REFERENCE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_MASTER" RELATION_TYPE="1" TYPE="BLK_MAIN">ACCOUNT~AMOUNT~CCY~COSTUMER_NAME~COSTUMER_NUMBER~EMAIL~M_DATE~PHONE_NUMBER~PRIORITY~REFERENCE</FN>'; 
msgxml += '      <FN PARENT="BLK_MASTER" RELATION_TYPE="N" TYPE="BLK_DETAIL">DESCRIPTION~D_DATE~D_USER~REFERENCE~SUBJECT</FN>'; 
msgxml += '    </FLD>'; 

var strScreenName = "CVS_USTRIMI4";
var qryReqd = "Y";
var txnBranchFld = "" ;
var originSystem = "";
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR SUMMARY SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var msgxml_sum=""; 
msgxml_sum += '    <FLD>'; 
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_MASTER">AUTHSTAT~TXNSTAT~DESCRIPTION~REFERENCE</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDGRIS4";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_MASTER";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_MASTER" : "","BLK_MAIN" : "BLK_MASTER~1","BLK_DETAIL" : "BLK_MASTER~N"}; 

 var dataSrcLocationArray = new Array("BLK_MASTER","BLK_MAIN","BLK_DETAIL"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDGRIS4.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDGRIS4.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_MASTER__REFERENCE";
pkFields[0] = "BLK_MASTER__REFERENCE";
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
var lovInfoFlds = {"BLK_MAIN__ACCOUNT__LOV_ACCOUNT":["BLK_MAIN__ACCOUNT~","BLK_MAIN__CCY!VARCHAR2","N",""],"BLK_MAIN__CCY__LOV_CCY":["BLK_MAIN__CCY~","","N",""],"BLK_MAIN__COSTUMER_NUMBER__LOV_CUSTOMER_NUMBER":["BLK_MAIN__COSTUMER_NUMBER~","","N",""]};
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

ArrFuncOrigin["STDGRIS4"]="CUSTOM";
ArrPrntFunc["STDGRIS4"]="";
ArrPrntOrigin["STDGRIS4"]="";
ArrRoutingType["STDGRIS4"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDGRIS4"]="N";
ArrCustomModified["STDGRIS4"]="Y";

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
var actStageArry = {"QUERY":"2","NEW":"2","MODIFY":"2","AUTHORIZE":"1","DELETE":"1","CLOSE":"1","REOPEN":"1","REVERSE":"1","ROLLOVER":"1","CONFIRM":"1","LIQUIDATE":"1","SUMMARYQUERY":"2"};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------