(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=a(2),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/signature-list".concat("/");return e.startsWith("http")?e:t.concat(e)},l=function(e){return{type:"LOAD_DATA",isLoading:e}},o=function(e){return e.signaturePage.isLoading},m=function(e){return e.signaturePage.signatures},d=function(e){return e.signaturePage.title},E=function(e){return e.signaturePage.removalSignatureIds.length},g=function(e){return 0!==e.signaturePage.removalSignatureIds.length},_=a(3),f=a(19),v=a(9),b=function(e){var t=e.src,a=e.alt,n=Object(v.a)(e,["src","alt"]);return r.a.createElement("img",Object.assign({src:u(t),alt:a},n))};b.defaultProps={alt:""};var h=b,O=a(16),S=a(7),p={pencil:S.b,trash:S.d,eye:S.a,cross:S.c},N=function(e){var t=e.icon,a=(e.fontSize,Object(v.a)(e,["icon","fontSize"]));return r.a.createElement(O.a,Object.assign({},a,{icon:p[t]}))};N.defaultProps={icon:""};var R=N,A=Object(n.memo)(function(e){var t=e.src,a=e.alt,i=e.sent,c=e.installed,s=e.edited,u=e.url,l=e.id,o=e.deleteSignature,m=e.addRemovalSignatureId,d=e.removeRemovalSignatureId,E=e.hasRemovedSignatures,g=Object(n.useState)(!1),_=Object(f.a)(g,2),v=_[0],b=_[1];Object(n.useEffect)(function(){v?m():d()},[v]);var O=function(e){b(!v)};return r.a.createElement("div",{className:"signature ".concat(a," ")},r.a.createElement(h,{alt:a,src:t}),r.a.createElement("div",{className:"signature__hidden-info ".concat(E?"signature__hidden-info--show":""),onClick:function(e){var t=e.target;E&&"DIV"===t.tagName&&O()}},r.a.createElement("div",null,r.a.createElement("input",{className:"signature__checkbox",checked:v,onChange:O,type:"checkbox",id:l}),r.a.createElement("label",{className:"signature__checkbox-custom",htmlFor:l})),!E&&r.a.createElement("div",{className:"signature__info-and-controls"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"signature__title"},"Sent by admin: "),r.a.createElement("span",{className:"signature__data"},i)),r.a.createElement("div",null,r.a.createElement("span",{className:"signature__title"},"Installed by user: "),r.a.createElement("span",{className:"signature__data"},c)),r.a.createElement("div",null,r.a.createElement("span",{className:"signature__title"},"Last edited: "),r.a.createElement("span",{className:"signature__data"},s))),r.a.createElement("div",{className:"signature__controls"},r.a.createElement("a",{className:"signature__use-url",href:u},"Use"),r.a.createElement("div",{className:"signature__btn-list"},r.a.createElement(R,{className:"signature__btn",icon:"pencil"},"45"),r.a.createElement(R,{className:"signature__btn",icon:"eye"},"45"),r.a.createElement("span",{onClick:o},r.a.createElement(R,{className:"signature__btn",icon:"trash"},"45")))))," "))}),j=Object(s.b)(function(e,t){return Object(_.a)({},t,{hasRemovedSignatures:g(e)})},function(e,t){return{deleteSignature:function(){e({type:"DELETE_SIGNATURE",id:t.id})},addRemovalSignatureId:function(){e({type:"ADD_REMOVAL_SIGNATURE",id:t.id})},removeRemovalSignatureId:function(){e({type:"REMOVE_REMOVAL_SIGNATURE",id:t.id})}}})(function(e){return r.a.createElement(A,e)}),I=function(e){var t=e.signatures;return r.a.createElement("div",{className:"signature-list"},t.map(function(e){return r.a.createElement(j,Object.assign({key:e.id},e))}))},L=Object(s.b)(function(e){return{signatures:m(e)}},{})(function(e){return r.a.createElement(I,e)}),D=function(e){var t=e.title,a=e.willBeDeleted,n=e.hasRemovedSignatures,i=e.deleteRemovalSignatures;return r.a.createElement("div",{className:"top-menu"},n?r.a.createElement("div",{className:"top-menu__delete"},r.a.createElement("span",{className:"top-menu__selected-tile"},"Selected (",a,") ",r.a.createElement(R,{icon:"cross"})),r.a.createElement("button",{className:"top-menu__delete-btn",onClick:i},"Delete ",r.a.createElement(R,{icon:"trash"})," (",a,")")):r.a.createElement("div",{className:"top-menu__create"},r.a.createElement("h2",{className:"top-menu__title"},t),r.a.createElement("button",{className:"top-menu__btn"},"Create a signature")))},T=Object(s.b)(function(e){return{title:d(e),willBeDeleted:E(e),hasRemovedSignatures:g(e)}},{deleteRemovalSignatures:function(){return function(e){e({type:"DELETE_REMOVAL_SIGNATURE"}),e({type:"REFRESH_REMOVAL_SIGNATURE"})}}})(function(e){return r.a.createElement(D,e)}),w=function(e){var t=e.fetchData;e.isLoading;return Object(n.useEffect)(function(){return t()},[]),r.a.createElement("div",{className:"home"},r.a.createElement(T,null),r.a.createElement(L,null))},y=Object(s.b)(function(e){return{isLoading:o(e)}},{fetchData:function(){return function(e){e(l(!0)),fetch(u("data.json")).then(function(e){return e.json()}).then(function(t){e({type:"FETCH_DATA",data:t}),e(l(!1))})}}})(function(e){return r.a.createElement(w,e)}),k=a(5),U=a(17),V=a(18),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,signatures:[],title:"",removalSignatureIds:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return Object(_.a)({},e,{signatures:t.data.signatures,title:t.data.title});case"LOAD_DATA":return Object(_.a)({},e,{isLoading:t.isLoading});case"DELETE_SIGNATURE":return Object(_.a)({},e,{signatures:e.signatures.filter(function(e){return e.id!==t.id})});case"DELETE_REMOVAL_SIGNATURE":return Object(_.a)({},e,{signatures:e.signatures.filter(function(t){var a=t.id;return!e.removalSignatureIds.includes(a)})});case"ADD_REMOVAL_SIGNATURE":return Object(_.a)({},e,{removalSignatureIds:[].concat(Object(V.a)(e.removalSignatureIds),[t.id])});case"REFRESH_REMOVAL_SIGNATURE":return Object(_.a)({},e,{removalSignatureIds:[]});case"REMOVE_REMOVAL_SIGNATURE":return Object(_.a)({},e,{removalSignatureIds:e.removalSignatureIds.filter(function(e){return e!==t.id})});default:return e}},M=Object(k.c)({signaturePage:G}),P=Object(k.d)(M,{},Object(k.a)(U.a));a(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.4e6e0fd4.chunk.js.map