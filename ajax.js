var xhr = createRequest();
function getData(dataSource, divID, aCname, aPhone, aUnumber, aSnumber, aStname, aSbname, aDsbname, aDate, aTime) {
 	if(xhr) {
 		var obj = document.getElementById(divID);
 		var requestbody = encodeURIComponent(aCname, aPhone)','encodeURIComponent(aPhone)','encodeURIComponent(aUnumber)','encodeURIComponent(aSnumber)','encodeURIComponent(aStname)','encodeURIComponent(aSbname)','encodeURIComponent(aDsbname)','encodeURIComponent(aDate)','encodeURIComponent(aTime);
		var nameArr = requestbody.split(',');
		xhr.open("POST", dataSource, true);
 		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 		xhr.onreadystatechange = function() {
 			alert(xhr.readyState); // to let us see the state of the computation
 			if (xhr.readyState == 4 && xhr.status == 200){
 				obj.innerHTML = xhr.responseText;
 			} // end if
 		} // end anonymous call-back function
 		xhr.send(requestbody);
 	} // end if
} // end function getData() 