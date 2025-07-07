# 大玄古籍存储仓库  
## 此项目是一款书籍翻页展示例，能同步语音朗读，可以方便书籍图片翻书翻页查看，更有古籍制作，古本翻新，古书重制的工具待传。  
  
[WEB预览prewiew](https://daxuanguji.github.io/)  
https://daxuanguji.github.io/  
预览图片  
<img src="https://daxuanguji.github.io/other/preview.png" height=200><img src="https://daxuanguji.github.io/other/preview1.png" height=200><img src="https://daxuanguji.github.io/other/preview2.png" height=200>  
文档目录说明  
```index.html```为书籍目录列表展示主页  
```flip.html```为电脑版每部书籍的翻页朗读页  
```flip_ph.html```为手机版每部书籍的翻页朗读页  
  
js目录  
```global.js```为公共函数库，可在此外指定书籍目录列表，修改BookArr数组值即可  
  
css目录  
```combined.css```为index.html样式  
```style.css```为flip_ph.html样式  
```loadmaue.css```为flip_ph.html的右上角菜单样式  
  
book目录  
此处应用global.js中BookArr变量的所有的同名封面图  
  
book/file目录  
此处应用global.js中BookArr变量的所有的同名文件夹  
  
book/file/书籍文件夹  
```balacon_read.json```:当前书籍整体配置，所有资源由此文件加载  
{direction:指定书籍左翻还是右翻，应当在第一页封面index.jpg封面页指定，其它页无效，可设置值"left"或"right";默认right  
txt:当前页面的朗读文本，由balabolka朗读时调用生成srt和wav，由大玄古籍制作软件生成，如果不需要可删除  
spk:balabolka朗读时的角色语调语速比特率等配置参数，由大玄古籍制作软件生成，如果不需要可删除  
d64:指定图片名，默认balacon_read.json当前目录，可外链图片〔不指定或者指定错误将无法显示书籍〕  
pot:每个字符在当前页面上的绝对位置坐标〔x，y，width，height〕不需要也可为空数组  
}  
  
```number.jpg```:当前页码的图片  
```number.jpg.wav```:当前页码图片的朗读音频〔可用balabolka软件导出〕  
number.jpg.srt:当前页码图片音频的同步时间〔可用balabolka导出〕  
  
```index.jpg;index.jpg.wav;index.jpg.srt```是书籍封面页与上的作用一样  
  
  
《字百千》【完整拼音版】300dpi高清打印版源图片+免费下载+可商用  
包含字部首+百家姓+千字文的合订本  
https://download.csdn.net/download/g1354483/90836744  
  
《千字文》【完整拼音版】300dpi高清打印版源图片+免费下载+可商用  
https://download.csdn.net/download/g1354483/90836741  
  
《百家姓》【完整拼音版】300dpi高清打印版源图片+免费下载+可商用  
https://download.csdn.net/download/g1354483/90836733  
  
  
制作使用工具  
汉字转拼音工具_hanziToPinying  
https://blog.csdn.net/g1354483/article/details/147937990  
大玄古籍制作软件  
https://blog.csdn.net/g1354483/article/details/131951511
