(this.webpackJsonpj9app=this.webpackJsonpj9app||[]).push([[0],[,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u}));var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=n(27);function l(e){var t={},n=3===e.nodeType,a=1===e.nodeType,r=e.textContent&&e.textContent.trim(),i=e.children&&e.children.length,c=e.attributes&&e.attributes.length;return n?e.nodeValue.trim():i||c?(!i&&r.length&&(t.text=r),a&&c&&(t.attributes=o.a.reduce(e.attributes,(function(t,n,a){var r=e.attributes.item(a);return t[r.name]=r.value,t}),{})),o.a.each(e.children,(function(e){var n=e.nodeName;o.a.has(t,n)?(o.a.isArray(t[n])||(t[n]=[t[n]]),t[n].push(l(e))):t[n]=l(e)})),o.a.each(t.attributes,(function(e,n){null==t[n]&&(t[n]=e,delete t.attributes[n])})),o.a.isEmpty(t.attributes)&&delete t.attributes,function e(t){return o.a.isPlainObject(t)&&1===o.a.size(t)?e(o.a.values(t)[0]):t}(t)):r}function s(e){var t=e.split("<a")[0].trim();","===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=document.createElement("textarea");return n.innerHTML=t.replace(/&#8230;/g,""),n.value}function d(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=Array("January","February","March","April","May","June","July","August","September","October","November","December");return e.forEach((function(e){var a,i=s(e.description),o=new Date(e.pubDate),l="".concat(n[o.getMonth()]," ").concat(o.getDay(),", ").concat(o.getFullYear());e.category.includes("Art Gallery")&&(a="art"),e.category.includes("Design Gallery")&&(a="design"),e.category.includes("Art Gallery")||e.category.includes("Design Gallery")||(a="object"===typeof e.category?e.category[0]:e.category),t.push(r.a.createElement(c.a,{key:e.title,type:a,title:e.title,description:i,date:l}))})),t}},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i}));var a="SET_ALL_ARTICLES",r="SET_DESIGN_ARTICLES",i="SET_ART_ARTICLES"},,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(9);n(10),n(114);t.a=function(e){return console.log(e),r.a.createElement(i.c,{to:"/articles/".concat(e.type,"/").concat(e.title),id:"articlesCard"},r.a.createElement("div",{id:"articlesCardTitle"}," ",e.title," "),r.a.createElement("div",{id:"articlesCardDate"}," ",e.date," "),r.a.createElement("div",{id:"articlesCardDescription"},e.description," . . ."))}},,,,,,,,,,,,,,,function(e,t,n){e.exports=n(136)},,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./Queensboro_2.jpg":59,"./Queensboro_3.jpg":60,"./Queensboro_4.jpg":61,"./Queensboro_6.jpg":62,"./Queensboro_thumbnail.jpg":63};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=58},function(e,t,n){e.exports=n.p+"static/media/Queensboro_2.d72811f3.jpg"},function(e,t,n){e.exports=n.p+"static/media/Queensboro_3.252b80f4.jpg"},function(e,t,n){e.exports=n.p+"static/media/Queensboro_4.830631c0.jpg"},function(e,t,n){e.exports=n.p+"static/media/Queensboro_6.993f5e14.jpg"},function(e,t,n){e.exports=n.p+"static/media/Queensboro_thumbnail.7294840d.jpg"},function(e,t,n){var a={"./Harlem_1.jpg":65,"./Harlem_3.jpg":66,"./Harlem_4.jpg":67,"./Harlem_5.jpg":68,"./Harlem_6.jpg":69,"./Harlem_thumbnail.jpg":70};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=64},function(e,t,n){e.exports=n.p+"static/media/Harlem_1.8a7da8c3.jpg"},function(e,t,n){e.exports=n.p+"static/media/Harlem_3.311c69bb.jpg"},function(e,t,n){e.exports=n.p+"static/media/Harlem_4.c3b64b89.jpg"},function(e,t,n){e.exports=n.p+"static/media/Harlem_5.99d87e04.jpg"},function(e,t,n){e.exports=n.p+"static/media/Harlem_6.7193b17d.jpg"},function(e,t,n){e.exports=n.p+"static/media/Harlem_thumbnail.db8481d5.jpg"},function(e,t,n){var a={"./3MNeocon2012-3.jpg":72,"./3M_thumbnail.jpg":73,"./3mNeocon2012-1.jpg":74,"./3mNeocon2012-2.jpg":75};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=71},function(e,t,n){e.exports=n.p+"static/media/3MNeocon2012-3.062ca6dc.jpg"},function(e,t,n){e.exports=n.p+"static/media/3M_thumbnail.5190e5d0.jpg"},function(e,t,n){e.exports=n.p+"static/media/3mNeocon2012-1.2254a534.jpg"},function(e,t,n){e.exports=n.p+"static/media/3mNeocon2012-2.4d66ec64.jpg"},function(e,t,n){var a={"./BBW Wallflowers proposal 2011 -03.jpg":77,"./BBWWallflower_thumbnail.jpg":78};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=76},function(e,t,n){e.exports=n.p+"static/media/BBW Wallflowers proposal 2011 -03.98f059af.jpg"},function(e,t,n){e.exports=n.p+"static/media/BBWWallflower_thumbnail.b8155268.jpg"},function(e,t,n){var a={"./FtGreene_1.webp":80,"./FtGreene_3.jpg":81,"./FtGreene_4.jpg":82,"./FtGreene_5.jpg":83,"./FtGreene_6.jpg":84,"./FtGreene_thumbnail.jpg":85};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=79},function(e,t,n){e.exports=n.p+"static/media/FtGreene_1.d8218f14.webp"},function(e,t,n){e.exports=n.p+"static/media/FtGreene_3.02872523.jpg"},function(e,t,n){e.exports=n.p+"static/media/FtGreene_4.0a66edcc.jpg"},function(e,t,n){e.exports=n.p+"static/media/FtGreene_5.290ff3a7.jpg"},function(e,t,n){e.exports=n.p+"static/media/FtGreene_6.59298f0c.jpg"},function(e,t,n){e.exports=n.p+"static/media/FtGreene_thumbnail.24b37477.jpg"},function(e,t,n){var a={"./FranklinSt-1.jpg":87,"./FranklinSt-4.jpg":88,"./FranklinSt-5.jpg":89,"./FranklinSt_thumbnail.jpg":90,"./Franklinst-2.jpg":91};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=86},function(e,t,n){e.exports=n.p+"static/media/FranklinSt-1.bc562ef7.jpg"},function(e,t,n){e.exports=n.p+"static/media/FranklinSt-4.5293c165.jpg"},function(e,t,n){e.exports=n.p+"static/media/FranklinSt-5.55bf2c3b.jpg"},function(e,t,n){e.exports=n.p+"static/media/FranklinSt_thumbnail.2571d5d1.jpg"},function(e,t,n){e.exports=n.p+"static/media/Franklinst-2.aa5dc78e.jpg"},function(e,t,n){var a={"./XSRE1.jpg":93,"./XSRE3.jpg":94,"./XSRE4.jpg":95,"./XSRE5.jpg":96,"./XSRE_thumbnail.jpg":97};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=92},function(e,t,n){e.exports=n.p+"static/media/XSRE1.2cdda9ab.jpg"},function(e,t,n){e.exports=n.p+"static/media/XSRE3.20064a93.jpg"},function(e,t,n){e.exports=n.p+"static/media/XSRE4.ca3ca227.jpg"},function(e,t,n){e.exports=n.p+"static/media/XSRE5.ef3fbb93.jpg"},function(e,t,n){e.exports=n.p+"static/media/XSRE_thumbnail.004ece98.jpg"},function(e,t,n){var a={"./SevenSeven_1.jpg":99,"./SevenSeven_2.jpg":100,"./SevenSeven_4.jpg":101,"./SevenSeven_5.jpg":102,"./Thumbnail.jpg":103};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=98},function(e,t,n){e.exports=n.p+"static/media/SevenSeven_1.fd180075.jpg"},function(e,t,n){e.exports=n.p+"static/media/SevenSeven_2.6675e2e0.jpg"},function(e,t,n){e.exports=n.p+"static/media/SevenSeven_4.cd606e81.jpg"},function(e,t,n){e.exports=n.p+"static/media/SevenSeven_5.10188921.jpg"},function(e,t,n){e.exports=n.p+"static/media/Thumbnail.cb0d2c8b.jpg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),o=n.n(i),c=(n(47),n(9)),l=n(2),s=n(12);n(57);var d=function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement(s.Link,{className:"navTab",to:"contact"},"Contact"),r.a.createElement(s.Link,{className:"navTab",to:"design"},"Design Gallery"),r.a.createElement(s.Link,{className:"navTab",to:"art"},"Art Gallery"),r.a.createElement(s.Link,{className:"navTab",to:"photos"},"Photo Journal"),r.a.createElement(s.Link,{className:"navTab",to:"projects"},"Projects"))},u=n(3),m=n(58),p=n(64),f=n(71),g=n(76),h=n(79),b=n(86),v=n(92),j=n(98);n(104);var E=function(e){return r.a.createElement("div",{id:"dots"},e.dots)};n(105);var y=function(e){return r.a.createElement("div",{className:"projectContainer",onClick:function(){return e.changeProject(e.id)}},r.a.createElement("div",{className:"projectInfo"},r.a.createElement("div",{className:"titleAndDesc"},r.a.createElement("div",{className:"title"},e.title),r.a.createElement("div",{className:"description"},e.description))),r.a.createElement("div",{className:"thumbnailContainer"},r.a.createElement("div",{className:"thumbnail",id:e.id}),r.a.createElement("div",{className:"projectTitle"},e.title)))};n(106);var w=function(e){return r.a.createElement("div",{id:"projectArea"},r.a.createElement(y,{title:"Fort Greene",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"fortgreene",changeProject:e.changeProject}),r.a.createElement(y,{title:"Harlem",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"harlem",changeProject:e.changeProject}),r.a.createElement(y,{title:"3M Booth 2012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"_3M",changeProject:e.changeProject}),r.a.createElement(y,{title:"Bath and Body Works",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"bathbw",changeProject:e.changeProject}),r.a.createElement(y,{title:"Seven Seven",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"sevenseven",changeProject:e.changeProject}),r.a.createElement(y,{title:"XSRE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"xsre",changeProject:e.changeProject}),r.a.createElement(y,{title:"Franklin St",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"franklin",changeProject:e.changeProject}),r.a.createElement(y,{title:"Queensboro",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",id:"queensboro",changeProject:e.changeProject}))},k=(n(107),{xsre:"For its flagship location, the national clothing and accessories brand XSRE received bespoke retail \n  merchandising displays, cat-walk inspired aisled and oversized lighting to showcase its wild, fun and flirty themed merchandise.",harlem:"This charming landmarked brownstone located in central Harlem received a complete renovation and rooftop deck addition. \n  The interiors feature original and restored historic details within spaces adapted for modern living. A new staircase leads to a \n  bonus rooftop space which opens onto a view of Manhattan.",bathbw:"For its then-latest product, its scented oil WallFlowers, Bath and Body Works commissioned custom displays and points \n  of purchase to perfectly usher in Spring. The modular components included display graphics and tester stations, for a fun and \n  immersive olfactory and visual experience.",sevenseven:"An elevated apparel brand, popular throughout South and Central America, Seven Seven sought to create a space as \n  clean and modern in its architectural aesthetic as that of its fashion and styling. A wood and glass facade reveals custom apparel \n  displays surrounding a central stair and water feature.",queensboro:"The first of its kind, this Queens eatery was designed with its local neighborhood residents in mind. The concept was \n  to create an elevated dining experience within a warm, family-friendly, and casual atmosphere. Featuring custom wallpaper designed \n  by Dan Funderburgh,locally thrifted light fixtures, gifted decorative window screens, and antique thonet chairs, the design creates \n  a complete American bistro feel.",fortgreene:"Designed with flexibility in mind, this historic Brooklyn brownstone was restored to its pre-war glamour, and adapted \n  for creative use as a blank canvas, serving as a space for photography and staging. Both comfortably residential and an editorial blank \n  canvas, this Brooklyn home becomes both quintessential and iconic.",_3M:"A unique take on the typical booth display, it was designed to feature 3M\u2019s latest lighting products for the 2012 NeoConnect \n  Convention. A custom central pendant showcases 3M\u2019s lightweight, flexible linear lighting solutions.",franklin:"Originally two separate factory floors, the buildings were merged to form this spacious TriBeCa loft. A unique brick perimeter \n  wall enclosing an open patio was designed to accommodate Landmarks restrictions on both the exterior front and rear facades.",smith:"This landmarked row house in downtown Brooklyn\u2019s Boerum Hill neighborhood is among the first of its kind, an ultra sustainable Passive \n  House installed behind a landmarked historic fa\xe7ade. Its interior architectural details, including plaster walls and trim, and its original marble \n  mantles, have been completely restored, all within a soundproof, temperature-controlled, self-regulating seal."}),x=n(39),O=n.n(x);n(110);var S=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){o(e.loaded)}),[]),r.a.createElement(O.a,{key:e.index},r.a.createElement("div",{className:"item"},i?null:r.a.createElement("div",{className:"loader"}),r.a.createElement("img",{id:"slideImage",style:i?{}:{display:"none"},onLoad:function(){o(!0)},src:e.img}),r.a.createElement("div",{id:"description"}," ",k[e.project]," ")))};n(111);var _=function(e){return r.a.createElement("div",{className:e.className}," ")};var N=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),c=Object(u.a)(o,2),l=c[0],s=c[1],d=Object(a.useState)([]),y=Object(u.a)(d,2),k=y[0],x=y[1],O=Object(a.useState)("fortgreene"),N=Object(u.a)(O,2),F=N[0],T=N[1];function C(e){var t=[],n=[];e.keys().forEach((function(a,i){t.push(e(a)),0===i?n.push(r.a.createElement(_,{key:i,className:"dotClicked",index:i})):n.push(r.a.createElement(_,{key:i,className:"dot",index:i}))})),s(t),i(0),x(n)}function A(){if(n+1>=l.length||n>=l.length)return k[n]=r.a.createElement(_,{key:n,className:"dot",index:n}),k[0]=r.a.createElement(_,{key:0,className:"dotClicked",index:0}),x(k),void i(0);k[n]=r.a.createElement(_,{key:n,className:"dot",index:n}),k[n+1]=r.a.createElement(_,{key:n+1,className:"dotClicked",index:n+1}),x(k),i(n+1)}function D(){if(n-1<=-1)return k[n]=r.a.createElement(_,{key:n,className:"dot",index:n}),k[l.length-1]=r.a.createElement(_,{key:l.length-1,className:"dotClicked",index:l.length-1}),void i(l.length-1);k[n]=r.a.createElement(_,{key:n,className:"dot",index:n}),k[n-1]=r.a.createElement(_,{key:n-1,className:"dotClicked",index:n-1}),x(k),i(n-1)}return Object(a.useEffect)((function(){switch(F){case"queensboro":C(m);break;case"harlem":C(p);break;case"_3M":C(f);break;case"bathbw":C(g);break;case"fortgreene":C(h);break;case"franklin":C(b);break;case"xsre":C(v);break;case"sevenseven":C(j)}}),[F]),r.a.createElement("div",{id:"projectContainer"},r.a.createElement(w,{changeProject:function(e){e!==F&&(s([]),x([]),T(e))}}),r.a.createElement("div",{id:"slideShow"},r.a.createElement("i",{className:"fa fa-angle-right",onClick:function(){return A()},style:{zIndex:1,textAlign:"center",position:"absolute",top:"50%",right:"3.5%",fontSize:"2.5rem",width:"1%",minWidth:"20px",borderRadius:"25%",color:"gray"}}),r.a.createElement("i",{className:"fa fa-angle-left",onClick:function(){return D()},style:{zIndex:1,textAlign:"center",position:"absolute",fontSize:"2.5rem",top:"50%",left:"3.5%",width:"1%",minWidth:"20px",borderRadius:"25%",color:"gray"}}),r.a.createElement("div",{id:"leftClickDiv",onClick:function(){return D()}}," "),r.a.createElement("div",{id:"rightClickDiv",onClick:function(){return A()}}," "),r.a.createElement(S,{project:F,index:n,img:l[n],loaded:!1}),r.a.createElement(E,{dots:k})))},F=(n(112),Object(a.lazy)((function(){return n.e(5).then(n.bind(null,145))}))),T=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,143))})),C=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,144))}));var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(N,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(F,null)),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(T,null)),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(C,null)))},D=n(10);n(117);var L=function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement(c.b,{className:"navTab",to:"/articles/design"},"Design Gallery"),r.a.createElement(c.b,{className:"navTab",to:"/articles/art"},"Art Gallery"),r.a.createElement(c.b,{className:"navTab",to:"/articles"},"All Articles"),r.a.createElement(c.b,{className:"navTab",to:"/"},"j1989"))};n(118);var M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"articleTitleContainer"},r.a.createElement("h1",{id:"articleTitle"}," ",e.articleTitle," "),r.a.createElement("div",{id:"articleAuthorAndDate"},r.a.createElement("div",{id:"author"},e.articleAuthor?"Posted by ".concat(e.articleAuthor):null),r.a.createElement("div",{id:"date"},e.articleDate))))},P=n(40),B=n.n(P);n(130);var G=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),s=l[0],d=l[1],m=Object(a.useState)(""),p=Object(u.a)(m,2),f=p[0],g=p[1],h=Object(a.useState)(""),b=Object(u.a)(h,2),v=b[0],j=b[1],E=Array("January","February","March","April","May","June","July","August","September","October","November","December");return Object(a.useEffect)((function(){var t;window.scrollTo(0,0);var n=e.match.params.type;"design"===n&&(t="https://historytheorymethodology.wordpress.com/category/design-gallery/feed"),"art"===n&&(t="https://historytheorymethodology.wordpress.com/category/art-gallery/feed"),"design"!==n&&"art"!==n&&(t="https://historytheorymethodology.wordpress.com/feed"),fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(D.d)(e)})).then((function(t){t.channel.item.forEach((function(t){if(t.title.includes(e.match.params.title)){var n=new Date(t.pubDate),a="".concat(E[n.getMonth()]," ").concat(n.getDay(),", ").concat(n.getFullYear()),r=B()(Object(D.b)(t["content:encoded"]));o(r),d(t.title),g(t["dc:creator"]),j(a)}}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("div",{id:"articleContainer"},r.a.createElement(M,{articleTitle:s,articleAuthor:f,articleDate:v}),r.a.createElement("div",{id:"article"}," ",i," ")))};n(27),n(131);var H=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){var t=Object(D.c)(e.articles);o(t)}),[e]),r.a.createElement("div",{id:"articlesList"},i)};n(132);var R=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),c=Object(u.a)(o,2),l=c[0],s=c[1];return Object(a.useEffect)((function(){window.scrollTo(0,0);fetch("https://cors-anywhere.herokuapp.com/https://historytheorymethodology.wordpress.com/feed").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(D.d)(e)})).then((function(e){s(e.channel.title),i(e.channel.item)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("div",{id:"articlesByCategoryContainer"},r.a.createElement(M,{articleTitle:l}),r.a.createElement(H,{articles:n})))};n(133);var U=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),s=l[0],d=l[1];return Object(a.useEffect)((function(){var t;window.scrollTo(0,0);var n=e.match.params.type;console.log(n," this is type"),"design"===n&&(t="https://historytheorymethodology.wordpress.com/category/design-gallery/feed"),"art"===n&&(t="https://historytheorymethodology.wordpress.com/category/art-gallery/feed"),"design"!==n&&"art"!==n&&(t="https://historytheorymethodology.wordpress.com/category/".concat(n,"/feed")),console.log(t," this is url"),fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(D.d)(e)})).then((function(e){d(e.channel.title),o(e.channel.item)}))}),[e.match.params.type]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("div",{id:"articlesByCategoryContainer"},r.a.createElement(M,{articleTitle:s}),r.a.createElement(H,{articles:i})))};n(134);var q=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:A}),r.a.createElement(l.a,{path:"/J9Portfolio",exact:!0,component:A}),r.a.createElement(l.a,{path:"/articles/:type/:title",exact:!0,component:G}),r.a.createElement(l.a,{path:"/articles",exact:!0,component:R}),r.a.createElement(l.a,{path:"/articles/:type",exact:!0,component:U})))},W=n(31),Q=n(15),X=n(13),I=n(21),J={designArticles:[],artArticles:[],allArticles:[]},z=Object(Q.b)({currentArticles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.a:return Object(X.a)(Object(X.a)({},e),{},{allArticles:t.payload});case I.c:return Object(X.a)(Object(X.a)({},e),{},{designArticles:t.payload});case I.b:return Object(X.a)(Object(X.a)({},e),{},{artArticles:t.payload});default:return e}}}),Y=Object(Q.c)(z);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,{store:Y},r.a.createElement(q,null))),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.4eb2a95e.chunk.js.map