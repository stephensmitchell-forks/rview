(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,i,r){"use strict";r.r(i);var a=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("q-layout",{attrs:{view:"hHh lpR fFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{dense:"",flat:!e.fileDrawerVisible,icon:"folder",color:e.fileDrawerVisible?"secondary":""},on:{click:function(i){return e.clickFolder()}}}),r("q-btn",{attrs:{dense:"",flat:!e.layerDrawerVisible,color:e.layerDrawerVisible?"secondary":"",icon:"layers",disable:!e.viewmodel.docExists},on:{click:function(i){return e.clickLayers()}}}),r("q-btn",{attrs:{dense:"",flat:!e.viewDrawerVisible,color:e.viewDrawerVisible?"secondary":"",icon:"aspect_ratio",disable:!e.viewmodel.docExists},on:{click:function(i){return e.clickView()}}}),r("q-toolbar-title"),r("div",[e._v("\n        "+e._s(e.viewmodel.filename)+"\n      ")])],1)],1),r("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.fileDrawerVisible,callback:function(i){e.fileDrawerVisible=i},expression:"fileDrawerVisible"}},[r("q-list",{attrs:{bordered:""}},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(i){return e.openSample()}}},[r("q-item-section",[e._v("Open Sample")]),r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"img:statics/logo.png"}})],1)],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(i){return e.open3dm()}}},[r("q-item-section",[e._v("Open...")]),r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{color:"primary",name:"folder"}})],1)],1)],1)],1),r("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.layerDrawerVisible,callback:function(i){e.layerDrawerVisible=i},expression:"layerDrawerVisible"}},[r("q-list",e._l(e.viewmodel.layers,(function(i){return r("q-expansion-item",{key:i.label,attrs:{clickable:"","expand-icon":i.children?"":"0"},scopedSlots:e._u([{key:"header",fn:function(){return[r("q-item-section",{attrs:{avatar:""}},[r("q-toggle",{on:{input:function(i){return e.updateVisibility()}},model:{value:i.visible,callback:function(r){e.$set(i,"visible",r)},expression:"layer.visible"}})],1),r("q-item-section",[e._v("\n            "+e._s(i.label)+"\n          ")])]},proxy:!0}],null,!0)},[r("q-card",[r("q-card-section",[e._v("\n            Still working on child layer UI\n          ")])],1)],1)})),1)],1),r("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.viewDrawerVisible,callback:function(i){e.viewDrawerVisible=i},expression:"viewDrawerVisible"}},[r("q-list",{attrs:{bordered:""}},[r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-toggle",{attrs:{label:"Grid"},on:{input:function(i){return e.updateVisibility()}},model:{value:e.viewmodel.gridVisible,callback:function(i){e.$set(e.viewmodel,"gridVisible",i)},expression:"viewmodel.gridVisible"}})],1)],1)],1)],1),r("q-page-container",[r("router-view")],1)],1)},t=[],l=(r("7f7f"),r("34ef"),r("1bee")),n={created:function(){var e=this;l["a"].addActiveDocChangedEventWatcher((function(){e.fileDrawerVisible=!1}))},data:function(){var e=l["a"].viewModel();return{layerDrawerVisible:!1,fileDrawerVisible:!0,viewDrawerVisible:!1,viewmodel:e}},methods:{updateVisibility:function(){l["a"].updateVisibility()},clickLayers:function(){this.fileDrawerVisible=!1,this.viewDrawerVisible=!1,this.layerDrawerVisible=!this.layerDrawerVisible},clickFolder:function(){this.layerDrawerVisible=!1,this.viewDrawerVisible=!1,this.fileDrawerVisible=!this.fileDrawerVisible},clickView:function(){this.layerDrawerVisible=!1,this.fileDrawerVisible=!1,this.viewDrawerVisible=!this.viewDrawerVisible},openSample:function(){var e=fetch("statics/hello_mesh.3dm");e.then((function(e){var i=e.arrayBuffer();i.then((function(e){l["a"].setActiveDoc("RhinoLogo.3dm",new Uint8Array(e))}))}))},open3dm:function(){var e=document.createElement("input"),i=function(i){var r=i.target.files[0];if(r){var a=new FileReader;a.onload=function(i){var a=i.target.result;l["a"].setActiveDoc(r.name,a),document.body.removeChild(e)},a.readAsArrayBuffer(r)}};e.type="file",e.style.display="none",e.onchange=i,document.body.appendChild(e);var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(r)}}},o=n,s=r("2877"),c=r("eebe"),d=r.n(c),b=r("4d5a"),u=r("e359"),w=r("65c6"),v=r("9c40"),f=r("6ac5"),m=r("9404"),p=r("1c1c"),y=r("66e5"),V=r("4074"),D=r("0016"),h=r("3b73"),q=r("9564"),g=r("f09f"),k=r("a370"),Q=r("09e3"),_=r("714f"),x=Object(s["a"])(o,a,t,!1,null,null,null);i["default"]=x.exports;d()(x,"components",{QLayout:b["a"],QHeader:u["a"],QToolbar:w["a"],QBtn:v["a"],QToolbarTitle:f["a"],QDrawer:m["a"],QList:p["a"],QItem:y["a"],QItemSection:V["a"],QIcon:D["a"],QExpansionItem:h["a"],QToggle:q["a"],QCard:g["a"],QCardSection:k["a"],QPageContainer:Q["a"]}),d()(x,"directives",{Ripple:_["a"]})}}]);