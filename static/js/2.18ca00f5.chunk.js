(this.webpackJsonpj9app=this.webpackJsonpj9app||[]).push([[2],{120:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(124),r=a.n(n);function i(e){var t={},a=3===e.nodeType,n=1===e.nodeType,l=e.textContent&&e.textContent.trim(),c=e.children&&e.children.length,o=e.attributes&&e.attributes.length;return a?e.nodeValue.trim():c||o?(!c&&l.length&&(t.text=l),n&&o&&(t.attributes=r.a.reduce(e.attributes,(function(t,a,n){var r=e.attributes.item(n);return t[r.name]=r.value,t}),{})),r.a.each(e.children,(function(e){var a=e.nodeName;r.a.has(t,a)?(r.a.isArray(t[a])||(t[a]=[t[a]]),t[a].push(i(e))):t[a]=i(e)})),r.a.each(t.attributes,(function(e,a){null==t[a]&&(t[a]=e,delete t.attributes[a])})),r.a.isEmpty(t.attributes)&&delete t.attributes,function e(t){return r.a.isPlainObject(t)&&1===r.a.size(t)?e(r.a.values(t)[0]):t}(t)):l}function l(e){var t=e.split("<a")[0].trim();","===t[t.length-1]&&(t=t.substring(0,t.length-1));var a=document.createElement("textarea");return a.innerHTML=t.replace(/&#8230;/g,""),console.log(),a.value}},121:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(120);a(125),a(122);t.a=function(e){var t=Object(i.a)(e.paragraph);return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"postImage",style:{backgroundImage:"url(".concat(e.img,")")}}),r.a.createElement("div",{className:"postTitle"}," ",r.a.createElement("b",null," ",e.title," "),"  "),r.a.createElement("div",{className:"postParagraph"},t," . . ."),r.a.createElement("div",{className:"readMore"}," Continue Reading > "))}},122:function(e,t,a){},123:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),l=a(120),c=a(121);a(123);t.default=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://historytheorymethodology.wordpress.com/category/design-gallery/feed").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(l.b)(e)})).then((function(e){o(e.channel.item)}))}),[]),i.a.createElement("div",{id:"designGalleryContainer"},i.a.createElement("div",{className:"twoTenColumn"},i.a.createElement("div",{id:"postContainer"},a.length>=1?i.a.createElement(c.a,{link:a[0].link,categories:a[0].category,img:a[0]["media:content"][1].url,title:a[0].title,paragraph:a[0].description}):null,a.length>=2?i.a.createElement(c.a,{link:a[1].link,categories:a[1].category,img:a[1]["media:content"][1].url,title:a[1].title,paragraph:a[1].description}):null,a.length>=3?i.a.createElement(c.a,{link:a[2].link,categories:a[2].category,img:a[2]["media:content"][1].url,title:a[2].title,paragraph:a[2].description}):null)),i.a.createElement("div",{className:"tenFourteenColumn"},i.a.createElement("div",{id:"postContainer"},a.length>=4?i.a.createElement(c.a,{link:a[3].link,categories:a[3].category,img:a[3]["media:content"][1].url,title:a[3].title,paragraph:a[3].description}):null,a.length>=5?i.a.createElement(c.a,{link:a[4].link,categories:a[4].category,img:a[4]["media:content"][1].url,title:a[4].title,paragraph:a[4].description}):null,a.length>=6?i.a.createElement(c.a,{link:a[5].link,categories:a[5].category,img:a[5]["media:content"][1].url,title:a[5].title,paragraph:a[5].description}):null)),i.a.createElement("div",{className:"fourteenEighteenColumn"},i.a.createElement("div",{id:"postContainer"},a.length>=7?i.a.createElement(c.a,{link:a[6].link,categories:a[6].category,img:a[6]["media:content"][1].url,title:a[6].title,paragraph:a[6].description}):null,a.length>=8?i.a.createElement(c.a,{link:a[7].link,categories:a[7].category,img:a[7]["media:content"][1].url,title:a[7].title,paragraph:a[7].description}):null)))}}}]);
//# sourceMappingURL=2.18ca00f5.chunk.js.map