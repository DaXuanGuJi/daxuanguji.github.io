var BookArr=[
"字佰千",
"字百千",
"大九九乘法",
"大品天仙诀",
"字部首",
"三字经",
"千字文",
"百家姓",
"声律启蒙",
"笠翁对韵",
"心经",
"金刚经",
"妙法莲华经",
"道德经",
"黄庭经",
"山海经",
"古三坟",
"推背图",
"洗冤录",
"天工开物",
"长枪式图说",
"麻杈棍谱",
"弓弩心法",
"单刀法选",
"三國演義",
"增广贤文",
"孫子兵法",
"寒窑赋",
"将进酒",
"桃花源记",
"水滸傳",
"滕王阁序",
"百家姓",
"紅樓夢",
"罗刹海市",
"西遊記",
];
function ByID(id) {return document.getElementById(id);}
function ByCLS(cls) {return document.querySelector(cls);}
function ByACLS(cls) {return document.querySelectorAll(cls);}
function re_url(flg,url) {
	if(!flg)window.location.reload();
	if(flg<0) window.history.go(flg);
	if(flg==1)window.location.reload(true);	
	if(flg==2)window.location.replace(url);
	if(flg==3)window.location.href=url;
	if(flg==4)window.open(url,"_blank");
	if(flg==5)window.open(url,"_top");
}
function getUVAL(key,url) {
	var u=url?url:location.search;
	var r=decodeURIComponent(u)
	var reg=new RegExp(key+"=([^&=]+)","im");
	var v=r.match(reg);
	return v;
}
function geturl(url,fun,type,prog) {
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xhr.responseType=type?type:"text";
		if(prog){
			xhr.onprogress=function(e){prog(e)}
		}
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				try {
					if (xhr.status === 200) {
						//console.log(xhr)
						fun(xhr.response,xhr.responseURL);
					} else {
					    fun(xhr.status);
						//if(xhr.status)alert("geturl出错\n网址未连通:" + xhr.status);
					}
				} catch (e) {
					console.log(e)
					//超时
				}
			}
		}
		xhr.open('GET',url,true);//true为异步
		xhr.send();
}
function progress(flg,arr) {
	if(!flg){
		if(ByID("progress"))return [ByID("progress"),ByID("progressdiv")];	
	arr=arr?arr:["50%","25%","50%"];
	var tx = document.createElement('progress');
	var tv = document.createElement('div');
	tx.value="10";
	tx.max="100";
	tx.id="progress";
	tv.innerHTML = "进度";
	tv.id="progressdiv";
	tv.style =tx.style = 'top:'+arr[0]+';left:'+arr[1]+';width:'+arr[2]+';position: fixed;height:42px;text-align:center;vertical-align: bottom;font-size: 30px;z-index: 999999999999;';	
	document.body.appendChild(tx);
	document.body.appendChild(tv);
	return [tx,tv];
	}else{
		if(flg[0])document.body.removeChild(flg[0]);
		if(flg[1])document.body.removeChild(flg[1]);
	}
}
function set_tips(flg,msgArr,top) {
	//加载tips.css   flg=1黄2绿3紫
	if(ByCLS('.tips-cont'))document.body.removeChild(ByCLS('.tips-cont'));
	var tm=5200;
	top=top?top:'40%';
	var dv=document.createElement("div");
	dv.className="tips-cont";
	var html='<input type="checkbox" class="fire-check" checked>';
	html+='<div class="tips" style="top:'+top+'">';
	for(var i=0;i<msgArr.length;i++){
		flg=flg?flg:(i%3)+1;
		if(i==1)tm=6200;
		if(i==2)tm=9200;
		html+='<div class="tn-box tn-box-color-'+flg+'">';
		html+='<p>'+msgArr[i]+'</p>';
		html+='<div class="tn-progress"></div>';
		html+='</div>';
	}
	html+='</div>';
	dv.innerHTML=html;
	document.body.appendChild(dv);
	setTimeout(function() {if(ByCLS('.tips-cont'))document.body.removeChild(ByCLS('.tips-cont'));},tm);
	
}