(this.webpackJsonpcatan=this.webpackJsonpcatan||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/brick.c9ce5fbf.png"},function(e,t,a){e.exports=a.p+"static/media/desert.ac87c771.png"},function(e,t,a){e.exports=a.p+"static/media/wheat.54206543.png"},function(e,t,a){e.exports=a.p+"static/media/ore.dc5ae611.png"},function(e,t,a){e.exports=a.p+"static/media/sheep.dcc88d02.png"},function(e,t,a){e.exports=a.p+"static/media/wood.09af1d5a.png"},,,,,,function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(12),c=a.n(r),i=(a(20),a(9)),l=a(4),s=a(14);a(21);var p=function(e){var t=.2*e.width;return n.a.createElement("div",null,n.a.createElement("img",{src:e.image,alt:e.image,style:{position:"absolute",top:e.top,left:e.left,width:e.width,height:e.height,opacity:50,transform:"rotateZ(30deg)"}}),e.value&&n.a.createElement("span",{style:{position:"absolute",borderRadius:"50%",backgroundColor:"#ffffff",top:e.top+e.height/2-t/2,left:e.left+e.width/2-t/2,width:t,height:t}}," ",e.value))};var f=function(e){var t=e.left,a=e.cardSize,o=a/2,r=.866*o,c=[{top:0,left:t+2*r},{top:0,left:t+4*r},{top:0,left:t+6*r},{top:0+1.5*o,left:t+r},{top:0+1.5*o,left:t+3*r},{top:0+1.5*o,left:t+5*r},{top:0+1.5*o,left:t+7*r},{top:0+3*o,left:t},{top:0+3*o,left:t+2*r},{top:0+3*o,left:t+4*r},{top:0+3*o,left:t+6*r},{top:0+3*o,left:t+8*r},{top:0+4.5*o,left:t+r},{top:0+4.5*o,left:t+3*r},{top:0+4.5*o,left:t+5*r},{top:0+4.5*o,left:t+7*r},{top:0+6*o,left:t+2*r},{top:0+6*o,left:t+4*r},{top:0+6*o,left:t+6*r}];return n.a.createElement("div",null,c.map((function(t,o){return n.a.createElement(p,{image:e.cards[o],value:e.values[o],top:t.top,left:t.left,width:a,height:a})})))},d={brick:a(22),desert:a(23),wheat:a(24),ore:a(25),sheep:a(26),wood:a(27),"":""};function u(e){for(var t=e.length-1;t>=0;t--){var a=Math.floor(Math.random()*(t+1)),o=e[a];e[a]=e[t],e[t]=o}return e}function h(){var e=["ore","ore","ore","brick","brick","brick","wheat","wheat","wheat","wheat","sheep","sheep","sheep","sheep","wood","wood","wood","wood"];return u(e),e=[].concat(Object(l.a)(e.slice(0,9)),["desert"],Object(l.a)(e.slice(9))).map((function(e){return d[e]})),console.log("generated cards",e),e}function m(){var e=["1","2","3","3","4","4","5","5","6","6","8","8","9","9","10","10","11","12"];return u(e),e=[].concat(Object(l.a)(e.slice(0,9)),[""],Object(l.a)(e.slice(9))),console.log("generated cards",e),e}var g=function(){var e=Object(o.useState)(h()),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(m()),l=Object(i.a)(c,2),p=l[0],d=l[1];return n.a.createElement(s.a,{basename:"/catan"},n.a.createElement("div",{className:"App"},n.a.createElement("button",{onClick:function(){r(h()),d(m())},name:"generate",value:"Generate Board",style:{position:"absolute",width:100,height:100,top:10,left:10}},"Genereate Board"),a&&p&&n.a.createElement(f,{cards:a,values:p,left:150,top:150,cardSize:150})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.bd58d380.chunk.js.map