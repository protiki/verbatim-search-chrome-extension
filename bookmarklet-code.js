(function(){
	"use strict";

	let url = window.location.href;
	if (url.indexOf('google.com/search') !== -1 && url.indexOf('&tbs=li:1') === -1) 
		{ window.location.href = url + '&tbs=li:1';
		} 

})();
