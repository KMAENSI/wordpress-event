import{_ as O,r as T,o as j,c as U,d as L,f as er,A as or}from"./js/_plugin-vue_export-helper.a81c6319.js";import{l as ur}from"./js/index.251e7289.js";import{l as ar}from"./js/index.fae5bbc8.js";import{m as nr}from"./js/vuex.esm-bundler.55d3d5b3.js";import{S as E}from"./js/Standalone.f58ac731.js";import{C as tr}from"./js/SeoSetup.784b0b30.js";import{C as sr}from"./js/Overview.e10c0d09.js";import{s as b}from"./js/index.4dbecc01.js";import{e as ir}from"./js/elemLoaded.9a6eb745.js";import{c as i,a as cr}from"./js/_commonjsHelpers.f84db168.js";import"./js/client.e7a26247.js";import"./js/default-i18n.0e8bc810.js";import"./js/helpers.51e5fd9c.js";import"./js/constants.e56e1512.js";import"./js/Caret.19bf2275.js";import"./js/Rocket.a841ef13.js";import"./js/DonutChartWithLegend.f9077c5f.js";import"./js/AnimatedNumber.efaaae10.js";const fr={mixins:[E],components:{CoreSeoSetup:tr},computed:{...nr(["internalOptions"])}},dr={key:0};function pr(r,e,o,a,u,n){const f=T("core-seo-setup");return r.internalOptions.internal?(j(),U("div",dr,[L(f,{isWpDashboard:!0})])):er("",!0)}const lr=O(fr,[["render",pr]]),br={components:{CoreOverview:sr},mixins:[E]},mr={class:"aioseo-app",style:{"background-color":"transparent"}};function xr(r,e,o,a,u,n){const f=T("core-overview");return j(),U("div",mr,[L(f,{isWpDashboard:!0})])}const vr=O(br,[["render",xr]]);var gr=typeof i=="object"&&i&&i.Object===Object&&i,$r=gr,_r=$r,Sr=typeof self=="object"&&self&&self.Object===Object&&self,yr=_r||Sr||Function("return this")(),Ar=yr,Rr=Ar,Cr=Rr.Symbol,l=Cr;function hr(r,e){for(var o=-1,a=r==null?0:r.length,u=Array(a);++o<a;)u[o]=e(r[o],o,r);return u}var Or=hr,Tr=Array.isArray,jr=Tr,m=l,M=Object.prototype,Ur=M.hasOwnProperty,Lr=M.toString,s=m?m.toStringTag:void 0;function Er(r){var e=Ur.call(r,s),o=r[s];try{r[s]=void 0;var a=!0}catch{}var u=Lr.call(r);return a&&(e?r[s]=o:delete r[s]),u}var Mr=Er,kr=Object.prototype,Wr=kr.toString;function wr(r){return Wr.call(r)}var zr=wr,x=l,Nr=Mr,Ir=zr,Dr="[object Null]",Pr="[object Undefined]",v=x?x.toStringTag:void 0;function Zr(r){return r==null?r===void 0?Pr:Dr:v&&v in Object(r)?Nr(r):Ir(r)}var Fr=Zr;function Gr(r){return r!=null&&typeof r=="object"}var Hr=Gr,Vr=Fr,Jr=Hr,Br="[object Symbol]";function Yr(r){return typeof r=="symbol"||Jr(r)&&Vr(r)==Br}var qr=Yr,g=l,Kr=Or,Qr=jr,Xr=qr,re=1/0,$=g?g.prototype:void 0,_=$?$.toString:void 0;function k(r){if(typeof r=="string")return r;if(Qr(r))return Kr(r,k)+"";if(Xr(r))return _?_.call(r):"";var e=r+"";return e=="0"&&1/r==-re?"-0":e}var ee=k,oe=ee;function ue(r){return r==null?"":oe(r)}var c=ue;function ae(r,e,o){var a=-1,u=r.length;e<0&&(e=-e>u?0:u+e),o=o>u?u:o,o<0&&(o+=u),u=e>o?0:o-e>>>0,e>>>=0;for(var n=Array(u);++a<u;)n[a]=r[a+e];return n}var ne=ae,te=ne;function se(r,e,o){var a=r.length;return o=o===void 0?a:o,!e&&o>=a?r:te(r,e,o)}var ie=se,ce="\\ud800-\\udfff",fe="\\u0300-\\u036f",de="\\ufe20-\\ufe2f",pe="\\u20d0-\\u20ff",le=fe+de+pe,be="\\ufe0e\\ufe0f",me="\\u200d",xe=RegExp("["+me+ce+le+be+"]");function ve(r){return xe.test(r)}var W=ve;function ge(r){return r.split("")}var $e=ge,w="\\ud800-\\udfff",_e="\\u0300-\\u036f",Se="\\ufe20-\\ufe2f",ye="\\u20d0-\\u20ff",Ae=_e+Se+ye,Re="\\ufe0e\\ufe0f",Ce="["+w+"]",d="["+Ae+"]",p="\\ud83c[\\udffb-\\udfff]",he="(?:"+d+"|"+p+")",z="[^"+w+"]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",I="[\\ud800-\\udbff][\\udc00-\\udfff]",Oe="\\u200d",D=he+"?",P="["+Re+"]?",Te="(?:"+Oe+"(?:"+[z,N,I].join("|")+")"+P+D+")*",je=P+D+Te,Ue="(?:"+[z+d+"?",d,N,I,Ce].join("|")+")",Le=RegExp(p+"(?="+p+")|"+Ue+je,"g");function Ee(r){return r.match(Le)||[]}var Me=Ee,ke=$e,We=W,we=Me;function ze(r){return We(r)?we(r):ke(r)}var Ne=ze,Ie=ie,De=W,Pe=Ne,Ze=c;function Fe(r){return function(e){e=Ze(e);var o=De(e)?Pe(e):void 0,a=o?o[0]:e.charAt(0),u=o?Ie(o,1).join(""):e.slice(1);return a[r]()+u}}var Ge=Fe,He=Ge,Ve=He("toUpperCase"),Je=Ve,Be=c,Ye=Je;function qe(r){return Ye(Be(r).toLowerCase())}var Ke=qe;function Qe(r,e,o,a){var u=-1,n=r==null?0:r.length;for(a&&n&&(o=r[++u]);++u<n;)o=e(o,r[u],u,r);return o}var Xe=Qe;function ro(r){return function(e){return r==null?void 0:r[e]}}var eo=ro,oo=eo,uo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ao=oo(uo),no=ao,to=no,so=c,io=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,co="\\u0300-\\u036f",fo="\\ufe20-\\ufe2f",po="\\u20d0-\\u20ff",lo=co+fo+po,bo="["+lo+"]",mo=RegExp(bo,"g");function xo(r){return r=so(r),r&&r.replace(io,to).replace(mo,"")}var vo=xo,go=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function $o(r){return r.match(go)||[]}var _o=$o,So=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function yo(r){return So.test(r)}var Ao=yo,Z="\\ud800-\\udfff",Ro="\\u0300-\\u036f",Co="\\ufe20-\\ufe2f",ho="\\u20d0-\\u20ff",Oo=Ro+Co+ho,F="\\u2700-\\u27bf",G="a-z\\xdf-\\xf6\\xf8-\\xff",To="\\xac\\xb1\\xd7\\xf7",jo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Uo="\\u2000-\\u206f",Lo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",H="A-Z\\xc0-\\xd6\\xd8-\\xde",Eo="\\ufe0e\\ufe0f",V=To+jo+Uo+Lo,J="['’]",S="["+V+"]",Mo="["+Oo+"]",B="\\d+",ko="["+F+"]",Y="["+G+"]",q="[^"+Z+V+B+F+G+H+"]",Wo="\\ud83c[\\udffb-\\udfff]",wo="(?:"+Mo+"|"+Wo+")",zo="[^"+Z+"]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",Q="[\\ud800-\\udbff][\\udc00-\\udfff]",t="["+H+"]",No="\\u200d",y="(?:"+Y+"|"+q+")",Io="(?:"+t+"|"+q+")",A="(?:"+J+"(?:d|ll|m|re|s|t|ve))?",R="(?:"+J+"(?:D|LL|M|RE|S|T|VE))?",X=wo+"?",rr="["+Eo+"]?",Do="(?:"+No+"(?:"+[zo,K,Q].join("|")+")"+rr+X+")*",Po="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fo=rr+X+Do,Go="(?:"+[ko,K,Q].join("|")+")"+Fo,Ho=RegExp([t+"?"+Y+"+"+A+"(?="+[S,t,"$"].join("|")+")",Io+"+"+R+"(?="+[S,t+y,"$"].join("|")+")",t+"?"+y+"+"+A,t+"+"+R,Zo,Po,B,Go].join("|"),"g");function Vo(r){return r.match(Ho)||[]}var Jo=Vo,Bo=_o,Yo=Ao,qo=c,Ko=Jo;function Qo(r,e,o){return r=qo(r),e=o?void 0:e,e===void 0?Yo(r)?Ko(r):Bo(r):r.match(e)||[]}var Xo=Qo,ru=Xe,eu=vo,ou=Xo,uu="['’]",au=RegExp(uu,"g");function nu(r){return function(e){return ru(ou(eu(e).replace(au,"")),r,"")}}var tu=nu,su=Ke,iu=tu,cu=iu(function(r,e,o){return e=e.toLowerCase(),r+(o?su(e):e)}),fu=cu;const C=cr(fu),du=[{id:"aioseo-seo-setup-app",component:lr},{id:"aioseo-overview-app",component:vr}],h=r=>{let e=or(r.component);e=ur(e),e=ar(e),e.use(b),b._vm=e,e.mount("#"+r.id)};du.forEach(r=>{document.getElementById(r.id)?h(r):(ir("#"+r.id,C(r.id)),document.addEventListener("animationstart",function(e){C(r.id)===e.animationName&&h(r)},{passive:!0}))});
