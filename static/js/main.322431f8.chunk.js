(this.webpackJsonpyesnewsweb=this.webpackJsonpyesnewsweb||[]).push([[0],{110:function(e,t){},128:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=(a(81),a(7)),i=a(8),s=a(14),d=a(13),u=a(62),h=a(22),m=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.children)}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"YES NEWS"))}}]),a}(n.Component),b=a(64),p=a(35),f=a(146),v=a(151),w=a(149),y=a(147),E=a(145),A=a(148),O=a(29),k=a(59),C=a.n(k),I=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.keyPress=n.keyPress.bind(Object(O.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.onChangeText(e.target.value)}},{key:"keyPress",value:function(e){13===e.keyCode&&this.props.onSearch(e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{backgroundColor:"#eb1c24"}},r.a.createElement("form",{id:"frm",style:{flex:1,padding:5}},r.a.createElement("input",{style:{width:"100%",height:44,borderWidth:1,borderColor:"#dfdfdf",paddingLeft:4,paddingRight:4,borderRadius:4,backgroundColor:"#ffffff"},type:"text",placeholder:this.props.placeholder,value:this.props.keyword,onChange:this.handleChange,onKeyDown:this.keyPress})),r.a.createElement("div",{style:{width:50,position:"absolute",right:10,top:7}},r.a.createElement("button",{style:{backgroundColor:"transparent",border:0,margin:0},onClick:function(){return e.props.onSearch(e.props.keyword)}},r.a.createElement("img",{src:C.a,alt:"pic",width:"30px"}))))}}]),a}(n.Component);function S(e){var t=e.children,a=e.value,n=e.index,o=Object(p.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},o),a===n&&r.a.createElement(A.a,{p:3},r.a.createElement(E.a,null,t)))}function j(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var x=Object(f.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},tabsIndicator:{backgroundColor:"red"},tabRoot:{"&:hover":{color:"red",opacity:1},"&$tabSelected":{color:"red"},"&:focus":{color:"red"}},tabSelected:{}});function B(){var e=x(),t=r.a.useState(0),a=Object(b.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{position:"static",color:"default",style:{backgroundColor:"transparent",color:"#fff",border:0}},r.a.createElement(w.a,{value:n,onChange:function(e,t){console.log(t),o(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},r.a.createElement(y.a,Object.assign({classes:{root:e.tabRoot,selected:e.tabSelected},label:"Item One ".concat(n)},j(0))),r.a.createElement(y.a,Object.assign({label:"Item Two"},j(1))),r.a.createElement(y.a,Object.assign({label:"Item Three"},j(2))),r.a.createElement(y.a,Object.assign({label:"Item Four"},j(3))),r.a.createElement(y.a,Object.assign({label:"Item Five"},j(4))),r.a.createElement(y.a,Object.assign({label:"Item Six"},j(5))),r.a.createElement(y.a,Object.assign({label:"Item Seven"},j(6))),r.a.createElement(y.a,Object.assign({label:"Item Seven"},j(7))),r.a.createElement(y.a,Object.assign({label:"Item Seven"},j(8))))),r.a.createElement(S,{value:n,index:n},"Item ",r.a.createElement("p",null,n)))}var L=a(26),T=a.n(L),G=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"fetchJSON",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return console.log(e,a,t),fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t||"")},body:JSON.stringify(a)}).then((function(e){return e.json()}))}},{key:"setAPIToken",value:function(e){this._apiToken=e}}]),e}(),N=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getFormattedDate",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}}]),e}(),P="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJuaXJhbmQiLCJpYXQiOjE1ODgyNTg3MzB9.XGQmtTbHtcYdLd0FWnOlUJEsupww9lesbDZ1qULvDY0";var D=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState({currentTabIndex:t},(function(){n.handleSearch(n.state.keyword)}))},n.renderRedirect=function(e){n.props.history.push("/newsdetails/".concat(e,"/").concat(P))},n.handleChangeText=function(e){console.log(e),n.setState({keyword:e})},n.handleSearch=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.setState({resultText:""}),G.fetchJSON(T.a.api.news.search,P,{q:e,d:n.state.newsTypeList[n.state.currentTabIndex].id,p:t?n.state.currentPage+1:0}).then((function(e){console.log("news==>",e),e.data?t?n.setState({news:n.state.news.concat(e.data),currentPage:e.data.length>0?n.state.currentPage+1:n.state.currentPage,showMore:e.data.length>=10}):n.setState({news:e.data,currentPage:0,showMore:e.data.length>=10,resultText:e.data.length>0?"":"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"}):console.log("error")})).catch((function(e){n.setState({news:[],currentPage:0,showMore:!1,resultText:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"})}))},n.state={keyword:"",newsTypeList:[],currentTabIndex:0,currentPage:0,news:[],showMore:!1,resultText:"",value:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:R.wrapperDiv},r.a.createElement(I,{keyword:this.state.keyword,onChangeText:this.handleChangeText,onSearch:this.handleSearch,placeholder:"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d \u0e2b\u0e23\u0e37\u0e2d \u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e02\u0e48\u0e32\u0e27"}),this.state.newsTypeList.length>0&&r.a.createElement("div",{className:"space-bottom"},r.a.createElement(v.a,{position:"static",color:"default",style:{backgroundColor:"#000",color:"#fff",clear:"both"}},r.a.createElement(w.a,{value:this.state.currentTabIndex,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},this.state.newsTypeList.map((function(t){return r.a.createElement(y.a,Object.assign({style:{color:"#efefef"},label:"".concat(t.name)},(a=e.state.currentTabIndex,{id:"scrollable-auto-tab-".concat(a),"aria-controls":"scrollable-auto-tabpanel-".concat(a)})));var a}))))),0===this.state.news.length&&r.a.createElement("h3",{style:{marginTop:8,color:"#262626",fontWeight:"bold",textAlign:"center",fontSize:14}},this.state.resultText),this.state.news.map((function(t){return r.a.createElement("div",{key:t.id,style:{marginBottom:8,backgroundColor:"#ffffff",borderRadius:2},onClick:function(){t.isRead||G.fetchJSON(T.a.api.news.updateNewsUserAccess,{id:t.id}).then((function(e){})),t.url?window.open(t.url,"_blank"):e.renderRedirect(t.id)}},(t.image||!t.isRead)&&r.a.createElement("div",{style:{width:"100%",height:"auto"}},t.image&&r.a.createElement("img",{src:t.image,alt:"Pic",width:"100%"}),!t.isRead&&r.a.createElement("div",{style:{height:32,backgroundColor:"#eb1c24",opacity:.7,bottom:0,width:"100%",textAlign:"center"}},r.a.createElement("label",{style:{color:"#ffffff",fontWeight:"bold",fontSize:14}},"NEW"))),r.a.createElement("div",{style:{paddingLeft:16,paddingTop:8,paddingBottom:8}},r.a.createElement("label",{style:{fontSize:18,fontWeight:"bold"}},t.title)),r.a.createElement("div",{style:{paddingLeft:16,paddingBottom:8}},r.a.createElement("label",{style:{fontSize:12,color:"#eb1c24"}},"Date: ".concat(N.getFormattedDate(t.date))),r.a.createElement("label",{style:{fontSize:12}}," | By: ".concat(t.postedBy))))})),this.state.showMore&&r.a.createElement("button",{style:{width:"100%",paddingVertical:8,alignItems:"center",marginBottom:8,backgroundColor:"#eb1c24",borderColor:"#70130a",borderWidth:1},onClick:function(){e.handleSearch(e.state.keyword,!0)}},r.a.createElement("label",{style:{paddingLeft:2,paddingBottom:4,fontWeight:"bold",fontSize:14,color:"#fff"}},"\u0e41\u0e2a\u0e14\u0e07\u0e02\u0e48\u0e32\u0e27\u0e40\u0e1e\u0e34\u0e48\u0e21")))}},{key:"getData",value:function(){var e=this;G.fetchJSON(T.a.api.news.getDepartments,P,{}).then((function(t){t.data?e.setState({newsTypeList:t.data},(function(){e.handleSearch(e.state.keyword)})):console.log("error!!!")})).catch((function(e){console.log(e)}))}}]),a}(n.Component),R={wrapperDiv:{backgroundColor:"#dfdfdf",paddingLeft:8,paddingRight:8}},Y=a(39),Q=a.n(Y),U=a(42),M=a(60),W=a(61),q=a.n(W),F=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(M.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G.fetchJSON(T.a.api.news.query,n.props.match.params.auth,{id:n.props.match.params.id}).then((function(e){if(e.data){var t=[],a=[],r=/(?:\.([^.]+))?$/;e.data.attachmentList.map((function(e){switch(r.exec(e.url)[1]){case"jpg":case"jpeg":case"png":case"gif":t.push(Object(U.a)(Object(U.a)({},e),{},{source:{uri:e.url}}));break;default:a.push(e)}})),n.setState({detail:e.data.detail,imageList:t,attachmentList:a})}else console.log("error!!!")})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),n.state={detail:[],imageList:[],attachmentList:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.detail,t=e.date,a=e.detail,n=e.image,o=e.postedBy,c=e.title;return r.a.createElement("div",null,r.a.createElement("img",{src:n,alt:"Pic",width:"100%",height:"100%"}),r.a.createElement("div",{className:"content"},r.a.createElement("strong",null,c),r.a.createElement("div",null,r.a.createElement("p",{className:"fontRed inline"}," ","Date: ".concat(N.getFormattedDate(t))),r.a.createElement("p",{className:"inline"},"| By: ",o)),r.a.createElement("div",null,q()(a)),this.state.imageList.length>0&&r.a.createElement("div",{style:{flexDirection:"row",flexWrap:"wrap",paddingTop:8,paddingRight:8,paddingLeft:16}},this.state.imageList.map((function(e,t){return r.a.createElement("img",{src:e.url,alt:"Pic",width:"100%"})}))),this.state.attachmentList.length>0&&r.a.createElement("div",{className:"attachFile"},this.state.attachmentList.map((function(e){return r.a.createElement("p",{className:"fontAttachFile"},r.a.createElement("a",{className:"fontRed",href:e.url},e.name))})))))}}]),a}(n.Component),H=function(){return r.a.createElement("h1",null,"Not found")},z=(a(128),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"body"},r.a.createElement(u.a,{basename:"".concat("/yesnewsweb","/")},r.a.createElement(h.a,{render:function(e){var t=e.location;return r.a.createElement(m,{location:t},r.a.createElement(h.c,{location:t},r.a.createElement(h.a,{exact:!0,path:"/",component:g}),r.a.createElement(h.a,{path:"/about",component:B}),r.a.createElement(h.a,{exact:!0,path:"/news",component:D}),r.a.createElement(h.a,{exact:!0,path:"/newsdetails/:id/:auth",component:F}),r.a.createElement(h.a,{component:H})))}})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t){var a="https://portal.yamaha-motor.co.th/api";e.exports={api:{news:{search:"".concat(a,"/news/search"),query:"".concat(a,"/news/query"),updateNewsUserAccess:"".concat(a,"/news/updateNewsUserAccess"),getDepartments:"".concat(a,"/news/getDepartments")}}}},59:function(e,t){e.exports="data:image/png;base64,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"},76:function(e,t,a){e.exports=a(130)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.322431f8.chunk.js.map