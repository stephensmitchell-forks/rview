(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"1bee":function(e,n,t){"use strict";t("7f7f");var r=null,o=null,i=null,a={docExists:!1,filename:"",expanded:["Layers"],layers:[{label:"Layers",header:"root",children:[]}]},u={init:function(e,n,t){if(null==r){var o=e();console.log("start loading rhino3dm"),n(),o.then((function(e){r=e,t(),console.log("rhino3dm loaded")}))}},getRhino3dm:function(){return r},viewModel:function(){return a},setActiveDoc:function(e,n){var t=r.File3dm.fromByteArray(n);if(o&&o.delete(),o=t,a.docExists=null!=t,a.filename=e,a.layers[0].children.length=0,t){for(var u=t.layers(),c=u.count(),l=0;l<c;l++){var s=u.get(l),d={label:s.name};a.layers[0].children.push(d),s.delete()}u.delete()}i&&i()},getActiveDoc:function(){return o},setActiveDocChangedEventWatcher:function(e){i=e}};n["a"]=u},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),o=t.n(r),i=(t("96cf"),t("fa84")),a=t.n(i),u=(t("7d6e"),t("e54f"),t("985d"),t("0047"),t("2b0e")),c=t("1f91"),l=t("42d2"),s=t("b05d"),d=t("f508");u["a"].use(s["a"],{config:{loading:{}},lang:c["a"],iconSet:l["a"],plugins:{Loading:d["a"]}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},h=[],p=t("1bee"),v={name:"App",mounted:function(){p["a"].init(window.rhino3dm,this.showLoading,this.hideLoading)},methods:{showLoading:function(){this.$q.loading.show()},hideLoading:function(){this.$q.loading.hide()}}},m=v,w=t("2877"),b=Object(w["a"])(m,f,h,!1,null,null,null),g=b.exports,y=t("8c4f"),x=[{path:"/",component:function(){return Promise.all([t.e("vendor"),t.e("2d22c0ff")]).then(t.bind(null,"f241"))},children:[{path:"",component:function(){return Promise.all([t.e("vendor"),t.e("2d0e8be2")]).then(t.bind(null,"8b24"))}},{path:"viewer",component:function(){return Promise.all([t.e("vendor"),t.e("2d0b61c6")]).then(t.bind(null,"1c86"))}}]}];x.push({path:"*",component:function(){return Promise.all([t.e("vendor"),t.e("4b47640d")]).then(t.bind(null,"e51e"))}});var L=x;u["a"].use(y["a"]);var k=function(){var e=new y["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:L,mode:"hash",base:""});return e},A=function(){return q.apply(this,arguments)};function q(){return q=a()(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof k){e.next=6;break}return e.next=3,k({Vue:u["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=k;case 7:return n=e.t0,t={el:"#q-app",router:n,render:function(e){return e(g)}},e.abrupt("return",{app:t,router:n});case 10:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function E(){return P.apply(this,arguments)}function P(){return P=a()(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:n=e.sent,t=n.app,n.router,new u["a"](t);case 6:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}E()}},[[0,"runtime","vendor"]]]);