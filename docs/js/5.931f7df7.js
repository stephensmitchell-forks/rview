(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center",attrs:{id:"cvs"}},[e.viewmodel.docExists?e._e():n("q-card",{attrs:{flat:""}},[n("q-img",{attrs:{alt:"rview",src:"statics/logo.png"}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("rview WIP")])])],1),e.viewmodel.docExists?n("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[n("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_up",direction:"up"},model:{value:e.expandSticky,callback:function(t){e.expandSticky=t},expression:"expandSticky"}},[n("q-fab-action",{attrs:{color:e.panMode?"secondary":"primary",icon:"pan_tool"},on:{click:function(t){return e.togglePan()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Pan\n        ")])],1),n("q-fab-action",{attrs:{color:"primary",icon:"zoom_out_map"},on:{click:function(t){return e.zoomExtents()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Zoom Extents\n        ")])],1),e.viewmodel.perspectiveCamera?n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/3D.svg"},on:{click:function(t){return e.setProjection(!1)}}}):e._e(),e.viewmodel.perspectiveCamera?e._e():n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/2D.svg"},on:{click:function(t){return e.setProjection(!0)}}})],1)],1):e._e(),e.panMode?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Pan Mode","icon-right":"close"},on:{click:function(t){return e.togglePan()}}})],1):e._e()],1)},o=[],a=(n("28a5"),n("5a89")),r=n("4721"),c=n("1bee"),s=n("17c8"),d={renderer:null,camera:null,controls:null,initialize:function(){if(null==this.renderer){a["q"].DefaultUp=new a["A"](0,0,1),this.renderer=new a["B"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight);var e=document.getElementById("cvs");e.appendChild(this.renderer.domElement),window.addEventListener("resize",(function(){return l(!0)}),!1),this.camera=new a["s"](30,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=40,this.controls=new r["a"](this.camera,this.renderer.domElement),this.controls.screenSpacePanning=!0}},toPerspectiveCamera:function(){var e=c["a"].viewModel();e.perspectiveCamera=!0,this.zoomExtents(!0)},toParallelCamera:function(){var e=c["a"].viewModel();e.perspectiveCamera=!1,this.zoomExtents(!0)},zoomExtents:function(e){var t=c["a"].getRhino3dm(),n=c["a"].visibleObjectsBoundingBox(),i=new t.BoundingBox(n.min.x,n.min.y,n.min.z,n.max.x,n.max.y,n.max.z),o=new t.ViewportInfo;o.isPerspectiveProjection=c["a"].viewModel().perspectiveCamera;var r=new a["z"](0,0);d.renderer.getSize(r),o.screenPort=[0,0,r.x,r.y];var s=0;c["a"].viewModel().perspectiveCamera?o.setCameraLocation([30,-50,15]):s=.05*(i.max[0]-i.min[0]);var l=i.max[0]-i.min[0],m=l*r.y/r.x;if(o.setFrustum(-l/2,l/2,-m/2,m/2,.1,1e3),o.dollyExtents(i,s),i.delete(),e){c["a"].getActiveDoc().threeScene.remove(this.camera);var u=o.getFrustum();u.near>.1&&(u.near=.1),u.far<1e3&&(u.far=1e3),o.setFrustum(u.left,u.right,u.bottom,u.top,u.near,u.far),c["a"].viewModel().perspectiveCamera?this.camera=new a["s"](30,window.innerWidth/window.innerHeight,1,1e3):(u=o.getFrustum(),this.camera=new a["r"](u.left,u.right,u.top,u.bottom,u.near,u.far),this.camera.up.set(o.cameraUp[0],o.cameraUp[1],o.cameraUp[2])),this.controls.object=this.camera;var p=new a["f"](15658734);p.position.set(0,0,1),this.camera.add(p),c["a"].getActiveDoc().threeScene.add(this.camera)}var h=o.cameraLocation;this.camera.position.x=h[0],this.camera.position.y=h[1],this.camera.position.z=h[2],this.camera.updateProjectionMatrix(),this.controls.target.set(0,0,0),o.delete()}},l=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(d.camera.aspect=window.innerWidth/window.innerHeight,d.camera.updateProjectionMatrix(),d.renderer.setSize(window.innerWidth,window.innerHeight)),requestAnimationFrame(e),d.controls.update();var n=c["a"].getActiveDoc();d.renderer.render(n.threeScene,d.camera)};function m(){d.initialize();var e=c["a"].getActiveDoc();e.threeScene&&e.threeScene.dispose(),e.threeScene=new a["w"],e.threeScene.background=new a["e"](.75,.75,.75);var t=s["a"].createGrid();e.threeGrid=t,e.threeScene.add(t)}function u(e,t){var n=new a["d"],i=n.parse(e.toThreejsJSON());0===t.r&&0===t.g&&0===t.b&&(t.r=255,t.g=255,t.b=255);var o=new a["e"](t.r/255,t.g/255,t.b/255),r=new a["p"]({color:o,side:a["g"]});return new a["o"](i,r)}function p(){console.log("Building Scene"),m();for(var e=c["a"].getRhino3dm(),t=c["a"].getActiveDoc(),n=t.rhinoDoc,i=n.objects(),o=function(o){var r=i.get(o);if(null==r)return"continue";var c=r.geometry(),d=r.attributes(),l=n.layers().get(d.layerIndex),m=l.fullPath.split("::")[0];t.threeObjectsOnLayer[m]||(t.threeObjectsOnLayer[m]=[]);var p=d.drawColor(n),h=[];if(c instanceof e.Mesh){var v=u(c,p);h.push([v,c.getBoundingBox()])}if(c instanceof e.Brep){for(var f=c.faces(),w=0;w<f.count;w++){var g=f.get(w),x=g.getMesh(e.MeshType.Any);if(x){var b=u(x,p);h.push([b,x.getBoundingBox()]),x.delete()}g.delete()}f.delete()}if(c instanceof e.Curve){var y=s["a"].curveToBufferGeometry(c,21),P=new a["e"](p.r/255,p.g/255,p.b/255),C=new a["l"]({color:P}),E=new a["k"](y,C);h.push([E,c.getBoundingBox()])}if(c instanceof e.Point){var B=new a["u"]({color:p}),M=new a["i"],S=c.location;M.vertices.push(new a["A"](S[0],S[1],S[2])),h.push([new a["t"](M,B),c.getBoundingBox()])}h.forEach((function(e){var n=e[0],i=e[1],o=new a["A"](i.min[0],i.min[1],i.min[2]),r=new a["A"](i.max[0],i.max[1],i.max[2]);n.boundingBox=new a["a"](o,r),i.delete(),t.threeScene.add(n),t.threeObjectsOnLayer[m].push(n)})),r.delete(),c.delete(),d.delete()},r=0;r<i.count;r++)o(r);i.delete(),c["a"].updateVisibility(),d.zoomExtents(!0),l()}var h={data:function(){var e=c["a"].viewModel();return{expandSticky:!1,panMode:!1,viewmodel:e}},created:function(){c["a"].addActiveDocChangedEventWatcher(p),this.viewmodel.onChangeCamera=this.updateCameraProjection},methods:{updateCameraProjection:function(){this.viewmodel.perspectiveCamera?d.toPerspectiveCamera():d.toParallelCamera(),this.setLeftButtonMode()},zoomExtents:function(){d.zoomExtents(!0)},togglePan:function(){this.panMode=!this.panMode,this.setLeftButtonMode()},setProjection:function(e){this.viewmodel.perspectiveCamera!==e&&(this.viewmodel.perspectiveCamera=e,this.updateCameraProjection(),this.zoomExtents())},setLeftButtonMode:function(){this.panMode||!this.viewmodel.perspectiveCamera?(d.controls.mouseButtons.LEFT=a["n"].PAN,d.controls.touches.ONE=a["y"].PAN):(d.controls.mouseButtons.LEFT=a["n"].ROTATE,d.controls.touches.ONE=a["y"].ROTATE)}}},v=h,f=n("2877"),w=n("eebe"),g=n.n(w),x=n("9989"),b=n("f09f"),y=n("068f"),P=n("a370"),C=n("de5e"),E=n("c294"),B=n("72db"),M=n("05c0"),S=n("9c40"),z=Object(f["a"])(v,i,o,!1,null,null,null);t["default"]=z.exports;g()(z,"components",{QPage:x["a"],QCard:b["a"],QImg:y["a"],QCardSection:P["a"],QPageSticky:C["a"],QFab:E["a"],QFabAction:B["a"],QTooltip:M["a"],QBtn:S["a"]})}}]);