(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"8b24":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center",attrs:{id:"canvasParent"}},[e.viewmodel.docExists?e._e():n("q-card",{attrs:{flat:""}},[n("q-img",{attrs:{alt:"rview",src:"statics/logo.png"}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("rview WIP")])])],1),e.viewmodel.docExists?n("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[n("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_up",direction:"up"}},[n("q-fab-action",{attrs:{color:e.panMode?"secondary":"primary",icon:"pan_tool"},on:{click:function(t){return e.togglePan()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Pan\n        ")])],1),n("q-fab-action",{attrs:{color:"primary",icon:"zoom_out_map"},on:{click:function(t){return e.zoomExtents()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Zoom Extents\n        ")])],1),e.viewmodel.perspectiveCamera?n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/3D.svg"},on:{click:function(t){return e.setProjection(!1)}}}):e._e(),e.viewmodel.perspectiveCamera?e._e():n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/2D.svg"},on:{click:function(t){return e.setProjection(!0)}}})],1)],1):e._e(),e.panMode?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Pan Mode","icon-right":"close"},on:{click:function(t){return e.togglePan()}}})],1):e._e()],1)},a=[],o=n("967e"),i=n.n(o),c=(n("34ef"),n("96cf"),n("fa84")),s=n.n(c),l=(n("28a5"),n("5a89")),d=n("4721"),u=n("1bee"),m=n("17c8"),h={renderer:null,camera:null,controls:null,initialize:function(){if(null==this.renderer){l["A"].DefaultUp=new l["L"](0,0,1),this.renderer=new l["N"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);var e=document.getElementById("canvasParent");this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),window.addEventListener("resize",(function(){return p(!0)}),!1),this.camera=new l["C"](30,e.clientWidth/e.clientHeight,1,1e3),this.camera.position.z=40,this.controls=new d["a"](this.camera,this.renderer.domElement),this.controls.screenSpacePanning=!0}},zoomExtents:function(e){var t=u["a"].getRhino3dm(),n=u["a"].viewModel().perspectiveCamera?t.ViewportInfo.defaultPerspective():t.ViewportInfo.defaultTop(),r=new l["K"](0,0);h.renderer.getSize(r),n.screenPort=[0,0,r.x,r.y];var a=u["a"].visibleObjectsBoundingBox(),o=new t.BoundingBox(a.min.x,a.min.y,a.min.z,a.max.x,a.max.y,a.max.z),i=o.center,c=o.max[0]-o.min[0],s=o.max[1]-o.min[1],d=o.max[2]-o.min[2];o.inflate(.2*c,.2*s,.2*d);var m=c,p=m*r.y/r.x;if(n.setFrustum(-m/2,m/2,-p/2,p/2,.1,1e3),n.extents(157.0795/180,o),o.delete(),e){u["a"].getActiveModel().three.middleground.remove(this.camera);var f=n.getFrustum();u["a"].viewModel().perspectiveCamera?this.camera=new l["C"](30,r.x/r.y,1,1e3):(this.camera=new l["B"](f.left,f.right,f.top,f.bottom,f.near,f.far),this.camera.up.set(n.cameraUp[0],n.cameraUp[1],n.cameraUp[2])),this.controls.object=this.camera;var g=new l["h"](u["a"].viewModel().lightColor);g.position.set(0,0,1),u["a"].getActiveModel().cameraLight=g,this.camera.add(g),u["a"].getActiveModel().three.middleground.add(this.camera)}var v=n.cameraLocation;this.camera.position.set(v[0],v[1],v[2]),this.camera.updateProjectionMatrix(),this.controls.target.set(i[0],i[1],i[2]),n.delete()}},p=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t){var n=document.getElementById("canvasParent");h.camera.aspect=n.clientWidth/n.clientHeight,h.camera.updateProjectionMatrix(),h.renderer.setSize(n.clientWidth,n.clientHeight)}requestAnimationFrame(e),h.controls.update();var r=u["a"].getActiveModel();h.renderer.autoClear=!1,h.renderer.render(r.three.background,h.camera),h.renderer.render(r.three.middleground,h.camera)};function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(n||r||(e.background=new l["f"](t)),t&&n){var a=document.createElement("canvas");a.width=128,a.height=128;var o=a.getContext("2d"),i=o.createLinearGradient(0,0,0,a.height);i.addColorStop(1,n),i.addColorStop(.1,t),o.fillStyle=i,o.fillRect(0,0,a.width,a.height),e.background=new l["e"](a)}if(r){var c=new l["g"];c.setPath("statics/cubemaps/"+r+"/");var s=c.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);e.background=s,p(!0)}}function g(){h.initialize(),u["a"].disposeMiddleground();var e=u["a"].getActiveModel();if(e.three.middleground=new l["G"],null==e.three.background){e.three.background=new l["G"],e.three.background.background=new l["f"](.75,.75,.75);var t=m["a"].createGrid();e.threeGrid=t,e.three.background.add(t)}e.three.setBackground=f}function v(){console.log("Building Scene"),g();for(var e=u["a"].getActiveModel(),t=e.rhinoDoc,n=t.objects(),r=function(r){var a=n.get(r);if(null==a)return"continue";var o=a.geometry(),i=a.attributes();if(i.isInstanceDefinitionObject)return"continue";var c=t.layers().get(i.layerIndex),s=c.fullPath.split("::")[0];e.threeObjectsOnLayer[s]||(e.threeObjectsOnLayer[s]=[]);var d=i.drawColor(t),u=m["a"].createThreeGeometry(o,d,t);u.forEach((function(t){var n=t[0],r=t[1];if(r){var a=new l["L"](r.min[0],r.min[1],r.min[2]),o=new l["L"](r.max[0],r.max[1],r.max[2]);n.boundingBox=new l["a"](a,o),r.delete()}e.three.middleground.add(n),e.threeObjectsOnLayer[s].push(n)})),a.delete(),o.delete(),i.delete()},a=0;a<n.count;a++)r(a);n.delete(),u["a"].updateVisibility(),h.zoomExtents(!0),p()}var w={data:function(){var e=u["a"].viewModel();return{panMode:!1,viewmodel:e}},props:{url:{type:String,default:""}},created:function(){u["a"].addActiveDocChangedEventWatcher(v),this.viewmodel.onChangeCamera=this.updateCameraProjection},mounted:function(){this.$route.query&&this.$route.query["url"]&&(console.log("MOUNTED with "+this.$route.query["url"]),this.openURL(this.$route.query["url"])),console.log("MOUNTED")},watch:{$route:function(e,t){e.query["url"]&&this.openURL(e.query["url"]),console.log(e.query)}},methods:{openURL:function(e){fetch(e).then(function(){var t=s()(i.a.mark((function t(n){var r,a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.arrayBuffer();case 2:r=t.sent,a=new Uint8Array(r),u["a"].openFile(e,a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},updateCameraProjection:function(){h.zoomExtents(!0),this.setLeftButtonMode()},zoomExtents:function(){h.zoomExtents(!0)},togglePan:function(){this.panMode=!this.panMode,this.setLeftButtonMode()},setProjection:function(e){this.viewmodel.perspectiveCamera!==e&&(this.viewmodel.perspectiveCamera=e,this.updateCameraProjection(),this.zoomExtents())},setLeftButtonMode:function(){this.panMode||!this.viewmodel.perspectiveCamera?(h.controls.mouseButtons.LEFT=l["t"].PAN,h.controls.touches.ONE=l["I"].PAN):(h.controls.mouseButtons.LEFT=l["t"].ROTATE,h.controls.touches.ONE=l["I"].ROTATE)}}},x=w,b=n("2877"),y=n("eebe"),P=n.n(y),E=n("9989"),C=n("f09f"),M=n("068f"),j=n("a370"),k=n("de5e"),q=n("c294"),z=n("72db"),L=n("05c0"),B=n("9c40"),A=Object(b["a"])(x,r,a,!1,null,null,null);t["default"]=A.exports;P()(A,"components",{QPage:E["a"],QCard:C["a"],QImg:M["a"],QCardSection:j["a"],QPageSticky:k["a"],QFab:q["a"],QFabAction:z["a"],QTooltip:L["a"],QBtn:B["a"]})}}]);