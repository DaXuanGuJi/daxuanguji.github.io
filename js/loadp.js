ByCLS(".nav__icon").onclick = function (e) {
	ByCLS(".iphone__screen").classList.toggle('nav--active');
}
var ikey = getUVAL("key") ? getUVAL("key")[1] : "";
//ikey="桃花源记";
ipth = "./book/file/" + ikey + "/";
var start = 7;
var Wdf = document.documentElement.clientWidth || document.body.clientWidth || document.documentElement.offsetWidth || document.body.offsetWidth;
var pages = [];
var leftinnerpages = [];
var leftoutterpages = [];
var rightinnerpages = [];
var rightoutterpages = [];
var tobeoutterpage;
var tobeinnerpage;
var imglst;
var mleft = parseInt(Wdf * 0.01);
var lleft = mleft + "px";
var rleft = parseInt(Wdf / 2) + "px"; ;
var lock = 0;
var bgaudio = null;
var wavesurfer = null;
var wavurl = null;
var txtarr = null;
var temp = [];
var pgindex = 0;
var wait = 0;
var direction = "right";
var addstyle = function () {
	var bookStyle = {
		right : '.pageright{box-shadow:-2px 2px 5px#333;-webkit-transform-origin:right;}.pageleft{box-shadow:2px 2px 5px#333;-webkit-transform-origin:left;}.pageoutterleft{-webkit-transform:rotateY(-90deg);}.pageoutterright{-webkit-transform:rotateY(90deg);}.pageinner{-webkit-transform:rotateY(0deg);}.flipleft{-webkit-transform-origin:right;-webkit-transition:ease all 1.3s;}.flipright{-webkit-transform-origin:left;-webkit-transition:ease all 1.3s;}.pagemask{position:fixed;height:calc(50vw * 1.4 + 30px);width:100%;overflow:hidden;text-align:center;z-index:10000;vertical-align:middle;background-color:#f9f9f9;padding-top:10px;margin-top:50px;top:0px;left:0px;}@keyframes mymove{from{margin-left:0px;}to{margin-left:-24.5vw;}}@-webkit-keyframes mymove{from{margin-left:0px;}to{margin-left:-24.5vw;}}',
		left : '.pageright{box-shadow:-2px 2px 5px#333;-webkit-transform-origin:left;}.pageleft{box-shadow:2px 2px 5px#333;-webkit-transform-origin:right;}.pageoutterleft{-webkit-transform:rotateY(-90deg);}.pageoutterright{-webkit-transform:rotateY(90deg);}.pageinner{-webkit-transform:rotateY(0deg);}.flipleft{-webkit-transform-origin:left;-webkit-transition:ease all 1.3s;}.flipright{-webkit-transform-origin:right;-webkit-transition:ease all 1.3s;}.pagemask{position:fixed;height:calc(50vw * 1.4 + 30px);width:100%;overflow:hidden;text-align:center;z-index:10000;vertical-align:middle;background-color:#f9f9f9;padding-top:10px;padding-left:0;margin-top:50px;top:0px;left:0px;}@keyframes mymove{from{padding-left:0px;}to{padding-left:22.5vw;}}@-webkit-keyframes mymove{from{padding-left:0px;}to{padding-left:22.5vw;}}',
	}
	var d = document.getElementsByTagName("head")[0],
	e = document.createElement("style");
	e.type = "text/css";
	e.innerHTML = direction == "right" ? bookStyle.right : bookStyle.left;
	d.appendChild(e);
}
try {
	start = localStorage ? localStorage.readsrt ? parseInt(localStorage.readsrt) : 7 : 7;
	bg0.checked = (start & 1) ? true : false;
	qg0.checked = (start & 2) ? true : false;
	au0.checked = (start & 4) ? true : false;
	wait = localStorage ? localStorage.readwait ? parseInt(localStorage.readwait) : 0 : 0;
} catch (e) {}
novol.onclick = function (e) {
	if (this.value == "🔇静音") {
		this.value = "🔊原音";
		wavesurfer.setVolume(0);
		bgaudio.getAudio().volume = 0;
	} else {
		this.value = "🔇静音";
		wavesurfer.setVolume(qg3.value);
		bgaudio.getAudio().volume = bg3.value;
	}
}
setdiv.onchange = function (e) {
	if (e.target.id == "wtmie") {
		temp = getsrtlist(e.target.value);
		return;
	}
	if (e.target.id[0] == "b") {
		if (e.target.id[2] == "0") {
			if (e.target.checked) {
				play.style.visibility = "visible";
				start += 1;
			} else {
				play.style.visibility = "hidden";
				start -= 1;
			}
		};
		if (e.target.id[2] == "3") {
			bgaudio.getAudio().volume = e.target.value;
		};
	}
	if (e.target.id[0] == "q") {
		if (e.target.id[2] == "0") {
			if (e.target.checked) {
				waveform.style.visibility = "visible";
				start += 2;
			} else {
				waveform.style.visibility = "hidden";
				start -= 2;
			}
		};
		if (e.target.id[2] == "3") {
			wavesurfer.setVolume(e.target.value);
		};
	}
	if (e.target.id[0] == "a") {
		if (e.target.id[2] == "0") {
			if (e.target.checked) {
				start += 4;
			} else {
				start -= 4;
			}
		};
	}
	try {
		localStorage.readsrt = start;
	} catch (e) {}
}
setdiv.onclick = function (e) {
	if (e.target.id[0] == "b") {
		if (e.target.id[2] == "1") {
			if (e.target.value == "▶播放") {
				e.target.value = "⏸暂停";
				bgaudio.play();
			} else {
				e.target.value = "▶播放";
				bgaudio.pause();
			}
		};
	}
	if (e.target.id[0] == "q") {
		if (e.target.id[2] == "1") {
			if (e.target.value == "▶播放") {
				e.target.value = "⏸暂停";
				wavesurfer.play();
			} else {
				e.target.value = "▶播放";
				wavesurfer.pause();
			}
		};
	}
}
function full() {
	bgaudio.pause();
	wavesurfer.pause();
	bgaudio = wavesurfer = null;
	re_url(3, "https://daxuanguji.github.io/");
}
function preimg(i) {
	if (ByID("iml" + i)) {
		if (!ByID("iml" + i).title || !ByID("imr" + i).title) {
			var im = new Image();
			im.src = imglst[i].d64;
			im.setAttribute("crossOrigin", "anonymous");
			im.onload = function (e) {
				var obj = cvimg(im);
				ByID("iml" + i).src = obj.lm;
				ByID("imr" + i).src = obj.rm;
				ByID("imr" + i).title = ByID("iml" + i).title = this.src;
			}
		}
	}
}
function delay(ind) {
	if (ind == 1) {
		lodwav(++pgindex);
		tobeinnerpage.className = "page pageleft pageinner flipright";
	} else {
		lodwav(--pgindex);
		tobeinnerpage.className = "page pageright pageinner flipleft";
	}
	preimg(pgindex);
	preimg(pgindex + 1);
	lock = 0;
}
function initPages() {
	var pages = document.getElementsByTagName("article");
	for (var i = pages.length - 1; i >= 0; i--) {
		pages[i].style.top = "10px";
		pages[i].className = "page ";
		pages[i].style.zIndex = (i / 2) * (-1);
		if (i % 2 == 0) {
			rightinnerpages.push(pages[i]);
			pages[i].className += "pageright pageinner";
			pages[i].style.left = direction == "left" ? rleft : lleft;
		} else {
			rightoutterpages.push(pages[i]);
			pages[i].className += "pageleft pageoutterright";
			pages[i].style.left = direction == "left" ? lleft : rleft; //页面中间距
		}
	}
	if (!document.getElementById("replay")) {
		var tcv = document.createElement('div');
		tcv.style.top = pages[0].style.top;
		tcv.style.left = pages[0].style.left;
		tcv.style.zIndex =  - (pages.length / 2) - 1;
		tcv.className = pages[0].className;
		tcv.id = "replay";
		var im = new Image();
		im.src = "other/playerBtn3.png";
		tcv.appendChild(im);
		var dv = document.createElement("div");
		dv.style.top = dv.style.left = "40%";
		dv.style.width = "25%"
			dv.style.height = "18%";
		dv.style.position = "absolute";
		dv.onclick = function (e) {
			pgindex = 0;
			initPages();
		}
		tcv.appendChild(dv);
		im = new Image();
		im.src = "other/playerBtn4.png";
		dv.appendChild(im);
		book.appendChild(tcv);
	}
}
var getsrtlist = function (wt) {
	wt = wt ? Number(wt) : 0;
	var tem = [];
	var flg = true;
	for (var k = 0; k < txtarr[1].length; k++) {
		if (txtarr[0][k] == "[")
			flg = false;
		if (txtarr[0][k] == "]")
			flg = true;
		if (flg && /[\ud840-\ud888]*[\u3400-\uFAD9]|[a-zA-Z0-9]/.test(txtarr[0][k]))
			tem.push([txtarr[1][k] + wt, txtarr[3][k]]);
	}
	return tem;
}
var lodsrt = function (z) {
	srt.innerHTML = "";
	txtarr = [[], [], [], []];
	var srturl = imglst[z].d64 + ".srt";
	console.log(srturl)
	geturl(srturl, function (ret) {
		var obj = ret.replace(/\r/g, "").split(/\n\n/);
		for (var i = 0; i < obj.length; i++) {
			if (!obj[i])
				continue;
			var tarr = obj[i].split(/\n/);
			tarr[1] = tarr[1].split(/\s*-->\s*/)
				var star = getmil(tarr[1][0]);
			var end = getmil(tarr[1][1]);
			var tm = (end - star) / (tarr[2].length + 1);
			for (var k = 0; k < tarr[2].length; k++) {
				txtarr[0].push(tarr[2][k]);
				txtarr[1].push((tm * k + star) / 1000);
			}
		}
		txtarr[2] = imglst[z].pot;
		var img = direction == "left" ? book.getElementsByTagName("img")[1] : book.getElementsByTagName("img")[0];
		var h = img.clientHeight;
		var oh = img.naturalHeight;
		var scan = h / oh * (0.3312);
		srt.style.top = img.parentNode.offsetTop + "px";
		srt.style.left = img.parentNode.offsetLeft + "px";
		var md = Wdf / 2;
		for (var i = 0; i < txtarr[0].length; i++) {
			var dvt = document.createElement('div');
			dvt.style.left = (txtarr[2][i][0] * scan) + "px";
			dvt.style.top = (txtarr[2][i][1] * scan) + "px";
			dvt.style.width = (txtarr[2][i][2] * scan) + "px";
			dvt.style.height = (txtarr[2][i][3] * scan) + "px";
			dvt.style.borderRadius = "50px";
			dvt.style.position = "absolute";
			srt.appendChild(dvt);
			txtarr[3].push(dvt);
		}
		temp = getsrtlist();
	})
}
var onwavesurfer = function () {
	wavesurfer.on("audioprocess", function () {
		if (temp.length && wavesurfer.getCurrentTime() > temp[0][0]) {
			temp[0][1].style.backgroundColor = "rgba(0,255,0,0.3)";
			temp.shift()
		}
	});
	wavesurfer.on("seek", function () {
		if (temp.length) {
			temp = getsrtlist();
			for (var i = 0; i < temp.length; i++) {
				temp[i][1].style.backgroundColor = "";
			}
		}
	})
	wavesurfer.on("play", function () {
		wavesurfer.setVolume(qg3.value);
		qg1.value = "⏸暂停";
		if (temp.length) {
			temp = getsrtlist();
			for (var i = 0; i < temp.length; i++) {
				temp[i][1].style.backgroundColor = "";
			}
		}
	})
	wavesurfer.on("pause", function () {
		qg1.value = "▶播放";
	})
	wavesurfer.on("finish", function () {
		qg1.value = "▶播放";
		if (/index\.jpg/.test(wavurl))
			setTimeout(function () {
				if ((start & 4))
					autopage(1);
			}, 2000);
		else
			setTimeout(function () {
				if ((start & 4))
					autopage(1);
			})
	})
}
var lodwav = function (z) {
	if (z >= imglst.length) {
		z = imglst.length - 1;
		srt.innerHTML = "";
		return;
	}
	if (z <= 0) {
		z = 0;
		srt.innerHTML = "";
		return;
	}
	lodsrt(z);
	wavurl = imglst[z].d64 + ".wav";
	wavesurfer.load(wavurl);
	wavesurfer.on("ready", function () {
		if ((start & 2))
			wavesurfer.play();
		else
			wavesurfer.pause();
		if ((start & 4))
			wavesurfer.play();
		temp = getsrtlist();
	});
	wavesurfer.on("error", function () {
		qg1.value = "▶播放";
		wavesurfer.pause();
		set_tips(1, ["音频文件未加载<br>" + wavurl], '0')
		//alert("wavesurfer url onerror\n"+wavurl);
	})
}
var pr = null;
var imgobj1 = null;
var cvimg = function (img) {
	if (img.src == imglst[1].d64 && imgobj1) {
		return imgobj1;
	}
	var obj = {};
	var newcv = document.createElement("canvas");
	var ncv = newcv.getContext("2d", {
			willReadFrequently : true
		});
	newcv.width = img.naturalWidth;
	newcv.height = img.naturalHeight;
	ncv.drawImage(img, 0, 0, newcv.width, newcv.height);
	var w = newcv.width / 2;
	var h = newcv.height;
	var picv = document.createElement("canvas");
	var icv = picv.getContext("2d", {
			willReadFrequently : true
		});
	picv.width = w;
	picv.height = h;
	var rectdata = direction == "left" ? ncv.getImageData(w, 0, w, h) : ncv.getImageData(0, 0, w, h);
	icv.putImageData(rectdata, 0, 0);
	obj.lm = picv.toDataURL("image/jpeg", 1);
	var rectdata = direction == "left" ? ncv.getImageData(0, 0, w, h) : ncv.getImageData(w, 0, w, h);
	icv.putImageData(rectdata, 0, 0);
	obj.rm = picv.toDataURL("image/jpeg", 1);
	if (img.src == imglst[1].d64 && !imgobj1) {
		imgobj1 = obj;
	}
	return obj;
}
var lodimg = function (url, fun, i) {
	var im = new Image();
	im.src = i > 2 ? imglst[1].d64 : url;
	im.setAttribute("crossOrigin", "anonymous");
	im.onload = function (e) {
		var obj = cvimg(im);
		var dv = document.createElement("article");
		dv.className = "page";
		var iml = new Image();
		iml.src = obj.lm;
		iml.alt = url;
		iml.id = "iml" + i;
		iml.setAttribute("crossOrigin", "anonymous");
		dv.appendChild(iml);
		if (i)
			book.insertBefore(dv, book.lastChild);
		else {
			book.appendChild(dv);
			var tc = document.createElement('div');
			tc.className = "pagemask";
			book.parentNode.insertBefore(tc, book);
			var imt = new Image();
			imt.src = iml.src;
			imt.onclick = function (e) {
				tc.classList.add('msimg');
				var t = 2800;

				setTimeout(function () {
					tc.style.display = "none";
					var evt = document.createEvent('MouseEvents');
					evt.initEvent('click', false, true);
					book.getElementsByTagName("article")[0].dispatchEvent(evt);
					bgaudio = new GbgMusic("other/bgmusic.mp3");
					if (start & 1)
						bgaudio.play();
					else {
						bgaudio.stopAuto();
						play.style.visibility = "hidden";
					}
					if (start & 4) {
						bgaudio.play();
					}
					if (start & 2)
						waveform.style.visibility = "visible";
					else
						waveform.style.visibility = "hidden";
				}, t)
			}
			tc.appendChild(imt);
		}
		var dv = document.createElement("article");
		dv.className = "page";
		var imr = new Image();
		imr.src = obj.rm;
		imr.alt = url;
		imr.id = "imr" + i;
		imr.setAttribute("crossOrigin", "anonymous");
		dv.appendChild(imr);
		if (i)
			book.insertBefore(dv, book.lastChild.previousSibling);
		else
			book.appendChild(dv);
		if (fun) {
			fun(++i);
			if (ipth) {
				if (i == 1) {
					pr = progress(0);
					waveform.style.width = "99%";
					waveform.style.left = "0%";
					waveform.style.position = "fixed";
					waveform.style.backgroundColor = "#000";
					waveform.style.textAlign = "center";
					waveform.style.top = "calc(50vw * 1.4  + 70px)";
					waveform.style.margin = waveform.style.padding = "0px";
					wavesurfer = WaveSurfer.create({
							container : '#waveform',
							height : 30,
							waveColor : '#0f0',
							cursorColor : "red",
							progressColor : '#fff',
							hideScrollbar : true
						});
					waveform.style.visibility = "hidden";
					setdiv.style.display = "block";
					if (!(start & 2))
						waveform.style.visibility = "hidden";
					onwavesurfer();
					wavurl = imglst[0].d64.replace(/\d+\.jpg$/, "index.jpg") + ".wav";
					wavesurfer.load(wavurl);
				}
			}
			pr[0].value = Math.floor((i / imglst.length) * 100);
			pr[1].innerHTML = "进度" + pr[0].value + "/100";
			if (pr[0].value == "100") {
				progress(pr);
				if ((start & 4)) {
					wavesurfer.play();
					setTimeout(function () {
						var evt = document.createEvent('MouseEvents');
						evt.initEvent('click', false, true);
						document.querySelector(".pagemask").firstChild.dispatchEvent(evt);
					}, wait)
				}
			}
		}
	}
}
var autopage = function (flg) {
	if (lock)
		return;
	lock = 1;
	if (flg) //从右向左
	{
		tobeoutterpage = rightinnerpages.pop();
		tobeinnerpage = rightoutterpages.pop();
		tobeoutterpage.className = "page pageleft pageoutterleft flipleft";
		leftoutterpages.push(tobeoutterpage);
		leftinnerpages.push(tobeinnerpage);
		setTimeout("delay(1)", 1000);
	} else //从左向右
	{
		tobeoutterpage = leftinnerpages.pop();
		tobeinnerpage = leftoutterpages.pop();
		tobeoutterpage.className = "page pageright pageoutterright flipright";
		rightoutterpages.push(tobeoutterpage);
		rightinnerpages.push(tobeinnerpage);
		setTimeout("delay(2)", 1000);
	}
}
book.onmousedown = function (e) {
	if (e.target.tagName == "ARTICLE") {
		var rt = direction == "left" ? rleft : lleft;
		if (e.target.style.left == rt) //从右向左
			autopage(1);
		else //从左向右
			autopage(0);
	}
}
/*document.body.onmousedown = function (e) {
alert(e.target.tagName)
alert(e.target.id)
}*/
var imgobj = function (i) {
	if (i >= imglst.length) {
		initPages();
		return;
	}
	imglst[i].d64 = ipth + imglst[i].d64;
	lodimg(imglst[i].d64, imgobj, i);
}
var getimglist = function (i) {
	geturl(ipth + "balacon_read.json", function (ret) {
		imglst = ret;
		direction = (imglst[0].hasOwnProperty("direction") && imglst[0].direction == "left") ? "left" : "right";
		//	direction="left"
		addstyle();
		imgobj(i);
	}, "json")
}
getimglist(0);
function GbgMusic(a, b, c) {
	return new _GbgMusic(a, b, c)
}
function _GbgMusic(a, b, c) {
	this.src = a;
	this.top = b;
	this.right = c;
	this.musicBtn = this.audio = null;
	this.hasStop = !1;
	this.init()
}
_GbgMusic.prototype.init = function () {
	var a = this.musicBtn = document.createElement("div"),
	b = this.audio = document.createElement("audio"),
	c = document.createElement("style");
	c.innerText = ".GmusicBtn{width: 50px;height: 50px;overflow: hidden;position: fixed;top:" + (this.top ? this.top : 0) + "px;left:" + (this.right ? this.right : 0) + "px;z-index: 1000;background-image: url(other/playerBtn.png);background-repeat: no-repeat;background-position:0px 0px;}@-webkit-keyframes Grotate{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}.Grotate{-webkit-animation:Grotate 5s linear infinite;}";
	var f = document.getElementById("play"),
	e = document.createDocumentFragment();
	e.appendChild(c);
	e.appendChild(a);
	e.appendChild(b);
	f.appendChild(e);
	a.className = "GmusicBtn Grotate";
	b.src = this.src;
	b.setAttribute("loop", "loop");
	b.setAttribute("autoplay", "autoplay");
	var d = this;
	"undefined" != typeof window.ontouchstart ? (f.addEventListener("touchstart", function () {
			d.hasStop || d.musicPlay();
			f.removeEventListener("touchstart", arguments.callee)
		}, !1), a.addEventListener("touchstart", function (a) {
			a.stopPropagation();
			b.paused ? d.musicPlay() : d.musicPause()
		}, !1)) : a.addEventListener("click", function (a) {
		a.stopPropagation();
		b.paused ? d.musicPlay() : d.musicPause()
	}, !1)
};
_GbgMusic.prototype.musicPlay = function () {
	var a = this.audio,
	b = this.musicBtn;
	a.onerror = function () {
		console.log("GbgMusic url onerror\n" + a.src);
		b.style.backgroundPosition = "0px -50px",
		b.className = "GmusicBtn",
		a.pause(),
		bg1.value = "▶播放"
	}
	a.paused && (b.style.backgroundPosition = "0px 0px", b.className = "GmusicBtn Grotate", a.play(), a.volume = bg3.value, bg1.value = "⏸暂停")
};
_GbgMusic.prototype.musicPause = function () {
	var a = this.audio,
	b = this.musicBtn;
	a.paused || (this.hasStop = !0, b.style.backgroundPosition = "0px -50px", b.className = "GmusicBtn", a.pause(), bg1.value = "▶播放")
};
_GbgMusic.prototype.stopAuto = function () {
	var a = this.audio,
	b = this.musicBtn;
	this.hasStop = !0;
	a.removeAttribute("autoplay", "autoplay");
	b.style.backgroundPosition = "0px -50px";
	b.className = "GmusicBtn";
	a.pause()
};
_GbgMusic.prototype.play = function () {
	this.musicPlay()
};
_GbgMusic.prototype.pause = function () {
	this.musicPause()
};
_GbgMusic.prototype.getAudio = function () {
	return this.audio
};
var getmil = function (tmx) {
	var h = 3600000; //60*60*1000;
	var m = 60000; //60*1000;
	var s = 1000; //1000;
	var l = 1;
	if (isNaN(tmx)) {
		//alert(tmx.replace(/:/g,","))
		var tml = eval("[" + tmx.replace(/:/g, ",") + "]");
		//console.log(tml)
		var mil = h * tml[0] + m * tml[1] + s * tml[2] + tml[3];
		return mil;
	} else {
		var th = Math.floor(tmx / h);
		var tm = Math.floor((tmx % h) / m);
		var ts = Math.floor((tmx % h % m) / s);
		var tl = Math.floor(tmx % h % m % s);
		var tmd = th + ":" + tm + ":" + ts + "," + tl;
		tmd = tmd.replace(/\d+[:,]|\d+$/g, function (val) {
				if (val.length == 2)
					return "0" + val;
				else if (val.length == 1)
					return "00" + val;
				else
					return val;
			});
		return tmd;
	}
}
var html = "";
for (var k = 0; k < BookArr.length; k++) {
	if (!BookArr[k])
		continue;
	html += '<div class="book-item"><div class="book-dover">';
	html += '</span><img alt="' + BookArr[k] + '" class="book-img" src="';
	html += "./book/" + BookArr[k] + ".png";
	html += '"/></div><div class="book-name">';
	html += BookArr[k];
	html += '</div><div class="book-describe">试读本</div></div>'
}
ByID('booklist').innerHTML = html;
ByID("booklist").onmousedown = function (e) {
	if (e.target.tagName == "IMG") {
		bgaudio.pause();
		wavesurfer.pause();
		bgaudio = wavesurfer = null;
		re_url(3, "flip_ph.html?key=" + e.target.alt)
	}
	if (e.target.className == 'book-name') {
		bgaudio.pause();
		wavesurfer.pause();
		bgaudio = wavesurfer = null;
		re_url(3, "flip_ph.html?key=" + e.target.innerHTML)
	}
};
