(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(t,e,i){"use strict";var a=i(269);e.a=a.a},213:function(t,e,i){"use strict";var a=i(289);e.a=a.a},222:function(t,e,i){"use strict";i(30);var a=i(88),n=i.n(a),I=i(62),l=function(t){var e=t.basis,i=void 0===e?"auto":e,a=t.children,l=t.direction,r=void 0===l?"row":l,o=t.grow,c=void 0===o?0:o,g=t.halign,d=void 0===g?"flex-start":g,s=t.shrink,A=void 0===s?1:s,C=t.type,y=void 0===C?"div":C,M=t.valign,u=void 0===M?"flex-start":M,m=n()(t,["basis","children","direction","grow","halign","shrink","type","valign"]);return Object(I.createElement)(y,Object.assign({css:{display:"flex",flexDirection:r,flexGrow:c,flexShrink:A,flexBasis:i,justifyContent:"row"===r?d:u,alignItems:"row"===r?u:d}},m),a)};e.a=l},224:function(t,e,i){"use strict";i.d(e,"a",function(){return I}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return n});var a="https://k-frame.org",n="0.8.19",I="https://unpkg.com/@babel/standalone@7.3.4/babel.min.js"},226:function(t,e,i){"use strict";(function(t){i(30),i(0);var a=i(42);e.a=function(e){var i=e.children,n=(e.title,e.cssProps),I=void 0===n?{}:n,l=e.onDark,r=void 0!==l&&l;return t.createElement("div",{css:Object.assign({color:r?a.a.subtleOnDark:a.a.subtle,fontSize:14,fontWeight:700,lineHeight:3,textTransform:"uppercase",letterSpacing:"0.08em"},I)},i)}}).call(this,i(62))},239:function(t,e,i){"use strict";(function(t){i(0);e.a=function(e){var i=e.cssProps,a=void 0===i?{}:i;return t.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",width:15,height:15,css:a},t.createElement("path",{fill:"currentColor",d:"\n      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\n      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\n    "}),t.createElement("polygon",{fill:"currentColor",points:"\n      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\n      14.9 62.8,22.9 71.5,22.9\n      "}))}}).call(this,i(62))},240:function(t,e,i){"use strict";i.d(e,"a",function(){return r});i(30);var a=i(296),n=i.n(a),I=i(249),l=i.n(I);i.d(e,"b",function(){return l.a});var r=n.a.map(function(t){return Object.assign({},t,{directory:"docs"})})},249:function(t,e){t.exports=[{title:"Tutorial",items:[{id:"todo",title:"Todo"}]}]},269:function(t,e,i){"use strict";(function(t){i(0);var a=i(42);e.a=function(e){var i,n=e.children;return t.createElement("div",{css:(i={paddingLeft:20,paddingRight:20,marginLeft:"auto",marginRight:"auto"},i[a.c.greaterThan("medium")]={width:"90%"},i[a.c.size("xxlarge")]={maxWidth:1260},i)},n)}}).call(this,i(62))},289:function(t,e,i){"use strict";(function(t){i(93);var a=i(9),n=i.n(a),I=i(290),l=i(0),r=i(222),o=i(291),c=i(298),g=i(42);Object(I.a)();var d=function(e){function i(){return e.apply(this,arguments)||this}return n()(i,e),i.prototype.render=function(){var e,i=this.props,a=i.children,n=i.location,I=!1;return n.pathname.match(/^\/(docs|tutorial|community|blog|contributing|warnings)/)&&(I=!0),t.createElement("div",{css:{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 40px)"}},t.createElement(c.a,{location:n}),t.createElement(r.a,{direction:"column",shrink:"0",grow:"1",valign:"stretch",css:(e={flex:"1 0 auto",marginTop:60},e[g.c.between("medium","large")]={marginTop:50},e[g.c.lessThan("medium")]={marginTop:40},e)},a),t.createElement(o.a,{layoutHasSidebar:I}))},i}(l.Component);e.a=d}).call(this,i(62))},290:function(t,e,i){"use strict";function a(){if("function"==typeof Node&&null!=Node.prototype){var t=Node.prototype.removeChild;Node.prototype.removeChild=function(e){return e.parentNode!==this?("undefined"!=typeof console&&console.error("Cannot remove a child from a different parent",e,this),e):t.apply(this,arguments)};var e=Node.prototype.insertBefore;Node.prototype.insertBefore=function(t,i){return i&&i.parentNode!==this?("undefined"!=typeof console&&console.error("Cannot insert before a reference node from a different parent",i,this),t):e.apply(this,arguments)}}}i.d(e,"a",function(){return a})},291:function(t,e,i){"use strict";var a=i(292);e.a=a.a},292:function(t,e,i){"use strict";(function(t){var a=i(210),n=i(293),I=i(294),l=i(295),r=i(226),o=(i(0),i(42)),c=i(240);i(297);e.a=function(e){var i,g,d,s,A=e.layoutHasSidebar,C=void 0!==A&&A;return t.createElement("footer",{css:(i={backgroundColor:o.a.darker,color:o.a.white,paddingTop:10,paddingBottom:50},i[o.c.size("sidebarFixed")]={paddingTop:40},i)},t.createElement(a.a,null,t.createElement("div",{css:(g={display:"flex",flexDirection:"row",flexWrap:"wrap"},g[o.c.between("small","medium")]={paddingRight:C?240:null},g[o.c.between("large","largerSidebar")]={paddingRight:C?280:null},g[o.c.between("largerSidebar","sidebarFixed",!0)]={paddingRight:C?380:null},g)},t.createElement("div",{css:(d={flexWrap:"wrap",display:"flex"},d[o.c.lessThan("large")]={width:"100%"},d[o.c.greaterThan("xlarge")]={width:"calc(100% / 3 * 2)",paddingLeft:40},d)},t.createElement(l.a,{layoutHasSidebar:C},t.createElement(r.a,{onDark:!0},"Docs"),c.a.map(function(e){var i=e.items[0];return t.createElement(I.a,{to:"/docs/"+i.id+".html",key:e.title},e.title)})),t.createElement(l.a,{layoutHasSidebar:C},t.createElement(r.a,{onDark:!0},"Channels"),t.createElement(n.a,{href:"https://github.com/krzysztofpniak/k-frame",target:"_blank",rel:"noopener"},"GitHub"),t.createElement(n.a,{href:"https://stackoverflow.com/questions/tagged/k-frame",target:"_blank",rel:"noopener"},"Stack Overflow")),t.createElement(l.a,{layoutHasSidebar:C},t.createElement(r.a,{onDark:!0},"More"),t.createElement(I.a,{to:"/tutorial/tutorial.html"},"Tutorial"),t.createElement(I.a,{to:"/blog/"},"Blog"))),t.createElement("section",{css:(s={paddingTop:40,display:"block !important"},s[o.c.greaterThan("xlarge")]={width:"calc(100% / 3)",order:-1},s[o.c.greaterThan("large")]={order:-1,width:C?null:"calc(100% / 3)"},s[o.c.lessThan("large")]={textAlign:"center",width:"100%",paddingTop:40},s)},t.createElement("p",{css:{color:o.a.subtleOnDark,paddingTop:15}},"Copyright © "+(new Date).getFullYear()+" KLABS Inc.")))))}}).call(this,i(62))},293:function(t,e,i){"use strict";(function(t){i(0);var a=i(42),n=i(239);e.a=function(e){var i=e.children,I=e.href,l=e.target,r=e.rel;return t.createElement("a",{css:{lineHeight:2,":hover":{color:a.a.brand}},href:I,target:l,rel:r},i,t.createElement(n.a,{cssProps:{verticalAlign:-2,display:"inline-block",marginLeft:5,color:a.a.subtle}}))}}).call(this,i(62))},294:function(t,e,i){"use strict";(function(t){var a=i(63),n=(i(0),i(42));e.a=function(e){var i=e.children,I=e.target,l=e.to;return t.createElement(a.Link,{css:{lineHeight:2,":hover":{color:n.a.brand}},to:l,target:I},i)}}).call(this,i(62))},295:function(t,e,i){"use strict";(function(t){i(0);var a=i(42);e.a=function(e){var i,n=e.children;e.title,e.layoutHasSidebar;return t.createElement("div",{css:(i={display:"flex",flexDirection:"column",alignItems:"flex-start",width:"50%",paddingTop:40},i[a.c.size("sidebarFixed")]={paddingTop:0,width:"25%"},i)},t.createElement("div",{css:{display:"inline-flex",flexDirection:"column"}},n))}}).call(this,i(62))},296:function(t,e){t.exports=[{title:"Installation",items:[{id:"getting-started",title:"Getting Started"},{id:"add-k-frame-to-a-website",title:"Add k-frame to a Website"},{id:"create-a-new-k-frame-app",title:"Create a New k-frame App"}]},{title:"Main Concepts",isOrdered:!0,items:[{id:"counter",title:"Counter"},{id:"stack-intro",title:"Stack Intro"},{id:"introducing-scopes",title:"Introducing Scopes"}]},{title:"Forms",isOrdered:!0,items:[{id:"forms-basics",title:"Basics"}]},{title:"API Reference",items:[{id:"k-frame-api",title:"k-frame"},{id:"javascript-environment-requirements",title:"JS Environment Requirements"},{id:"glossary",title:"Glossary"}]}]},297:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABaCAMAAADQMV5DAAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA9HRSTlMAG7O/KQR48v/+hA5W2+piObG8RBSU/fehIG7stSWl9nkIStbYU0XN4FUvrHoDcOi3OAuLmheOmRVm4rtBNbDucsnfXlDUJpuGB3vtM3+mHBKMEF3FSDzmaMLpWN7PRh2XkAaAo3X4riuiBctS3WAxtvFx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"},298:function(t,e,i){"use strict";var a=i(299);e.a=a.a},299:function(t,e,i){"use strict";(function(t){i(235),i(30),i(89),i(90);var a=i(210),n=i(300),I=i(63),l=(i(0),i(42)),r=i(224),o=i(239),c=i(301),g=i(302),d=i.n(g);e.a=function(e){var i,g,s,A,C,y,M=e.location;return t.createElement("header",{css:{backgroundColor:l.a.darker,color:l.a.white,position:"fixed",zIndex:1,width:"100%",top:0,left:0}},t.createElement(a.a,null,t.createElement("div",{css:(i={display:"flex",flexDirection:"row",alignItems:"center",height:60},i[l.c.between("small","large")]={height:50},i[l.c.lessThan("small")]={height:40},i)},t.createElement(I.Link,{css:(g={display:"flex",marginRight:10,height:"100%",alignItems:"center",color:l.a.brand,":focus":{outline:0,color:l.a.white}},g[l.c.greaterThan("small")]={width:"calc(100% / 6)"},g[l.c.lessThan("small")]={flex:"0 0 auto"},g),to:"/"},t.createElement("img",{src:d.a,alt:"",height:"20"}),t.createElement("span",{css:(s={color:"inherit",marginLeft:10,fontWeight:700,fontSize:20,lineHeight:"20px"},s[l.c.lessThan("large")]={fontSize:16,marginTop:1},s[l.c.lessThan("small")]={position:"absolute",overflow:"hidden",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,padding:0,border:0},s)},"k-frame")),t.createElement("nav",{css:(A={flex:"1",display:"flex",flexDirection:"row",alignItems:"stretch",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",height:"100%",scrollbarWidth:"none",msOverflowStyle:"none","::-webkit-scrollbar":{display:"none"}},A[l.c.size("xsmall")]={flexGrow:"1",width:"auto"},A[l.c.greaterThan("xlarge")]={width:null},A[l.c.lessThan("small")]={maskImage:"linear-gradient(to right, transparent, black 20px, black 90%, transparent)"},A)},t.createElement(n.a,{isActive:M.pathname.includes("/docs/"),title:"Docs",to:"/docs/getting-started.html"}),t.createElement(n.a,{isActive:M.pathname.includes("/tutorial/"),title:"Tutorial",to:"/tutorial/tutorial.html"}),t.createElement(n.a,{isActive:M.pathname.includes("/blog"),title:"Blog",to:"/blog/"})),t.createElement(c.a,null),t.createElement("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"auto"}},t.createElement("span",{css:Object.assign({padding:"5px 10px",whiteSpace:"nowrap"},l.b.small,(C={":hover":{color:l.a.brand},":focus":{outline:0,backgroundColor:l.a.lighter,borderRadius:15}},C[l.c.lessThan("medium")]={display:"none"},C)),to:"/versions"},"v",r.c),t.createElement("a",{css:Object.assign({padding:"5px 10px",marginLeft:10,whiteSpace:"nowrap"},l.b.small,(y={":hover":{color:l.a.brand},":focus":{outline:0,backgroundColor:l.a.lighter,borderRadius:15}},y[l.c.lessThan("large")]={display:"none"},y)),href:"https://github.com/krzysztofpniak/k-frame",target:"_blank",rel:"noopener"},"GitHub",t.createElement(o.a,{cssProps:{marginLeft:5,verticalAlign:-2,color:l.a.subtle}}))))))}}).call(this,i(62))},300:function(t,e,i){"use strict";(function(t){var a,n,I,l=i(63),r=(i(0),i(42)),o=((a={display:"flex",flexDirection:"row",alignItems:"center",color:r.a.white,transition:"color 0.2s ease-out",paddingLeft:15,paddingRight:15,fontWeight:300,":focus":{outline:0,backgroundColor:r.a.lighter,color:r.a.white}})[r.c.size("xsmall")]={paddingLeft:8,paddingRight:8},a[r.c.between("small","medium")]={paddingLeft:10,paddingRight:10},a[r.c.greaterThan("xlarge")]={paddingLeft:20,paddingRight:20,fontSize:18,":hover:not(:focus)":{color:r.a.brand}},a),c=((n={color:r.a.brand})[r.c.greaterThan("small")]={position:"relative"},n),g=((I={})[r.c.greaterThan("small")]={position:"absolute",bottom:-1,height:4,background:r.a.brand,left:0,right:0,zIndex:1},I);e.a=function(e){var i=e.isActive,a=e.title,n=e.to;return t.createElement(l.Link,{css:[o,i&&c],to:n},a,i&&t.createElement("span",{css:g}))}}).call(this,i(62))},301:function(t,e,i){"use strict";(function(t){var a=i(9),n=i.n(a),I=i(0),l=i(42),r=function(e){function i(){for(var t,i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={enabled:!0},t}n()(i,e);var a=i.prototype;return a.componentDidMount=function(){window.docsearch?window.docsearch({apiKey:"36221914cce388c46d0420343e0bb32e",indexName:"react",inputSelector:"#algolia-doc-search"}):(console.warn("Search has failed to load and now is being disabled"),this.setState({enabled:!1}))},a.render=function(){var e,i;return this.state.enabled?t.createElement("form",{css:(e={display:"flex",flex:"0 0 auto",flexDirection:"row",alignItems:"center",paddingLeft:"0.25rem",paddingRight:"0.25rem"},e[l.c.lessThan("expandedSearch")]={justifyContent:"flex-end",marginRight:10},e[l.c.greaterThan("expandedSearch")]={minWidth:100},e)},t.createElement("input",{css:(i={width:"100%",appearance:"none",background:"transparent",border:0,color:l.a.white,fontSize:18,fontWeight:300,fontFamily:"inherit",position:"relative",padding:"4px 4px 4px 29px",backgroundImage:"url(/search.svg)",backgroundSize:"16px 16px",backgroundRepeat:"no-repeat",backgroundPositionY:"center",backgroundPositionX:"4px",":focus":{outline:0,backgroundColor:l.a.lighter,borderRadius:"0.25rem"}},i[l.c.lessThan("expandedSearch")]={fontSize:16,width:"16px",transition:"width 0.2s ease, padding 0.2s ease",paddingLeft:"16px",":focus":{paddingLeft:"29px",width:"8rem",outline:"none"}},i),id:"algolia-doc-search",type:"search",placeholder:"Search","aria-label":"Search docs"})):null},i}(I.Component);e.a=r}).call(this,i(62))},302:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICAgICAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgICAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICB2ZXJzaW9uPSIxLjEiCiAgICAgICAgd2lkdGg9IjMwMC4yNSIKICAgICAgICBoZWlnaHQ9IjMwMC4yMTg3NSIKICAgICAgICB2aWV3Qm94PSI0MCA0MCAyMjAgMjIwIgogICAgICAgIGlkPSJzdmcyIj4KICA8ZGVmcwogICAgICAgICAgaWQ9ImRlZnM0Ii8+CiAgPGcKICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzkuODc1LC01Mi4yNSkiCiAgICAgICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Im0gMjU2LjY2NjY3LDE2OS4wMjg4NSAwLDQ0LjQ0NDQ0IDQ0LjQ0NDQ0LDAgMCwtNDQuNDQ0NDQgeiBtIC00NC40NDQ0NSwtNDQuNDQ0NDUgMCwtMjIuMjIyMjIgNDQuNDQ0NDUsMCAwLDIyLjIyMjIyIDQ0LjQ0NDQ0LDAgMCwtMjIuMjIyMjIgNDQuNDQ0NDUsMCAwLDIyLjIyMjIyIDIyLjIyMjIyLDAgMCw0NC40NDQ0NSAtMjIuMjIyMjIsMCAwLDQ0LjQ0NDQ0IDIyLjIyMjIyLDAgMCw0NC40NDQ0NSAtMjIuMjIyMjIsMCAwLDIyLjIyMjIyIC00NC40NDQ0NSwwIDAsLTIyLjIyMjIyIC00NC40NDQ0NCwwIDAsMjIuMjIyMjIgLTQ0LjQ0NDQ1LDAgMCwtMjIuMjIyMjIgLTIyLjIyMjIyLDAgMCwtNDQuNDQ0NDUgMjIuMjIyMjIsMCAwLC00NC40NDQ0NCAtMjIuMjIyMjIsMCAwLC00NC40NDQ0NSB6IgogICAgICAgICAgICBpZD0icGF0aDM3ODMiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlZWM3M2U7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAxOTAsMjU3LjkxNzc0IDIyLjIyMjIyLDIyLjIyMjIyIDAsLTIyLjIyMjIyIHoiCiAgICAgICAgICAgIGlkPSJwYXRoMzc4NiIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2Y0NDgwMDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgICA8cGF0aAogICAgICAgICAgICBkPSJtIDIxMi4yMjIyMiwyODAuMTM5OTYgMjIuMjIyMjIsMjIuMjIyMjIgNDQuNDQ0NDUsMCAtMjIuMjIyMjIsLTIyLjIyMjIyIHoiCiAgICAgICAgICAgIGlkPSJwYXRoMzc4OCIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2Y0NDgwMDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgICA8cGF0aAogICAgICAgICAgICBkPSJtIDI1Ni42NjY2NywyNTcuOTE3NzQgMjIuMjIyMjIsMjIuMjIyMjIgMCwyMi4yMjIyMiAtMjIuMjIyMjIsLTIyLjIyMjIyIHoiCiAgICAgICAgICAgIGlkPSJwYXRoMzc5MCIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2YwYTUxMztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgICA8cGF0aAogICAgICAgICAgICBkPSJtIDI1Ni42NjY2NywyNTcuOTE3NzQgMjIuMjIyMjIsMjIuMjIyMjIgMjIuMjIyMjIsMCAwLC0yMi4yMjIyMiB6IgogICAgICAgICAgICBpZD0icGF0aDM3OTIiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmNDQ4MDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAzMDEuMTExMTEsMjgwLjEzOTk2IDIyLjIyMjIyLDIyLjIyMjIyIDQ0LjQ0NDQ1LDAgLTIyLjIyMjIyLC0yMi4yMjIyMiB6IgogICAgICAgICAgICBpZD0icGF0aDM3OTQiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmNDQ4MDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAzNDUuNTU1NTYsMjU3LjkxNzc0IDIyLjIyMjIyLDIyLjIyMjIyIDAsMjIuMjIyMjIgLTIyLjIyMjIyLC0yMi4yMjIyMiAwLC0yMi4yMjIyMiB6IgogICAgICAgICAgICBpZD0icGF0aDM3OTYiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmMGE1MTM7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAzNDUuNTU1NTYsMjU3LjkxNzc0IDIyLjIyMjIyLDIyLjIyMjIyIDIyLjIyMjIyLDAgLTIyLjIyMjIyLC0yMi4yMjIyMiB6IgogICAgICAgICAgICBpZD0icGF0aDM3OTgiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmNDQ4MDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0iTSAzNjcuNzc3NzgsMjEzLjQ3MzI5IDM5MCwyMzUuNjk1NTEgbCAwLDQ0LjQ0NDQ1IC0yMi4yMjIyMiwtMjIuMjIyMjIgeiIKICAgICAgICAgICAgaWQ9InBhdGgzODAwIgogICAgICAgICAgICBzdHlsZT0iZmlsbDojZjBhNTEzO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz4KICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Im0gMjU2LjY2NjY3LDEwMi4zNjIxOCAyMi4yMjIyMiwyMi4yMjIyMiAtMjIuMjIyMjIsMCB6IgogICAgICAgICAgICBpZD0icGF0aDM4MDIiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmMGE1MTM7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAzNDUuNTU1NTYsMTAyLjM2MjE4IDIyLjIyMjIyLDIyLjIyMjIyIC0yMi4yMjIyMiwwIHoiCiAgICAgICAgICAgIGlkPSJwYXRoMzgwNCIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2YwYTUxMztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgICA8cGF0aAogICAgICAgICAgICBkPSJNIDM2Ny43Nzc3OCwxNjkuMDI4ODUgMzkwLDE5MS4yNTEwNyAzOTAsMTQ2LjgwNjYyIDM2Ny43Nzc3OCwxMjQuNTg0NCB6IgogICAgICAgICAgICBpZD0icGF0aDM4MDYiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmMGE1MTM7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAzNDUuNTU1NTYsMTY5LjAyODg1IDIyLjIyMjIyLDIyLjIyMjIyIDIyLjIyMjIyLDAgLTIyLjIyMjIyLC0yMi4yMjIyMiB6IgogICAgICAgICAgICBpZD0icGF0aDM4MDgiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmNDQ4MDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0ibSAzNDUuNTU1NTYsMTY5LjAyODg1IDIyLjIyMjIyLDIyLjIyMjIyIDAsMjIuMjIyMjIgLTIyLjIyMjIyLDAgeiIKICAgICAgICAgICAgaWQ9InBhdGgzODEwIgogICAgICAgICAgICBzdHlsZT0iZmlsbDojZjBhNTEzO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz4KICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Im0gMjU2LjY2NjY3LDE2OS4wMjg4NiAyMi4yMjIyMiwyMi4yMjIyMiAyMi4yMjIyMiwwIDAsLTIyLjIyMjIyIHoiCiAgICAgICAgICAgIGlkPSJwYXRoMzgxMiIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2Y0NDgwMDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgICA8cGF0aAogICAgICAgICAgICBkPSJtIDI1Ni42NjY2NywxNjkuMDI4ODUgMCw0NC40NDQ0NCAyMi4yMjIyMiwwIDAsLTIyLjIyMjIyIC0yMi4yMjIyMiwtMjIuMjIyMjIgeiIKICAgICAgICAgICAgaWQ9InBhdGgzODE0IgogICAgICAgICAgICBzdHlsZT0iZmlsbDojZjBhNTEzO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz4KICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Im0gMTkwLDE2OS4wMjg4NSAyMi4yMjIyMiwyMi4yMjIyMiAwLC0yMi4yMjIyMiAtMjIuMjIyMjIsMCB6IgogICAgICAgICAgICBpZD0icGF0aDM4MTYiCiAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmNDQ4MDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=0-b6623aa05d66fd91d29a.js.map