(this.webpackJsonpyesnewsweb=this.webpackJsonpyesnewsweb||[]).push([[0],{41:function(e,t){var a="https://portal.yamaha-motor.co.th/api";e.exports={api:{news:{search:"".concat(a,"/news/search"),query:"".concat(a,"/news/query"),updateNewsUserAccess:"".concat(a,"/news/updateNewsUserAccess"),getDepartments:"".concat(a,"/news/getDepartments")}}}},45:function(e,t,a){e.exports=a(99)},50:function(e,t,a){},76:function(e,t){},94:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),o=a.n(r),i=(a(50),a(2)),s=a(3),l=a(7),u=a(6),m=a(42),h=a(9),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,this.props.children)}}]),a}(n.Component),d=(n.Component,function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"About Us"))}}]),a}(n.Component)),f=a(17),g=a.n(f),v=a(20),b=a(39),w=a(40),j=a.n(w),O=a(41),E=a.n(O),y=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"fetchJSON",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return console.log(e,a),fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t||"")},body:JSON.stringify(a)}).then((function(e){return e.json()}))}},{key:"setAPIToken",value:function(e){this._apiToken=e}}]),e}(),k=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getFormattedDate",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}}]),e}(),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.fetchJSON(E.a.api.news.query,n.props.match.params.auth,{id:n.props.match.params.id}).then((function(e){if(console.log(e.data),e.data){var t=[],a=[],c=/(?:\.([^.]+))?$/;e.data.attachmentList.map((function(e){switch(c.exec(e.url)[1]){case"jpg":case"jpeg":case"png":case"gif":t.push(Object(v.a)(Object(v.a)({},e),{},{source:{uri:e.url}}));break;default:a.push(e)}})),n.setState({detail:e.data.detail,imageList:t,attachmentList:a})}else console.log("error!!!")})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),n.state={detail:[],imageList:[],attachmentList:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.detail,t=e.date,a=e.detail,n=e.image,r=e.postedBy,o=e.title;return c.a.createElement("div",null,c.a.createElement("img",{src:n,alt:"Pic",width:"100%",height:"100%"}),c.a.createElement("div",{className:"content"},c.a.createElement("strong",null,o),c.a.createElement("div",null,c.a.createElement("p",{className:"fontRed inline"}," ","Date: ".concat(k.getFormattedDate(t))),c.a.createElement("p",{className:"inline"},"| By: ",r)),c.a.createElement("div",null,j()(a)),this.state.imageList.length>0&&c.a.createElement("div",{style:{flexDirection:"row",flexWrap:"wrap",paddingTop:8,paddingRight:8,paddingLeft:16}},this.state.imageList.map((function(e,t){return c.a.createElement("img",{src:e.url,alt:"Pic",width:"100%"})}))),this.state.attachmentList.length>0&&c.a.createElement("div",{className:"attachFile"},this.state.attachmentList.map((function(e){return c.a.createElement("p",{className:"fontAttachFile"},c.a.createElement("a",{className:"fontRed",href:e.url},e.name))})))))}}]),a}(n.Component),L=(a(94),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"body"},c.a.createElement(m.a,{basename:"/yesnewsweb"},c.a.createElement(h.c,null,c.a.createElement(p,null,c.a.createElement(h.a,{path:"/about",component:d}),c.a.createElement(h.a,{exact:!0,path:"/:id/:auth",component:N})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.6d279d0a.chunk.js.map