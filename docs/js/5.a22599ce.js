(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center",attrs:{id:"cvs"}},[e.viewmodel.docExists?e._e():n("q-card",{attrs:{flat:""}},[n("q-img",{attrs:{alt:"rview",src:"statics/logo.png"}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("rview WIP")])])],1),e.viewmodel.docExists?n("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[n("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_up",direction:"up"},model:{value:e.expandSticky,callback:function(t){e.expandSticky=t},expression:"expandSticky"}},[n("q-fab-action",{attrs:{color:e.panMode?"secondary":"primary",icon:"pan_tool"},on:{click:function(t){return e.togglePan()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Pan\n        ")])],1),n("q-fab-action",{attrs:{color:"primary",icon:"zoom_out_map"},on:{click:function(t){return e.zoomExtents()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Zoom Extents\n        ")])],1)],1)],1):e._e(),e.panMode?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Pan Mode","icon-right":"close"},on:{click:function(t){return e.togglePan()}}})],1):e._e()],1)},a=[],o=(n("63d9"),n("28a5"),n("5a89")),r=n("4721"),s=n("1bee"),c={renderer:null,camera:null,controls:null,initialize:function(){if(null==this.renderer){o["o"].DefaultUp=new o["y"](0,0,1),this.renderer=new o["z"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight);var e=document.getElementById("cvs");e.appendChild(this.renderer.domElement),window.addEventListener("resize",(function(){return d(!0)}),!1),this.camera=new o["q"](30,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=40,this.controls=new r["a"](this.camera,this.renderer.domElement),this.controls.screenSpacePanning=!0}},toPerspectiveCamera:function(){var e=s["a"].viewModel();e.perspectiveCamera=!0,this.zoomExtents(!0)},toParallelCamera:function(){var e=s["a"].viewModel();e.perspectiveCamera=!1,this.zoomExtents(!0)},zoomExtents:function(e){var t=s["a"].getRhino3dm(),n=s["a"].visibleObjectsBoundingBox2(),i=new t.BoundingBox(n.min.x,n.min.y,n.min.z,n.max.x,n.max.y,n.max.z),a=new t.ViewportInfo;a.isPerspectiveProjection=s["a"].viewModel().perspectiveCamera;var r=new o["x"](0,0);c.renderer.getSize(r),a.screenPort=[0,0,r.x,r.y];var d=0;s["a"].viewModel().perspectiveCamera?a.setCameraLocation([40,-40,40]):d=.05*(i.max[0]-i.min[0]);var l=i.max[0]-i.min[0],m=l*r.y/r.x;if(a.setFrustum(-l/2,l/2,-m/2,m/2,.1,1e3),a.dollyExtents(i,d),i.delete(),e){s["a"].getActiveDoc().threeScene.remove(this.camera);var u=a.getFrustum();u.near>.1&&(u.near=.1),u.far<1e3&&(u.far=1e3),a.setFrustum(u.left,u.right,u.bottom,u.top,u.near,u.far),s["a"].viewModel().perspectiveCamera?this.camera=new o["q"](30,window.innerWidth/window.innerHeight,1,1e3):(u=a.getFrustum(),this.camera=new o["p"](u.left,u.right,u.top,u.bottom,u.near,u.far),this.camera.up.set(a.cameraUp[0],a.cameraUp[1],a.cameraUp[2])),this.controls.object=this.camera;var p=new o["f"](14277081);p.position.set(0,0,1),this.camera.add(p),s["a"].getActiveDoc().threeScene.add(this.camera)}var h=a.cameraLocation;this.camera.position.x=h[0],this.camera.position.y=h[1],this.camera.position.z=h[2],this.camera.updateProjectionMatrix(),this.controls.target.set(0,0,0),a.delete()}},d=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(c.camera.aspect=window.innerWidth/window.innerHeight,c.camera.updateProjectionMatrix(),c.renderer.setSize(window.innerWidth,window.innerHeight)),requestAnimationFrame(e),c.controls.update();var n=s["a"].getActiveDoc();c.renderer.render(n.threeScene,c.camera)};function l(){c.initialize();var e=s["a"].getActiveDoc();e.threeScene&&e.threeScene.dispose(),e.threeScene=new o["u"],e.threeScene.background=new o["e"](.9,.9,.9)}function m(e,t){var n=new o["d"],i=n.parse(e.toThreejsJSON());0===t.r&&0===t.g&&0===t.b&&(t.r=255,t.g=255,t.b=255);var a=new o["e"](t.r/255,t.g/255,t.b/255),r=new o["n"]({color:a,side:o["g"]});return new o["m"](i,r)}function u(){console.log("Building Scene"),l();for(var e=s["a"].getRhino3dm(),t=s["a"].getActiveDoc(),n=t.rhinoDoc,i=n.objects(),a=function(a){var r=i.get(a);if(null==r)return"continue";var s=r.geometry(),c=r.attributes(),d=n.layers().get(c.layerIndex),l=d.fullPath.split("::")[0];t.threeObjectsOnLayer[l]||(t.threeObjectsOnLayer[l]=[]);var u=c.drawColor(n),p=[];if(s instanceof e.Mesh){var h=m(s,u);p.push([h,s.getBoundingBox()])}if(s instanceof e.Brep){for(var v=s.faces(),w=0;w<v.count;w++){var f=v.get(w),g=f.getMesh(e.MeshType.Any);if(g){var x=m(g,u);p.push([x,g.getBoundingBox()]),g.delete()}f.delete()}v.delete()}if(s instanceof e.Curve){var b=21;s instanceof e.LineCurve?b=2:s instanceof e.PolylineCurve&&(b=s.pointCount);for(var y=new o["c"],C=new Float32Array(3*b),P=s.domain,E=b-1,B=0;B<b;B++){var M=P[0]+B/E*(P[1]-P[0]),S=s.pointAt(M);C[3*B]=S[0],C[3*B+1]=S[1],C[3*B+2]=S[2]}y.setAttribute("position",new o["b"](C,3));var z=new o["e"](u.r/255,u.g/255,u.b/255),k=new o["k"]({color:z}),A=new o["j"](y,k);p.push([A,s.getBoundingBox()])}if(s instanceof e.Point){var q=new o["s"]({color:u}),j=new o["i"],O=s.location;j.vertices.push(new o["y"](O[0],O[1],O[2])),p.push([new o["r"](j,q),s.getBoundingBox()])}p.forEach((function(e){var n=e[0],i=e[1],a=new o["y"](i.min[0],i.min[1],i.min[2]),r=new o["y"](i.max[0],i.max[1],i.max[2]);n.boundingBox=new o["a"](a,r),i.delete(),t.threeScene.add(n),t.threeObjectsOnLayer[l].push(n)})),r.delete(),s.delete(),c.delete()},r=0;r<i.count;r++)a(r);i.delete(),s["a"].updateVisibility(),c.zoomExtents(!0),d()}var p={data:function(){var e=s["a"].viewModel();return{expandSticky:!1,panMode:!1,viewmodel:e}},created:function(){s["a"].addActiveDocChangedEventWatcher(u),this.viewmodel.onChangeCamera=this.updateCameraProjection},methods:{updateCameraProjection:function(){this.viewmodel.perspectiveCamera?c.toPerspectiveCamera():c.toParallelCamera(),this.setLeftButtonMode()},zoomExtents:function(){c.zoomExtents(!0)},togglePan:function(){this.panMode=!this.panMode,this.setLeftButtonMode()},setLeftButtonMode:function(){this.panMode||!this.viewmodel.perspectiveCamera?(c.controls.mouseButtons.LEFT=o["l"].PAN,c.controls.touches.ONE=o["w"].PAN):(c.controls.mouseButtons.LEFT=o["l"].ROTATE,c.controls.touches.ONE=o["w"].ROTATE)}}},h=p,v=n("2877"),w=n("eebe"),f=n.n(w),g=n("9989"),x=n("f09f"),b=n("068f"),y=n("a370"),C=n("de5e"),P=n("c294"),E=n("72db"),B=n("05c0"),M=n("9c40"),S=Object(v["a"])(h,i,a,!1,null,null,null);t["default"]=S.exports;f()(S,"components",{QPage:g["a"],QCard:x["a"],QImg:b["a"],QCardSection:y["a"],QPageSticky:C["a"],QFab:P["a"],QFabAction:E["a"],QTooltip:B["a"],QBtn:M["a"]})}}]);