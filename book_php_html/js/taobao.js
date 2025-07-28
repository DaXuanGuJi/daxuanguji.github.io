// JavaScript Document

var taobao_hbimg=[3,2];//倒1张黑白字图[批量，单张]
var taobao_fm=[];//封面图片名
var taobao_ym=[];//页面图片名
var taobao_mu='F:\\_00\\print\\book\\cesi';//批量目录默认路径
var picview_bat=[0,0,oldpath+ptset.backpath+"bookPicView/"];//是否生成预览图0否1是。生成数量，预览图保存路径
var taobao_stat = function () {//
	var ptn=ptname.value;
	var ptna=ptname.value+"-";
	taobao_fm=["0-"+ptn+".jpg","1-"+ptn+".png","2-"+ptn+".png"];//封面图片名
	taobao_ym=[ptna+"1.jpg",ptna+"2.jpg",ptna+"3.jpg",ptna+"4.jpg",ptna+"5.jpg"];//页面图片名
	//taobao_ym=[ptna+"1.png",ptna+"2.png",ptna+"3.png"];//页面图片名
	if(autotb.value=="☑️批量"&&taobao_ym[taobao_ym.length-1]){taobao_ym.push("");}
}
var booknamewh= function (len) {				
		/*	namebox:[[36,30,42,170],"",["xp","back18.jpg"]],
			authorbox:[[36,154,42,16],"",["",""]],
			cealbox:[[43,170,28,28],"",["s","ceal.png"]],
			ptset.bookobj.loads.box.namebox[0][1]+=c[0];
			ptset.bookobj.loads.box.namebox[0][3]+=c[1];
			ptset.bookobj.loads.box.authorbox[0][1]+=c[0]+c[1];
			ptset.bookobj.box.cealbox[0][1]+=c[0]+c[1];
			
*/
		switch (len) {
			case 5:
				ptset.bookobj.loads.box.namebox[0][1]=35;
				ptset.bookobj.loads.box.namebox[0][3]=200;
				ptset.bookobj.loads.box.authorbox[0][1]=189;
				ptset.bookobj.box.cealbox[0][1]=205;
				break;
			case 6:
				ptset.bookobj.loads.box.namebox[0][1]=30;
				ptset.bookobj.loads.box.namebox[0][3]=220;
				ptset.bookobj.loads.box.authorbox[0][1]=204;
				ptset.bookobj.box.cealbox[0][1]=220
				break;
			case 7:
				ptset.bookobj.loads.box.namebox[0][1]=25;
				ptset.bookobj.loads.box.namebox[0][3]=225;
				ptset.bookobj.loads.box.authorbox[0][1]=204;
				ptset.bookobj.box.cealbox[0][1]=221
				break;
			case 8:
				ptset.bookobj.loads.box.namebox[0][1]=25;
				ptset.bookobj.loads.box.namebox[0][3]=240;
				ptset.bookobj.loads.box.authorbox[0][1]=219;
				ptset.bookobj.box.cealbox[0][1]=235
				break;
	
			default:
				ptset.bookobj.loads.box.namebox[0][1]=30;
				ptset.bookobj.loads.box.namebox[0][3]=170;
				ptset.bookobj.loads.box.authorbox[0][1]=154;
				ptset.bookobj.box.cealbox[0][1]=170;
				break;
			}

}
var setautofont = function (index) {
	var arr = Object.entries(fontlist)
	idx=index?index:(new Date().getTime()%5);
	if(arr[idx][0].length<3)idx=0;
	return "bold 40px "+arr[idx][1][0];
}

var wlst=	[
	["ptset.bodyobj.bkpic[1][1]","ptset.bodyobj.col.tlt[1][1]","ptset.bodyobj.wat.box.imgbox3[2][1]","ptset.bodyobj.wat.box.imgbox4[2][1]"],	
	[
	"ptset.bookobj.loads.text.name[0]",
	"ptset.bookobj.loads.box.namebox[0]",
	"ptset.bookobj.loads.text.author[0]",
	"ptset.bookobj.loads.box.authorbox[0]",	
	"ptset.bookobj.box.cealbox[0]",
	"ptset.bookobj.loads.text.date[0]",
	"ptset.bookobj.loads.box.datebox[0]",
	"ptset.bookobj.loads.text.copyright[0]",
	"ptset.bookobj.loads.box.copyrightbox[0]",	
	"ptset.bookobj.box.qrbox[0]",
	"ptset.bookobj.box.brbox[0]",
	"ptset.bookobj.box.imagebox1[0]",
	"ptset.bookobj.text.htxt[0]",
	],	
	["ptset.backimage[1]","ptset.backcolor","ptset.backimage[0]"],
	["ptset.bookobj.bkpic[1][1]","ptset.bookobj.bkpic[2]","ptset.bookobj.bkpic[1][0]","ptset.bookobj.bkpic[0]"],
	["ptset.bookobj.loads.box.namebox[2][1]","ptset.bookobj.loads.text.name[3][0]","ptset.bookobj.font.name[2]"],
	["ptset.bookobj.loads.text.author[3][0]","ptset.bookobj.font.author[2]"],	
	["ptset.bookobj.loads.box.copyrightbox[2][1]","ptset.bookobj.font.copyright[2]"],
	["ptset.bookobj.font.htxt[0]","ptset.bookobj.font.htxt[2]"],
	["ptset.bookobj.loads.text.date[3][0]","ptset.bookobj.loads.text.date[2]"],
	["qrcolor","brcolor"],
	["ptset.bookobj.loads.text.midname[3][0]","ptset.bookobj.loads.text.midauthor[3][0]","ptset.bookobj.font.midname[2]"],
	["ptset.bookobj.box.imagebox0[2]","缝线颜色只能排在最后"],
];		
var taobao_fg = function (index) {//
	ptname.value=ptname.value.replace(/\s/g,'');
	booknamewh(ptname.value.length);
	var obj=function (arr) {
		/*[
		//页面背景，页面字列图，上水印，下水印
		//位置：namebox，authorbox，datebox，copyrightbox，cealbox，qrbox，brbox，imagebox1，htxt
		["背景图","背景色","平铺方式"],
		["封面背景图","封面背景色","平铺方式","图片位置左右全铺"],	
		["书名边框图","书名背景色","书名文字色"],
		["作者背景色","作者文字色"],		
		["版权背景图","版权文字色"],
		["封面诗字体","封面诗文字色"],
		["年号图背景色","年号图路径"],
		["二维码颜色","条形码颜色"],
		["中置书名背景色","中置作者背景色","中置书名作者文字色"],
		["缝线图","缝线颜色"],//�只能排在最后
		]*/		
		var etxt="";
		if(arr[7][0]=="random")arr[7][0]=setautofont();
		for (var k = 0; k <wlst.length; k++) {		
			for (var m = 0; m <wlst[k].length; m++) {				
				if(!arr[k][m])continue;
				if(k ==1){
					if(arr[k][m]=="delete"||arr[k][m][0]=="["){
						var kobj=eval(wlst[k][m]);
						del_box+=wlst[k][m]+"="+JSON.stringify(kobj)+";";
						if(arr[k][m]=="delete"){
							eval(wlst[k][m]+"=null;");continue;
						}
						}	
				}
				
				if(arr[k][m][0]=="?"){	
					selfg.value=arr[k][m].slice(1);
					upchang(selfg);		
					continue;
				}
				if(k ==wlst.length-1){
					ptset.bookobj.box.imagebox2[1]=arr[k][1][0];
					ptset.bookobj.box.imagebox3[1]=arr[k][1][0];
					ptset.bookobj.box.imagebox4[1]=arr[k][1][1];
					ptset.bookobj.box.imagebox5[1]=arr[k][1][1];
					ptset.bookobj.box.imagebox6[1]=arr[k][1][1];
					ptset.bookobj.box.imagebox7[1]=arr[k][1][1];
					ptset.bookobj.box.imagebox8[1]=arr[k][1][1];
					ptset.bookobj.box.imagebox9[1]=arr[k][1][1];
					if(arr[k][0][0]=="[")
					ptset.bookobj.box.imagebox0[2]=eval(arr[k][0]);
					//ptset.bookobj.box.imagebox0[2]="";
					else
					ptset.bookobj.box.imagebox0[2]=["s",arr[k][0]];
					break;
				}			
				if(wlst[k][m][5]=="."){
					if(arr[k][m][0]=="[")etxt+=wlst[k][m]+"@"+arr[k][m]+"\n";
					else etxt+=wlst[k][m]+"@\""+arr[k][m]+"\"\n";			
				}
				else{
					var txd=document.getElementById(wlst[k][m]);
					txd.value=arr[k][m];
					upchang(txd);				
				}
			}	 
		}
		//console.log(etxt);	
		if(etxt)conftxt("[config]\n"+etxt.replace(/[\r|\n|\t]+/g,"\n")+"[config]");
		
		//console.log(etxt);		
	}
	
/*obj([
		["back18.jpg","#FFFFFFFF","s"],//["背景图","背景色","平铺方式sw hp"]
		["mba1.png","''","s","?全置封面图页面缩放"],//["封面背景图","封面背景色","平铺方式","图片位置左右全铺"]	
		["back18.jpg","#FFF","['#000']"],//["书名边框图","书名背景色","书名文字色"]
		["#0F0","['#000']"],//["作者背景色","作者文字色"],	
		["?版权图_默认绚彩","['#000']"],//["版权背景图","版权文字色"]
		["bold 40px "+fontlist.kaiT[0],"['#FFF']"],//["封面诗字体","封面诗文字色"]
		["#FFFFFFFF","data/5/"],//["年号图背景色","年号图路径"]
		["#000,#fff","0cc,#fff"],//["二维码颜色","条形码颜色"]
		["#fff","#fff","['#000']"],//["中置书名背景色","中置作者背景色","中置书名作者文字色"]
		["back416.png",["#000","#f00"]],//["缝线图","缝线颜色"],
])	
	*/
		index=/^[0-9]+$/.test(index)?index: (new Date().getTime()%Object.keys(booksetlist).length);	
		if(!booksetlist["id"+index]){alert("封面模板id:["+index+"]不存在？？\n默认id0模板！！");index=0;}	
		if(ptname.value.length>4&&index>99)index=(new Date().getTime()%100);//有边框位置不对																												
		ptset.bodyobj.bkpic[1][1]="page"+(index%50)+".jpg";
		try{localStorage.taobaoindex =index;}catch(e){}	
		obj(booksetlist["id"+index]);
}