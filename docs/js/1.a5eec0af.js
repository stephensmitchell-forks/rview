(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center",attrs:{id:"canvasParent"}},[e.viewmodel.docExists?e._e():n("q-card",{attrs:{flat:""}},[n("q-img",{attrs:{alt:"rview",src:"statics/logo.png"}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("rview WIP")])])],1),e.viewmodel.docExists?n("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[n("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_up",direction:"up"}},[n("q-fab-action",{attrs:{color:e.panMode?"secondary":"primary",icon:"pan_tool"},on:{click:function(t){return e.togglePan()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Pan\n        ")])],1),n("q-fab-action",{attrs:{color:"primary",icon:"zoom_out_map"},on:{click:function(t){return e.zoomExtents()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Zoom Extents\n        ")])],1),e.viewmodel.perspectiveCamera?n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/3D.svg"},on:{click:function(t){return e.setProjection(!1)}}}):e._e(),e.viewmodel.perspectiveCamera?e._e():n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/2D.svg"},on:{click:function(t){return e.setProjection(!0)}}})],1)],1):e._e(),e.panMode?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Pan Mode","icon-right":"close"},on:{click:function(t){return e.togglePan()}}})],1):e._e()],1)},r=[],o=n("967e"),i=n.n(o),s=(n("34ef"),n("96cf"),n("fa84")),c=n.n(s),d=(n("7f7f"),n("28a5"),n("5a89")),l=n("4721"),u=n("1bee"),m=n("17c8"),h=n("32d9"),p=n("ba3e"),f={renderer:null,camera:null,controls:null,effectComposer:null,ssaoPass:null,initialize:function(){if(null==this.renderer){d["N"].DefaultUp=new d["eb"](0,0,1),this.renderer=new d["hb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);var e=document.getElementById("canvasParent");this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),window.addEventListener("resize",(function(){return g(!0)}),!1),this.camera=new d["P"](30,e.clientWidth/e.clientHeight,1,1e3),this.camera.position.z=40,this.controls=new l["a"](this.camera,this.renderer.domElement),this.controls.screenSpacePanning=!0}},zoomExtents:function(e){var t=u["a"].getRhino3dm(),n=u["a"].viewModel().perspectiveCamera?t.ViewportInfo.defaultPerspective():t.ViewportInfo.defaultTop(),a=new d["db"](0,0);f.renderer.getSize(a),n.screenPort=[0,0,a.x,a.y];var r=u["a"].visibleObjectsBoundingBox(),o=new t.BoundingBox(r.min.x,r.min.y,r.min.z,r.max.x,r.max.y,r.max.z),i=o.center,s=o.max[0]-o.min[0],c=o.max[1]-o.min[1],l=o.max[2]-o.min[2];o.inflate(.2*s,.2*c,.2*l);var m=s,h=m*a.y/a.x;if(n.setFrustum(-m/2,m/2,-h/2,h/2,.1,1e3),n.extents(50*Math.PI/180,o),o.delete(),e){u["a"].getActiveModel().three.middleground.remove(this.camera);var p=n.getFrustum();u["a"].viewModel().perspectiveCamera?this.camera=new d["P"](30,a.x/a.y,1,1e3):(this.camera=new d["O"](p.left,p.right,p.top,p.bottom,p.near,p.far),this.camera.up.set(n.cameraUp[0],n.cameraUp[1],n.cameraUp[2])),this.controls.object=this.camera;var g=new d["m"](u["a"].viewModel().lightColor);g.position.set(0,0,1),u["a"].getActiveModel().cameraLight=g,this.camera.add(g),u["a"].getActiveModel().three.middleground.add(this.camera)}var v=n.cameraLocation;this.camera.position.set(v[0],v[1],v[2]),this.camera.updateProjectionMatrix(),this.controls.target.set(i[0],i[1],i[2]),n.delete()},enableSSAO:function(e){if(this.effectComposer)this.effectComposer.passes[0].enabled=e;else if(e){this.effectComposer=new h["a"](this.renderer);var t=u["a"].getActiveModel(),n=document.getElementById("canvasParent");this.ssaoPass=new p["a"](t.three.middleground,this.camera,n.clientWidth,n.clientHeight),this.ssaoPass.kernelRadius=18,this.ssaoPass.minDistance=.002,this.ssaoPass.maxDistance=.2,this.ssaoPass.output=p["a"].OUTPUT.SSAO,this.effectComposer.addPass(this.ssaoPass)}}},g=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t||f.effectComposer){var n=document.getElementById("canvasParent");f.camera.aspect=n.clientWidth/n.clientHeight,f.camera.updateProjectionMatrix(),f.renderer.setSize(n.clientWidth,n.clientHeight),f.effectComposer&&f.effectComposer.setSize(n.clientWidth,n.clientHeight)}requestAnimationFrame(e),f.controls.update();var a=u["a"].getActiveModel();f.renderer.autoClear=!1,f.renderer.sortObjects=!1,f.renderer.render(a.three.background,f.camera),f.renderer.sortObjects=!0,f.effectComposer&&f.effectComposer.passes[0].enabled?f.effectComposer.render():f.renderer.render(a.three.middleground,f.camera)};function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(n||a||(e.background=new d["h"](t)),t&&n){var r=document.createElement("canvas");r.width=128,r.height=128;var o=r.getContext("2d"),i=o.createLinearGradient(0,0,0,r.height);i.addColorStop(1,n),i.addColorStop(.1,t),o.fillStyle=i,o.fillRect(0,0,r.width,r.height),e.background=new d["f"](r)}if(a){var s=new d["i"];s.setPath("statics/cubemaps/"+a+"/");var c=s.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);e.background=c,g(!0)}}function w(){f.initialize(),u["a"].disposeMiddleground();var e=u["a"].getActiveModel();if(e.three.middleground=new d["W"],null==e.three.background){e.three.background=new d["W"],e.three.background.background=new d["h"](.75,.75,.75);var t=m["a"].createGrid();e.threeGrid=t,e.three.background.add(t)}e.three.setBackground=v}function b(){console.log("Building Scene"),w();for(var e=u["a"].getActiveModel(),t=e.rhinoDoc,n=t.objects(),a=function(a){var r=n.get(a);if(null==r)return"continue";var o=r.geometry(),i=r.attributes();if(i.isInstanceDefinitionObject)return"continue";var s=t.layers().get(i.layerIndex),c=s.fullPath.split("::")[0];e.threeObjectsOnLayer[c]||(e.threeObjectsOnLayer[c]=[]);var l=i.drawColor(t),u=m["a"].createThreeGeometry(o,l,t);u.forEach((function(t){var n=t[0],a=t[1];if(a){var r=new d["eb"](a.min[0],a.min[1],a.min[2]),o=new d["eb"](a.max[0],a.max[1],a.max[2]);n.boundingBox=new d["b"](r,o),a.delete()}e.three.middleground.add(n),e.threeObjectsOnLayer[c].push(n)})),r.delete(),o.delete(),i.delete()},r=0;r<n.count;r++)a(r);n.delete(),u["a"].updateVisibility(),f.zoomExtents(!0),g()}function x(){var e="Arctic"===u["a"].viewModel().displayMode.name;f.enableSSAO(e)}var y={data:function(){var e=u["a"].viewModel();return{panMode:!1,viewmodel:e}},props:{url:{type:String,default:""}},created:function(){u["a"].addActiveDocChangedEventWatcher(b),u["a"].addDisplayModeChangedEventWatcher(x),this.viewmodel.onChangeCamera=this.updateCameraProjection},mounted:function(){this.$route.query&&this.$route.query["url"]&&(console.log("MOUNTED with "+this.$route.query["url"]),this.openURL(this.$route.query["url"])),console.log("MOUNTED")},watch:{$route:function(e,t){e.query["url"]&&this.openURL(e.query["url"]),console.log(e.query)}},methods:{openURL:function(e){fetch(e).then(function(){var t=c()(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.arrayBuffer();case 2:a=t.sent,r=new Uint8Array(a),u["a"].openFile(e,r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},updateCameraProjection:function(){f.zoomExtents(!0),this.setLeftButtonMode()},zoomExtents:function(){f.zoomExtents(!0)},togglePan:function(){this.panMode=!this.panMode,this.setLeftButtonMode()},setProjection:function(e){this.viewmodel.perspectiveCamera!==e&&(this.viewmodel.perspectiveCamera=e,this.updateCameraProjection(),this.zoomExtents())},setLeftButtonMode:function(){this.panMode||!this.viewmodel.perspectiveCamera?(f.controls.mouseButtons.LEFT=d["C"].PAN,f.controls.touches.ONE=d["Z"].PAN):(f.controls.mouseButtons.LEFT=d["C"].ROTATE,f.controls.touches.ONE=d["Z"].ROTATE)}}},P=y,C=n("2877"),M=n("eebe"),E=n.n(M),j=n("9989"),k=n("f09f"),q=n("068f"),O=n("a370"),z=n("de5e"),A=n("c294"),S=n("72db"),B=n("05c0"),L=n("9c40"),_=Object(C["a"])(P,a,r,!1,null,null,null);t["default"]=_.exports;E()(_,"components",{QPage:j["a"],QCard:k["a"],QImg:q["a"],QCardSection:O["a"],QPageSticky:z["a"],QFab:A["a"],QFabAction:S["a"],QTooltip:B["a"],QBtn:L["a"]})}}]);