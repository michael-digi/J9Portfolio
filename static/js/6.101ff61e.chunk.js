(this.webpackJsonpj9app=this.webpackJsonpj9app||[]).push([[6],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(24),r=function(e){return{type:a.c,payload:e}},i=function(e){return{type:a.b,payload:e}}},188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),c=n(14),l=n(50),s=n(33);n(174);function o(e){var t=Object(a.useState)({articles:{columnOne:[],columnTwo:[],columnThree:[]}}),n=Object(i.a)(t,2),o=n[0],u=n[1];return Object(a.useEffect)((function(){var t=[],n=[],a=[];e.articles.forEach((function(i,l){var s;s=void 0===e.articles[l]["media:content"][1]?e.articles[l]["media:content"].url:e.articles[l]["media:content"][1].url,l<=3&&t.push(r.a.createElement(c.a,{type:"design",key:e.articles[l].title,link:e.articles[l].link,categories:e.articles[l].category,img:s,title:e.articles[l].title,paragraph:e.articles[l].description})),l>3&&l<=6&&n.push(r.a.createElement(c.a,{type:"design",key:e.articles[l].title,link:e.articles[l].link,categories:e.articles[l].category,img:s,title:e.articles[l].title,paragraph:e.articles[l].description})),7===l&&a.push(r.a.createElement(c.a,{type:"design",key:e.articles[l].title,link:e.articles[l].link,categories:e.articles[l].category,img:s,title:e.articles[l].title,paragraph:e.articles[l].description}))})),u({articles:{columnOne:t,columnTwo:n,columnThree:a}})}),[e.articles]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{articles:e.articles}),r.a.createElement("div",{id:"designGalleryContainer"},r.a.createElement("div",{className:"twoTenColumn"},r.a.createElement("div",{id:"postContainer"},o.articles.columnOne)),r.a.createElement("div",{className:"tenFourteenColumn"},r.a.createElement("div",{id:"postContainer"},o.articles.columnTwo)),r.a.createElement("div",{className:"fourteenEighteenColumn"},r.a.createElement("div",{id:"postContainer"},o.articles.columnThree,r.a.createElement(s.a,{type:"Design"})))))}var u=o;o.defaultProps={articles:[]};var m=n(175),p=n(34),d=n(13);t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.currentArticles.designArticles}));return Object(a.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://historytheorymethodology.wordpress.com/category/design-gallery/feed").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(d.c)(e)})).then((function(t){console.log(t.channel.item," this is the item"),e(Object(m.b)(t.channel.item))}))}),[]),r.a.createElement(u,{articles:t})}}}]);
//# sourceMappingURL=6.101ff61e.chunk.js.map