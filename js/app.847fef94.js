(function(t){function e(e){for(var a,u,i=e[0],l=e[1],c=e[2],s=0,d=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f669ddac"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var a=n("199c"),r=n.n(a);e["default"]=r.a},"30e7":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[]},"3dfd":function(t,e,n){"use strict";var a=n("30e7"),r=n("23be"),o=(n("034f"),n("2877")),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),o=n.n(r),u={baseURL:"http://1.117.92.68:1099"},i=o.a.create(u);i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},a["default"].use(Plugin);Plugin;var l=n("3dfd"),c=(n("3ca3"),n("ddb0"),n("8c4f")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v(" FBA 货件生成器 ")]),n("el-input",{staticStyle:{width:"700px","margin-bottom":"30px"},attrs:{placeholder:"planName"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("div",{staticStyle:{"margin-bottom":"30px"}},[n("el-select",{attrs:{placeholder:"请选择发货地址"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("el-input",{staticStyle:{width:"200px","margin-right":"50px"},attrs:{type:"textarea",autosize:"",placeholder:"EAN",autosize:{minRows:2,maxRows:4}},model:{value:t.textarea1,callback:function(e){t.textarea1=e},expression:"textarea1"}}),n("div",{staticStyle:{margin:"20px 0"}}),n("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Quananity"},model:{value:t.textarea2,callback:function(e){t.textarea2=e},expression:"textarea2"}})],1),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:t.senddata}},[t._v("生成FBA plan")]),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:t.toNext}},[t._v("生成外箱尺寸表格")])],1)},p=[],d=(n("2b3d"),{name:"app",components:{},data:function(){return{options:[{value:"hangzhou",label:"杭州办公室"},{value:"oversea",label:"雄达海外仓"}],value:"",input:"",textarea1:"",textarea2:""}},methods:{toNext:function(){this.$router.push("index")},senddata:function(){console.log(this.$data.textarea1),console.log(this.$data.textarea2),this.$axios({method:"post",url:"/fbaplan",data:{addr:this.$data.value,planname:this.$data.input,amount:this.$data.textarea2,eanlist:this.$data.textarea1}}).then((function(t){var e=document.createElement("a"),n=new Blob([t.data],{type:"text/plain"}),a=URL.createObjectURL(n);e.href=a,e.download="shipment.txt",e.click(),URL.revokeObjectURL(a)})).catch((function(t){return console.log(t)}))}}}),f=d,h=n("2877"),m=Object(h["a"])(f,s,p,!1,null,null,null),b=m.exports;a["default"].use(c["a"]);var v=[{path:"/",name:"Home",component:b},{path:"/index",name:"Index",component:function(){return n.e("about").then(n.bind(null,"1e4b"))}},{path:"/label",name:"Label",component:function(){return n.e("about").then(n.bind(null,"3fc2"))}}],x=new c["a"]({routes:v}),y=x,g=n("5c96"),w=n.n(g);n("0fae");a["default"].use(w.a),a["default"].config.productionTip=!1,new a["default"]({router:y,render:function(t){return t(l["default"])}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.847fef94.js.map