(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center",attrs:{id:"cvs"}},[e.viewmodel.docExists?e._e():n("q-card",{attrs:{flat:""}},[n("q-img",{attrs:{alt:"rview",src:"statics/logo.png"}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("rview WIP")])])],1),e.viewmodel.docExists?n("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[n("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_up",direction:"up"},model:{value:e.expandSticky,callback:function(t){e.expandSticky=t},expression:"expandSticky"}},[n("q-fab-action",{attrs:{color:e.panMode?"secondary":"primary",icon:"pan_tool"},on:{click:function(t){return e.togglePan()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Pan\n        ")])],1),n("q-fab-action",{attrs:{color:"primary",icon:"zoom_out_map"},on:{click:function(t){return e.zoomExtents()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Zoom Extents\n        ")])],1),e.viewmodel.perspectiveCamera?n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/3D.svg"},on:{click:function(t){return e.setProjection(!1)}}}):e._e(),e.viewmodel.perspectiveCamera?e._e():n("q-fab-action",{attrs:{color:"primary",icon:"img:statics/icons/2D.svg"},on:{click:function(t){return e.setProjection(!0)}}})],1)],1):e._e(),e.panMode?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Pan Mode","icon-right":"close"},on:{click:function(t){return e.togglePan()}}})],1):e._e()],1)},o=[],a=(n("63d9"),n("28a5"),n("5a89")),r=n("4721"),s=n("1bee"),c=n("17c8"),d={renderer:null,camera:null,controls:null,initialize:function(){if(null==this.renderer){a["q"].DefaultUp=new a["A"](0,0,1),this.renderer=new a["B"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight);var e=document.getElementById("cvs");e.appendChild(this.renderer.domElement),window.addEventListener("resize",(function(){return l(!0)}),!1),this.camera=new a["s"](30,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=40,this.controls=new r["a"](this.camera,this.renderer.domElement),this.controls.screenSpacePanning=!0}},toPerspectiveCamera:function(){var e=s["a"].viewModel();e.perspectiveCamera=!0,this.zoomExtents(!0)},toParallelCamera:function(){var e=s["a"].viewModel();e.perspectiveCamera=!1,this.zoomExtents(!0)},zoomExtents:function(e){var t=s["a"].getRhino3dm(),n=s["a"].visibleObjectsBoundingBox(),i=new t.BoundingBox(n.min.x,n.min.y,n.min.z,n.max.x,n.max.y,n.max.z),o=new t.ViewportInfo;o.isPerspectiveProjection=s["a"].viewModel().perspectiveCamera;var r=new a["z"](0,0);d.renderer.getSize(r),o.screenPort=[0,0,r.x,r.y];var c=0;s["a"].viewModel().perspectiveCamera?o.setCameraLocation([30,-50,15]):c=.05*(i.max[0]-i.min[0]);var l=i.max[0]-i.min[0],m=l*r.y/r.x;if(o.setFrustum(-l/2,l/2,-m/2,m/2,.1,1e3),o.dollyExtents(i,c),i.delete(),e){s["a"].getActiveDoc().threeScene.remove(this.camera);var u=o.getFrustum();u.near>.1&&(u.near=.1),u.far<1e3&&(u.far=1e3),o.setFrustum(u.left,u.right,u.bottom,u.top,u.near,u.far),s["a"].viewModel().perspectiveCamera?this.camera=new a["s"](30,window.innerWidth/window.innerHeight,1,1e3):(u=o.getFrustum(),this.camera=new a["r"](u.left,u.right,u.top,u.bottom,u.near,u.far),this.camera.up.set(o.cameraUp[0],o.cameraUp[1],o.cameraUp[2])),this.controls.object=this.camera;var p=new a["f"](15658734);p.position.set(0,0,1),this.camera.add(p),s["a"].getActiveDoc().threeScene.add(this.camera)}var h=o.cameraLocation;this.camera.position.x=h[0],this.camera.position.y=h[1],this.camera.position.z=h[2],this.camera.updateProjectionMatrix(),this.controls.target.set(0,0,0),o.delete()}},l=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(d.camera.aspect=window.innerWidth/window.innerHeight,d.camera.updateProjectionMatrix(),d.renderer.setSize(window.innerWidth,window.innerHeight)),requestAnimationFrame(e),d.controls.update();var n=s["a"].getActiveDoc();d.renderer.render(n.threeScene,d.camera)};function m(){d.initialize();var e=s["a"].getActiveDoc();e.threeScene&&e.threeScene.dispose(),e.threeScene=new a["w"],e.threeScene.background=new a["e"](.75,.75,.75);var t=c["a"].createGrid();e.threeGrid=t,e.threeScene.add(t)}function u(e,t){var n=new a["d"],i=n.parse(e.toThreejsJSON());0===t.r&&0===t.g&&0===t.b&&(t.r=255,t.g=255,t.b=255);var o=new a["e"](t.r/255,t.g/255,t.b/255),r=new a["p"]({color:o,side:a["g"]});return new a["o"](i,r)}function p(){console.log("Building Scene"),m();for(var e=s["a"].getRhino3dm(),t=s["a"].getActiveDoc(),n=t.rhinoDoc,i=n.objects(),o=function(o){var r=i.get(o);if(null==r)return"continue";var s=r.geometry(),c=r.attributes(),d=n.layers().get(c.layerIndex),l=d.fullPath.split("::")[0];t.threeObjectsOnLayer[l]||(t.threeObjectsOnLayer[l]=[]);var m=c.drawColor(n),p=[];if(s instanceof e.Mesh){var h=u(s,m);p.push([h,s.getBoundingBox()])}if(s instanceof e.Brep){for(var v=s.faces(),w=0;w<v.count;w++){var f=v.get(w),g=f.getMesh(e.MeshType.Any);if(g){var x=u(g,m);p.push([x,g.getBoundingBox()]),g.delete()}f.delete()}v.delete()}if(s instanceof e.Curve){var b=21;s instanceof e.LineCurve?b=2:s instanceof e.PolylineCurve&&(b=s.pointCount);for(var y=new a["c"],C=new Float32Array(3*b),P=s.domain,E=b-1,B=0;B<b;B++){var M=P[0]+B/E*(P[1]-P[0]),S=s.pointAt(M);C[3*B]=S[0],C[3*B+1]=S[1],C[3*B+2]=S[2]}y.setAttribute("position",new a["b"](C,3));var z=new a["e"](m.r/255,m.g/255,m.b/255),A=new a["l"]({color:z}),k=new a["k"](y,A);p.push([k,s.getBoundingBox()])}if(s instanceof e.Point){var j=new a["u"]({color:m}),q=new a["i"],_=s.location;q.vertices.push(new a["A"](_[0],_[1],_[2])),p.push([new a["t"](q,j),s.getBoundingBox()])}p.forEach((function(e){var n=e[0],i=e[1],o=new a["A"](i.min[0],i.min[1],i.min[2]),r=new a["A"](i.max[0],i.max[1],i.max[2]);n.boundingBox=new a["a"](o,r),i.delete(),t.threeScene.add(n),t.threeObjectsOnLayer[l].push(n)})),r.delete(),s.delete(),c.delete()},r=0;r<i.count;r++)o(r);i.delete(),s["a"].updateVisibility(),d.zoomExtents(!0),l()}var h={data:function(){var e=s["a"].viewModel();return{expandSticky:!1,panMode:!1,viewmodel:e}},created:function(){s["a"].addActiveDocChangedEventWatcher(p),this.viewmodel.onChangeCamera=this.updateCameraProjection},methods:{updateCameraProjection:function(){this.viewmodel.perspectiveCamera?d.toPerspectiveCamera():d.toParallelCamera(),this.setLeftButtonMode()},zoomExtents:function(){d.zoomExtents(!0)},togglePan:function(){this.panMode=!this.panMode,this.setLeftButtonMode()},setProjection:function(e){this.viewmodel.perspectiveCamera!==e&&(this.viewmodel.perspectiveCamera=e,this.updateCameraProjection(),this.zoomExtents())},setLeftButtonMode:function(){this.panMode||!this.viewmodel.perspectiveCamera?(d.controls.mouseButtons.LEFT=a["n"].PAN,d.controls.touches.ONE=a["y"].PAN):(d.controls.mouseButtons.LEFT=a["n"].ROTATE,d.controls.touches.ONE=a["y"].ROTATE)}}},v=h,w=n("2877"),f=n("eebe"),g=n.n(f),x=n("9989"),b=n("f09f"),y=n("068f"),C=n("a370"),P=n("de5e"),E=n("c294"),B=n("72db"),M=n("05c0"),S=n("9c40"),z=Object(w["a"])(v,i,o,!1,null,null,null);t["default"]=z.exports;g()(z,"components",{QPage:x["a"],QCard:b["a"],QImg:y["a"],QCardSection:C["a"],QPageSticky:P["a"],QFab:E["a"],QFabAction:B["a"],QTooltip:M["a"],QBtn:S["a"]})}}]);