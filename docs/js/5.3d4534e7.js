(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(e,i,r){"use strict";r.r(i);var t=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("q-layout",{attrs:{view:"hHh lpR fFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{dense:"",flat:!e.fileDrawerVisible,icon:"folder",color:e.fileDrawerVisible?"secondary":""},on:{click:function(i){return e.toggleDrawer(e.drawers.FILE)}}}),r("q-btn",{attrs:{dense:"",flat:!e.layerDrawerVisible,color:e.layerDrawerVisible?"secondary":"",icon:"layers",disable:!e.viewmodel.docExists},on:{click:function(i){return e.toggleDrawer(e.drawers.LAYER)}}}),r("q-btn",{attrs:{dense:"",flat:!e.viewDrawerVisible,color:e.viewDrawerVisible?"secondary":"",icon:"aspect_ratio",disable:!e.viewmodel.docExists},on:{click:function(i){return e.toggleDrawer(e.drawers.VIEW)}}}),r("q-toolbar-title"),r("div",[e._v(e._s(e.viewmodel.filename))])],1)],1),r("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.fileDrawerVisible,callback:function(i){e.fileDrawerVisible=i},expression:"fileDrawerVisible"}},[r("q-list",{attrs:{bordered:""}},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(i){return e.openSample()}}},[r("q-item-section",[e._v("Open Sample")]),r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"img:statics/logo.png"}})],1)],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(i){return e.openFile()}}},[r("q-item-section",[e._v("Open...")]),r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{color:"primary",name:"folder"}})],1)],1)],1)],1),r("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.layerDrawerVisible,callback:function(i){e.layerDrawerVisible=i},expression:"layerDrawerVisible"}},[r("q-list",e._l(e.viewmodel.layers,(function(i){return r("q-expansion-item",{key:i.label,attrs:{clickable:"","expand-icon":i.children?"":"0"},scopedSlots:e._u([{key:"header",fn:function(){return[r("q-item-section",{attrs:{avatar:""}},[r("q-toggle",{on:{input:function(i){e.RhApp().updateVisibility()}},model:{value:i.visible,callback:function(r){e.$set(i,"visible",r)},expression:"layer.visible"}})],1),r("q-item-section",[e._v("\n            "+e._s(i.label)+"\n          ")])]},proxy:!0}],null,!0)},[r("q-card",[r("q-card-section",[e._v("\n            Still working on child layer UI\n          ")])],1)],1)})),1)],1),r("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.viewDrawerVisible,callback:function(i){e.viewDrawerVisible=i},expression:"viewDrawerVisible"}},[r("q-list",{attrs:{bordered:""}},[r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"grid_on"}})],1),r("q-item-section",[r("q-item-label",[e._v("Grid")])],1),r("q-item-section",{attrs:{side:""}},[r("q-toggle",{on:{input:function(i){e.RhApp().updateVisibility()}},model:{value:e.viewmodel.gridVisible,callback:function(i){e.$set(e.viewmodel,"gridVisible",i)},expression:"viewmodel.gridVisible"}})],1)],1),r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"brightness_low"}})],1),r("q-item-section",[r("q-item-label",[e._v("Light Color")])],1),r("q-item-section",{attrs:{side:""}},[r("q-btn",{attrs:{round:"",size:"xs",icon:"colorize",color:"primary"}},[r("q-popup-proxy",[r("q-color",{on:{input:function(i){e.RhApp().updateColors()}},model:{value:e.viewmodel.lightColor,callback:function(i){e.$set(e.viewmodel,"lightColor",i)},expression:"viewmodel.lightColor"}})],1)],1)],1)],1)],1)],1),r("q-page-container",[r("router-view")],1)],1)},a=[],l=(r("aef6"),r("7f7f"),r("34ef"),r("1bee")),n={created:function(){var e=this;l["a"].addActiveDocChangedEventWatcher((function(){e.fileDrawerVisible=!1}))},data:function(){var e=l["a"].viewModel();return{layerDrawerVisible:!1,fileDrawerVisible:!0,viewDrawerVisible:!1,viewmodel:e,drawers:{FILE:1,LAYER:2,VIEW:3}}},methods:{RhApp:function(){return l["a"]},toggleDrawer:function(e){this.fileDrawerVisible=e===this.drawers.FILE&&!this.fileDrawerVisible,this.layerDrawerVisible=e===this.drawers.LAYER&&!this.layerDrawerVisible,this.viewDrawerVisible=e===this.drawers.VIEW&&!this.viewDrawerVisible},openSample:function(){fetch("statics/hello_mesh.3dm").then((function(e){var i=e.arrayBuffer();i.then((function(e){l["a"].openFile("RhinoLogo.3dm",new Uint8Array(e))}))}))},openFile:function(){var e=document.createElement("input"),i=function(i){var r=i.target.files[0];if(r){var t=new FileReader;t.onload=function(i){var t=i.target.result;l["a"].openFile(r.name,t),document.body.removeChild(e)},r.name.endsWith(".obj")||r.name.endsWith(".ply")?t.readAsText(r):t.readAsArrayBuffer(r)}};e.type="file",e.accept=".3dm, .obj, .drc, .ply",e.style.display="none",e.onchange=i,document.body.appendChild(e);var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(r)}}},o=n,s=r("2877"),c=r("eebe"),d=r.n(c),b=r("4d5a"),u=r("e359"),w=r("65c6"),p=r("9c40"),m=r("6ac5"),v=r("9404"),f=r("1c1c"),q=r("66e5"),h=r("4074"),y=r("0016"),g=r("3b73"),V=r("9564"),D=r("f09f"),k=r("a370"),E=r("0170"),Q=r("7cbe"),x=r("b498"),_=r("09e3"),A=r("714f"),C=Object(s["a"])(o,t,a,!1,null,null,null);i["default"]=C.exports;d()(C,"components",{QLayout:b["a"],QHeader:u["a"],QToolbar:w["a"],QBtn:p["a"],QToolbarTitle:m["a"],QDrawer:v["a"],QList:f["a"],QItem:q["a"],QItemSection:h["a"],QIcon:y["a"],QExpansionItem:g["a"],QToggle:V["a"],QCard:D["a"],QCardSection:k["a"],QItemLabel:E["a"],QPopupProxy:Q["a"],QColor:x["a"],QPageContainer:_["a"]}),d()(C,"directives",{Ripple:A["a"]})}}]);