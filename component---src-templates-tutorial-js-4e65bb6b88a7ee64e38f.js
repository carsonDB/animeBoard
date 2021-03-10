(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2W6z":function(e,t,a){"use strict";var r=function(){};e.exports=r},"63Y8":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var r=a("q1tI"),n=a.n(r),l=a("vOnD"),i=a("BNza"),o=a("wx14"),c=a("zLVn"),u=a("TSYQ"),d=a.n(u),s=(a("K9S6"),a("y8DL")),f=a("vUet"),v=a("qUpC"),m=n.a.createContext(null);m.displayName="CardContext";var b=m,y=Function.prototype.bind.call(Function.prototype.call,[].slice);var p=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var h=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var a=p(e),r=p(t);return function(e){a&&a(e),r&&r(e)}}(e,t)}),[e,t])},w=n.a.createContext(null);w.displayName="NavContext";var g=w,j=a("ILyh"),O=n.a.createContext(null),x=function(){},E=n.a.forwardRef((function(e,t){var a,l,i=e.as,u=void 0===i?"ul":i,d=e.onSelect,s=e.activeKey,f=e.role,v=e.onKeyDown,m=Object(c.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(r.useReducer)((function(e){return!e}),!1)[1],p=Object(r.useRef)(!1),w=Object(r.useContext)(j.a),E=Object(r.useContext)(O);E&&(f=f||"tablist",s=E.activeKey,a=E.getControlledId,l=E.getControllerId);var C=Object(r.useRef)(null),N=function(e){var t=C.current;if(!t)return null;var a,r=(a="[data-rb-event-key]:not(.disabled)",y(t.querySelectorAll(a))),n=t.querySelector(".active");if(!n)return null;var l=r.indexOf(n);if(-1===l)return null;var i=l+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},k=function(e,t){null!=e&&(d&&d(e,t),w&&w(e,t))};Object(r.useEffect)((function(){if(C.current&&p.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}p.current=!1}));var K=h(t,C);return n.a.createElement(j.a.Provider,{value:k},n.a.createElement(g.Provider,{value:{role:f,activeKey:Object(j.b)(s),getControlledId:a||x,getControllerId:l||x}},n.a.createElement(u,Object(o.a)({},m,{onKeyDown:function(e){var t;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),p.current=!0,b())},ref:K,role:f}))))})),C=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.children,i=e.as,u=void 0===i?"div":i,s=Object(c.a)(e,["bsPrefix","className","children","as"]);return a=Object(f.a)(a,"nav-item"),n.a.createElement(u,Object(o.a)({},s,{ref:t,className:d()(r,a)}),l)}));C.displayName="NavItem";var N=C,k=a("dbZe"),K=a("ZCiN"),S=(a("2W6z"),n.a.forwardRef((function(e,t){var a=e.active,l=e.className,i=e.eventKey,u=e.onSelect,s=e.onClick,f=e.as,v=Object(c.a)(e,["active","className","eventKey","onSelect","onClick","as"]),m=Object(j.b)(i,v.href),b=Object(r.useContext)(j.a),y=Object(r.useContext)(g),p=a;if(y){v.role||"tablist"!==y.role||(v.role="tab");var h=y.getControllerId(m),w=y.getControlledId(m);v["data-rb-event-key"]=m,v.id=h||v.id,v["aria-controls"]=w||v["aria-controls"],p=null==a&&null!=m?y.activeKey===m:a}"tab"===v.role&&(v.disabled&&(v.tabIndex=-1,v["aria-disabled"]=!0),v["aria-selected"]=p);var O=Object(K.a)((function(e){s&&s(e),null!=m&&(u&&u(m,e),b&&b(m,e))}));return n.a.createElement(f,Object(o.a)({},v,{ref:t,onClick:O,className:d()(l,p&&"active")}))})));S.defaultProps={disabled:!1};var I=S,P={disabled:!1,as:k.a},_=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.disabled,l=e.className,i=e.href,u=e.eventKey,s=e.onSelect,v=e.as,m=Object(c.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(f.a)(a,"nav-link"),n.a.createElement(I,Object(o.a)({},m,{href:i,ref:t,eventKey:u,as:v,disabled:r,onSelect:s,className:d()(l,a,r&&"disabled")}))}));_.displayName="NavLink",_.defaultProps=P;var R=_,L=n.a.forwardRef((function(e,t){var a,l,i,u=Object(s.a)(e,{activeKey:"onSelect"}),m=u.as,y=void 0===m?"div":m,p=u.bsPrefix,h=u.variant,w=u.fill,g=u.justify,j=u.navbar,O=u.className,x=u.children,C=u.activeKey,N=Object(c.a)(u,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),k=Object(f.a)(p,"nav"),K=!1,S=Object(r.useContext)(v.a),I=Object(r.useContext)(b);return S?(l=S.bsPrefix,K=null==j||j):I&&(i=I.cardHeaderBsPrefix),n.a.createElement(E,Object(o.a)({as:y,ref:t,activeKey:C,className:d()(O,(a={},a[k]=!K,a[l+"-nav"]=K,a[i+"-"+h]=!!i,a[k+"-"+h]=!!h,a[k+"-fill"]=w,a[k+"-justified"]=g,a))},N),x)}));L.displayName="Nav",L.defaultProps={justify:!1,fill:!1},L.Item=N,L.Link=R;var z=L,A=a("Wbzz"),q=l.a.div.withConfig({displayName:"sidebar__StyledSidebar",componentId:"ntx4l0-0"})(["grid-area:sidebar;width:20vw;"]);function D(){return n.a.createElement(q,null,n.a.createElement(z,{className:"col-md-12 d-none d-md-block bg-light sidebar"},n.a.createElement(z.Item,null,n.a.createElement(z.Link,null,n.a.createElement(A.a,{to:"/tutorial/write-narration"},"写文稿")),n.a.createElement(z.Link,null,n.a.createElement(A.a,{to:"/tutorial/elements-keyword"},"元素与关键词")),n.a.createElement(z.Link,null,n.a.createElement(A.a,{to:"/tutorial/make-animation"},"制作动画")),n.a.createElement(z.Link,null,n.a.createElement(A.a,{to:"/tutorial/record-and-align"},"录音与对齐")))))}var M=l.a.div.withConfig({displayName:"tutorial__StyledContainer",componentId:"sc-1uhnts6-0"})(["display:grid;grid-template-areas:'header header header header header header' 'sidebar main main main main right' 'sidebar footer footer footer footer footer';grid-gap:10px;"]),T=l.a.div.withConfig({displayName:"tutorial__StyledContent",componentId:"sc-1uhnts6-1"})(["grid-area:main;width:80%;img{margin:30px;display:block;max-width:80%;}h1{font-size:3rem;font-weight:600;margin-top:1em;}h2{font-size:1.4rem;font-weight:600;margin-top:1em;}h3{font-size:1rem;font-weight:600;}"]);function U(e){var t=e.data.markdownRemark,a=t.frontmatter,r=t.html;return n.a.createElement(M,null,n.a.createElement(i.a,null),n.a.createElement(D,null),n.a.createElement(T,null,n.a.createElement("h1",null,a.title),n.a.createElement("h6",null,a.date),n.a.createElement("div",{style:{marginTop:"4em"},dangerouslySetInnerHTML:{__html:r}})))}},K9S6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function r(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];var n=null;return t.forEach((function(e){if(null==n){var t=e.apply(void 0,a);null!=t&&(n=t)}})),n}return(0,l.default)(r)};var r,n=a("pvIh"),l=(r=n)&&r.__esModule?r:{default:r};e.exports=t.default},pvIh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,r,n,l,i){var o=n||"<<anonymous>>",c=i||r;if(null==a[r])return t?new Error("Required "+l+" `"+c+"` was not specified in `"+o+"`."):null;for(var u=arguments.length,d=Array(u>6?u-6:0),s=6;s<u;s++)d[s-6]=arguments[s];return e.apply(void 0,[a,r,o,l,c].concat(d))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default}}]);
//# sourceMappingURL=component---src-templates-tutorial-js-4e65bb6b88a7ee64e38f.js.map