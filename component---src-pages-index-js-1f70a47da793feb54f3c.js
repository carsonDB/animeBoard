(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,a,t){"use strict";t.r(a);var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),i=t("wx14"),c=t("zLVn"),o=t("TSYQ"),s=t.n(o),m=t("vUet"),u=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,l=e.pill,o=e.className,u=e.as,d=void 0===u?"span":u,b=Object(c.a)(e,["bsPrefix","variant","pill","className","as"]),E=Object(m.a)(t,"badge");return r.a.createElement(d,Object(i.a)({ref:a},b,{className:s()(o,E,l&&E+"-pill",n&&E+"-"+n)}))}));u.displayName="Badge",u.defaultProps={pill:!1};var d=u,b=t("cWnB"),E=(t("2W6z"),t("y8DL")),f=t("rQNl"),v=t("VWqr"),p=t("ILyh"),h={variant:void 0,active:!1,disabled:!1},y=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,o=e.disabled,u=e.className,d=e.variant,b=e.action,E=e.as,f=e.eventKey,h=e.onClick,y=Object(c.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.a)(t,"list-group-item");var w=Object(l.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[o,h]);return o&&void 0===y.tabIndex&&(y.tabIndex=-1,y["aria-disabled"]=!0),r.a.createElement(v.a,Object(i.a)({ref:a},y,{eventKey:Object(p.b)(f,y.href),as:E||(b?y.href?"a":"button":"div"),onClick:w,className:s()(u,t,n&&"active",o&&"disabled",d&&t+"-"+d,b&&t+"-action")}))}));y.defaultProps=h,y.displayName="ListGroupItem";var w=y,B={variant:void 0,horizontal:void 0},g=r.a.forwardRef((function(e,a){var t,n=Object(E.a)(e,{activeKey:"onSelect"}),l=n.className,o=n.bsPrefix,u=n.variant,d=n.horizontal,b=n.as,v=void 0===b?"div":b,p=Object(c.a)(n,["className","bsPrefix","variant","horizontal","as"]),h=Object(m.a)(o,"list-group");return t=d?!0===d?"horizontal":"horizontal-"+d:null,r.a.createElement(f.a,Object(i.a)({ref:a},p,{as:v,className:s()(l,h,u&&h+"-"+u,t&&h+"-"+t)}))}));g.defaultProps=B,g.displayName="ListGroup",g.Item=w;var j=g,x=t("zM5D"),N=t("BNza"),k={width:"45vw",height:"27vw"},z=function(){var e=Object(l.useState)(!1),a=e[0],t=e[1];return r.a.createElement("div",null,r.a.createElement("title",null,"AnimeBoard"),r.a.createElement("h2",null,"动画黑板",r.a.createElement(d,{bg:"secondary"},"v0.4.0")),"是一个知识类视频制作工具。画面编辑类似PPT/Keynote的使用方式。总体使用门槛也差不多， 可以快速做出一个直观漂亮的可视化动画视频。",r.a.createElement("br",null),r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement(b.a,{variant:"success",onClick:function(){return setTimeout((function(){return t(!0)}),3e3)},href:"https://anime-board.oss-cn-beijing.aliyuncs.com/download/anime-board Setup 0.4.0.exe"},"下载(win64)")," ",a&&r.a.createElement(P,{onCancel:function(){return t(!1)}}),r.a.createElement(b.a,{variant:"info",as:n.a,to:"/tutorial/quick-started"},"快速入门")),r.a.createElement(b.a,{size:"sm",variant:"secondary",as:n.a,to:"#feedback"},"反馈&联系作者"),r.a.createElement(d,null,"目前只支持win64。"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C,null),r.a.createElement("br",null))},C=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"例子:"),r.a.createElement("a",{href:"http://anime-board.oss-cn-beijing.aliyuncs.com/%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%8C%BA%E5%88%AB.zip",target:"_blank"},"进程和线程的区别"),"（下载压缩包，解压后即可导入）",r.a.createElement("br",null),"发布的视频(",r.a.createElement("a",{href:"https://www.ixigua.com/i6926416351611322891/"},"西瓜视频"),", ",r.a.createElement("a",{href:"https://www.bilibili.com/video/BV1Wr4y1P7Yr/"},"B站"),")")};function O(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center"}},r.a.createElement("a",{id:"feedback"},"欢迎任何反馈意见")),r.a.createElement(j,{style:{width:"30vw"}},r.a.createElement(j.Item,null,"软件交流QQ群: 620823259"),r.a.createElement(j.Item,null,"邮箱：carsondb@qq.com"),r.a.createElement(j.Item,null,r.a.createElement("a",{href:"https://github.com/carsonDB/animeBoard/issues"},"Github issue")),r.a.createElement(j.Item,null,r.a.createElement("a",{href:"https://gitee.com/carsonDB/animeBoard/issues"},"Gitee issue")))))}function P(e){return r.a.createElement(x.a,{show:!0,onHide:e.onCancel},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"下载安装遇到问题？")),r.a.createElement(x.a.Body,null,"请点击",r.a.createElement("a",{href:"https://www.bilibili.com/video/BV1aa411F7Y2?p=2&share_source=copy_web"},"测试版安装教程")),r.a.createElement(x.a.Footer,null,r.a.createElement(b.a,{variant:"secondary",onClick:e.onCancel},"关闭")))}a.default=function(){return r.a.createElement("div",null,r.a.createElement(N.a,null),r.a.createElement("div",{style:{color:"#232129",padding:"96px",fontFamily:"-apple-system, Roboto, sans-serif, serif"}},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"50% auto",columnGap:20}},r.a.createElement(z,null),r.a.createElement("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1aa411F7Y2&page=1",style:k,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," "))),r.a.createElement("hr",{style:{color:"black",height:4}}),r.a.createElement(O,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1f70a47da793feb54f3c.js.map