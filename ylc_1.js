
if(typeof YAHOO=="undefined"){YAHOO={};}
if(!YAHOO.ULT){YAHOO.ULT={};}
if(!YAHOO.ULT.BEACON){YAHOO.ULT.BEACON="https://web.archive.org/web/20150802073621/http://geo.yahoo.com/t";}
if(!YAHOO.ULT.IMG){YAHOO.ULT.IMG=new Image();}
YAHOO.ULT.SRC_SPACEID_KEY='_S';YAHOO.ULT.DEST_SPACEID_KEY='_s';YAHOO.ULT.YLC_LIBSRC=2;YAHOO.ULT.CTRL_C='\x03';YAHOO.ULT.CTRL_D='\x04';YAHOO.ULT.BASE64_STR="ABCDEFGHIJKLMNOP"+"QRSTUVWXYZabcdef"+"ghijklmnopqrstuv"+"wxyz0123456789._-";(function(){YAHOO.ULT.track_click=function(u,p){if(!u||!p){return u;}
p._r=YAHOO.ULT.YLC_LIBSRC;var ks=[];var i=0;for(var k in p){var v=p[k];if(typeof(v)=='undefined'){v=p[k]='';}
if(k.length<1){return u;}
if(k.length>8){return u;}
if(k.indexOf(' ')!=-1){return u;}
if(YAHOO.ULT.has_ctrl_char(k)||YAHOO.ULT.has_ctrl_char(v)){return u;}
ks[i++]=k;}
ks=ks.sort();var f=[];for(i=0;i<ks.length;i++){f[i]=ks[i]+YAHOO.ULT.CTRL_C+p[ks[i]];}
f=f.join(YAHOO.ULT.CTRL_D);if(f.length<1||f.length>1024){return u;}
f=';_ylc='+YAHOO.ULT.encode64(f);i=u.indexOf('/*');if(i==-1){i=u.indexOf('/?');}
if(i==-1){i=u.indexOf('?');}
if(i==-1){return u+f;}else{return u.substr(0,i)+f+u.substr(i);}};YAHOO.ULT.beacon_click=function(p,i){if(!i){i=YAHOO.ULT.IMG;}
if(p){var url=YAHOO.ULT.track_click(YAHOO.ULT.BEACON,p);url+='?t='+Math.random();i.src=url;}
return true;};YAHOO.ULT.has_ctrl_char=function(s){for(var i=0;i<s.length;i++){if(s.charCodeAt(i)<0x20){return true;}}
return false;};YAHOO.ULT.encode64=function(input){var output="";var chr1,chr2,chr3="";var enc1,enc2,enc3,enc4="";var i=0;do{chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
YAHOO.ULT.BASE64_STR.charAt(enc1)+
YAHOO.ULT.BASE64_STR.charAt(enc2)+
YAHOO.ULT.BASE64_STR.charAt(enc3)+
YAHOO.ULT.BASE64_STR.charAt(enc4);chr1=chr2=chr3="";enc1=enc2=enc3=enc4="";}while(i<input.length);return output;};})();
/*
     FILE ARCHIVED ON 07:36:21 Aug 02, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:23:22 Jul 23, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 113.23 (3)
  esindex: 0.006
  captures_list: 321.125
  CDXLines.iter: 17.78 (3)
  PetaboxLoader3.datanode: 107.243 (4)
  exclusion.robots: 0.135
  exclusion.robots.policy: 0.124
  RedisCDXSource: 1.797
  PetaboxLoader3.resolve: 97.268
  load_resource: 109.702
*/