(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(11),r=a.n(l),c=a(1),o=a(3),s=a(2),u=a(15),m=a.n(u),d=a(21),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){t({type:"markdown:MENU_TOGGLE",payload:e})}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){t({type:"markdown:MODAL_TOGGLE",payload:e})}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){t({type:"markdown:LIST_FILES_TOGGLE",payload:e})}},E=a(9),v=a.n(E),p=a(16),b=(a(37),function(e){var t=e.modalToggle,a=e.newNameFile,n=e.filesLength;return i.a.createElement("div",{className:"bg-modal"},i.a.createElement("div",{className:"modal-content"},!!n&&i.a.createElement("div",{className:"close-modal",onClick:function(){return t(!1)}},i.a.createElement("i",{className:"far fa-times-circle"})),i.a.createElement("div",{className:"title-modal"},i.a.createElement("h3",null,"Novo arquivo Markdown")),i.a.createElement("form",{onSubmit:a},i.a.createElement("label",{htmlFor:""},"Nome do arquivo"),i.a.createElement("input",{type:"text",name:"nameFile",id:""}),i.a.createElement("button",{className:"btn-criar"},"Criar"))))}),j=a(8),h=a.n(j),k=(a(38),a(39),a(40),function(e){var t=e.onChangeCodeMirror,a=e.file,l=i.a.createRef();return Object(n.useEffect)(function(){h.a.fromTextArea(l.current,{lineNumbers:!0,mode:"markdown",autofocus:!0,lineWrapping:!0}).on("focus",function(e){t(e)})},[a.id]),i.a.createElement("div",{className:"markdown-editor"},i.a.createElement("textarea",{ref:l,value:a.text,onChange:function(e){return e}}))}),y=(a(43),function(e){var t=e.textMarkdownOut;return i.a.createElement("div",{className:"markdown-output-container"},i.a.createElement("pre",{dangerouslySetInnerHTML:Object(c.a)({},t())}))}),w=(a(44),function(e){var t=e.isListFileOpen,a=e.listFilesToggle,n=e.files,l=e.setFile,r=e.setTextMarkdown,c=e.deleteFile,o=e.editFile,s=e.currentEditFile,u=function(e){if(s.hasOwnProperty(e))return"#e29313"};return i.a.createElement("div",{className:"container-list-files ".concat(t&&"active")},i.a.createElement("div",{className:"close-list",onClick:function(){return a()}},i.a.createElement("i",{className:"far fa-times-circle"})),i.a.createElement("div",{className:"list-files-content"},i.a.createElement("h3",null,"Arquivos salvos"),i.a.createElement("ul",{className:"list-files"},Object.keys(n).map(function(e){return i.a.createElement("li",{key:n[e].id},i.a.createElement("span",{style:{color:u(n[e].id)}},n[e].nameFile),i.a.createElement("div",{className:"actions"},i.a.createElement("i",{className:"fas fa-edit",onClick:function(){return t=n[e].id,l({id:n[t].id,nameFile:n[t].nameFile,text:n[t].text}),o(n[t].id,n[t].text),void r(n[t].text);var t}}),i.a.createElement("i",{className:"fas fa-trash",onClick:function(){return t=n[e].id,void c(t);var t}})))}))))});a(45),a(46),a(47);a.e(2).then(a.t.bind(null,238,7)).then(function(e){m.a.setOptions({highlight:function(t,a){return a&&e.highlight(a,t)?e.highlight(a,t).value:e.highlightAuto(t).value}})});var N=Object(s.b)(function(e){return{ui:e.ui,filesLength:Object.keys(e.files.files).length,files:e.files}},{deleteFile:function(e){return function(t){t({type:"files:DELETE_FILE",payload:e})}},savingChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"vazio";return function(a){a({type:"markdown:SAVING_CHANGE",payload:{isSaving:e,length:t}})}},modalToggle:O,newFile:function(e){return function(){var t=Object(p.a)(v.a.mark(function t(a){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({type:"files:NEW_FILE",payload:e});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},menuToggle:f,listFilesToggle:g,editFile:function(e,t){return function(a){a({type:"files:EDIT_FILE",payload:{id:e,text:t}})}}})(function(e){var t=e.deleteFile,a=e.savingChange,l=e.modalToggle,r=e.ui,s=e.newFile,u=e.menuToggle,f=e.filesLength,O=e.listFilesToggle,g=e.editFile,E=e.files,v=E.files,p=E.currentEditFile,j=Object(n.useState)(""),h=Object(o.a)(j,2),N=h[0],F=h[1],T=Object(n.useState)(0),S=Object(o.a)(T,2)[1],I=Object(n.useState)(!1),L=Object(o.a)(I,2),_=L[0],x=L[1],M=Object(n.useState)({}),C=Object(o.a)(M,2),G=C[0],A=C[1],D=Object(n.useState)(!0),V=Object(o.a)(D,2),R=V[0],W=V[1];Object(n.useEffect)(function(){if(0===f)l(!0);else if(R){var e=Object.keys(v);A({id:e[e.length-1],text:v[e[e.length-1]].text}),F(v[e[e.length-1]].text),l(!1),W(!1)}P()},[f,N]);var q=function(e){e.on("change",function(e){A(Object(c.a)({},G,{text:e.getValue()})),g(G.id,e.getValue()),x(!0),F(e.getValue()),a(!0,e.getValue().length)})},J=function(){clearInterval(S(0)),_&&a(!1)},P=function(){return S(setTimeout(J,1e3))};return i.a.createElement("div",{className:"markdown-container"},i.a.createElement(w,{isListFileOpen:r.isListFileOpen,listFilesToggle:O,files:v,setFile:A,setTextMarkdown:F,deleteFile:t,editFile:g,currentEditFile:p}),r.isModalOpen&&i.a.createElement(b,{newNameFile:function(e){e.preventDefault();var t=e.target.nameFile;if(t.value){var a=Object(d.v4)();A({id:a,text:""}),s({id:a,nameFile:t.value,text:""}),F(""),u(!1),l(!1)}},filesLength:f,modalToggle:l}),function(e){if(e.hasOwnProperty("id"))return i.a.createElement(i.a.Fragment,null,r.containersView.markIn&&i.a.createElement(k,{file:e,listFilesToggle:O,onChangeCodeMirror:q}))}(G),r.containersView.markOut&&i.a.createElement(y,{textMarkdownOut:function(){return{__html:m()(N)}}}))}),F=a(22),T=(a(48),Object(s.b)(function(e){return{ui:e.ui,currentFile:e.files.currentEditFile}},{menuToggle:f,viewsContainerToggle:function(e,t){return function(a){a({type:"markdown:CONTAINERS_MARKDOWN_TOGGLE",payload:{markIn:e,markOut:t}})}}})(function(e){var t=e.menuToggle,a=e.ui,l=e.viewsContainerToggle,r=e.currentFile,s=Object(n.useState)(!1),u=Object(o.a)(s,2)[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),f=d[0],O=d[1],g=Object(n.useState)({markIn:null,markOut:null}),E=Object(o.a)(g,2),v=E[0],p=E[1];Object(n.useEffect)(function(){p(Object(c.a)({},a.containersView)),a.lengthMarkdown>0&&u(!0),function(){var e=Object.keys(r)[0];if(void 0===e)return!1;O({name:r[e].nameFile,text:r[e].text})}()},[a,r]);return i.a.createElement("header",null,i.a.createElement("div",{className:"container-header"},i.a.createElement("h1",null,"Markdown Editor"),i.a.createElement("div",{className:"text-saving"},i.a.createElement("p",null,a.isSaving?"Salvando...":"Salvo!")),i.a.createElement("p",{style:{fontWeight:500}},"Nome do arquivo: ",f.name),i.a.createElement("div",{className:"doanload-icone",onClick:function(){var e=new Blob([f.text],{type:"text/plain;charset=utf-8"});Object(F.saveAs)(e,f.name+".md")}},i.a.createElement("i",{className:"fas fa-download"})),i.a.createElement("div",{className:"toggle-containers"},i.a.createElement("span",{className:"".concat(v.markIn&&!v.markOut?"markIn active":"markIn"),onClick:function(){return l(!0,!1)}}),i.a.createElement("span",{className:"".concat(v.markIn&&v.markOut?"both active":"both"),onClick:function(){return l(!0,!0)}}),i.a.createElement("span",{className:"".concat(!v.markIn&&v.markOut?"markOut active":"markOut"),onClick:function(){return l(!1,!0)}})),i.a.createElement("span",{className:"icone-menu",onClick:function(){return t(!0)}},i.a.createElement("i",{className:"fas fa-bars"}))))})),S=(a(49),Object(s.b)(function(e){return{isMenuOpen:e.ui.isMenuOpen}},{menuToggle:f,modalToggle:O,listFilesToggle:g})(function(e){var t=e.isMenuOpen,a=e.menuToggle,n=e.modalToggle,l=e.listFilesToggle;e.loadingFilesStorage;return i.a.createElement("nav",{className:"".concat(t&&"menuActive")},i.a.createElement("div",{className:"container-menu"},i.a.createElement("div",{className:"close-menu",onClick:function(){return a(!1)}},i.a.createElement("i",{className:"far fa-times-circle"})),i.a.createElement("div",{className:"menu-title"},i.a.createElement("h3",null,"Menu")),i.a.createElement("ul",{className:"menu-list"},i.a.createElement("li",{onClick:function(){return n(!0)}},"Novo arquivo"),i.a.createElement("li",{onClick:function(){l(!0),a()}},"Arquivos salvos"))))}));var I=Object(s.b)(null,{loadingFilesStorage:function(){return function(){var e=Object(p.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,localStorage.getItem("@markdown");case 3:return e.t1=e.sent,a=e.t0.parse.call(e.t0,e.t1),e.next=7,t({type:"files:LOADING_FILES_STORAGE",payload:a});case 7:if(!a){e.next=10;break}return e.next=10,t({type:"files:EDIT_FILE",payload:{files:a,loadLastFile:!0}});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=e.loadingFilesStorage;return Object(n.useEffect)(function(){t()},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(T,null),i.a.createElement("div",{className:"content"},i.a.createElement(S,null),i.a.createElement(N,null)))}),L=a(6),_=a(23),x={isMenuOpen:!1,isSaving:!1,lengthMarkdown:0,isModalOpen:!1,isListFileOpen:!1,containersView:{markIn:!0,markOut:!0}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"markdown:MENU_TOGGLE":return Object(c.a)({},e,{isMenuOpen:t.payload});case"markdown:LIST_FILES_TOGGLE":return Object(c.a)({},e,{isListFileOpen:t.payload});case"markdown:SAVING_CHANGE":return Object(c.a)({},e,{isSaving:t.payload.isSaving,lengthMarkdown:"vazio"===t.payload.length?e.lengthMarkdown:t.payload.length});case"markdown:MODAL_TOGGLE":return Object(c.a)({},e,{isModalOpen:t.payload});case"markdown:CONTAINERS_MARKDOWN_TOGGLE":return Object(c.a)({},e,{containersView:Object(c.a)({},e.containersView,{markIn:t.payload.markIn,markOut:t.payload.markOut})});default:return e}},C=a(24),G=a(5);function A(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var D={currentEditFile:{},files:{}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"files:NEW_FILE":var a=Object(c.a)({},e,{files:Object(c.a)({},e.files,Object(G.a)({},t.payload.id,Object(c.a)({},t.payload))),currentEditFile:Object(G.a)({},t.payload.id,Object(c.a)({},t.payload))});return localStorage.setItem("@markdown",JSON.stringify(Object(c.a)({},a.files))),Object(c.a)({},a);case"files:DELETE_FILE":var n=e.files,i=t.payload,l=(n[i],Object(C.a)(n,[i].map(A)));return Object(c.a)({},e,{files:Object(c.a)({},l)});case"files:EDIT_FILE":var r;if(t.payload.loadLastFile){var o=Object.keys(t.payload.files);return r=t.payload.files[o[o.length-1]],Object(c.a)({},e,{files:Object(c.a)({},e.files,Object(G.a)({},r.id,Object(c.a)({},r))),currentEditFile:Object(G.a)({},r.id,Object(c.a)({},r))})}var s=Object(c.a)({},e,{files:Object(c.a)({},e.files,Object(G.a)({},t.payload.id,Object(c.a)({},e.files[t.payload.id],{text:t.payload.text}))),currentEditFile:Object(G.a)({},t.payload.id,Object(c.a)({},e.files[t.payload.id],{text:t.payload.text}))});return localStorage.setItem("@markdown",JSON.stringify(Object(c.a)({},s.files))),Object(c.a)({},s);case"files:LOADING_FILES_STORAGE":return Object(c.a)({},e,{files:Object(c.a)({},t.payload)});default:return e}},R=Object(L.c)({ui:M,files:V}),W=Object(L.e)(R,{},Object(L.d)(Object(L.a)(_.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(s.a,{store:W},i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,3]]]);
//# sourceMappingURL=main.70c72bd1.chunk.js.map