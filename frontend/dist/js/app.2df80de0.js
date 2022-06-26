(function(e){function t(t){for(var n,a,l=t[0],s=t[1],i=t[2],p=0,f=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o,u=r("2b0e"),a=r("5f5b"),l=r("b1e0"),s=(r("f9e3"),r("2dd8"),r("4eb5")),i=r.n(s),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},p=[],f=(r("034f"),r("2877")),d={},h=Object(f["a"])(d,c,p,!1,null,null,null),b=h.exports,m=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("UrlShortenerForm")],1)},y=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-items-center min-vh-100"},[r("div",{staticClass:"container text-center col-md-5"},[r("b-alert",{attrs:{variant:e.typeAlert,show:e.showAlert}},[e._v(e._s(e.alertText))]),r("b-form",{on:{submit:e.submitForm}},[r("b-input-group",{attrs:{size:"lg"}},[r("b-form-input",{staticClass:"text-center",attrs:{placeholder:"URL.."},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),r("b-input-group-append",[r("b-button",{attrs:{variant:"info",type:"submit"}},[e._v("Shorten URL")])],1)],1)],1),r("br"),r("b-input-group",{directives:[{name:"show",rawName:"v-show",value:e.showResult,expression:"showResult"}],attrs:{size:"sm"}},[r("b-input",{staticClass:"text-center",attrs:{size:"sm",disabled:""},model:{value:e.urlResult,callback:function(t){e.urlResult=t},expression:"urlResult"}}),r("b-input-group-append",[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.urlResult,expression:"urlResult",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{variant:"dark"}},[r("b-icon",{attrs:{icon:"clipboard","aria-hidden":"true"}})],1)],1)],1)],1)])},x=[],g=(r("d3b7"),{name:"UrlShortenerForm",data:function(){return{url:"",urlResult:"N/A",showResult:!1,showAlert:!1,alertText:"",typeAlert:"success"}},methods:{submitForm:function(e){var t=this;e.preventDefault(),""!==this.url&&fetch("/api/v1/url/create",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({url:this.url})}).then((function(e){return e.json()})).then((function(e){t.urlResult=e.url,t.url="",t.showResult=!0}))},onCopy:function(){this.showAlertInfo("URL Link is copied!","success")},showAlertInfo:function(e,t){this.alertText=e,this.showAlert=5,this.typeAlert=t}}}),j=g,O=Object(f["a"])(j,w,x,!1,null,null,null),R=O.exports,_={name:"Home",components:{UrlShortenerForm:R}},C=_,S=Object(f["a"])(C,v,y,!1,null,null,null),A=S.exports,T={name:"Redirect",beforeCreate:function(){return fetch("/api/v1/url/".concat(this.$route.params.url),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){window.location.href=e.url}))}},P=T,k=Object(f["a"])(P,n,o,!1,null,null,null),U=k.exports;u["default"].use(m["a"]);var F=[{path:"/",name:"Home",component:A},{path:"/:url",name:"Redirect",component:U}],N=new m["a"]({mode:"history",base:"/",routes:F}),$=N;u["default"].use(a["a"]),u["default"].use(l["a"]),u["default"].use(i.a),u["default"].config.productionTip=!1,new u["default"]({router:$,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.2df80de0.js.map