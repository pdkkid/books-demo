(this["webpackJsonpbooks-demo"]=this["webpackJsonpbooks-demo"]||[]).push([[0],{125:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(35),r=n.n(a),i=n(51),o=(n(125),n(22)),j=n(204),l=n(208),b=n(7),h=function(){return Object(b.jsx)("div",{children:"Home Page"})},d=n(52),u=n(209),x=n(205),O=n(207),p=n(203),m=n(53),f=n(93),v=n.n(f),g=n(109),y=n(206),k=n(210),I=n(110),w=function(e){var t=e.books,n=y.a.Meta;return Object(b.jsx)(u.b,{size:[12,16],wrap:!0,align:"start",style:{justifyContent:"space-evenly"},children:null===t||void 0===t?void 0:t.map((function(e){var t;return Object(b.jsx)(y.a,{extra:Object(b.jsx)(k.a,{onClick:function(){}}),title:e.volumeInfo.title,style:{width:225},type:"inner",hoverable:!0,cover:Object(b.jsx)("img",{height:300,alt:e.volumeInfo.title,src:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.smallThumbnail)||"https://i.ibb.co/LxkmGDX/download.png"}),children:Object(b.jsx)(n,{title:Object(b.jsx)("span",{style:{fontSize:"12px"},children:e.volumeInfo.authors}),description:Object(b.jsx)(I.a,{lines:4,children:e.volumeInfo.description})})},e.id)}))})},S=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],a=function(e){var t=Object(c.useState)(),n=Object(d.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),i=Object(d.a)(r,2),o=i[0],j=i[1],l=Object(c.useState)(!0),b=Object(d.a)(l,2),h=b[0],u=b[1];return Object(c.useEffect)((function(){""!==e&&Object(g.a)(v.a.mark((function t(){var n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(e,"&maxResults=40"));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,a(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),j(t.t0);case 13:return t.prev=13,u(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()}),[e]),{loading:h,data:s,error:o}}(n),r=a.data,i=a.error;return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(u.b,{direction:"horizontal",style:{width:"100%",justifyContent:"center"},children:Object(b.jsx)(x.a,{style:{},children:Object(b.jsx)(x.a.Item,{hasFeedback:!0,validateStatus:i?"error":void 0,help:i?i.message:void 0,children:Object(b.jsx)(O.a,{placeholder:"start typing to search...",size:"large",style:{minWidth:"75vh",textAlign:"center"},onChange:function(e){s(e.target.value)}})})})}),Object(b.jsx)(p.a,{style:{margin:0}}),!r&&Object(b.jsx)(m.a,{image:m.a.PRESENTED_IMAGE_SIMPLE}),Object(b.jsx)(w,{books:null===r||void 0===r?void 0:r.items})]})},C=function(){return Object(b.jsx)("div",{children:"Profile"})};n(198);var E=function(){var e=j.a.Header,t=j.a.Footer,n=j.a.Content,c=Object(o.e)();return Object(b.jsxs)(j.a,{style:{minHeight:"100vh"},children:[Object(b.jsx)(e,{children:Object(b.jsxs)(l.a,{theme:"dark",mode:"horizontal",selectedKeys:[c.pathname],style:{height:"100%"},children:[Object(b.jsxs)(l.a.Item,{children:[Object(b.jsx)("span",{children:"Home"}),Object(b.jsx)(i.b,{to:"/"})]},"/"),Object(b.jsxs)(l.a.Item,{children:[Object(b.jsx)("span",{children:"Search"}),Object(b.jsx)(i.b,{to:"/search"})]},"/search"),Object(b.jsxs)(l.a.Item,{style:{marginLeft:"auto"},children:[Object(b.jsx)("span",{children:"My Books"}),Object(b.jsx)(i.b,{to:"/profile"})]},"/profile")]})}),Object(b.jsxs)(n,{style:{marginTop:"24px",marginLeft:"16px",marginRight:"16px",padding:24,background:"#fff"},children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(o.a,{path:"/search",component:S}),Object(b.jsx)(o.a,{path:"/profile",component:C})]}),Object(b.jsx)(t,{style:{textAlign:"center"},children:Object(b.jsx)("a",{href:"https://github.com/pdkkid",children:"Austin Terry \xa92021"})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(E,{})})}),document.getElementById("root")),F()}},[[200,1,2]]]);
//# sourceMappingURL=main.a97af098.chunk.js.map