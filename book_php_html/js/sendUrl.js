//var sendExeUrl="http://127.0.0.1:17251/_github/book_file_server/";
var sendExeUrl="";
var sendExeUrlStatu='';
function loadjs(jsurl,fun) {
	var a = document.getElementsByTagName('head')[0];
	var b = document.createElement("script");
	b.type = "text/javascript";
	b.src = jsurl;
	b.onload = function (e) {if (fun)fun(1);}
	b.onerror= function (e) {if (fun)fun(0);}
	a.appendChild(b);
}
loadjs("https://daxuanguji.github.io/sendUrl/sendUrl/sendUrl.js",sendExeStatu);
function sendExeStatu() {
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
	pwd=pwd?pwd:"null";
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			try {
				if (xhr.status === 200) {
					errtxt.innerHTML='🌍🌍🌍🌍🌍<span style="color:#f0f">服务器连接OK</span>';
					var obj=JSON.parse(xhr.responseText);
					if(obj.statu=="ok"){
						alert("guid:"+obj.guid+"\n会话已开启；有效期30分钟。\n30分钟内无操作自动关闭会话\n需要重新输入guid开启会话");
						guid.value=obj.guid;					
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
	xhr.open('GET',sendExeUrl+ "user.php?guid="+guidVal+"&pwd="+pwd+"&t=" + new Date().getTime(),true);//true为异步
	xhr.send();
}