(()=>{"use strict";var e={p:"./"};(()=>{var t={};!function e(t,a,n,i){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function s(){}function o(e){var n=a.exports.Promise,i=void 0!==n?n:t.Promise;return"function"==typeof i?new i(e):(e(s,s),null)}var l,c,d,u,h,m,g,f,v,b=(d=Math.floor(1e3/60),u={},h=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(e){var t=Math.random();return u[t]=requestAnimationFrame((function a(n){h===n||h+d-1<n?(h=n,delete u[t],e()):u[t]=requestAnimationFrame(a)})),t},c=function(e){u[e]&&cancelAnimationFrame(u[e])}):(l=function(e){return setTimeout(e,d)},c=function(e){return clearTimeout(e)}),{frame:l,cancel:c}),p=(f={},function(){if(m)return m;if(!n&&r){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,a){e.postMessage({options:t||{},callback:a})}e.init=function(t){var a=t.transferControlToOffscreen();e.postMessage({canvas:a},[a])},e.fire=function(a,n,i){if(g)return t(a,null),g;var r=Math.random().toString(36).slice(2);return g=o((function(n){function s(t){t.data.callback===r&&(delete f[r],e.removeEventListener("message",s),g=null,i(),n())}e.addEventListener("message",s),t(a,r),f[r]=s.bind(null,{data:{callback:r}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),f)f[t](),delete f[t]}}(m)}return m}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(e,t,a){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:y[t],a)}function w(e){return e<0?0:Math.floor(e)}function I(e){return parseInt(e,16)}function E(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:I(t.substring(0,2)),g:I(t.substring(2,4)),b:I(t.substring(4,6))}}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function L(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function _(e,t,a,r,s){var l,c,d=t.slice(),u=e.getContext("2d"),h=o((function(t){function o(){l=c=null,u.clearRect(0,0,r.width,r.height),s(),t()}l=b.frame((function t(){!n||r.width===i.width&&r.height===i.height||(r.width=e.width=i.width,r.height=e.height=i.height),r.width||r.height||(a(e),r.width=e.width,r.height=e.height),u.clearRect(0,0,r.width,r.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var a=t.tick++/t.totalTicks,n=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,r=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-a)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(r-n)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,a,n,i,r,s,o,l){e.save(),e.translate(t,a),e.rotate(r),e.scale(n,i),e.arc(0,0,1,s,o,l),e.restore()}(e,t.x,t.y,Math.abs(r-n)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var o=Math.PI/2*3,l=4*t.scalar,c=8*t.scalar,d=t.x,u=t.y,h=5,m=Math.PI/h;h--;)d=t.x+Math.cos(o)*c,u=t.y+Math.sin(o)*c,e.lineTo(d,u),o+=m,d=t.x+Math.cos(o)*l,u=t.y+Math.sin(o)*l,e.lineTo(d,u),o+=m;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(r),Math.floor(s)),e.lineTo(Math.floor(n),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})),d.length?l=b.frame(t):o()})),c=o}));return{addFettis:function(e){return d=d.concat(e),h},canvas:e,promise:h,reset:function(){l&&b.cancel(l),c&&c()}}}function k(e,a){var n,i=!e,s=!!M(a||{},"resize"),l=M(a,"disableForReducedMotion",Boolean),c=r&&!!M(a||{},"useWorker")?p():null,d=i?C:L,u=!(!e||!c)&&!!e.__confetti_initialized,h="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(t,a,i){for(var r,s,o,l,c,u=M(t,"particleCount",w),h=M(t,"angle",Number),m=M(t,"spread",Number),g=M(t,"startVelocity",Number),f=M(t,"decay",Number),v=M(t,"gravity",Number),b=M(t,"drift",Number),p=M(t,"colors",E),y=M(t,"ticks",Number),I=M(t,"shapes"),x=M(t,"scalar"),C=function(e){var t=M(e,"origin",Object);return t.x=M(t,"x",Number),t.y=M(t,"y",Number),t}(t),L=u,k=[],S=e.width*C.x,P=e.height*C.y;L--;)k.push((r={x:S,y:P,angle:h,spread:m,startVelocity:g,color:p[L%p.length],shape:I[(l=0,c=I.length,Math.floor(Math.random()*(c-l))+l)],ticks:y,decay:f,gravity:v,drift:b,scalar:x},s=void 0,o=void 0,s=r.angle*(Math.PI/180),o=r.spread*(Math.PI/180),{x:r.x,y:r.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*r.startVelocity+Math.random()*r.startVelocity,angle2D:-s+(.5*o-Math.random()*o),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*r.gravity,ovalScalar:.6,scalar:r.scalar}));return n?n.addFettis(k):(n=_(e,k,d,a,i)).promise}function g(a){var r=l||M(a,"disableForReducedMotion",Boolean),g=M(a,"zIndex",Number);if(r&&h)return o((function(e){e()}));i&&n?e=n.canvas:i&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(g),document.body.appendChild(e)),s&&!u&&d(e);var f={width:e.width,height:e.height};function v(){if(c){var t={getBoundingClientRect:function(){if(!i)return e.getBoundingClientRect()}};return d(t),void c.postMessage({resize:{width:t.width,height:t.height}})}f.width=f.height=null}function b(){n=null,s&&t.removeEventListener("resize",v),i&&e&&(document.body.removeChild(e),e=null,u=!1)}return c&&!u&&c.init(e),u=!0,c&&(e.__confetti_initialized=!0),s&&t.addEventListener("resize",v,!1),c?c.fire(a,f,b):m(a,f,b)}return g.reset=function(){c&&c.reset(),n&&n.reset()},g}function S(){return v||(v=k(null,{useWorker:!0,resize:!0})),v}a.exports=function(){return S().apply(this,arguments)},a.exports.reset=function(){S().reset()},a.exports.create=k}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),t,!1);const a=t.exports;t.exports.create;const n=new class{constructor(){this.count=400,this.defaults={origin:{y:.7},zIndex:9999}}fire(e,t){a(Object.assign({},this.defaults,t,{particleCount:Math.floor(this.count*e)}))}play(){this.fire(.25,{spread:26,startVelocity:55}),this.fire(.2,{spread:60}),this.fire(.35,{spread:100,decay:.91,scalar:.8}),this.fire(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),this.fire(.1,{spread:120,startVelocity:45})}},i=[{id:0,name:"banana",img:e.p+"assets/images/95fee7009c951a87b353.png"},{id:1,name:"blackBerryDark",img:e.p+"assets/images/8827348451b957996e61.png"},{id:2,name:"blackCherry",img:e.p+"assets/images/0b9b889eec9b026c4949.png"},{id:3,name:"greenGrape",img:e.p+"assets/images/49a95db80e62a857c1f0.png"},{id:4,name:"lemon",img:e.p+"assets/images/5c257921cfbc10ce2f4b.png"},{id:5,name:"lime",img:e.p+"assets/images/417ca81a7c21b9c62f96.png"},{id:6,name:"orange",img:e.p+"assets/images/948ab90fbdeace81e3e7.png"},{id:7,name:"peach",img:e.p+"assets/images/e0a90d41e14935c9d222.png"},{id:8,name:"pear",img:e.p+"assets/images/1353afc166c958f37827.png"},{id:9,name:"plum",img:e.p+"assets/images/39dc2fa2825fd27b2ada.png"},{id:10,name:"raspberry",img:e.p+"assets/images/84de5196873eeebb13f4.png"},{id:11,name:"redApple",img:e.p+"assets/images/a6f8cf139b456b148dfc.png"},{id:12,name:"redCherry",img:e.p+"assets/images/bb79b6bc30fb851d39be.png"},{id:13,name:"strawberry",img:e.p+"assets/images/5c2607f739246b5852e2.png"},{id:14,name:"watermelon",img:e.p+"assets/images/cf56dd046015ee68877c.png"}];var r=function(e,t,a,n){return new(a||(a=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function o(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}l((n=n.apply(e,t||[])).next())}))};const s=document.getElementById("audio-good"),o=document.getElementById("audio-bad"),l=document.getElementById("audio-congratulations");const c=new class{constructor(){this.tourInProgress=!1,this.gameInProgress=!1}createBoard(){this.gameInProgress=!0;const e=u.getLevel(),t=i.sort((()=>Math.random()-Math.random())).slice(0,e),a=[];for(let n=0;n<2*e;n++){const i=()=>{const n=(r=0,s=e-1,Math.floor(Math.random()*(s-r+1))+r);var r,s;const o=t[n];return a.filter((e=>e.id===o.id)).length>1?i():Object.assign(Object.assign({},t[n]),{completed:!1})},r=i();a[n]=r}this.board=a,this.renderBoard()}renderBoard(){if(!this.board)return;const e=document.getElementById("board");if(!e)throw new Error('element with id "board" does not exists');e.innerHTML="";let t=0;for(const a of this.board)e.innerHTML+=`\n                <div class="game-card" data-index="${t}">\n                    <div class="game-card__inner">\n                        <div class="game-card__front">\n                            <img\n                                src=${a.img}\n                                alt=${a.name}\n                                draggable="false"\n                            />\n                        </div>\n                        <div class="game-card__back">\n                            <div class="game-card__back-image" />\n                        </div>\n                    </div>\n                </div>`,t++;document.querySelectorAll(".game-card").forEach((e=>{e.addEventListener("click",(()=>c.handleCardClick(e,Number(e.dataset.index))))}))}handleCardClick(e,t){return r(this,void 0,void 0,(function*(){if(!this.board||this.tourInProgress||t===this.currentCardIndex||this.board[t].completed)return;if(this.tourInProgress=!0,e.classList.add("game-card--active"),void 0===this.currentCardIndex)return this.currentCardIndex=t,this.currentCardElement=e,void(this.tourInProgress=!1);const a=this.board[this.currentCardIndex].id===this.board[t].id;a?s.play():o.play(),yield new Promise((n=>setTimeout((()=>{var i,r,s;this.board&&void 0!==this.currentCardIndex&&(a?(null===(i=this.currentCardElement)||void 0===i||i.classList.remove("game-card--active"),null===(r=this.currentCardElement)||void 0===r||r.classList.add("game-card--completed"),this.board[this.currentCardIndex].completed=!0,e.classList.remove("game-card--active"),e.classList.add("game-card--completed"),this.board[t].completed=!0):(null===(s=this.currentCardElement)||void 0===s||s.classList.remove("game-card--active"),e.classList.remove("game-card--active")),n(void 0))}),u.getSpeed()))),this.currentCardElement=void 0,this.currentCardIndex=void 0,u.makeMove(),this.checkGameStatus(),this.tourInProgress=!1}))}checkGameStatus(){var e;const t=null===(e=this.board)||void 0===e?void 0:e.filter((e=>e.completed));(null==t?void 0:t.length)===2*u.getLevel()&&(this.gameInProgress=!1,this.board=[],l.play(),n.play(),u.endGame())}getGameProgress(){return this.gameInProgress}},d=document.querySelector(".modal-wrapper");const u=new class{constructor(){this.level=5,this.moves=0,this.roundsPlayed=0,this.speed=1e3;const e=document.getElementById("moves"),t=document.getElementById("level"),a=document.getElementById("rounds-played"),n=document.querySelectorAll(".game-table__button"),i=document.querySelectorAll(".modal__speed-button"),r=document.querySelectorAll(".modal__level-button");this.movesElement=e,this.levelElement=t,this.roundsPlayedElement=a,this.speedButtons=n,this.modalspeedButtons=i,this.modalLevelButtons=r,[...i,...n].forEach((e=>e.addEventListener("click",(()=>this.changeSpeed(e.value,e))))),r.forEach((e=>e.addEventListener("click",(()=>this.changeLevel(Number(e.value),e)))))}changeSpeed(e,t){var a,n;if(!t.classList.contains("modal__settings-button--active")&&(this.modalspeedButtons.forEach((e=>e.classList.remove("modal__settings-button--active"))),null===(a=[...this.modalspeedButtons].find((t=>t.value===e)))||void 0===a||a.classList.add("modal__settings-button--active"),!t.classList.contains("game-table__button--active")))return this.speedButtons.forEach((e=>e.classList.remove("game-table__button--active"))),null===(n=[...this.speedButtons].find((t=>t.value===e)))||void 0===n||n.classList.add("game-table__button--active"),this.speed="fast"===e?500:"slow"===e?3e3:1e3}changeLevel(e,t){t.classList.contains("modal__settings-button--active")||(this.modalLevelButtons.forEach((e=>e.classList.remove("modal__settings-button--active"))),t.classList.add("modal__settings-button--active"),this.level=e)}getSpeed(){return this.speed}getLevel(){return this.level}makeMove(){this.moves++,this.renderInfo()}renderInfo(){this.movesElement.textContent=this.moves.toString(),this.levelElement.textContent=this.level.toString(),this.roundsPlayedElement.textContent=this.roundsPlayed.toString()}startGame(){this.moves=0,null==d||d.classList.add("modal-wrapper--hidden"),this.renderInfo(),c.createBoard()}endGame(){this.roundsPlayed++,this.renderInfo(),null==d||d.classList.remove("modal-wrapper--hidden")}},h=document.getElementById("start-button");u.renderInfo(),null==h||h.addEventListener("click",(()=>u.startGame()))})()})();