var sendExeUrl="http://127.0.0.1:17251/_github/book_file_server/";


function sendExeStatu() {
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			try {
				if (xhr.status === 200) {
				errtxt.innerHTML=xhr.responseText;
				} else {
				errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";
				}
			} catch (e) {
				errtxt.innerHTML="⛔⛔⛔⛔⛔服务器连接失败。。。";
			}
		}
	}
	xhr.open('GET',sendExeUrl+ "get.php?statu=code&t=" + new Date().getTime(),true);//true为异步
	xhr.send();
}
