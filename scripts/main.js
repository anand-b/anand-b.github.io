function init(){
	var anchors = document.getElementsByClassName("partial-loader");
	for(var i = 0 ; i < anchors.length ; i++) {
		anchors[i].addEventListener("click", function(event){
		    var url = event.srcElement.getAttribute("url");

		},true);
	}
}

function request(url,data,onsuccess,onfailure,headers){
	var xhttp;
	if (window.XMLHttpRequest) {
	    xhttp = new XMLHttpRequest();
	}
	else {
	    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(!data.type) {
		data.type = "GET";
	}
	if(!data.async) {
		data.async = true;
	}
	xhttp.open(data.type, url, data.async);

	if(headers) {
		var headerKeys = Object.keys(headers);
		for(var i = 0 ; i < headerKeys.length ; i++ ) {
			var key = headerKeys[i];
			xhttp.setRequestHeader(key,headers[key]);
		}
	}

	xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            onsuccess && onsuccess(xhttp.responseText);
        }
        else {
        	onfailure && onfailure(xhttp.responseText);	
        }
    };

    var params = "";
    var paramKeys = Object.keys(data.data);
    for(var i=0 ; i < paramKeys.length ;i++) {
    	var key = paramKeys[i];
    	params += key+"="+data.data[key];
    }

	xhttp.send(params);
}