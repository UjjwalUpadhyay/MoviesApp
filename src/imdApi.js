/*global fetch:false*/

import 'whatwg-fetch';
import CONFIG from '../app.config';

let imdApi = { };
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';


function json(response) {
	return response;
}

function action(obj, data) {
	data = data || null;

	var opts = {};

	return doCORSRequest(obj);
}


imdApi.get = function(uri, data) {
	var obj = {
		method: 'GET',
    url: CONFIG.API_BASE + uri + "?director=" + data['query']
	};
	return action(obj, data);
};


function doCORSRequest(options) {
	 var x = new XMLHttpRequest();
	 x.open(options.method, cors_api_url + options.url);
	 x.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with");
	 if (/^POST/i.test(options.method)) {
		 x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	 }
	 x.onreadystatechange = function () {
			if (x.readyState == 4 && x.status == 200) {
						return json(x.responseText);
				 }
	 }
	 x.send();
	 return x.onreadystatechange();
 }

export default imdApi;
