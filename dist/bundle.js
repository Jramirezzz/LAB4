(()=>{"use strict";var t={603:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),s=e.n(a)()(r());s.push([t.id,".up{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.name{\r\n    font-size: 50px;\r\n    color: black;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n.img{\r\n    width: 200px;\r\n}\r\n.all{\r\n    display: flex;\r\n    flex-direction:column;\r\n}",""]);const c=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:t=>{t.exports=function(t){return t[1]}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return t[o](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t,n=e(603);!function(t){t.personaje="personaje",t.casaDeHogwarts="casaDeHogwarts",t.apodo="apodo",t.imagen="imagen"}(t||(t={}));class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({personaje:null,casaDeHogwarts:null,apodo:null,imagen:null})}connectedCallback(){this.render()}attributeChangedCallback(t,n,e){this[t]=e,this.render()}render(){var t;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n                <section class="all">\n                    <section >\n                        <section class = "up">\n                        <h1 class = "name">${this.personaje}</h1>\n                        <img class="img" src="${this.imagen}">\n                        <p class = "apodo">Apodo:${this.apodo}</p>\n                        <p>house:${this.casaDeHogwarts}</p>\n                        </section> \n                        </section> \n                `;const e=this.ownerDocument.createElement("style");e.innerHTML=n.Z,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}}customElements.define("my-post",o);class r extends HTMLElement{constructor(){super(),this.carta=[],this.attachShadow({mode:"open"})}connectedCallback(){return n=this,e=void 0,r=function*(){const n=yield function(){return t=this,n=void 0,o=function*(){try{const t=[];for(let n=1;n<2;n++){const e=yield(yield fetch("https://harry-potter-api.onrender.com/personajes/"+n)).json();t.push(e)}return t}catch(t){console.log(t)}},new((e=void 0)||(e=Promise))((function(r,a){function s(t){try{i(o.next(t))}catch(t){a(t)}}function c(t){try{i(o.throw(t))}catch(t){a(t)}}function i(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,c)}i((o=o.apply(t,n||[])).next())}));var t,n,e,o}();null==n||n.forEach((n=>{const e=this.ownerDocument.createElement("my-post");e.setAttribute(t.personaje,n.personaje),e.setAttribute(t.casaDeHogwarts,n.casaDeHogwarts),e.setAttribute(t.apodo,n.apodo),e.setAttribute(t.imagen,n.imagen),this.carta.push(e)})),this.render(this.carta)},new((o=void 0)||(o=Promise))((function(t,a){function s(t){try{i(r.next(t))}catch(t){a(t)}}function c(t){try{i(r.throw(t))}catch(t){a(t)}}function i(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,c)}i((r=r.apply(n,e||[])).next())}));var n,e,o,r}render(t){var n;if(this.shadowRoot){this.shadowRoot.innerHTML="";for(let e=0;e<t.length;e++)null===(n=this.shadowRoot)||void 0===n||n.appendChild(t[e])}}}customElements.define("my-contain",r)})()})();