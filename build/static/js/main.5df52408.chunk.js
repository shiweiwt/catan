(this.webpackJsonpcatan=this.webpackJsonpcatan||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,o){e.exports=o(36)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){e.exports=o.p+"static/media/brick.c9ce5fbf.png"},function(e,t,o){e.exports=o.p+"static/media/desert.ac87c771.png"},function(e,t,o){e.exports=o.p+"static/media/wheat.54206543.png"},function(e,t,o){e.exports=o.p+"static/media/ore.dc5ae611.png"},function(e,t,o){e.exports=o.p+"static/media/sheep.dcc88d02.png"},function(e,t,o){e.exports=o.p+"static/media/wood.09af1d5a.png"},,,,,,,,function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(12),c=o.n(r),l=(o(21),o(3)),i=o(2),s=o(15),d=(o(22),{b:o(23),d:o(24),w:o(25),o:o(26),s:o(27),t:o(28),"":""});var u=function(e){var t=.2*e.width;return n.a.createElement("div",null,n.a.createElement("img",{src:d[e.image],alt:e.image,style:{position:"absolute",top:e.top,left:e.left,width:e.width,height:e.height,opacity:50,transform:"rotateZ(30deg)"}}),e.value>0&&n.a.createElement("span",{style:{position:"absolute",border:"solid #b3b3b3 2px",borderRadius:"50%",backgroundColor:"#ffffff",color:6===e.value||8===e.value?"#ff0000":"#000000",top:e.top+e.height/2-t/2,left:e.left+e.width/2-t/2,fontSize:t-5,width:t,height:t}},e.value))};var f=function(e){var t=e.left,o=e.cardSize,a=.866*o,r=[{top:0,left:t+2*a},{top:0,left:t+4*a},{top:0,left:t+6*a},{top:0+1.5*o,left:t+a},{top:0+1.5*o,left:t+3*a},{top:0+1.5*o,left:t+5*a},{top:0+1.5*o,left:t+7*a},{top:0+3*o,left:t},{top:0+3*o,left:t+2*a},{top:0+3*o,left:t+4*a},{top:0+3*o,left:t+6*a},{top:0+3*o,left:t+8*a},{top:0+4.5*o,left:t+a},{top:0+4.5*o,left:t+3*a},{top:0+4.5*o,left:t+5*a},{top:0+4.5*o,left:t+7*a},{top:0+6*o,left:t+2*a},{top:0+6*o,left:t+4*a},{top:0+6*o,left:t+6*a}];return n.a.createElement(n.a.Fragment,null,r.map((function(t,a){return n.a.createElement(u,{image:e.cards[a],value:e.values[a],top:t.top,left:t.left,width:2*o,height:2*o})})))};function p(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var g=o(13),m=o.n(g);function b(e){for(var t=e.length-1;t>=0;t--){var o=Math.floor(Math.random()*(t+1)),a=e[o];e[o]=e[t],e[t]=a}return e}function h(){var e=["o","o","o","b","b","b","w","w","w","w","s","s","s","s","t","t","t","t"];return b(e),b(e),e=[].concat(Object(i.a)(e.slice(0,9)),["d"],Object(i.a)(e.slice(9))),console.log("generated cards",e),e}function v(){var e=[2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];return b(e),b(e),e=[].concat(Object(i.a)(e.slice(0,9)),[0],Object(i.a)(e.slice(9))),console.log("generated cards",e),e}function w(e){return[].concat(Object(i.a)(e.cards),Object(i.a)(e.values.map((function(e){return e.toString()})))).join(",")}var E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),o=t[0],r=t[1],c=Object(a.useState)([]),i=Object(l.a)(c,2),d=i[0],u=i[1],g=Object(a.useState)(""),b=Object(l.a)(g,2),E=b[0],j=b[1],O=Object(a.useRef)(null),x=function(){var e=Object(a.useState)(p()),t=Object(l.a)(e,2),o=t[0],n=t[1];return Object(a.useEffect)((function(){function e(){n(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),o}().width,y=x/9;return Object(a.useEffect)((function(){var e=window.location;console.log("location: ",e.search);var t=null;if(e.search&&e.search.length>1){var o=m.a.parse(e.search.slice(1)).b;if(o){var a="string"==typeof o?o:o[0];console.log("data",a),t=function(e){var t=e.split(",");if(38!==t.length)return null;var o=t.slice(19).map((function(e){return Number(e)}));return{cards:t.slice(0,19),values:o}}(a),console.log("parsed board",t)}}t||(t={cards:h(),values:v()}),r(t.cards),u(t.values);var n="".concat(e.protocol,"://").concat(e.host).concat(e.pathname,"?b=")+w(t);console.log("board url:",n),j(n)}),[window.location]),n.a.createElement(s.a,{basename:"/catan"},n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header",style:{display:"block",paddingTop:20,paddingBottom:20,width:"100%"}},"Welcome to Catan"),n.a.createElement("div",{style:{alignContent:"center"}},n.a.createElement("button",{onClick:function(){var e=h(),t=v(),o=window.location,a={cards:e,values:t},n="".concat(o.protocol,"://").concat(o.host).concat(o.pathname,"?b=")+w(a);console.log("board url:",n),j(n),r(e),u(t)},style:{font:"Serif 24px bold italic",padding:10,marginTop:10,color:"white",backgroundColor:"#4a74c5",borderRadius:"10px"}},"Shuffle Board")),n.a.createElement("div",{style:{alignContent:"center"}},n.a.createElement("button",{onClick:function(e){O&&O.current&&(O.current.select(),document.execCommand("copy"),e.target.focus(),console.log("boardURL copied"))},style:{font:"Serif 24px bold italic",padding:10,marginTop:10,color:"white",backgroundColor:"#4a74c5",borderRadius:"10px"}},"Copy Board URL to Clipboard")),n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("textarea",{ref:O,style:{font:"ariel",border:"none",width:x/2,alignContent:"center"},value:E}))),n.a.createElement("div",{style:{position:"relative",alignContent:"center",border:"5px solid lightblue",margin:"20px",backgroundColor:"rgba(0,0,255,0.2)",width:8.67*y+50,height:8*y+50}},o&&d&&n.a.createElement(f,{cards:o,values:d,left:0,top:0,cardSize:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.5df52408.chunk.js.map