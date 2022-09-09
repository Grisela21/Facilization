

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
    var reference;
   function fnPreCopy_CUSTOM(){
	
	 reference=document.getElementById('BLK_MASTER__REFERENCE').value;
	 console.log(reference);
	
	return true;
   }

   function  fnPostCopy_CUSTOM(){
  
	 document.getElementById('BLK_MASTER__REFERENCE').value=reference+"C";
	 	return true;
 }
