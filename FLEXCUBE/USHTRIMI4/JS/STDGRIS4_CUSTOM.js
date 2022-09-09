
function fnPostNew_CUSTOM(){
	/*console.log('hello');
	console.log(gAction);
	var prevgAction=gAction;
	gAction='NEWRECORD';
	console.log(gAction);*/
    appendData();
	debugs('FCZ Start', gAction);
	var prevgAction=gAction;
	console.log(prevgAction);
		console.log(gAction);

	gAction='NEWRECORD';
	console.log(gAction);
	fcjRequestDOM=buildUBSXml();
	debugs('FCZ', fcjRequestDOM);
	fcjResponseDOM=fnPost(fcjRequestDOM, servletURL,functionId);
	debugs('FCZ req', fcjRequestDOM);
	debugs('FCZ resp', fcjResponseDOM);
	if(!fnProcessResponse()){
	return true;
	}
	debugs('FCZ final', fcjResponseDOM);
	
	gAction=prevgAction;
	return true;
}



 function  fnPostCopy_CUSTOM(){
	  appendData();
	debugs('FCZ Start', gAction);
	var prevgAction=gAction;
	console.log(prevgAction);
		console.log(gAction);

	gAction='COPYRECORD';
	console.log(gAction);
	fcjRequestDOM=buildUBSXml();
	debugs('FCZ', fcjRequestDOM);
	fcjResponseDOM=fnPost(fcjRequestDOM, servletURL,functionId);
	debugs('FCZ req', fcjRequestDOM);
	debugs('FCZ resp', fcjResponseDOM);
	if(!fnProcessResponse()){
	return true;
	}
	debugs('FCZ final', fcjResponseDOM);
	
	gAction=prevgAction;
	return true;
 }
