//var sendExeUrl="http://127.0.0.1:17251/_github/book_file_server/";
var sendExeUrl="";
var sendExeUrlStatu='';
function loadjs(jsurl,fun) {
	var a = document.getElementsByTagName('head')[0];
	var b = document.createElement("script");
	b.type = "text/javascript";
	b.src = jsurl;
	b.onload = function (e) {if(/https/.test(location.protocol))window.location.href=sendExeUrl+"index_pe_iframe.html";if (fun)fun(1);}
	b.onerror= function (e) {if (fun)fun(0);}
	a.appendChild(b);
}
loadjs("https://daxuanguji.github.io/sendUrl/sendUrl/sendUrl.js?t="+new Date().getTime(),sendExeStatu);
function sendExeStatu(flg) {
	if(/https/.test(location.protocol))return;
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			try {
				if (xhr.status === 200) {
				sendExeUrlStatu=errtxt.innerHTML=xhr.responseText;
				} else {
				sendExeUrlStatu=errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";lock = 0;
				}
			} catch (e) {
				sendExeUrlStatu=errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";lock = 0;
			}
		}
		else{
			sendExeUrlStatu=errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";lock = 0;
		}
	}
	xhr.open('GET',sendExeUrl+ "user.php?statu=code&t=" + new Date().getTime(),true);//true为异步
	xhr.send();
}
function sendGuid(guidVal,pwd) {
	if(location.protocol=="https")return;
	pwd=pwd?pwd:"null";
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			try {
				if (xhr.status === 200) {
					errtxt.innerHTML='🌍🌍🌍🌍🌍<span style="color:#f0f">服务器连接OK</span>';
					var obj=JSON.parse(xhr.responseText);
					if(obj.statu=="ok"){
						alert(obj.info);
						if(obj.info=="登录成功"){
						localStorage.useGUID=obj.guid;
						localStorage.sessionGUID=obj.session_guid;
						}
						else
						localStorage.useGUID=localStorage.sessionGUID="null";
					}
					else{
						if(obj.guid=="null"||obj.guid=="error"){
							guidVal=prompt("guid is "+obj.guid+" 请输入guid!");
							if(!guidVal)return;	
						}
						if(obj.pwd=="null"||obj.pwd=="error"){
							pwd=prompt("pwd is "+obj.pwd+" 请输入密码!");
							if(!pwd)return;	
						}
						sendGuid(guidVal,pwd);
					}
				} else {
				errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";
				}
			} catch (e) {
				errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";
			}
		}
		else{
			errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";
		}
	}
	//xhr.withCredentials=true;
	xhr.open('GET',sendExeUrl+ "user.php?guid="+guidVal+"&pwd="+pwd+"&t=" + new Date().getTime(),true);//true为异步
	xhr.send();
}
var Base64=function (keyStr){var _keyStr=keyStr?keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(b){var d="",c,a,f,g,h,e,k=0;for(b=_utf8_encode(encodeURIComponent(b));k<b.length;)c=b.charCodeAt(k++),a=b.charCodeAt(k++),f=b.charCodeAt(k++),g=c>>2,c=(c&3)<<4|a>>4,h=(a&15)<<2|f>>6,e=f&63,isNaN(a)?h=e=64:isNaN(f)&&(e=64),d=d+_keyStr.charAt(g)+_keyStr.charAt(c)+_keyStr.charAt(h)+_keyStr.charAt(e);return d};this.decode=function(b){var d="",c,a,f,g,h,e=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");e<b.length;)c=_keyStr.indexOf(b.charAt(e++)),a=_keyStr.indexOf(b.charAt(e++)),g=_keyStr.indexOf(b.charAt(e++)),h=_keyStr.indexOf(b.charAt(e++)),c=c<<2|a>>4,a=(a&15)<<4|g>>2,f=(g&3)<<6|h,d+=String.fromCharCode(c),64!=g&&(d+=String.fromCharCode(a)),64!=h&&(d+=String.fromCharCode(f));return d=_utf8_decode(d)};_utf8_encode=function(b){b=b.replace(/\r\n/g,"\n");for(var d="",c=0;c<b.length;c++){var a=b.charCodeAt(c);128>a?d+=String.fromCharCode(a):(127<a&&2048>a?d+=String.fromCharCode(a>>6|192):(d+=String.fromCharCode(a>>12|224),d+=String.fromCharCode(a>>6&63|128)),d+=String.fromCharCode(a&63|128))}return d};_utf8_decode=function(b){var d="",c=0,a;for(c1=c2=0;c<b.length;)a=b.charCodeAt(c),128>a?(d+=String.fromCharCode(a),c++):191<a&&224>a?(c2=b.charCodeAt(c+1),d+=String.fromCharCode((a&31)<<6|c2&63),c+=2):(c2=b.charCodeAt(c+1),c3=b.charCodeAt(c+2),d+=String.fromCharCode((a&15)<<12|(c2&63)<<6|c3&63),c+=3);return decodeURIComponent(d)}};
			