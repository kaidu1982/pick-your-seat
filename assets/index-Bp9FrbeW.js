(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Fc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const dt={},Nr=[],Wn=()=>{},Yd=()=>!1,fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Oc=t=>t.startsWith("onUpdate:"),Vt=Object.assign,Bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ym=Object.prototype.hasOwnProperty,ot=(t,e)=>ym.call(t,e),He=Array.isArray,Fr=t=>ho(t)==="[object Map]",qd=t=>ho(t)==="[object Set]",ke=t=>typeof t=="function",wt=t=>typeof t=="string",ki=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",jd=t=>(gt(t)||ke(t))&&ke(t.then)&&ke(t.catch),Kd=Object.prototype.toString,ho=t=>Kd.call(t),Em=t=>ho(t).slice(8,-1),Zd=t=>ho(t)==="[object Object]",kc=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Tm=/-\w/g,An=po(t=>t.replace(Tm,e=>e.slice(1).toUpperCase())),Am=/\B([A-Z])/g,ur=po(t=>t.replace(Am,"-$1").toLowerCase()),Hs=po(t=>t.charAt(0).toUpperCase()+t.slice(1)),No=po(t=>t?`on${Hs(t)}`:""),Ii=(t,e)=>!Object.is(t,e),Fo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},wm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uu;const mo=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=wt(i)?Dm(i):Ni(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(wt(t)||gt(t))return t}const Cm=/;(?![^(]*\))/g,Rm=/:([^]+)/,Pm=/\/\*[^]*?\*\//g;function Dm(t){const e={};return t.replace(Pm,"").split(Cm).forEach(n=>{if(n){const i=n.split(Rm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pn(t){let e="";if(wt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=pn(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lm=Fc(Im);function Qd(t){return!!t||t===""}const eh=t=>!!(t&&t.__v_isRef===!0),xo=t=>wt(t)?t:t==null?"":He(t)||gt(t)&&(t.toString===Kd||!ke(t.toString))?eh(t)?xo(t.value):JSON.stringify(t,th,2):String(t),th=(t,e)=>eh(e)?th(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Oo(i,s)+" =>"]=r,n),{})}:qd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oo(n))}:ki(e)?Oo(e):gt(e)&&!He(e)&&!Zd(e)?String(e):e,Oo=(t,e="")=>{var n;return ki(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ot;class nh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ts(t){return new nh(t)}function zc(){return Ot}function Gs(t,e=!1){Ot&&Ot.cleanups.push(t)}let pt;const Bo=new WeakSet;class ih{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bo.has(this)&&(Bo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),ah(this);const e=pt,n=Ln;pt=this,Ln=!0;try{return this.fn()}finally{oh(this),pt=e,Ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cl(this)&&this.run()}get dirty(){return Cl(this)}}let rh=0,gs,_s;function sh(t,e=!1){if(t.flags|=8,e){t.next=_s,_s=t;return}t.next=gs,gs=t}function Vc(){rh++}function Hc(){if(--rh>0)return;if(_s){let e=_s;for(_s=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;gs;){let e=gs;for(gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function ah(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function oh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Gc(i),Um(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Cl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===As)||(t.globalVersion=As,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Cl(t))))return;t.flags|=2;const e=t.dep,n=pt,i=Ln;pt=t,Ln=!0;try{ah(t);const r=t.fn(t._value);(e.version===0||Ii(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=n,Ln=i,oh(t),t.flags&=-3}}function Gc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Gc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Um(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ln=!0;const ch=[];function xi(){ch.push(Ln),Ln=!1}function gi(){const t=ch.pop();Ln=t===void 0?!0:t}function Nu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pt;pt=void 0;try{e()}finally{pt=n}}}let As=0;class Nm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pt||!Ln||pt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pt)n=this.activeLink=new Nm(pt,this),pt.deps?(n.prevDep=pt.depsTail,pt.depsTail.nextDep=n,pt.depsTail=n):pt.deps=pt.depsTail=n,uh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pt.depsTail,n.nextDep=void 0,pt.depsTail.nextDep=n,pt.depsTail=n,pt.deps===n&&(pt.deps=i)}return n}trigger(e){this.version++,As++,this.notify(e)}notify(e){Vc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hc()}}}function uh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)uh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wa=new WeakMap,nr=Symbol(""),Rl=Symbol(""),ws=Symbol("");function Bt(t,e,n){if(Ln&&pt){let i=Wa.get(t);i||Wa.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Wc),r.map=i,r.key=n),r.track()}}function li(t,e,n,i,r,s){const a=Wa.get(t);if(!a){As++;return}const o=l=>{l&&l.trigger()};if(Vc(),e==="clear")a.forEach(o);else{const l=He(t),c=l&&kc(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ws||!ki(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(ws)),e){case"add":l?c&&o(a.get("length")):(o(a.get(nr)),Fr(t)&&o(a.get(Rl)));break;case"delete":l||(o(a.get(nr)),Fr(t)&&o(a.get(Rl)));break;case"set":Fr(t)&&o(a.get(nr));break}}Hc()}function Fm(t,e){const n=Wa.get(t);return n&&n.get(e)}function pr(t){const e=et(t);return e===t?e:(Bt(e,"iterate",ws),Tn(t)?e:e.map(Lt))}function go(t){return Bt(t=et(t),"iterate",ws),t}const Om={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,Lt)},concat(...t){return pr(this).concat(...t.map(e=>He(e)?pr(e):e))},entries(){return ko(this,"entries",t=>(t[1]=Lt(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(Lt),arguments)},find(t,e){return Qn(this,"find",t,e,Lt,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,Lt,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return zo(this,"includes",t)},indexOf(...t){return zo(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return zo(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return ns(this,"pop")},push(...t){return ns(this,"push",t)},reduce(t,...e){return Fu(this,"reduce",t,e)},reduceRight(t,...e){return Fu(this,"reduceRight",t,e)},shift(){return ns(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return ns(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return ns(this,"unshift",t)},values(){return ko(this,"values",Lt)}};function ko(t,e,n){const i=go(t),r=i[e]();return i!==t&&!Tn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Bm=Array.prototype;function Qn(t,e,n,i,r,s){const a=go(t),o=a!==t&&!Tn(t),l=a[e];if(l!==Bm[e]){const f=l.apply(t,s);return o?Lt(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,Lt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Fu(t,e,n,i){const r=go(t);let s=n;return r!==t&&(Tn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Lt(o),l,t)}),r[e](s,...i)}function zo(t,e,n){const i=et(t);Bt(i,"iterate",ws);const r=i[e](...n);return(r===-1||r===!1)&&Yc(n[0])?(n[0]=et(n[0]),i[e](...n)):r}function ns(t,e,n=[]){xi(),Vc();const i=et(t)[e].apply(t,n);return Hc(),gi(),i}const km=Fc("__proto__,__v_isRef,__isVue"),fh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ki));function zm(t){ki(t)||(t=String(t));const e=et(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class dh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Km:xh:s?mh:ph).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=Om[n]))return l;if(n==="hasOwnProperty")return zm}const o=Reflect.get(e,n,xt(e)?e:i);if((ki(n)?fh.has(n):km(n))||(r||Bt(e,"get",n),s))return o;if(xt(o)){const l=a&&kc(n)?o:o.value;return r&&gt(l)?Xa(l):l}return gt(o)?r?Xa(o):Fn(o):o}}class hh extends dh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Fi(s);if(!Tn(i)&&!Fi(i)&&(s=et(s),i=et(i)),!He(e)&&xt(s)&&!xt(i))return l||(s.value=i),!0}const a=He(e)&&kc(n)?Number(n)<e.length:ot(e,n),o=Reflect.set(e,n,i,xt(e)?e:r);return e===et(r)&&(a?Ii(i,s)&&li(e,"set",n,i):li(e,"add",n,i)),o}deleteProperty(e,n){const i=ot(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&li(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ki(n)||!fh.has(n))&&Bt(e,"has",n),i}ownKeys(e){return Bt(e,"iterate",He(e)?"length":nr),Reflect.ownKeys(e)}}class Vm extends dh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hm=new hh,Gm=new Vm,Wm=new hh(!0);const Pl=t=>t,aa=t=>Reflect.getPrototypeOf(t);function Xm(t,e,n){return function(...i){const r=this.__v_raw,s=et(r),a=Fr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Pl:e?$a:Lt;return!e&&Bt(s,"iterate",l?Rl:nr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function oa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $m(t,e){const n={get(r){const s=this.__v_raw,a=et(s),o=et(r);t||(Ii(r,o)&&Bt(a,"get",r),Bt(a,"get",o));const{has:l}=aa(a),c=e?Pl:t?$a:Lt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Bt(et(r),"iterate",nr),r.size},has(r){const s=this.__v_raw,a=et(s),o=et(r);return t||(Ii(r,o)&&Bt(a,"has",r),Bt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=et(o),c=e?Pl:t?$a:Lt;return!t&&Bt(l,"iterate",nr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Vt(n,t?{add:oa("add"),set:oa("set"),delete:oa("delete"),clear:oa("clear")}:{add(r){!e&&!Tn(r)&&!Fi(r)&&(r=et(r));const s=et(this);return aa(s).has.call(s,r)||(s.add(r),li(s,"add",r,r)),this},set(r,s){!e&&!Tn(s)&&!Fi(s)&&(s=et(s));const a=et(this),{has:o,get:l}=aa(a);let c=o.call(a,r);c||(r=et(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ii(s,u)&&li(a,"set",r,s):li(a,"add",r,s),this},delete(r){const s=et(this),{has:a,get:o}=aa(s);let l=a.call(s,r);l||(r=et(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&li(s,"delete",r,void 0),c},clear(){const r=et(this),s=r.size!==0,a=r.clear();return s&&li(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Xm(r,t,e)}),n}function Xc(t,e){const n=$m(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ot(n,r)&&r in i?n:i,r,s)}const Ym={get:Xc(!1,!1)},qm={get:Xc(!1,!0)},jm={get:Xc(!0,!1)};const ph=new WeakMap,mh=new WeakMap,xh=new WeakMap,Km=new WeakMap;function Zm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jm(t){return t.__v_skip||!Object.isExtensible(t)?0:Zm(Em(t))}function Fn(t){return Fi(t)?t:$c(t,!1,Hm,Ym,ph)}function Qm(t){return $c(t,!1,Wm,qm,mh)}function Xa(t){return $c(t,!0,Gm,jm,xh)}function $c(t,e,n,i,r){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Jm(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function hi(t){return Fi(t)?hi(t.__v_raw):!!(t&&t.__v_isReactive)}function Fi(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function Yc(t){return t?!!t.__v_raw:!1}function et(t){const e=t&&t.__v_raw;return e?et(e):t}function qc(t){return!ot(t,"__v_skip")&&Object.isExtensible(t)&&Jd(t,"__v_skip",!0),t}const Lt=t=>gt(t)?Fn(t):t,$a=t=>gt(t)?Xa(t):t;function xt(t){return t?t.__v_isRef===!0:!1}function ht(t){return gh(t,!1)}function Un(t){return gh(t,!0)}function gh(t,e){return xt(t)?t:new e0(t,e)}class e0{constructor(e,n){this.dep=new Wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:et(e),this._value=n?e:Lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Tn(e)||Fi(e);e=i?e:et(e),Ii(e,n)&&(this._rawValue=e,this._value=i?e:Lt(e),this.dep.trigger())}}function qe(t){return xt(t)?t.value:t}function Cs(t){return ke(t)?t():qe(t)}const t0={get:(t,e,n)=>e==="__v_raw"?t:qe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xt(r)&&!xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function _h(t){return hi(t)?t:new Proxy(t,t0)}function jc(t){const e=He(t)?new Array(t.length):{};for(const n in t)e[n]=vh(t,n);return e}class n0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Fm(et(this._object),this._key)}}class i0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function We(t,e,n){return xt(t)?t:ke(t)?new i0(t):gt(t)&&arguments.length>1?vh(t,e,n):ht(t)}function vh(t,e,n){const i=t[e];return xt(i)?i:new n0(t,e,n)}class r0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=As-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return sh(this,!0),!0}get value(){const e=this.dep.track();return lh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function s0(t,e,n=!1){let i,r;return ke(t)?i=t:(i=t.get,r=t.set),new r0(i,r,n)}const la={},Ya=new WeakMap;let Zi;function a0(t,e=!1,n=Zi){if(n){let i=Ya.get(n);i||Ya.set(n,i=[]),i.push(t)}}function o0(t,e,n=dt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=A=>r?A:Tn(A)||r===!1||r===0?ci(A,1):ci(A);let u,f,d,p,x=!1,_=!1;if(xt(t)?(f=()=>t.value,x=Tn(t)):hi(t)?(f=()=>c(t),x=!0):He(t)?(_=!0,x=t.some(A=>hi(A)||Tn(A)),f=()=>t.map(A=>{if(xt(A))return A.value;if(hi(A))return c(A);if(ke(A))return l?l(A,2):A()})):ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){xi();try{d()}finally{gi()}}const A=Zi;Zi=u;try{return l?l(t,3,[p]):t(p)}finally{Zi=A}}:f=Wn,e&&r){const A=f,C=r===!0?1/0:r;f=()=>ci(A(),C)}const m=zc(),h=()=>{u.stop(),m&&m.active&&Bc(m.effects,u)};if(s&&e){const A=e;e=(...C)=>{A(...C),h()}}let E=_?new Array(t.length).fill(la):la;const S=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const C=u.run();if(r||x||(_?C.some((w,P)=>Ii(w,E[P])):Ii(C,E))){d&&d();const w=Zi;Zi=u;try{const P=[C,E===la?void 0:_&&E[0]===la?[]:E,p];E=C,l?l(e,3,P):e(...P)}finally{Zi=w}}}else u.run()};return o&&o(S),u=new ih(f),u.scheduler=a?()=>a(S,!1):S,p=A=>a0(A,!1,u),d=u.onStop=()=>{const A=Ya.get(u);if(A){if(l)l(A,4);else for(const C of A)C();Ya.delete(u)}},e?i?S(!0):E=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ci(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xt(t))ci(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)ci(t[i],e,n);else if(qd(t)||Fr(t))t.forEach(i=>{ci(i,e,n)});else if(Zd(t)){for(const i in t)ci(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ci(t[i],e,n)}return t}function Ws(t,e,n,i){try{return i?t(...i):t()}catch(r){Xs(r,e,n)}}function Yn(t,e,n,i){if(ke(t)){const r=Ws(t,e,n,i);return r&&jd(r)&&r.catch(s=>{Xs(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Yn(t[s],e,n,i));return r}}function Xs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||dt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){xi(),Ws(s,null,10,[t,l,c]),gi();return}}l0(t,n,r,i,a)}function l0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Xt=[];let kn=-1;const Or=[];let Ci=null,Ur=0;const bh=Promise.resolve();let qa=null;function _o(t){const e=qa||bh;return t?e.then(this?t.bind(this):t):e}function c0(t){let e=kn+1,n=Xt.length;for(;e<n;){const i=e+n>>>1,r=Xt[i],s=Rs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Kc(t){if(!(t.flags&1)){const e=Rs(t),n=Xt[Xt.length-1];!n||!(t.flags&2)&&e>=Rs(n)?Xt.push(t):Xt.splice(c0(e),0,t),t.flags|=1,Sh()}}function Sh(){qa||(qa=bh.then(yh))}function u0(t){He(t)?Or.push(...t):Ci&&t.id===-1?Ci.splice(Ur+1,0,t):t.flags&1||(Or.push(t),t.flags|=1),Sh()}function Ou(t,e,n=kn+1){for(;n<Xt.length;n++){const i=Xt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Xt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Mh(t){if(Or.length){const e=[...new Set(Or)].sort((n,i)=>Rs(n)-Rs(i));if(Or.length=0,Ci){Ci.push(...e);return}for(Ci=e,Ur=0;Ur<Ci.length;Ur++){const n=Ci[Ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ci=null,Ur=0}}const Rs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yh(t){try{for(kn=0;kn<Xt.length;kn++){const e=Xt[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ws(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<Xt.length;kn++){const e=Xt[kn];e&&(e.flags&=-2)}kn=-1,Xt.length=0,Mh(),qa=null,(Xt.length||Or.length)&&yh()}}let ln=null,Eh=null;function ja(t){const e=ln;return ln=t,Eh=t&&t.type.__scopeId||null,e}function ar(t,e=ln,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ja(-1);const s=ja(e);let a;try{a=t(...r)}finally{ja(s),i._d&&Ja(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function f0(t,e){if(ln===null)return t;const n=Eo(ln),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=dt]=e[r];s&&(ke(s)&&(s={mounted:s,updated:s}),s.deep&&ci(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function Hi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(xi(),Yn(l,n,8,[t.el,o,t,e]),gi())}}const d0=Symbol("_vte"),h0=t=>t.__isTeleport,p0=Symbol("_leaveCb");function Zc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function en(t,e){return ke(t)?Vt({name:t.name},e,{setup:t}):t}function m0(){const t=yo();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Jc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ka=new WeakMap;function vs(t,e,n,i,r=!1){if(He(t)){t.forEach((x,_)=>vs(x,e&&(He(e)?e[_]:e),n,i,r));return}if(bs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Eo(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===dt?o.refs={}:o.refs,f=o.setupState,d=et(f),p=f===dt?Yd:x=>ot(d,x);if(c!=null&&c!==l){if(Bu(e),wt(c))u[c]=null,p(c)&&(f[c]=null);else if(xt(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(ke(l))Ws(l,o,12,[a,u]);else{const x=wt(l),_=xt(l);if(x||_){const m=()=>{if(t.f){const h=x?p(l)?f[l]:u[l]:l.value;if(r)He(h)&&Bc(h,s);else if(He(h))h.includes(s)||h.push(s);else if(x)u[l]=[s],p(l)&&(f[l]=u[l]);else{const E=[s];l.value=E,t.k&&(u[t.k]=E)}}else x?(u[l]=a,p(l)&&(f[l]=a)):_&&(l.value=a,t.k&&(u[t.k]=a))};if(a){const h=()=>{m(),Ka.delete(t)};h.id=-1,Ka.set(t,h),an(h,n)}else Bu(t),m()}}}function Bu(t){const e=Ka.get(t);e&&(e.flags|=8,Ka.delete(t))}const ku=t=>t.nodeType===8;mo().requestIdleCallback;mo().cancelIdleCallback;function x0(t,e){if(ku(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(ku(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const bs=t=>!!t.type.__asyncLoader;function g0(t){ke(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:a,suspensible:o=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,p()),p=()=>{let x;return c||(x=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,h)=>{l(_,()=>m(d()),()=>h(_),f+1)});throw _}).then(_=>x!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return en({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(x,_,m){let h=!1;(_.bu||(_.bu=[])).push(()=>h=!0);const E=()=>{h||m()},S=s?()=>{const A=s(E,C=>x0(x,C));A&&(_.bum||(_.bum=[])).push(A)}:E;u?S():p().then(()=>!_.isUnmounted&&S())},get __asyncResolved(){return u},setup(){const x=Ut;if(Jc(x),u)return()=>ca(u,x);const _=S=>{c=null,Xs(S,x,13,!i)};if(o&&x.suspense||Vr)return p().then(S=>()=>ca(S,x)).catch(S=>(_(S),()=>i?Ve(i,{error:S}):null));const m=ht(!1),h=ht(),E=ht(!!r);return r&&setTimeout(()=>{E.value=!1},r),a!=null&&setTimeout(()=>{if(!m.value&&!h.value){const S=new Error(`Async component timed out after ${a}ms.`);_(S),h.value=S}},a),p().then(()=>{m.value=!0,x.parent&&Qc(x.parent.vnode)&&x.parent.update()}).catch(S=>{_(S),h.value=S}),()=>{if(m.value&&u)return ca(u,x);if(h.value&&i)return Ve(i,{error:h.value});if(n&&!E.value)return ca(n,x)}}})}function ca(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,a=Ve(t,i,r);return a.ref=n,a.ce=s,delete e.vnode.ce,a}const Qc=t=>t.type.__isKeepAlive;function _0(t,e){Th(t,"a",e)}function v0(t,e){Th(t,"da",e)}function Th(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Qc(r.parent.vnode)&&b0(i,e,n,r),r=r.parent}}function b0(t,e,n,i){const r=vo(e,t,i,!0);jr(()=>{Bc(i[e],r)},n)}function vo(t,e,n=Ut,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{xi();const o=js(n),l=Yn(e,n,t,a);return o(),gi(),l});return i?r.unshift(s):r.push(s),s}}const vi=t=>(e,n=Ut)=>{(!Vr||t==="sp")&&vo(t,(...i)=>e(...i),n)},S0=vi("bm"),$s=vi("m"),M0=vi("bu"),Ah=vi("u"),bo=vi("bum"),jr=vi("um"),y0=vi("sp"),E0=vi("rtg"),T0=vi("rtc");function A0(t,e=Ut){vo("ec",t,e)}const w0="components",C0=Symbol.for("v-ndc");function R0(t){return wt(t)&&P0(w0,t,!1)||t}function P0(t,e,n=!0,i=!1){const r=ln||Ut;if(r){const s=r.type;{const o=_x(s,!1);if(o&&(o===e||o===An(e)||o===Hs(An(e))))return s}const a=zu(r[t]||s[t],e)||zu(r.appContext[t],e);return!a&&i?s:a}}function zu(t,e){return t&&(t[e]||t[An(e)]||t[Hs(An(e))])}function D0(t,e,n,i){let r;const s=n,a=He(t);if(a||wt(t)){const o=a&&hi(t);let l=!1,c=!1;o&&(l=!Tn(t),c=Fi(t),t=go(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?$a(Lt(t[u])):Lt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(gt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Dl=t=>t?Xh(t)?Eo(t):Dl(t.parent):null,Ss=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dl(t.parent),$root:t=>Dl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ch(t),$forceUpdate:t=>t.f||(t.f=()=>{Kc(t.update)}),$nextTick:t=>t.n||(t.n=_o.bind(t.proxy)),$watch:t=>Q0.bind(t)}),Vo=(t,e)=>t!==dt&&!t.__isScriptSetup&&ot(t,e),I0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Vo(i,e))return a[e]=1,i[e];if(r!==dt&&ot(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&ot(c,e))return a[e]=3,s[e];if(n!==dt&&ot(n,e))return a[e]=4,n[e];Il&&(a[e]=0)}}const u=Ss[e];let f,d;if(u)return e==="$attrs"&&Bt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==dt&&ot(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Vo(r,e)?(r[e]=n,!0):i!==dt&&ot(i,e)?(i[e]=n,!0):ot(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:a}},o){let l,c;return!!(n[o]||t!==dt&&o[0]!=="$"&&ot(t,o)||Vo(e,o)||(l=s[0])&&ot(l,o)||ot(i,o)||ot(Ss,o)||ot(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ot(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vu(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Il=!0;function L0(t){const e=Ch(t),n=t.proxy,i=t.ctx;Il=!1,e.beforeCreate&&Hu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:x,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:E,destroyed:S,unmounted:A,render:C,renderTracked:w,renderTriggered:P,errorCaptured:L,serverPrefetch:b,expose:v,inheritAttrs:D,components:F,directives:z,filters:$}=e;if(c&&U0(c,i,null),a)for(const ne in a){const G=a[ne];ke(G)&&(i[ne]=G.bind(n))}if(r){const ne=r.call(n,n);gt(ne)&&(t.data=Fn(ne))}if(Il=!0,s)for(const ne in s){const G=s[ne],ue=ke(G)?G.bind(n,n):ke(G.get)?G.get.bind(n,n):Wn,de=!ke(G)&&ke(G.set)?G.set.bind(n):Wn,Te=Ke({get:ue,set:de});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Fe=>Te.value=Fe})}if(o)for(const ne in o)wh(o[ne],i,n,ne);if(l){const ne=ke(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(G=>{Kr(G,ne[G])})}u&&Hu(u,t,"c");function X(ne,G){He(G)?G.forEach(ue=>ne(ue.bind(n))):G&&ne(G.bind(n))}if(X(S0,f),X($s,d),X(M0,p),X(Ah,x),X(_0,_),X(v0,m),X(A0,L),X(T0,w),X(E0,P),X(bo,E),X(jr,A),X(y0,b),He(v))if(v.length){const ne=t.exposed||(t.exposed={});v.forEach(G=>{Object.defineProperty(ne,G,{get:()=>n[G],set:ue=>n[G]=ue,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===Wn&&(t.render=C),D!=null&&(t.inheritAttrs=D),F&&(t.components=F),z&&(t.directives=z),b&&Jc(t)}function U0(t,e,n=Wn){He(t)&&(t=Ll(t));for(const i in t){const r=t[i];let s;gt(r)?"default"in r?s=Nn(r.from||i,r.default,!0):s=Nn(r.from||i):s=Nn(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Hu(t,e,n){Yn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function wh(t,e,n,i){let r=i.includes(".")?zh(n,i):()=>n[i];if(wt(t)){const s=e[t];ke(s)&&Jt(r,s)}else if(ke(t))Jt(r,t.bind(n));else if(gt(t))if(He(t))t.forEach(s=>wh(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&Jt(r,s,t)}}function Ch(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Za(l,c,a,!0)),Za(l,e,a)),gt(e)&&s.set(e,l),l}function Za(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Za(t,s,n,!0),r&&r.forEach(a=>Za(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=N0[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const N0={data:Gu,props:Wu,emits:Wu,methods:ds,computed:ds,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:ds,directives:ds,watch:O0,provide:Gu,inject:F0};function Gu(t,e){return e?t?function(){return Vt(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function F0(t,e){return ds(Ll(t),Ll(e))}function Ll(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?Vt(Object.create(null),t,e):e}function Wu(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Vt(Object.create(null),Vu(t),Vu(e??{})):e}function O0(t,e){if(!t)return e;if(!e)return t;const n=Vt(Object.create(null),t);for(const i in e)n[i]=Gt(t[i],e[i]);return n}function Rh(){return{app:null,config:{isNativeTag:Yd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B0=0;function k0(t,e){return function(i,r=null){ke(i)||(i=Vt({},i)),r!=null&&!gt(r)&&(r=null);const s=Rh(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:B0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Sx,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ke(u.install)?(a.add(u),u.install(c,...f)):ke(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ve(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Eo(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Yn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ir;ir=c;try{return u()}finally{ir=f}}};return c}}let ir=null;function Kr(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function Nn(t,e,n=!1){const i=yo();if(i||ir){let r=ir?ir._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}function z0(){return!!(yo()||ir)}const Ph={},Dh=()=>Object.create(Ph),Ih=t=>Object.getPrototypeOf(t)===Ph;function V0(t,e,n,i=!1){const r={},s=Dh();t.propsDefaults=Object.create(null),Lh(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Qm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function H0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=et(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(So(t.emitsOptions,d))continue;const p=e[d];if(l)if(ot(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const x=An(d);r[x]=Ul(l,o,x,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Lh(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ot(e,f)&&((u=ur(f))===f||!ot(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ul(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ot(e,f))&&(delete s[f],c=!0)}c&&li(t.attrs,"set","")}function Lh(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&ot(r,u=An(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:So(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=et(n),c=o||dt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ul(r,l,f,c[f],t,!ot(c,f))}}return a}function Ul(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=ot(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=js(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ur(n))&&(i=!0))}return i}const G0=new WeakMap;function Uh(t,e,n=!1){const i=n?G0:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!ke(t)){const u=f=>{l=!0;const[d,p]=Uh(f,e,!0);Vt(a,d),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return gt(t)&&i.set(t,Nr),Nr;if(He(s))for(let u=0;u<s.length;u++){const f=An(s[u]);Xu(f)&&(a[f]=dt)}else if(s)for(const u in s){const f=An(u);if(Xu(f)){const d=s[u],p=a[f]=He(d)||ke(d)?{type:d}:Vt({},d),x=p.type;let _=!1,m=!0;if(He(x))for(let h=0;h<x.length;++h){const E=x[h],S=ke(E)&&E.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=ke(x)&&x.name==="Boolean";p[0]=_,p[1]=m,(_||ot(p,"default"))&&o.push(f)}}const c=[a,o];return gt(t)&&i.set(t,c),c}function Xu(t){return t[0]!=="$"&&!xs(t)}const eu=t=>t==="_"||t==="_ctx"||t==="$stable",tu=t=>He(t)?t.map(zn):[zn(t)],W0=(t,e,n)=>{if(e._n)return e;const i=ar((...r)=>tu(e(...r)),n);return i._c=!1,i},Nh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(eu(r))continue;const s=t[r];if(ke(s))e[r]=W0(r,s,i);else if(s!=null){const a=tu(s);e[r]=()=>a}}},Fh=(t,e)=>{const n=tu(e);t.slots.default=()=>n},Oh=(t,e,n)=>{for(const i in e)(n||!eu(i))&&(t[i]=e[i])},X0=(t,e,n)=>{const i=t.slots=Dh();if(t.vnode.shapeFlag&32){const r=e._;r?(Oh(i,e,n),n&&Jd(i,"_",r,!0)):Nh(e,i)}else e&&Fh(t,e)},$0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=dt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:Oh(r,e,n):(s=!e.$stable,Nh(e,r)),a=e}else e&&(Fh(t,e),a={default:1});if(s)for(const o in r)!eu(o)&&a[o]==null&&delete r[o]},an=ox;function Y0(t){return q0(t)}function q0(t,e){const n=mo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Wn,insertStaticContent:x}=t,_=(R,I,V,T=null,K=null,J=null,oe=void 0,q=null,se=!!I.dynamicChildren)=>{if(R===I)return;R&&!is(R,I)&&(T=re(R),Fe(R,K,J,!0),R=null),I.patchFlag===-2&&(se=!1,I.dynamicChildren=null);const{type:H,ref:le,shapeFlag:M}=I;switch(H){case qs:m(R,I,V,T);break;case Oi:h(R,I,V,T);break;case Fa:R==null&&E(I,V,T,oe);break;case Kt:F(R,I,V,T,K,J,oe,q,se);break;default:M&1?C(R,I,V,T,K,J,oe,q,se):M&6?z(R,I,V,T,K,J,oe,q,se):(M&64||M&128)&&H.process(R,I,V,T,K,J,oe,q,se,De)}le!=null&&K?vs(le,R&&R.ref,J,I||R,!I):le==null&&R&&R.ref!=null&&vs(R.ref,null,J,R,!0)},m=(R,I,V,T)=>{if(R==null)i(I.el=o(I.children),V,T);else{const K=I.el=R.el;I.children!==R.children&&c(K,I.children)}},h=(R,I,V,T)=>{R==null?i(I.el=l(I.children||""),V,T):I.el=R.el},E=(R,I,V,T)=>{[R.el,R.anchor]=x(R.children,I,V,T,R.el,R.anchor)},S=({el:R,anchor:I},V,T)=>{let K;for(;R&&R!==I;)K=d(R),i(R,V,T),R=K;i(I,V,T)},A=({el:R,anchor:I})=>{let V;for(;R&&R!==I;)V=d(R),r(R),R=V;r(I)},C=(R,I,V,T,K,J,oe,q,se)=>{if(I.type==="svg"?oe="svg":I.type==="math"&&(oe="mathml"),R==null)w(I,V,T,K,J,oe,q,se);else{const H=R.el&&R.el._isVueCE?R.el:null;try{H&&H._beginPatch(),b(R,I,K,J,oe,q,se)}finally{H&&H._endPatch()}}},w=(R,I,V,T,K,J,oe,q)=>{let se,H;const{props:le,shapeFlag:M,transition:g,dirs:N}=R;if(se=R.el=a(R.type,J,le&&le.is,le),M&8?u(se,R.children):M&16&&L(R.children,se,null,T,K,Ho(R,J),oe,q),N&&Hi(R,null,T,"created"),P(se,R,R.scopeId,oe,T),le){for(const Q in le)Q!=="value"&&!xs(Q)&&s(se,Q,null,le[Q],J,T);"value"in le&&s(se,"value",null,le.value,J),(H=le.onVnodeBeforeMount)&&Bn(H,T,R)}N&&Hi(R,null,T,"beforeMount");const W=j0(K,g);W&&g.beforeEnter(se),i(se,I,V),((H=le&&le.onVnodeMounted)||W||N)&&an(()=>{H&&Bn(H,T,R),W&&g.enter(se),N&&Hi(R,null,T,"mounted")},K)},P=(R,I,V,T,K)=>{if(V&&p(R,V),T)for(let J=0;J<T.length;J++)p(R,T[J]);if(K){let J=K.subTree;if(I===J||Hh(J.type)&&(J.ssContent===I||J.ssFallback===I)){const oe=K.vnode;P(R,oe,oe.scopeId,oe.slotScopeIds,K.parent)}}},L=(R,I,V,T,K,J,oe,q,se=0)=>{for(let H=se;H<R.length;H++){const le=R[H]=q?Ri(R[H]):zn(R[H]);_(null,le,I,V,T,K,J,oe,q)}},b=(R,I,V,T,K,J,oe)=>{const q=I.el=R.el;let{patchFlag:se,dynamicChildren:H,dirs:le}=I;se|=R.patchFlag&16;const M=R.props||dt,g=I.props||dt;let N;if(V&&Gi(V,!1),(N=g.onVnodeBeforeUpdate)&&Bn(N,V,I,R),le&&Hi(I,R,V,"beforeUpdate"),V&&Gi(V,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(q,""),H?v(R.dynamicChildren,H,q,V,T,Ho(I,K),J):oe||G(R,I,q,null,V,T,Ho(I,K),J,!1),se>0){if(se&16)D(q,M,g,V,K);else if(se&2&&M.class!==g.class&&s(q,"class",null,g.class,K),se&4&&s(q,"style",M.style,g.style,K),se&8){const W=I.dynamicProps;for(let Q=0;Q<W.length;Q++){const k=W[Q],Se=M[k],fe=g[k];(fe!==Se||k==="value")&&s(q,k,Se,fe,K,V)}}se&1&&R.children!==I.children&&u(q,I.children)}else!oe&&H==null&&D(q,M,g,V,K);((N=g.onVnodeUpdated)||le)&&an(()=>{N&&Bn(N,V,I,R),le&&Hi(I,R,V,"updated")},T)},v=(R,I,V,T,K,J,oe)=>{for(let q=0;q<I.length;q++){const se=R[q],H=I[q],le=se.el&&(se.type===Kt||!is(se,H)||se.shapeFlag&198)?f(se.el):V;_(se,H,le,null,T,K,J,oe,!0)}},D=(R,I,V,T,K)=>{if(I!==V){if(I!==dt)for(const J in I)!xs(J)&&!(J in V)&&s(R,J,I[J],null,K,T);for(const J in V){if(xs(J))continue;const oe=V[J],q=I[J];oe!==q&&J!=="value"&&s(R,J,q,oe,K,T)}"value"in V&&s(R,"value",I.value,V.value,K)}},F=(R,I,V,T,K,J,oe,q,se)=>{const H=I.el=R?R.el:o(""),le=I.anchor=R?R.anchor:o("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:N}=I;N&&(q=q?q.concat(N):N),R==null?(i(H,V,T),i(le,V,T),L(I.children||[],V,le,K,J,oe,q,se)):M>0&&M&64&&g&&R.dynamicChildren?(v(R.dynamicChildren,g,V,K,J,oe,q),(I.key!=null||K&&I===K.subTree)&&Bh(R,I,!0)):G(R,I,V,le,K,J,oe,q,se)},z=(R,I,V,T,K,J,oe,q,se)=>{I.slotScopeIds=q,R==null?I.shapeFlag&512?K.ctx.activate(I,V,T,oe,se):$(I,V,T,K,J,oe,se):te(R,I,se)},$=(R,I,V,T,K,J,oe)=>{const q=R.component=hx(R,T,K);if(Qc(R)&&(q.ctx.renderer=De),px(q,!1,oe),q.asyncDep){if(K&&K.registerDep(q,X,oe),!R.el){const se=q.subTree=Ve(Oi);h(null,se,I,V),R.placeholder=se.el}}else X(q,R,I,V,K,J,oe)},te=(R,I,V)=>{const T=I.component=R.component;if(sx(R,I,V))if(T.asyncDep&&!T.asyncResolved){ne(T,I,V);return}else T.next=I,T.update();else I.el=R.el,T.vnode=I},X=(R,I,V,T,K,J,oe)=>{const q=()=>{if(R.isMounted){let{next:M,bu:g,u:N,parent:W,vnode:Q}=R;{const ye=kh(R);if(ye){M&&(M.el=Q.el,ne(R,M,oe)),ye.asyncDep.then(()=>{R.isUnmounted||q()});return}}let k=M,Se;Gi(R,!1),M?(M.el=Q.el,ne(R,M,oe)):M=Q,g&&Fo(g),(Se=M.props&&M.props.onVnodeBeforeUpdate)&&Bn(Se,W,M,Q),Gi(R,!0);const fe=Yu(R),Ae=R.subTree;R.subTree=fe,_(Ae,fe,f(Ae.el),re(Ae),R,K,J),M.el=fe.el,k===null&&ax(R,fe.el),N&&an(N,K),(Se=M.props&&M.props.onVnodeUpdated)&&an(()=>Bn(Se,W,M,Q),K)}else{let M;const{el:g,props:N}=I,{bm:W,m:Q,parent:k,root:Se,type:fe}=R,Ae=bs(I);Gi(R,!1),W&&Fo(W),!Ae&&(M=N&&N.onVnodeBeforeMount)&&Bn(M,k,I),Gi(R,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(fe);const ye=R.subTree=Yu(R);_(null,ye,V,T,R,K,J),I.el=ye.el}if(Q&&an(Q,K),!Ae&&(M=N&&N.onVnodeMounted)){const ye=I;an(()=>Bn(M,k,ye),K)}(I.shapeFlag&256||k&&bs(k.vnode)&&k.vnode.shapeFlag&256)&&R.a&&an(R.a,K),R.isMounted=!0,I=V=T=null}};R.scope.on();const se=R.effect=new ih(q);R.scope.off();const H=R.update=se.run.bind(se),le=R.job=se.runIfDirty.bind(se);le.i=R,le.id=R.uid,se.scheduler=()=>Kc(le),Gi(R,!0),H()},ne=(R,I,V)=>{I.component=R;const T=R.vnode.props;R.vnode=I,R.next=null,H0(R,I.props,T,V),$0(R,I.children,V),xi(),Ou(R),gi()},G=(R,I,V,T,K,J,oe,q,se=!1)=>{const H=R&&R.children,le=R?R.shapeFlag:0,M=I.children,{patchFlag:g,shapeFlag:N}=I;if(g>0){if(g&128){de(H,M,V,T,K,J,oe,q,se);return}else if(g&256){ue(H,M,V,T,K,J,oe,q,se);return}}N&8?(le&16&&ee(H,K,J),M!==H&&u(V,M)):le&16?N&16?de(H,M,V,T,K,J,oe,q,se):ee(H,K,J,!0):(le&8&&u(V,""),N&16&&L(M,V,T,K,J,oe,q,se))},ue=(R,I,V,T,K,J,oe,q,se)=>{R=R||Nr,I=I||Nr;const H=R.length,le=I.length,M=Math.min(H,le);let g;for(g=0;g<M;g++){const N=I[g]=se?Ri(I[g]):zn(I[g]);_(R[g],N,V,null,K,J,oe,q,se)}H>le?ee(R,K,J,!0,!1,M):L(I,V,T,K,J,oe,q,se,M)},de=(R,I,V,T,K,J,oe,q,se)=>{let H=0;const le=I.length;let M=R.length-1,g=le-1;for(;H<=M&&H<=g;){const N=R[H],W=I[H]=se?Ri(I[H]):zn(I[H]);if(is(N,W))_(N,W,V,null,K,J,oe,q,se);else break;H++}for(;H<=M&&H<=g;){const N=R[M],W=I[g]=se?Ri(I[g]):zn(I[g]);if(is(N,W))_(N,W,V,null,K,J,oe,q,se);else break;M--,g--}if(H>M){if(H<=g){const N=g+1,W=N<le?I[N].el:T;for(;H<=g;)_(null,I[H]=se?Ri(I[H]):zn(I[H]),V,W,K,J,oe,q,se),H++}}else if(H>g)for(;H<=M;)Fe(R[H],K,J,!0),H++;else{const N=H,W=H,Q=new Map;for(H=W;H<=g;H++){const we=I[H]=se?Ri(I[H]):zn(I[H]);we.key!=null&&Q.set(we.key,H)}let k,Se=0;const fe=g-W+1;let Ae=!1,ye=0;const ae=new Array(fe);for(H=0;H<fe;H++)ae[H]=0;for(H=N;H<=M;H++){const we=R[H];if(Se>=fe){Fe(we,K,J,!0);continue}let Ce;if(we.key!=null)Ce=Q.get(we.key);else for(k=W;k<=g;k++)if(ae[k-W]===0&&is(we,I[k])){Ce=k;break}Ce===void 0?Fe(we,K,J,!0):(ae[Ce-W]=H+1,Ce>=ye?ye=Ce:Ae=!0,_(we,I[Ce],V,null,K,J,oe,q,se),Se++)}const he=Ae?K0(ae):Nr;for(k=he.length-1,H=fe-1;H>=0;H--){const we=W+H,Ce=I[we],be=I[we+1],Ue=we+1<le?be.el||be.placeholder:T;ae[H]===0?_(null,Ce,V,Ue,K,J,oe,q,se):Ae&&(k<0||H!==he[k]?Te(Ce,V,Ue,2):k--)}}},Te=(R,I,V,T,K=null)=>{const{el:J,type:oe,transition:q,children:se,shapeFlag:H}=R;if(H&6){Te(R.component.subTree,I,V,T);return}if(H&128){R.suspense.move(I,V,T);return}if(H&64){oe.move(R,I,V,De);return}if(oe===Kt){i(J,I,V);for(let M=0;M<se.length;M++)Te(se[M],I,V,T);i(R.anchor,I,V);return}if(oe===Fa){S(R,I,V);return}if(T!==2&&H&1&&q)if(T===0)q.beforeEnter(J),i(J,I,V),an(()=>q.enter(J),K);else{const{leave:M,delayLeave:g,afterLeave:N}=q,W=()=>{R.ctx.isUnmounted?r(J):i(J,I,V)},Q=()=>{J._isLeaving&&J[p0](!0),M(J,()=>{W(),N&&N()})};g?g(J,W,Q):Q()}else i(J,I,V)},Fe=(R,I,V,T=!1,K=!1)=>{const{type:J,props:oe,ref:q,children:se,dynamicChildren:H,shapeFlag:le,patchFlag:M,dirs:g,cacheIndex:N}=R;if(M===-2&&(K=!1),q!=null&&(xi(),vs(q,null,V,R,!0),gi()),N!=null&&(I.renderCache[N]=void 0),le&256){I.ctx.deactivate(R);return}const W=le&1&&g,Q=!bs(R);let k;if(Q&&(k=oe&&oe.onVnodeBeforeUnmount)&&Bn(k,I,R),le&6)Qe(R.component,V,T);else{if(le&128){R.suspense.unmount(V,T);return}W&&Hi(R,null,I,"beforeUnmount"),le&64?R.type.remove(R,I,V,De,T):H&&!H.hasOnce&&(J!==Kt||M>0&&M&64)?ee(H,I,V,!1,!0):(J===Kt&&M&384||!K&&le&16)&&ee(se,I,V),T&&tt(R)}(Q&&(k=oe&&oe.onVnodeUnmounted)||W)&&an(()=>{k&&Bn(k,I,R),W&&Hi(R,null,I,"unmounted")},V)},tt=R=>{const{type:I,el:V,anchor:T,transition:K}=R;if(I===Kt){at(V,T);return}if(I===Fa){A(R);return}const J=()=>{r(V),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(R.shapeFlag&1&&K&&!K.persisted){const{leave:oe,delayLeave:q}=K,se=()=>oe(V,J);q?q(R.el,J,se):se()}else J()},at=(R,I)=>{let V;for(;R!==I;)V=d(R),r(R),R=V;r(I)},Qe=(R,I,V)=>{const{bum:T,scope:K,job:J,subTree:oe,um:q,m:se,a:H}=R;$u(se),$u(H),T&&Fo(T),K.stop(),J&&(J.flags|=8,Fe(oe,R,I,V)),q&&an(q,I),an(()=>{R.isUnmounted=!0},I)},ee=(R,I,V,T=!1,K=!1,J=0)=>{for(let oe=J;oe<R.length;oe++)Fe(R[oe],I,V,T,K)},re=R=>{if(R.shapeFlag&6)return re(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=d(R.anchor||R.el),V=I&&I[d0];return V?d(V):I};let ve=!1;const ze=(R,I,V)=>{R==null?I._vnode&&Fe(I._vnode,null,null,!0):_(I._vnode||null,R,I,null,null,null,V),I._vnode=R,ve||(ve=!0,Ou(),Mh(),ve=!1)},De={p:_,um:Fe,m:Te,r:tt,mt:$,mc:L,pc:G,pbc:v,n:re,o:t};return{render:ze,hydrate:void 0,createApp:k0(ze)}}function Ho({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function j0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bh(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ri(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Bh(a,o)),o.type===qs&&o.patchFlag!==-1&&(o.el=a.el),o.type===Oi&&!o.el&&(o.el=a.el)}}function K0(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function kh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kh(e)}function $u(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Z0=Symbol.for("v-scx"),J0=()=>Nn(Z0);function Ys(t,e){return nu(t,null,e)}function Jt(t,e,n){return nu(t,e,n)}function nu(t,e,n=dt){const{immediate:i,deep:r,flush:s,once:a}=n,o=Vt({},n),l=e&&i||!e&&s!=="post";let c;if(Vr){if(s==="sync"){const p=J0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Wn,p.resume=Wn,p.pause=Wn,p}}const u=Ut;o.call=(p,x,_)=>Yn(p,u,x,_);let f=!1;s==="post"?o.scheduler=p=>{an(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,x)=>{x?p():Kc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=o0(t,e,o);return Vr&&(c?c.push(d):l&&d()),d}function Q0(t,e,n){const i=this.proxy,r=wt(t)?t.includes(".")?zh(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const a=js(this),o=nu(r,s.bind(i),n);return a(),o}function zh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const ex=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${ur(e)}Modifiers`];function tx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||dt;let r=n;const s=e.startsWith("update:"),a=s&&ex(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>wt(u)?u.trim():u)),a.number&&(r=n.map(wm)));let o,l=i[o=No(e)]||i[o=No(An(e))];!l&&s&&(l=i[o=No(ur(e))]),l&&Yn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Yn(c,t,6,r)}}const nx=new WeakMap;function Vh(t,e,n=!1){const i=n?nx:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!ke(t)){const l=c=>{const u=Vh(c,e,!0);u&&(o=!0,Vt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(gt(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>a[l]=null):Vt(a,s),gt(t)&&i.set(t,a),a)}function So(t,e){return!t||!fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,ur(e))||ot(t,e))}function Yu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:x,inheritAttrs:_}=t,m=ja(t);let h,E;try{if(n.shapeFlag&4){const A=r||i,C=A;h=zn(c.call(C,A,u,f,p,d,x)),E=o}else{const A=e;h=zn(A.length>1?A(f,{attrs:o,slots:a,emit:l}):A(f,null)),E=e.props?o:ix(o)}}catch(A){Ms.length=0,Xs(A,t,1),h=Ve(Oi)}let S=h;if(E&&_!==!1){const A=Object.keys(E),{shapeFlag:C}=S;A.length&&C&7&&(s&&A.some(Oc)&&(E=rx(E,s)),S=zr(S,E,!1,!0))}return n.dirs&&(S=zr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Zc(S,n.transition),h=S,ja(m),h}const ix=t=>{let e;for(const n in t)(n==="class"||n==="style"||fo(n))&&((e||(e={}))[n]=t[n]);return e},rx=(t,e)=>{const n={};for(const i in t)(!Oc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function sx(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?qu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!So(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?qu(i,a,c):!0:!!a;return!1}function qu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!So(n,s))return!0}return!1}function ax({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hh=t=>t.__isSuspense;function ox(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):u0(t)}const Kt=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),Oi=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),Ms=[];let cn=null;function mt(t=!1){Ms.push(cn=t?null:[])}function lx(){Ms.pop(),cn=Ms[Ms.length-1]||null}let Ps=1;function Ja(t,e=!1){Ps+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function Gh(t){return t.dynamicChildren=Ps>0?cn||Nr:null,lx(),Ps>0&&cn&&cn.push(t),t}function kt(t,e,n,i,r,s){return Gh(Be(t,e,n,i,r,s,!0))}function qn(t,e,n,i,r){return Gh(Ve(t,e,n,i,r,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function is(t,e){return t.type===e.type&&t.key===e.key}const Wh=({key:t})=>t??null,Oa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||xt(t)||ke(t)?{i:ln,r:t,k:e,f:!!n}:t:null);function Be(t,e=null,n=null,i=0,r=null,s=t===Kt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wh(e),ref:e&&Oa(e),scopeId:Eh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return o?(iu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),Ps>0&&!a&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const Ve=cx;function cx(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===C0)&&(t=Oi),Qa(t)){const o=zr(t,e,!0);return n&&iu(o,n),Ps>0&&!s&&cn&&(o.shapeFlag&6?cn[cn.indexOf(t)]=o:cn.push(o)),o.patchFlag=-2,o}if(vx(t)&&(t=t.__vccOpts),e){e=ux(e);let{class:o,style:l}=e;o&&!wt(o)&&(e.class=pn(o)),gt(l)&&(Yc(l)&&!He(l)&&(l=Vt({},l)),e.style=Ni(l))}const a=wt(t)?1:Hh(t)?128:h0(t)?64:gt(t)?4:ke(t)?2:0;return Be(t,e,n,i,r,a,s,!0)}function ux(t){return t?Yc(t)||Ih(t)?Vt({},t):t:null}function zr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?Mo(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Wh(c),ref:e&&e.ref?n&&s?He(s)?s.concat(Oa(e)):[s,Oa(e)]:Oa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Zc(u,l.clone(u)),u}function or(t=" ",e=0){return Ve(qs,null,t,e)}function sT(t,e){const n=Ve(Fa,null,t);return n.staticCount=e,n}function ys(t="",e=!1){return e?(mt(),qn(Oi,null,t)):Ve(Oi,null,t)}function zn(t){return t==null||typeof t=="boolean"?Ve(Oi):He(t)?Ve(Kt,null,t.slice()):Qa(t)?Ri(t):Ve(qs,null,String(t))}function Ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function iu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),iu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ih(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:ln},n=32):(e=String(e),i&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mo(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pn([e.class,i.class]));else if(r==="style")e.style=Ni([e.style,i.style]);else if(fo(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Bn(t,e,n,i=null){Yn(t,e,7,[n,i])}const fx=Rh();let dx=0;function hx(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||fx,s={uid:dx++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uh(i,r),emitsOptions:Vh(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=tx.bind(null,s),t.ce&&t.ce(s),s}let Ut=null;const yo=()=>Ut||ln;let eo,Nl;{const t=mo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};eo=e("__VUE_INSTANCE_SETTERS__",n=>Ut=n),Nl=e("__VUE_SSR_SETTERS__",n=>Vr=n)}const js=t=>{const e=Ut;return eo(t),t.scope.on(),()=>{t.scope.off(),eo(e)}},ju=()=>{Ut&&Ut.scope.off(),eo(null)};function Xh(t){return t.vnode.shapeFlag&4}let Vr=!1;function px(t,e=!1,n=!1){e&&Nl(e);const{props:i,children:r}=t.vnode,s=Xh(t);V0(t,i,s,e),X0(t,r,n||e);const a=s?mx(t,e):void 0;return e&&Nl(!1),a}function mx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,I0);const{setup:i}=n;if(i){xi();const r=t.setupContext=i.length>1?gx(t):null,s=js(t),a=Ws(i,t,0,[t.props,r]),o=jd(a);if(gi(),s(),(o||t.sp)&&!bs(t)&&Jc(t),o){if(a.then(ju,ju),e)return a.then(l=>{Ku(t,l)}).catch(l=>{Xs(l,t,0)});t.asyncDep=a}else Ku(t,a)}else $h(t)}function Ku(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=_h(e)),$h(t)}function $h(t,e,n){const i=t.type;t.render||(t.render=i.render||Wn);{const r=js(t);xi();try{L0(t)}finally{gi(),r()}}}const xx={get(t,e){return Bt(t,"get",""),t[e]}};function gx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xx),slots:t.slots,emit:t.emit,expose:e}}function Eo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_h(qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ss)return Ss[n](t)},has(e,n){return n in e||n in Ss}})):t.proxy}function _x(t,e=!0){return ke(t)?t.displayName||t.name:t.name||e&&t.__name}function vx(t){return ke(t)&&"__vccOpts"in t}const Ke=(t,e)=>s0(t,e,Vr);function bx(t,e,n){try{Ja(-1);const i=arguments.length;return i===2?gt(e)&&!He(e)?Qa(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Qa(n)&&(n=[n]),Ve(t,e,n))}finally{Ja(1)}}const Sx="3.5.24";let Fl;const Zu=typeof window<"u"&&window.trustedTypes;if(Zu)try{Fl=Zu.createPolicy("vue",{createHTML:t=>t})}catch{}const Yh=Fl?t=>Fl.createHTML(t):t=>t,Mx="http://www.w3.org/2000/svg",yx="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Ju=oi&&oi.createElement("template"),Ex={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?oi.createElementNS(Mx,t):e==="mathml"?oi.createElementNS(yx,t):n?oi.createElement(t,{is:n}):oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>oi.createTextNode(t),createComment:t=>oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ju.innerHTML=Yh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=Ju.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tx=Symbol("_vtc");function Ax(t,e,n){const i=t[Tx];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qu=Symbol("_vod"),wx=Symbol("_vsh"),Cx=Symbol(""),Rx=/(?:^|;)\s*display\s*:/;function Px(t,e,n){const i=t.style,r=wt(n);let s=!1;if(n&&!r){if(e)if(wt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ba(i,o,"")}else for(const a in e)n[a]==null&&Ba(i,a,"");for(const a in n)a==="display"&&(s=!0),Ba(i,a,n[a])}else if(r){if(e!==n){const a=i[Cx];a&&(n+=";"+a),i.cssText=n,s=Rx.test(n)}}else e&&t.removeAttribute("style");Qu in t&&(t[Qu]=s?i.display:"",t[wx]&&(i.display="none"))}const ef=/\s*!important$/;function Ba(t,e,n){if(He(n))n.forEach(i=>Ba(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Dx(t,e);ef.test(n)?t.setProperty(ur(i),n.replace(ef,""),"important"):t[i]=n}}const tf=["Webkit","Moz","ms"],Go={};function Dx(t,e){const n=Go[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return Go[e]=i;i=Hs(i);for(let r=0;r<tf.length;r++){const s=tf[r]+i;if(s in t)return Go[e]=s}return e}const nf="http://www.w3.org/1999/xlink";function rf(t,e,n,i,r,s=Lm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nf,e.slice(6,e.length)):t.setAttributeNS(nf,e,n):n==null||s&&!Qd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ki(n)?String(n):n)}function sf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Qd(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function Ix(t,e,n,i){t.addEventListener(e,n,i)}function Lx(t,e,n,i){t.removeEventListener(e,n,i)}const af=Symbol("_vei");function Ux(t,e,n,i,r=null){const s=t[af]||(t[af]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Nx(e);if(i){const c=s[e]=Bx(i,r);Ix(t,o,c,l)}else a&&(Lx(t,o,a,l),s[e]=void 0)}}const of=/(?:Once|Passive|Capture)$/;function Nx(t){let e;if(of.test(t)){e={};let i;for(;i=t.match(of);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ur(t.slice(2)),e]}let Wo=0;const Fx=Promise.resolve(),Ox=()=>Wo||(Fx.then(()=>Wo=0),Wo=Date.now());function Bx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Yn(kx(i,n.value),e,5,[i])};return n.value=t,n.attached=Ox(),n}function kx(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zx=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?Ax(t,i,a):e==="style"?Px(t,n,i):fo(e)?Oc(e)||Ux(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vx(t,e,i,a))?(sf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rf(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(i))?sf(t,An(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rf(t,e,i,a))};function Vx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&lf(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lf(e)&&wt(n)?!1:e in t}const Hx=["ctrl","shift","alt","meta"],Gx={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Hx.some(n=>t[`${n}Key`]&&!e.includes(n))},Wx=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let a=0;a<e.length;a++){const o=Gx[e[a]];if(o&&o(r,e))return}return t(r,...s)}))},Xx=Vt({patchProp:zx},Ex);let cf;function $x(){return cf||(cf=Y0(Xx))}const Yx=((...t)=>{const e=$x().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=jx(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,qx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function qx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jx(t){return wt(t)?document.querySelector(t):t}let qh;const To=t=>qh=t,jh=Symbol();function Ol(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Es;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Es||(Es={}));function Kx(){const t=Ts(!0),e=t.run(()=>ht({}));let n=[],i=[];const r=qc({install(s){To(r),r._a=s,s.provide(jh,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Kh=()=>{};function uf(t,e,n,i=Kh){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&zc()&&Gs(r),r}function mr(t,...e){t.forEach(n=>{n(...e)})}const Zx=t=>t(),ff=Symbol(),Xo=Symbol();function Bl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Ol(r)&&Ol(i)&&t.hasOwnProperty(n)&&!xt(i)&&!hi(i)?t[n]=Bl(r,i):t[n]=i}return t}const Jx=Symbol();function Qx(t){return!Ol(t)||!Object.prototype.hasOwnProperty.call(t,Jx)}const{assign:wi}=Object;function eg(t){return!!(xt(t)&&t.effect)}function tg(t,e,n,i){const{state:r,actions:s,getters:a}=e,o=n.state.value[t];let l;function c(){o||(n.state.value[t]=r?r():{});const u=jc(n.state.value[t]);return wi(u,s,Object.keys(a||{}).reduce((f,d)=>(f[d]=qc(Ke(()=>{To(n);const p=n._s.get(t);return a[d].call(p,p)})),f),{}))}return l=Zh(t,c,e,n,i,!0),l}function Zh(t,e,n={},i,r,s){let a;const o=wi({actions:{}},n),l={deep:!0};let c,u,f=new Set,d=new Set,p;const x=i.state.value[t];!s&&!x&&(i.state.value[t]={}),ht({});let _;function m(L){let b;c=u=!1,typeof L=="function"?(L(i.state.value[t]),b={type:Es.patchFunction,storeId:t,events:p}):(Bl(i.state.value[t],L),b={type:Es.patchObject,payload:L,storeId:t,events:p});const v=_=Symbol();_o().then(()=>{_===v&&(c=!0)}),u=!0,mr(f,b,i.state.value[t])}const h=s?function(){const{state:b}=n,v=b?b():{};this.$patch(D=>{wi(D,v)})}:Kh;function E(){a.stop(),f.clear(),d.clear(),i._s.delete(t)}const S=(L,b="")=>{if(ff in L)return L[Xo]=b,L;const v=function(){To(i);const D=Array.from(arguments),F=new Set,z=new Set;function $(ne){F.add(ne)}function te(ne){z.add(ne)}mr(d,{args:D,name:v[Xo],store:C,after:$,onError:te});let X;try{X=L.apply(this&&this.$id===t?this:C,D)}catch(ne){throw mr(z,ne),ne}return X instanceof Promise?X.then(ne=>(mr(F,ne),ne)).catch(ne=>(mr(z,ne),Promise.reject(ne))):(mr(F,X),X)};return v[ff]=!0,v[Xo]=b,v},A={_p:i,$id:t,$onAction:uf.bind(null,d),$patch:m,$reset:h,$subscribe(L,b={}){const v=uf(f,L,b.detached,()=>D()),D=a.run(()=>Jt(()=>i.state.value[t],F=>{(b.flush==="sync"?u:c)&&L({storeId:t,type:Es.direct,events:p},F)},wi({},l,b)));return v},$dispose:E},C=Fn(A);i._s.set(t,C);const P=(i._a&&i._a.runWithContext||Zx)(()=>i._e.run(()=>(a=Ts()).run(()=>e({action:S}))));for(const L in P){const b=P[L];if(xt(b)&&!eg(b)||hi(b))s||(x&&Qx(b)&&(xt(b)?b.value=x[L]:Bl(b,x[L])),i.state.value[t][L]=b);else if(typeof b=="function"){const v=S(b,L);P[L]=v,o.actions[L]=b}}return wi(C,P),wi(et(C),P),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:L=>{m(b=>{wi(b,L)})}}),i._p.forEach(L=>{wi(C,a.run(()=>L({store:C,app:i._a,pinia:i,options:o})))}),x&&s&&n.hydrate&&n.hydrate(C.$state,x),c=!0,u=!0,C}function ng(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(a,o){const l=z0();return a=a||(l?Nn(jh,null):null),a&&To(a),a=qh,a._s.has(t)||(r?Zh(t,e,i,a):tg(t,i,a)),a._s.get(t)}return s.$id=t,s}function Zr(t){const e=et(t),n={};for(const i in e){const r=e[i];r.effect?n[i]=Ke({get:()=>t[i],set(s){t[i]=s}}):(xt(r)||hi(r))&&(n[i]=We(t,i))}return n}function ig(t,e){let n;function i(){n=Ts(),n.run(()=>e.length?e(()=>{n?.stop(),i()}):e())}Jt(t,r=>{r&&!n?i():r||(n?.stop(),n=void 0)},{immediate:!0}),Gs(()=>{n?.stop()})}function rg(t,e){e=Array.isArray(e)?e.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const fn=typeof window<"u",sg=fn&&"IntersectionObserver"in window,ag=fn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Jh=fn&&"matchMedia"in window&&typeof window.matchMedia=="function",og=()=>Jh&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function lg(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function df(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),lg(t,e.split("."),n))}function Qh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(t==null||t==="")return;const n=Number(t);return isNaN(n)?String(t):isFinite(n)?`${n}${e}`:void 0}function cg(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function hf(t){let e;return t!==null&&typeof t=="object"&&((e=Object.getPrototypeOf(t))===Object.prototype||e===null)}function ug(t){if(t&&"$el"in t){const e=t.$el;return e?.nodeType===Node.TEXT_NODE?e.nextElementSibling:e}return t}function $o(t,e){return e.every(n=>t.hasOwnProperty(n))}function fg(t,e){const n={};for(const i of e)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function dg(t){return t==null?[]:Array.isArray(t)?t:[t]}function ep(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function pf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function mf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function hg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function un(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],a=e[r];if(hf(s)&&hf(a)){i[r]=un(s,a,n);continue}if(n&&Array.isArray(s)&&Array.isArray(a)){i[r]=n(s,a);continue}i[r]=a}return i}function tp(t){return t.map(e=>e.type===Kt?tp(e.children):e).flat()}function rr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(rr.cache.has(t))return rr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return rr.cache.set(t,e),e}rr.cache=new Map;function hs(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>hs(t,n)).flat(1);if(e.suspense)return hs(t,e.ssContent);if(Array.isArray(e.children))return e.children.map(n=>hs(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return hs(t,e.component.subTree).flat(1)}return[]}function np(t){const e=Fn({});Ys(()=>{const i=t();for(const r in i)e[r]=i[r]},{flush:"sync"});const n={};for(const i in e)n[i]=We(()=>e[i]);return n}function kl(t,e){return t.includes(e)}function xf(t,e){return e="on"+Hs(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function pg(){const t=Un(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>ug(t.value)}),e}function to(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="bigint"}const mg=["top","bottom"],xg=["start","end","left","right"];function gg(t,e){let[n,i]=t.split(" ");return i||(i=kl(mg,n)?"start":kl(xg,n)?"top":"center"),{side:gf(n,e),align:gf(i,e)}}function gf(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}const xr=2.4,_f=.2126729,vf=.7151522,bf=.072175,_g=.55,vg=.58,bg=.57,Sg=.62,ua=.03,Sf=1.45,Mg=5e-4,yg=1.25,Eg=1.25,Mf=.078,yf=12.82051282051282,fa=.06,Ef=.001;function Tf(t,e){const n=(t.r/255)**xr,i=(t.g/255)**xr,r=(t.b/255)**xr,s=(e.r/255)**xr,a=(e.g/255)**xr,o=(e.b/255)**xr;let l=n*_f+i*vf+r*bf,c=s*_f+a*vf+o*bf;if(l<=ua&&(l+=(ua-l)**Sf),c<=ua&&(c+=(ua-c)**Sf),Math.abs(c-l)<Mg)return 0;let u;if(c>l){const f=(c**_g-l**vg)*yg;u=f<Ef?0:f<Mf?f-f*yf*fa:f-fa}else{const f=(c**Sg-l**bg)*Eg;u=f>-Ef?0:f>-Mf?f-f*yf*fa:f+fa}return u*100}const no=.20689655172413793,Tg=t=>t>no**3?Math.cbrt(t):t/(3*no**2)+4/29,Ag=t=>t>no?t**3:3*no**2*(t-4/29);function ip(t){const e=Tg,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function rp(t){const e=Ag,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const wg=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Cg=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,Rg=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Pg=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function sp(t){const e=Array(3),n=Cg,i=wg;for(let r=0;r<3;++r)e[r]=Math.round(ep(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function ru(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=Pg,a=Rg;e=s(e/255),n=s(n/255),i=s(i/255);for(let o=0;o<3;++o)r[o]=a[o][0]*e+a[o][1]*n+a[o][2]*i;return r}function zl(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Dg(t){return zl(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const Af=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Ig={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>wf({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>wf({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>Ds({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>Ds({h:t,s:e,v:n,a:i})};function Hn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Af.test(t)){const{groups:e}=t.match(Af),{fn:n,values:i}=e,r=i.split(/,\s*|\s*\/\s*|\s+/).map((s,a)=>s.endsWith("%")||a>0&&a<3&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return Ig[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),Ug(e)}else if(typeof t=="object"){if($o(t,["r","g","b"]))return t;if($o(t,["h","s","l"]))return Ds(ap(t));if($o(t,["h","s","v"]))return Ds(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ds(t){const{h:e,s:n,v:i,a:r}=t,s=o=>{const l=(o+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},a=[s(5),s(3),s(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:r}}function wf(t){return Ds(ap(t))}function ap(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),a=s===0?0:2-2*i/s;return{h:e,s:a,v:s,a:r}}function da(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function Lg(t){let{r:e,g:n,b:i,a:r}=t;return`#${[da(e),da(n),da(i),r!==void 0?da(Math.round(r*255)):""].join("")}`}function Ug(t){t=Ng(t);let[e,n,i,r]=hg(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function Ng(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=pf(pf(t,6),8,"F")),t}function Fg(t,e){const n=ip(ru(t));return n[0]=n[0]+e*10,sp(rp(n))}function Og(t,e){const n=ip(ru(t));return n[0]=n[0]-e*10,sp(rp(n))}function Bg(t){const e=Hn(t);return ru(e)[1]}function op(t){const e=Math.abs(Tf(Hn(0),Hn(t)));return Math.abs(Tf(Hn(16777215),Hn(t)))>Math.min(e,50)?"#fff":"#000"}function vt(t,e){return n=>Object.keys(t).reduce((i,r)=>{const a=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...a,default:n[r]}:i[r]=a,e&&!i[r].source&&(i[r].source=e),i},{})}const Ao=vt({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Zn(t,e){const n=yo();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function fr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Zn(t).type;return rr(e?.aliasName||e?.name)}function kg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const Hr=Symbol.for("vuetify:defaults");function zg(t){return ht(t)}function su(){const t=Nn(Hr);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function lp(t,e){const n=su(),i=ht(t),r=Ke(()=>{if(qe(e?.disabled))return n.value;const a=qe(e?.scoped),o=qe(e?.reset),l=qe(e?.root);if(i.value==null&&!(a||o||l))return n.value;let c=un(i.value,{prev:n.value});if(a)return c;if(o||l){const u=Number(o||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=un(un(c,{prev:c}),c[l])),c}return c.prev?un(c.prev,c):c});return Kr(Hr,r),r}function Vg(t,e){return t.props&&(typeof t.props[e]<"u"||typeof t.props[rr(e)]<"u")}function Hg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:su();const i=Zn("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=Ke(()=>n.value?.[t._as??e]),s=new Proxy(t,{get(l,c){const u=Reflect.get(l,c);if(c==="class"||c==="style")return[r.value?.[c],u].filter(p=>p!=null);if(Vg(i.vnode,c))return u;const f=r.value?.[c];if(f!==void 0)return f;const d=n.value?.global?.[c];return d!==void 0?d:u}}),a=Un();Ys(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=kg(Hr,i);Kr(Hr,Ke(()=>a.value?un(l?.value??{},a.value):l?.value))}return{props:s,provideSubDefaults:o}}function Ks(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=vt(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return fg(i,e)},t.props._as=String,t.setup=function(i,r){const s=su();if(!s.value)return t._setup(i,r);const{props:a,provideSubDefaults:o}=Hg(i,i._as??t.name,s),l=t._setup(a,r);return o(),l}}return t}function dr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Ks:en)(e)}function Gg(t,e,n,i){if(!n||to(t)||to(e))return;const r=n.get(t);if(r)r.set(e,i);else{const s=new WeakMap;s.set(e,i),n.set(t,s)}}function Wg(t,e,n){if(!n||to(t)||to(e))return null;const i=n.get(t)?.get(e);if(typeof i=="boolean")return i;const r=n.get(e)?.get(t);return typeof r=="boolean"?r:null}function au(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new WeakMap;if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!1;const r=Wg(t,e,n);return r||(Gg(t,e,n,!0),i.every(s=>au(t[s],e[s],n)))}const Xg={linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5,instant:t=>1};function Zs(t){const e=Zn("useRender");e.render=t}function cp(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Zn("useProxiedModel"),a=ht(t[e]!==void 0?t[e]:n),o=rr(e),c=Ke(o!==e?()=>(t[e],!!((s.vnode.props?.hasOwnProperty(e)||s.vnode.props?.hasOwnProperty(o))&&(s.vnode.props?.hasOwnProperty(`onUpdate:${e}`)||s.vnode.props?.hasOwnProperty(`onUpdate:${o}`)))):()=>(t[e],!!(s.vnode.props?.hasOwnProperty(e)&&s.vnode.props?.hasOwnProperty(`onUpdate:${e}`))));ig(()=>!c.value,()=>{Jt(()=>t[e],f=>{a.value=f})});const u=Ke({get(){const f=t[e];return i(c.value?f:a.value)},set(f){const d=r(f),p=et(c.value?t[e]:a.value);p===d||i(p)===f||(a.value=d,s?.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:a.value}),u}const $g={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"},ariaLabel:{previousMonth:"Previous month",nextMonth:"Next month",selectYear:"Select year",selectDate:"{0}",currentDate:"Today, {0}"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"},rules:{required:"This field is required",email:"Please enter a valid email",number:"This field can only contain numbers",integer:"This field can only contain integer values",capital:"This field can only contain uppercase letters",maxLength:"You must enter a maximum of {0} characters",minLength:"You must enter a minimum of {0} characters",strictLength:"The length of the entered field is invalid",exclude:"The {0} character is not allowed",notEmpty:"Please choose at least one value",pattern:"Invalid format"},hotkey:{then:"then",ctrl:"Ctrl",command:"Command",space:"Space",shift:"Shift",alt:"Alt",enter:"Enter",escape:"Escape",upArrow:"Up Arrow",downArrow:"Down Arrow",leftArrow:"Left Arrow",rightArrow:"Right Arrow",backspace:"Backspace",option:"Option",plus:"plus",shortcut:"Keyboard shortcut: {0}"},video:{play:"Play",pause:"Pause",seek:"Seek",volume:"Volume",showVolume:"Show volume control",mute:"Mute",unmute:"Unmute",enterFullscreen:"Full screen",exitFullscreen:"Exit full screen"},colorPicker:{ariaLabel:{eyedropper:"Select color with eyedropper",hueSlider:"Hue",alphaSlider:"Alpha",redInput:"Red value",greenInput:"Green value",blueInput:"Blue value",alphaInput:"Alpha value",hueInput:"Hue value",saturationInput:"Saturation value",lightnessInput:"Lightness value",hexInput:"HEX value",hexaInput:"HEX with alpha value",changeFormat:"Change color format"}}},Cf="$vuetify.",Rf=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[Number(i)])),up=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(!i.startsWith(Cf))return Rf(i,s);const o=i.replace(Cf,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=df(l,o,null);return u||(`${i}${t.value}`,u=df(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),Rf(u,s)};function ou(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function fp(t,e){return ou(t,e)(.1).includes(",")?",":"."}function Yo(t,e,n){const i=cp(t,e,t[e]??n.value);return i.value=t[e]??n.value,Jt(n,r=>{t[e]==null&&(i.value=n.value)}),i}function dp(t){return e=>{const n=Yo(e,"locale",t.current),i=Yo(e,"fallback",t.fallback),r=Yo(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,decimalSeparator:We(()=>fp(n,i)),t:up(n,i,r),n:ou(n,i),provide:dp({current:n,fallback:i,messages:r})}}}function Yg(t){const e=Un(t?.locale??"en"),n=Un(t?.fallback??"en"),i=ht({en:$g,...t?.messages});return{name:"vuetify",current:e,fallback:n,messages:i,decimalSeparator:We(()=>t?.decimalSeparator??fp(e,n)),t:up(e,n,i),n:ou(e,n),provide:dp({current:e,fallback:n,messages:i})}}const Vl=Symbol.for("vuetify:locale");function qg(t){return t.name!=null}function jg(t){const e=t?.adapter&&qg(t?.adapter)?t?.adapter:Yg(t),n=Zg(e,t);return{...e,...n}}function Kg(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Zg(t,e){const n=ht(e?.rtl??Kg()),i=Ke(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:We(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Jg(){const t=Nn(Vl);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}function Js(t){const e=t.slice(-2).toUpperCase();switch(!0){case t==="GB-alt-variant":return{firstDay:0,firstWeekSize:4};case t==="001":return{firstDay:1,firstWeekSize:1};case`AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(e):return{firstDay:0,firstWeekSize:1};case`AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(e):return{firstDay:1,firstWeekSize:1};case`AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(e):return{firstDay:1,firstWeekSize:4};case"AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(e):return{firstDay:6,firstWeekSize:1};case e==="MV":return{firstDay:5,firstWeekSize:1};case e==="PT":return{firstDay:0,firstWeekSize:4};default:return null}}function Qg(t,e,n){const i=[];let r=[];const s=hp(t),a=pp(t),o=n??Js(e)?.firstDay??0,l=(s.getDay()-o+7)%7,c=(a.getDay()-o+7)%7;for(let u=0;u<l;u++){const f=new Date(s);f.setDate(f.getDate()-(l-u)),r.push(f)}for(let u=1;u<=a.getDate();u++){const f=new Date(t.getFullYear(),t.getMonth(),u);r.push(f),r.length===7&&(i.push(r),r=[])}for(let u=1;u<7-c;u++){const f=new Date(a);f.setDate(f.getDate()+u),r.push(f)}return r.length>0&&i.push(r),i}function io(t,e,n){let i=(n??Js(e)?.firstDay??0)%7;[0,1,2,3,4,5,6].includes(i)||(i=0);const r=new Date(t);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function e_(t,e){const n=new Date(t),i=((Js(e)?.firstDay??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function hp(t){return new Date(t.getFullYear(),t.getMonth(),1)}function pp(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function t_(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const n_=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function mp(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(n_.test(t))return t_(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Pf=new Date(2e3,0,2);function i_(t,e,n){const i=e??Js(t)?.firstDay??0;return Qh(7).map(r=>{const s=new Date(Pf);return s.setDate(Pf.getDate()+i+r),new Intl.DateTimeFormat(t,{weekday:n??"narrow"}).format(s)})}function r_(t,e,n,i){const r=mp(t)??new Date,s=i?.[e];if(typeof s=="function")return s(r,e,n);let a={};switch(e){case"fullDate":a={year:"numeric",month:"short",day:"numeric"};break;case"fullDateWithWeekday":a={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const o=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${o} ${l}`;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":a={month:"short",day:"numeric"};break;case"year":a={year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"weekday":a={weekday:"long"};break;case"weekdayShort":a={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":a={hour:"numeric",hour12:!0};break;case"hours24h":a={hour:"numeric",hour12:!1};break;case"minutes":a={minute:"numeric"};break;case"seconds":a={second:"numeric"};break;case"fullTime":a={hour:"numeric",minute:"numeric"};break;case"fullTime12h":a={hour:"numeric",minute:"numeric",hour12:!0};break;case"fullTime24h":a={hour:"numeric",minute:"numeric",hour12:!1};break;case"fullDateTime":a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};break;case"fullDateTime12h":a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};break;case"fullDateTime24h":a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};break;case"keyboardDate":a={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":return a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric"},new Intl.DateTimeFormat(n,a).format(r).replace(/, /g," ");case"keyboardDateTime12h":return a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!0},new Intl.DateTimeFormat(n,a).format(r).replace(/, /g," ");case"keyboardDateTime24h":return a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1},new Intl.DateTimeFormat(n,a).format(r).replace(/, /g," ");default:a=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(r)}function s_(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=mf(String(n.getMonth()+1),2,"0"),s=mf(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function a_(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function o_(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function l_(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function sr(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function c_(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function u_(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function Is(t){return t.getFullYear()}function f_(t){return t.getMonth()}function d_(t,e,n,i){const r=Js(e),s=n??r?.firstDay??0,a=r?.firstWeekSize??1;return i!==void 0?h_(t,e,s,i):p_(t,e,s,a)}function h_(t,e,n,i){const r=(7+i-n)%7,s=io(t,e,n),a=sr(s,6);function o(d){return(7+new Date(d,0,1).getDay()-n)%7}let l=Is(t);l<Is(a)&&o(l+1)<=r&&l++;const c=new Date(l,0,1),u=o(l),f=u<=r?sr(c,-u):sr(c,7-u);return 1+so(lu(t),Ls(f),"weeks")}function p_(t,e,n,i){const r=sr(io(t,e,n),6);function s(u){const f=new Date(u,0,1);return 7-so(f,io(f,e,n),"days")}let a=Is(t);a<Is(r)&&s(a+1)>=i&&a++;const o=new Date(a,0,1),l=s(a),c=l>=i?sr(o,l-7):sr(o,l);return 1+so(lu(t),Ls(c),"weeks")}function m_(t){return t.getDate()}function x_(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function g_(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function __(t){return t.getHours()}function v_(t){return t.getMinutes()}function b_(t){return new Date(t.getFullYear(),0,1)}function S_(t){return new Date(t.getFullYear(),11,31)}function M_(t,e){return ro(t,e[0])&&T_(t,e[1])}function y_(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function ro(t,e){return t.getTime()>e.getTime()}function E_(t,e){return ro(Ls(t),Ls(e))}function T_(t,e){return t.getTime()<e.getTime()}function Df(t,e){return t.getTime()===e.getTime()}function A_(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function w_(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function C_(t,e){return t.getFullYear()===e.getFullYear()}function so(t,e,n){const i=new Date(t),r=new Date(e);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function R_(t,e){const n=new Date(t);return n.setHours(e),n}function P_(t,e){const n=new Date(t);return n.setMinutes(e),n}function D_(t,e){const n=new Date(t);return n.setMonth(e),n}function I_(t,e){const n=new Date(t);return n.setDate(e),n}function L_(t,e){const n=new Date(t);return n.setFullYear(e),n}function Ls(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function lu(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class U_{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return mp(e)}toJsDate(e){return e}toISO(e){return s_(this,e)}parseISO(e){return a_(e)}addMinutes(e,n){return o_(e,n)}addHours(e,n){return l_(e,n)}addDays(e,n){return sr(e,n)}addWeeks(e,n){return c_(e,n)}addMonths(e,n){return u_(e,n)}getWeekArray(e,n){const i=n!==void 0?Number(n):void 0;return Qg(e,this.locale,i)}startOfWeek(e,n){const i=n!==void 0?Number(n):void 0;return io(e,this.locale,i)}endOfWeek(e){return e_(e,this.locale)}startOfMonth(e){return hp(e)}endOfMonth(e){return pp(e)}format(e,n){return r_(e,n,this.locale,this.formats)}isEqual(e,n){return Df(e,n)}isValid(e){return y_(e)}isWithinRange(e,n){return M_(e,n)}isAfter(e,n){return ro(e,n)}isAfterDay(e,n){return E_(e,n)}isBefore(e,n){return!ro(e,n)&&!Df(e,n)}isSameDay(e,n){return A_(e,n)}isSameMonth(e,n){return w_(e,n)}isSameYear(e,n){return C_(e,n)}setMinutes(e,n){return P_(e,n)}setHours(e,n){return R_(e,n)}setMonth(e,n){return D_(e,n)}setDate(e,n){return I_(e,n)}setYear(e,n){return L_(e,n)}getDiff(e,n,i){return so(e,n,i)}getWeekdays(e,n){const i=e!==void 0?Number(e):void 0;return i_(this.locale,i,n)}getYear(e){return Is(e)}getMonth(e){return f_(e)}getWeek(e,n,i){const r=n!==void 0?Number(n):void 0,s=i!==void 0?Number(i):void 0;return d_(e,this.locale,r,s)}getDate(e){return m_(e)}getNextMonth(e){return x_(e)}getPreviousMonth(e){return g_(e)}getHours(e){return __(e)}getMinutes(e){return v_(e)}startOfDay(e){return Ls(e)}endOfDay(e){return lu(e)}startOfYear(e){return b_(e)}endOfYear(e){return S_(e)}}const N_=Symbol.for("vuetify:date-options"),If=Symbol.for("vuetify:date-adapter");function F_(t,e){const n=un({adapter:U_,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:O_(n,e)}}function O_(t,e){const n=Fn(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Jt(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const Lf=Symbol.for("vuetify:display"),Uf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},B_=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Uf;return un(Uf,t)};function Nf(t){return fn&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Ff(t){return fn&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Of(t){const e=fn&&!t?window.navigator.userAgent:"ssr";function n(x){return!!e.match(x)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),a=n(/electron/i),o=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),p=n(/linux/i);return{android:i,ios:r,cordova:s,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:p,touch:ag,ssr:e==="ssr"}}function k_(t,e){const{thresholds:n,mobileBreakpoint:i}=B_(t),r=Un(Ff(e)),s=Un(Of(e)),a=Fn({}),o=Un(Nf(e));function l(){r.value=Ff(),o.value=Nf()}function c(){l(),s.value=Of()}return Ys(()=>{const u=o.value<n.sm,f=o.value<n.md&&!u,d=o.value<n.lg&&!(f||u),p=o.value<n.xl&&!(d||f||u),x=o.value<n.xxl&&!(p||d||f||u),_=o.value>=n.xxl,m=u?"xs":f?"sm":d?"md":p?"lg":x?"xl":"xxl",h=typeof i=="number"?i:n[i],E=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=p,a.xl=x,a.xxl=_,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||p),a.smAndDown=!(d||p||x||_),a.mdAndDown=!(p||x||_),a.lgAndDown=!(x||_),a.xlAndDown=!_,a.name=m,a.height=r.value,a.width=o.value,a.mobile=E,a.mobileBreakpoint=i,a.platform=s.value,a.thresholds=n}),fn&&(window.addEventListener("resize",l,{passive:!0}),Gs(()=>{window.removeEventListener("resize",l)},!0)),{...jc(a),update:c,ssr:!!e}}const z_=Symbol.for("vuetify:goto");function V_(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:Xg}}function H_(t,e){return{rtl:e.isRtl,options:un(V_(),t)}}const G_={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",tableGroupCollapse:"mdi-chevron-down",tableGroupExpand:"mdi-chevron-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload",color:"mdi-palette",command:"mdi-apple-keyboard-command",ctrl:"mdi-apple-keyboard-control",space:"mdi-keyboard-space",shift:"mdi-apple-keyboard-shift",alt:"mdi-apple-keyboard-option",enter:"mdi-keyboard-return",arrowup:"mdi-arrow-up",arrowdown:"mdi-arrow-down",arrowleft:"mdi-arrow-left",arrowright:"mdi-arrow-right",backspace:"mdi-backspace",play:"mdi-play",pause:"mdi-pause",fullscreen:"mdi-fullscreen",fullscreenExit:"mdi-fullscreen-exit",volumeHigh:"mdi-volume-high",volumeMedium:"mdi-volume-medium",volumeLow:"mdi-volume-low",volumeOff:"mdi-volume-variant-off"},W_={component:t=>bx(gp,{...t,class:"mdi"})},ao=[String,Function,Object,Array],Hl=Symbol.for("vuetify:icons"),wo=vt({icon:{type:ao},tag:{type:[String,Object,Function],required:!0}},"icon"),Bf=dr()({name:"VComponentIcon",props:wo(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return Ve(t.tag,null,{default:()=>[t.icon?Ve(i,null,null):n.default?.()]})}}}),xp=Ks({name:"VSvgIcon",inheritAttrs:!1,props:wo(),setup(t,e){let{attrs:n}=e;return()=>Ve(t.tag,Mo(n,{style:null}),{default:()=>[Be("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?Be("path",{d:i[0],"fill-opacity":i[1]},null):Be("path",{d:i},null)):Be("path",{d:t.icon},null)])]})}});Ks({name:"VLigatureIcon",props:wo(),setup(t){return()=>Ve(t.tag,null,{default:()=>[t.icon]})}});const gp=Ks({name:"VClassIcon",props:wo(),setup(t){return()=>Ve(t.tag,{class:pn(t.icon)},null)}});function X_(){return{svg:{component:xp},class:{component:gp}}}function $_(t){const e=X_(),n=t?.defaultSet??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=W_),un({defaultSet:n,sets:e,aliases:{...G_,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const Y_=t=>{const e=Nn(Hl);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:Ke(()=>{const i=Cs(t);if(!i)return{component:Bf};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=e.aliases?.[r.slice(1)])),Array.isArray(r))return{component:xp,icon:r};if(typeof r!="string")return{component:Bf,icon:r};const s=Object.keys(e.sets).find(l=>typeof r=="string"&&r.startsWith(`${l}:`)),a=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:a}})}},Us=Symbol.for("vuetify:theme"),Co=vt({theme:String},"theme");function kf(){return{defaultTheme:"light",prefix:"v-",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#EEEEEE","theme-on-kbd":"#000000","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#c8c8c8","on-surface-variant":"#000000",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#424242","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}},stylesheetId:"vuetify-theme-stylesheet",scoped:!1,unimportant:!1,utilities:!0}}function q_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kf();const e=kf();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,r]of Object.entries(t.themes??{})){const s=r.dark||i==="dark"?e.themes?.dark:e.themes?.light;n[i]=un(s,r)}return un(e,{...t,themes:n})}function Wi(t,e,n,i){t.push(`${J_(e,i)} {
`,...n.map(r=>`  ${r};
`),`}
`)}function zf(t,e){const n=t.dark?2:1,i=t.dark?1:2,r=[];for(const[s,a]of Object.entries(t.colors)){const o=Hn(a);r.push(`--${e}theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--${e}theme-${s}-overlay-multiplier: ${Bg(a)>.18?n:i}`)}for(const[s,a]of Object.entries(t.variables)){const o=typeof a=="string"&&a.startsWith("#")?Hn(a):void 0,l=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--${e}${s}: ${l??a}`)}return r}function j_(t,e,n){const i={};if(n)for(const r of["lighten","darken"]){const s=r==="lighten"?Fg:Og;for(const a of Qh(n[r],1))i[`${t}-${r}-${a}`]=Lg(s(Hn(e),a))}return i}function K_(t,e){if(!e)return{};let n={};for(const i of e.colors){const r=t[i];r&&(n={...n,...j_(i,r,e)})}return n}function Z_(t){const e={};for(const n of Object.keys(t)){if(n.startsWith("on-")||t[`on-${n}`])continue;const i=`on-${n}`,r=Hn(t[n]);e[i]=op(r)}return e}function J_(t,e){if(!e)return t;const n=`:where(${e})`;return t===":root"?n:`${n} ${t}`}function Q_(t,e,n){const i=ev(t,e);i&&(i.innerHTML=n)}function ev(t,e){if(!fn)return null;let n=document.getElementById(t);return n||(n=document.createElement("style"),n.id=t,n.type="text/css",e&&n.setAttribute("nonce",e),document.head.appendChild(n)),n}function tv(t){const e=q_(t),n=Un(e.defaultTheme),i=ht(e.themes),r=Un("light"),s=Ke({get(){return n.value==="system"?r.value:n.value},set(h){n.value=h}}),a=Ke(()=>{const h={};for(const[E,S]of Object.entries(i.value)){const A={...S.colors,...K_(S.colors,e.variations)};h[E]={...S,colors:{...A,...Z_(A)}}}return h}),o=We(()=>a.value[s.value]),l=We(()=>n.value==="system"),c=Ke(()=>{const h=[],E=e.unimportant?"":" !important",S=e.scoped?e.prefix:"";o.value?.dark&&Wi(h,":root",["color-scheme: dark"],e.scope),Wi(h,":root",zf(o.value,e.prefix),e.scope);for(const[A,C]of Object.entries(a.value))Wi(h,`.${e.prefix}theme--${A}`,[`color-scheme: ${C.dark?"dark":"normal"}`,...zf(C,e.prefix)],e.scope);if(e.utilities){const A=[],C=[],w=new Set(Object.values(a.value).flatMap(P=>Object.keys(P.colors)));for(const P of w)P.startsWith("on-")?Wi(C,`.${P}`,[`color: rgb(var(--${e.prefix}theme-${P}))${E}`],e.scope):(Wi(A,`.${S}bg-${P}`,[`--${e.prefix}theme-overlay-multiplier: var(--${e.prefix}theme-${P}-overlay-multiplier)`,`background-color: rgb(var(--${e.prefix}theme-${P}))${E}`,`color: rgb(var(--${e.prefix}theme-on-${P}))${E}`],e.scope),Wi(C,`.${S}text-${P}`,[`color: rgb(var(--${e.prefix}theme-${P}))${E}`],e.scope),Wi(C,`.${S}border-${P}`,[`--${e.prefix}border-color: var(--${e.prefix}theme-${P})`],e.scope));h.push(...A,...C)}return h.map((A,C)=>C===0?A:`    ${A}`).join("")}),u=We(()=>e.isDisabled?void 0:`${e.prefix}theme--${s.value}`),f=We(()=>Object.keys(a.value));if(Jh){let E=function(){r.value=h.matches?"dark":"light"};const h=window.matchMedia("(prefers-color-scheme: dark)");E(),h.addEventListener("change",E,{passive:!0}),zc()&&Gs(()=>{h.removeEventListener("change",E)})}function d(h){if(e.isDisabled)return;const E=h._context.provides.usehead;if(E){let S=function(){return{style:[{textContent:c.value,id:e.stylesheetId,nonce:e.cspNonce||!1}]}};if(E.push){const A=E.push(S);fn&&Jt(c,()=>{A.patch(S)})}else fn?(E.addHeadObjs(We(S)),Ys(()=>E.updateDOM())):E.addHeadObjs(S())}else{let S=function(){Q_(e.stylesheetId,e.cspNonce,c.value)};fn?Jt(c,S,{immediate:!0}):S()}}function p(h){h!=="system"&&!f.value.includes(h)||(s.value=h)}function x(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:f.value;const E=h.indexOf(s.value),S=E===-1?0:(E+1)%h.length;p(h[S])}function _(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["light","dark"];x(h)}const m=new Proxy(s,{get(h,E){return Reflect.get(h,E)},set(h,E,S){return E==="value"&&rg(`theme.global.name.value = ${S}`,`theme.change('${S}')`),Reflect.set(h,E,S)}});return{install:d,change:p,cycle:x,toggle:_,isDisabled:e.isDisabled,isSystem:l,name:s,themes:i,current:o,computedThemes:a,prefix:e.prefix,themeClasses:u,styles:c,global:{name:m,current:o}}}function cu(t){Zn("provideTheme");const e=Nn(Us,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=We(()=>t.theme??e.name.value),i=We(()=>e.themes.value[n.value]),r=We(()=>e.isDisabled?void 0:`${e.prefix}theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return Kr(Us,s),s}function nv(){Zn("useTheme");const t=Nn(Us,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function iv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=pg(),i=ht();if(fn){const r=new ResizeObserver(s=>{s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});bo(()=>{r.disconnect()}),Jt(()=>n.el,(s,a)=>{a&&(r.unobserve(a),i.value=void 0),s&&r.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:Xa(i)}}function _p(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=un(e,n),{aliases:r={},components:s={},directives:a={}}=i,o=Ts();return o.run(()=>{const l=zg(i.defaults),c=k_(i.display,i.ssr),u=tv(i.theme),f=$_(i.icons),d=jg(i.locale),p=F_(i.date,d),x=H_(i.goTo,d);function _(h){for(const S in a)h.directive(S,a[S]);for(const S in s)h.component(S,s[S]);for(const S in r)h.component(S,Ks({...r[S],name:S,aliasName:r[S].name}));const E=Ts();if(E.run(()=>{u.install(h)}),h.onUnmount(()=>E.stop()),h.provide(Hr,l),h.provide(Lf,c),h.provide(Us,u),h.provide(Hl,f),h.provide(Vl,d),h.provide(N_,p.options),h.provide(If,p.instance),h.provide(z_,x),fn&&i.ssr)if(h.$nuxt)h.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:S}=h;h.mount=function(){const A=S(...arguments);return _o(()=>c.update()),h.mount=S,A}}h.mixin({computed:{$vuetify(){return Fn({defaults:gr.call(this,Hr),display:gr.call(this,Lf),theme:gr.call(this,Us),icons:gr.call(this,Hl),locale:gr.call(this,Vl),date:gr.call(this,If)})}}})}function m(){o.stop()}return{install:_,unmount:m,defaults:l,display:c,theme:u,icons:f,locale:d,date:p,goTo:x}})}const rv="3.10.11";_p.version=rv;function gr(t){const e=this.$,n=e.parent?.provides??e.vnode.appContext?.provides;if(n&&t in n)return n[t]}const vp=vt({border:[Boolean,Number,String]},"border");function bp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{borderClasses:Ke(()=>{const i=t.border;return i===!0||i===""?`${e}--border`:typeof i=="string"||i===0?String(i).split(" ").map(r=>`border-${r}`):[]})}}const sv=[null,"default","comfortable","compact"],Sp=vt({density:{type:String,default:"default",validator:t=>sv.includes(t)}},"density");function Mp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{densityClasses:We(()=>`${e}--density-${t.density}`)}}const yp=vt({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Ep(t){return{elevationClasses:We(()=>{const n=xt(t)?t.value:t.elevation;return n==null?[]:[`elevation-${n}`]})}}const Tp=vt({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ap(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{roundedClasses:Ke(()=>{const i=xt(t)?t.value:t.rounded,r=xt(t)?!1:t.tile,s=[];if(r||i===!1)s.push("rounded-0");else if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const a of String(i).split(" "))s.push(`rounded-${a}`);return s})}}const Ro=vt({tag:{type:[String,Object,Function],default:"div"}},"tag");function wp(t){return np(()=>{const{class:e,style:n}=av(t);return{colorClasses:e,colorStyles:n}})}function Gl(t){const{colorClasses:e,colorStyles:n}=wp(()=>({text:Cs(t)}));return{textColorClasses:e,textColorStyles:n}}function av(t){const e=Cs(t),n=[],i={};if(e.background)if(zl(e.background)){if(i.backgroundColor=e.background,!e.text&&Dg(e.background)){const r=Hn(e.background);if(r.a==null||r.a===1){const s=op(r);i.color=s,i.caretColor=s}}}else n.push(`bg-${e.background}`);return e.text&&(zl(e.text)?(i.color=e.text,i.caretColor=e.text):n.push(`text-${e.text}`)),{class:n,style:i}}const ov=["elevated","flat","tonal","outlined","text","plain"];function lv(t,e){return Be(Kt,null,[Be("span",{key:"overlay",class:pn(`${e}__overlay`)},null),Be("span",{key:"underlay",class:pn(`${e}__underlay`)},null)])}const Cp=vt({color:String,variant:{type:String,default:"elevated",validator:t=>ov.includes(t)}},"variant");function cv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();const n=We(()=>{const{variant:s}=Cs(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=wp(()=>{const{variant:s,color:a}=Cs(t);return{[["elevated","flat"].includes(s)?"background":"text"]:a}});return{colorClasses:i,colorStyles:r,variantClasses:n}}const Rp=vt({baseColor:String,divided:Boolean,direction:{type:String,default:"horizontal"},...vp(),...Ao(),...Sp(),...yp(),...Tp(),...Ro(),...Co(),...Cp()},"VBtnGroup"),Vf=dr()({name:"VBtnGroup",props:Rp(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=cu(t),{densityClasses:r}=Mp(t),{borderClasses:s}=bp(t),{elevationClasses:a}=Ep(t),{roundedClasses:o}=Ap(t);lp({VBtn:{height:We(()=>t.direction==="horizontal"?"auto":null),baseColor:We(()=>t.baseColor),color:We(()=>t.color),density:We(()=>t.density),flat:!0,variant:We(()=>t.variant)}}),Zs(()=>Ve(t.tag,{class:pn(["v-btn-group",`v-btn-group--${t.direction}`,{"v-btn-group--divided":t.divided},i.value,s.value,r.value,a.value,o.value,t.class]),style:Ni(t.style)},n))}}),uv=vt({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),fv=vt({value:null,disabled:Boolean,selectedClass:String},"group-item");function dv(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=Zn("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=m0();Kr(Symbol.for(`${e.description}:id`),r);const s=Nn(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const a=We(()=>t.value),o=Ke(()=>!!(s.disabled.value||t.disabled));function l(){s?.register({id:r,value:a,disabled:o},i)}function c(){s?.unregister(r)}l(),bo(()=>c());const u=Ke(()=>s.isSelected(r)),f=Ke(()=>s.items.value[0].id===r),d=Ke(()=>s.items.value[s.items.value.length-1].id===r),p=Ke(()=>u.value&&[s.selectedClass.value,t.selectedClass]);return Jt(u,x=>{i.emit("group:selected",{value:x})},{flush:"sync"}),{id:r,isSelected:u,isFirst:f,isLast:d,toggle:()=>s.select(r,!u.value),select:x=>s.select(r,x),selectedClass:p,value:a,disabled:o,group:s,register:l,unregister:c}}function hv(t,e){let n=!1;const i=Fn([]),r=cp(t,"modelValue",[],d=>d===void 0?[]:Pp(i,d===null?[null]:dg(d)),d=>{const p=mv(i,d);return t.multiple?p:p[0]}),s=Zn("useGroup");function a(d,p){const x=d,_=Symbol.for(`${e.description}:id`),h=hs(_,s?.vnode).indexOf(p);qe(x.value)===void 0&&(x.value=h,x.useIndexAsValue=!0),h>-1?i.splice(h,0,x):i.push(x)}function o(d){if(n)return;l();const p=i.findIndex(x=>x.id===d);i.splice(p,1)}function l(){const d=i.find(p=>!p.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}$s(()=>{l()}),bo(()=>{n=!0}),Ah(()=>{for(let d=0;d<i.length;d++)i[d].useIndexAsValue&&(i[d].value=d)});function c(d,p){const x=i.find(_=>_.id===d);if(!(p&&x?.disabled))if(t.multiple){const _=r.value.slice(),m=_.findIndex(E=>E===d),h=~m;if(p=p??!h,h&&t.mandatory&&_.length<=1||!h&&t.max!=null&&_.length+1>t.max)return;m<0&&p?_.push(d):m>=0&&!p&&_.splice(m,1),r.value=_}else{const _=r.value.includes(d);if(t.mandatory&&_||!_&&!p)return;r.value=p??!_?[d]:[]}}function u(d){if(t.multiple,r.value.length){const p=r.value[0],x=i.findIndex(h=>h.id===p);let _=(x+d)%i.length,m=i[_];for(;m.disabled&&_!==x;)_=(_+d)%i.length,m=i[_];if(m.disabled)return;r.value=[i[_].id]}else{const p=i.find(x=>!x.disabled);p&&(r.value=[p.id])}}const f={register:a,unregister:o,selected:r,select:c,disabled:We(()=>t.disabled),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:We(()=>t.selectedClass),items:We(()=>i),getItemIndex:d=>pv(i,d)};return Kr(e,f),f}function pv(t,e){const n=Pp(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function Pp(t,e){const n=[];return e.forEach(i=>{const r=t.find(a=>au(i,a.value)),s=t[i];r?.value!==void 0?n.push(r.id):s?.useIndexAsValue&&n.push(s.id)}),n}function mv(t,e){const n=[];return e.forEach(i=>{const r=t.findIndex(s=>s.id===i);if(~r){const s=t[r];n.push(s.value!==void 0?s.value:r)}}),n}const Dp=Symbol.for("vuetify:v-btn-toggle"),xv=vt({...Rp(),...uv()},"VBtnToggle");dr()({name:"VBtnToggle",props:xv(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:a,selected:o}=hv(t,Dp);return Zs(()=>{const l=Vf.filterProps(t);return Ve(Vf,Mo({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>[n.default?.({isSelected:i,next:r,prev:s,select:a,selected:o})]})}),{next:r,prev:s,select:a}}});const gv=vt({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),qo=dr(!1)({name:"VDefaultsProvider",props:gv(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:a,scoped:o}=jc(t);return lp(i,{reset:s,root:a,scoped:o,disabled:r}),()=>n.default?.()}}),_v=["x-small","small","default","large","x-large"],uu=vt({size:{type:[String,Number],default:"default"}},"size");function fu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return np(()=>{const n=t.size;let i,r;return kl(_v,n)?i=`${e}--size-${n}`:n&&(r={width:Mn(n),height:Mn(n)}),{sizeClasses:i,sizeStyles:r}})}const vv=vt({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ao,opacity:[String,Number],...Ao(),...uu(),...Ro({tag:"i"}),...Co()},"VIcon"),jo=dr()({name:"VIcon",props:vv(),setup(t,e){let{attrs:n,slots:i}=e;const r=Un(),{themeClasses:s}=nv(),{iconData:a}=Y_(()=>r.value||t.icon),{sizeClasses:o}=fu(t),{textColorClasses:l,textColorStyles:c}=Gl(()=>t.color);return Zs(()=>{const u=i.default?.();u&&(r.value=tp(u).filter(d=>d.type===qs&&d.children&&typeof d.children=="string")[0]?.children);const f=!!(n.onClick||n.onClickOnce);return Ve(a.value.component,{tag:t.tag,icon:a.value.icon,class:pn(["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class]),style:Ni([{"--v-icon-opacity":t.opacity},o.value?void 0:{fontSize:Mn(t.size),height:Mn(t.size),width:Mn(t.size)},c.value,t.style]),role:f?"button":void 0,"aria-hidden":!f,tabindex:f?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function bv(t,e){const n=ht(),i=Un(!1);if(sg){const r=new IntersectionObserver(s=>{i.value=!!s.find(a=>a.isIntersecting)},e);Gs(()=>{r.disconnect()}),Jt(n,(s,a)=>{a&&(r.unobserve(a),i.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const Sv=vt({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Ao(),...uu(),...Ro({tag:"div"}),...Co()},"VProgressCircular"),Mv=dr()({name:"VProgressCircular",props:Sv(),setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=ht(),{themeClasses:a}=cu(t),{sizeClasses:o,sizeStyles:l}=fu(t),{textColorClasses:c,textColorStyles:u}=Gl(()=>t.color),{textColorClasses:f,textColorStyles:d}=Gl(()=>t.bgColor),{intersectionRef:p,isIntersecting:x}=bv(),{resizeRef:_,contentRect:m}=iv(),h=We(()=>ep(parseFloat(t.modelValue),0,100)),E=We(()=>Number(t.width)),S=We(()=>l.value?Number(t.size):m.value?m.value.width:Math.max(E.value,32)),A=We(()=>i/(1-E.value/S.value)*2),C=We(()=>E.value/S.value*A.value),w=We(()=>Mn((100-h.value)/100*r));return Ys(()=>{p.value=s.value,_.value=s.value}),Zs(()=>Ve(t.tag,{ref:s,class:pn(["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":x.value,"v-progress-circular--disable-shrink":t.indeterminate&&(t.indeterminate==="disable-shrink"||og())},a.value,o.value,c.value,t.class]),style:Ni([l.value,u.value,t.style]),role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:h.value},{default:()=>[Be("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${A.value} ${A.value}`},[Be("circle",{class:pn(["v-progress-circular__underlay",f.value]),style:Ni(d.value),fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":C.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),Be("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":C.value,"stroke-dasharray":r,"stroke-dashoffset":w.value},null)]),n.default&&Be("div",{class:"v-progress-circular__content"},[n.default({value:h.value})])]})),{}}}),yv=vt({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ev(t){return{dimensionStyles:Ke(()=>{const n={},i=Mn(t.height),r=Mn(t.maxHeight),s=Mn(t.maxWidth),a=Mn(t.minHeight),o=Mn(t.minWidth),l=Mn(t.width);return i!=null&&(n.height=i),r!=null&&(n.maxHeight=r),s!=null&&(n.maxWidth=s),a!=null&&(n.minHeight=a),o!=null&&(n.minWidth=o),l!=null&&(n.width=l),n})}}const Hf={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Tv=vt({location:String},"location");function Av(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=Jg();return{locationStyles:Ke(()=>{if(!t.location)return{};const{side:s,align:a}=gg(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function o(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[Hf[s]]=`calc(100% - ${o(s)}px)`:l[s]=0),a!=="center"?e?l[Hf[a]]=`calc(100% - ${o(a)}px)`:l[a]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const wv=vt({loading:[Boolean,String]},"loader");function Cv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{loaderClasses:We(()=>({[`${e}--loading`]:t.loading}))}}const Rv=["static","relative","fixed","absolute","sticky"],Pv=vt({position:{type:String,validator:t=>Rv.includes(t)}},"position");function Dv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{positionClasses:We(()=>t.position?`${e}--${t.position}`:void 0)}}function Iv(){const t=Zn("useRoute");return Ke(()=>t?.proxy?.$route)}function Lv(t,e){const n=R0("RouterLink"),i=We(()=>!!(t.href||t.to)),r=Ke(()=>i?.value||xf(e,"click")||xf(t,"click"));if(typeof n=="string"||!("useLink"in n)){const f=We(()=>t.href);return{isLink:i,isRouterLink:We(()=>!1),isClickable:r,href:f,linkProps:Fn({href:f})}}const s=n.useLink({to:We(()=>t.to||""),replace:We(()=>t.replace)}),a=Ke(()=>t.to?s:void 0),o=Iv(),l=Ke(()=>a.value?t.exact?o.value?a.value.isExactActive?.value&&au(a.value.route.value.query,o.value.query):a.value.isExactActive?.value??!1:a.value.isActive?.value??!1:!1),c=Ke(()=>t.to?a.value?.route.value.href:t.href),u=We(()=>!!t.to);return{isLink:i,isRouterLink:u,isClickable:r,isActive:l,route:a.value?.route,navigate:a.value?.navigate,href:c,linkProps:Fn({href:c,"aria-current":We(()=>l.value?"page":void 0),"aria-disabled":We(()=>t.disabled&&i.value?"true":void 0),tabindex:We(()=>t.disabled&&i.value?"-1":void 0)})}}const Uv=vt({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Nv(t,e){Jt(()=>t.isActive?.value,n=>{t.isLink.value&&n!=null&&e&&_o(()=>{e(n)})},{immediate:!0})}const Wl=Symbol("rippleStop"),Fv=80;function Gf(t,e){t.style.transform=e,t.style.webkitTransform=e}function Xl(t){return t.constructor.name==="TouchEvent"}function Ip(t){return t.constructor.name==="KeyboardEvent"}const Ov=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!Ip(t)){const f=e.getBoundingClientRect(),d=Xl(t)?t.touches[t.touches.length-1]:t;i=d.clientX-f.left,r=d.clientY-f.top}let s=0,a=.3;e._ripple?.circle?(a=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const o=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?o:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:a,x:c,y:u,centerX:o,centerY:l}},oo={show(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e?._ripple?.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:a,x:o,y:l,centerX:c,centerY:u}=Ov(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),Gf(r,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),Gf(r,`translate(${c}, ${u}) scale3d(1,1,1)`)})})},hide(t){if(!t?._ripple?.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=Array.from(e).findLast(s=>!s.dataset.isHiding);if(n)n.dataset.isHiding="true";else return;const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode?.parentNode===t&&t.removeChild(n.parentNode)},300)},r)}};function Lp(t){return typeof t>"u"||!!t}function Ns(t){const e={},n=t.currentTarget;if(!(!n?._ripple||n._ripple.touched||t[Wl])){if(t[Wl]=!0,Xl(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Ip(t),n._ripple.class&&(e.class=n._ripple.class),Xl(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{oo.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{n?._ripple?.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Fv)}else oo.show(t,n,e)}}function Wf(t){t[Wl]=!0}function on(t){const e=t.currentTarget;if(e?._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{on(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),oo.hide(e)}}function Up(t){const e=t.currentTarget;e?._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Fs=!1;function Xf(t,e){!Fs&&e.includes(t.key)&&(Fs=!0,Ns(t))}function Np(t){Fs=!1,on(t)}function Fp(t){Fs&&(Fs=!1,on(t))}function Op(t,e,n){const{value:i,modifiers:r}=e,s=Lp(i);s||oo.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle;const a=cg(i)?i:{};a.class&&(t._ripple.class=a.class);const o=a.keys??["Enter","Space"];if(t._ripple.keyDownHandler=l=>Xf(l,o),s&&!n){if(r.stop){t.addEventListener("touchstart",Wf,{passive:!0}),t.addEventListener("mousedown",Wf);return}t.addEventListener("touchstart",Ns,{passive:!0}),t.addEventListener("touchend",on,{passive:!0}),t.addEventListener("touchmove",Up,{passive:!0}),t.addEventListener("touchcancel",on),t.addEventListener("mousedown",Ns),t.addEventListener("mouseup",on),t.addEventListener("mouseleave",on),t.addEventListener("keydown",l=>Xf(l,o)),t.addEventListener("keyup",Np),t.addEventListener("blur",Fp),t.addEventListener("dragstart",on,{passive:!0})}else!s&&n&&Bp(t)}function Bp(t){t.removeEventListener("mousedown",Ns),t.removeEventListener("touchstart",Ns),t.removeEventListener("touchend",on),t.removeEventListener("touchmove",Up),t.removeEventListener("touchcancel",on),t.removeEventListener("mouseup",on),t.removeEventListener("mouseleave",on),t._ripple?.keyDownHandler&&t.removeEventListener("keydown",t._ripple.keyDownHandler),t.removeEventListener("keyup",Np),t.removeEventListener("dragstart",on),t.removeEventListener("blur",Fp)}function Bv(t,e){Op(t,e,!1)}function kv(t){Bp(t),delete t._ripple}function zv(t,e){if(e.value===e.oldValue)return;const n=Lp(e.oldValue);Op(t,e,n)}const Vv={mounted:Bv,unmounted:kv,updated:zv},Hv=vt({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Dp},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ao,appendIcon:ao,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,spaced:String,ripple:{type:[Boolean,Object],default:!0},text:{type:[String,Number,Boolean],default:void 0},...vp(),...Ao(),...Sp(),...yv(),...yp(),...fv(),...wv(),...Tv(),...Pv(),...Tp(),...Uv(),...uu(),...Ro({tag:"button"}),...Co(),...Cp({variant:"elevated"})},"VBtn"),Gr=dr()({name:"VBtn",props:Hv(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=cu(t),{borderClasses:s}=bp(t),{densityClasses:a}=Mp(t),{dimensionStyles:o}=Ev(t),{elevationClasses:l}=Ep(t),{loaderClasses:c}=Cv(t),{locationStyles:u}=Av(t),{positionClasses:f}=Dv(t),{roundedClasses:d}=Ap(t),{sizeClasses:p,sizeStyles:x}=fu(t),_=dv(t,t.symbol,!1),m=Lv(t,n),h=Ke(()=>t.active!==void 0?t.active:m.isRouterLink.value?m.isActive?.value:_?.isSelected.value),E=We(()=>h.value?t.activeColor??t.color:t.color),S=Ke(()=>({color:_?.isSelected.value&&(!m.isLink.value||m.isActive?.value)||!_||m.isActive?.value?E.value??t.baseColor:t.baseColor,variant:t.variant})),{colorClasses:A,colorStyles:C,variantClasses:w}=cv(S),P=Ke(()=>_?.disabled.value||t.disabled),L=We(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),b=Ke(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function v(D){P.value||m.isLink.value&&(D.metaKey||D.ctrlKey||D.shiftKey||D.button!==0||n.target==="_blank")||(m.isRouterLink.value?m.navigate?.(D):_?.toggle())}return Nv(m,_?.select),Zs(()=>{const D=m.isLink.value?"a":t.tag,F=!!(t.prependIcon||i.prepend),z=!!(t.appendIcon||i.append),$=!!(t.icon&&t.icon!==!0);return f0(Ve(D,Mo(m.linkProps,{type:D==="a"?void 0:"button",class:["v-btn",_?.selectedClass.value,{"v-btn--active":h.value,"v-btn--block":t.block,"v-btn--disabled":P.value,"v-btn--elevated":L.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},t.spaced?["v-btn--spaced",`v-btn--spaced-${t.spaced}`]:[],r.value,s.value,A.value,a.value,l.value,c.value,f.value,d.value,p.value,w.value,t.class],style:[C.value,o.value,u.value,x.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:P.value&&D!=="a"||void 0,tabindex:t.loading||t.readonly?-1:void 0,onClick:v,value:b.value}),{default:()=>[lv(!0,"v-btn"),!t.icon&&F&&Be("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?Ve(qo,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):Ve(jo,{key:"prepend-icon",icon:t.prependIcon},null)]),Be("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&$?Ve(jo,{key:"content-icon",icon:t.icon},null):Ve(qo,{key:"content-defaults",disabled:!$,defaults:{VIcon:{icon:t.icon}}},{default:()=>[i.default?.()??xo(t.text)]})]),!t.icon&&z&&Be("span",{key:"append",class:"v-btn__append"},[i.append?Ve(qo,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):Ve(jo,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&Be("span",{key:"loader",class:"v-btn__loader"},[i.loader?.()??Ve(Mv,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}),[[Vv,!P.value&&t.ripple,"",{center:!!t.icon}]])}),{group:_}}}),Gv={DAVID:"david",KEVIN:"kevin",YOHA:"yoha",ALVIN:"alvin",RYAN:"ryan",ARBERT:"albert",ARNOLD:"arnold",CHALSE:"chalse",SAM:"sam",AARON:"aaron",AIDEN:"aiden",POTATO:"potato"},gn={WATER:"loadOfWater",SEASON:"season",INDEPENDENT:"independent",TREE:"slaveOfTree",SUN:"sun"},ha={STANDING:"standing",STRAIGHT:"straight",BACK:"back"},Wv=Object.values(Gv).sort();var Xn=(t=>(t[t.Ready=0]="Ready",t[t.Finding=1]="Finding",t[t.Found=2]="Found",t))(Xn||{}),$l=(t=>(t[t.Intro=0]="Intro",t[t.Office=1]="Office",t))($l||{});const Xv=(t,e)=>(t.sub(e),t.mag());class du{x;y;constructor(e=0,n=0){this.x=e,this.y=n}set(e,n){this.x=e,this.y=n}copy(){return new du(this.x,this.y)}mag(){return Math.sqrt(this.magSq())}setMag(e){return this.normalize().multiScale(e)}add(e){this.x+=e.x,this.y+=e.y}sub(e){this.x-=e.x,this.y-=e.y}multiScale(e){this.x*=e,this.y*=e}divScale(e){this.x/=e,this.y/=e}limit(e){const n=this.magSq();n>e*e&&(this.divScale(Math.sqrt(n)),this.multiScale(e))}magSq(){const e=this.x,n=this.y;return e*e+n*n}normalize(){const e=this.mag();return e!==0&&this.multiScale(1/e),this}heading(){return Math.atan2(this.y,this.x)}dist(e){return Xv(this.copy(),e)}}function $v(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map(function(r){r(n)}),(i=t.get("*"))&&i.slice().map(function(r){r(e,n)})}}}const Yv=[gn.INDEPENDENT,gn.SEASON,gn.SEASON,gn.SEASON,gn.SEASON,gn.TREE,gn.INDEPENDENT,gn.WATER,gn.SUN,gn.SUN,gn.SUN,gn.INDEPENDENT],It={APPEAR:0,ROTATION_RIGHT:1,ROTATION_DOWN:2,ROTATION_LEFT:3,ROTATION_UP:4,MOVE_LEFT:5,MOVE_RIGHT:6,STOP:7},qv=$v(),Ko=new Audio("./sound/playing-in-color.mp3"),bi=ng("scene",()=>{const t=ht(0),e=ht(0),n=ht(0),i=ht(-1),r=ht(null),s=ht(null),a=ht(new du(220,0)),o=ht(Array(12).fill(null)),l=()=>{t.value=0,e.value=0,n.value=0,i.value=0,r.value=null,m(),o.value.fill(null)},c=()=>{r.value=null},u=()=>{t.value++},f=()=>{const E=o.value.map((S,A)=>S===null?A:null).filter(S=>S!==null);E.length>0&&(i.value=E[Math.floor(Math.random()*E.length)])},d=()=>{o.value[i.value]=s.value,e.value=Xn.Found,r.value=Yv[i.value],Ko.pause()},p=()=>{x(Xn.Ready),_(null),m(),n.value=It.APPEAR},x=E=>{e.value=E,E===Xn.Finding&&(Ko.currentTime=0,Ko.play())},_=E=>{s.value===E?s.value=null:s.value=E},m=()=>{a.value.x=220,a.value.y=0},h=Ke(()=>o.value.filter(E=>E===null).length===0);return{sceneStep:t,nextSceneStep:u,seats:o,seatsFull:h,goingSeatIndex:i,randomChoiceIndex:f,cardOrNull:r,seatDown:d,playerStep:e,aniStep:n,updatePlayerStep:x,currentPlayerNameOrNull:s,currentPlayerPosition:a,selectPlayerNameOrNull:_,confirmAndNext:p,closeCardLayer:c,reset:l}}),jv={class:"intro"},Kv={class:"contents"},Zv=en({__name:"Intro",setup(t){const e=bi(),{nextSceneStep:n}=e,i=()=>{n()};return(r,s)=>(mt(),kt("div",jv,[Be("div",Kv,[s[1]||(s[1]=Be("div",{class:"message"},[Be("div",null,"3층 R&D에 오신것을 환영합니다."),Be("div",null,"자리 뽑기가 시작 되었습니다."),Be("div",null,"누구와, 어떤 자리에 앉게 될까요?")],-1)),Ve(qe(Gr),{size:"large",width:330,onClick:i},{default:ar(()=>[...s[0]||(s[0]=[or("시작하기",-1)])]),_:1})]),s[2]||(s[2]=Be("div",{class:"btn"},null,-1))]))}}),mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Jv=mn(Zv,[["__scopeId","data-v-53a69547"]]),Qv="modulepreload",eb=function(t){return"/pick-your-seat/"+t},$f={},_n=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=l(n.map(c=>{if(c=eb(c),c in $f)return;$f[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Qv,u||(d.as="script"),d.crossOrigin="",d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),u)return new Promise((p,x)=>{d.addEventListener("load",p),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},tb=(t,e,n)=>{const i=t[e];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})},nb={class:"profile-wrapper"},ib=en({__name:"Profile",props:{name:{}},setup(t){const e=t,n=g0(()=>tb(Object.assign({"./profile/aaron.vue":()=>_n(()=>import("./aaron-sZrkWdLW.js"),[]),"./profile/aiden.vue":()=>_n(()=>import("./aiden-8NwkFz8V.js"),[]),"./profile/albert.vue":()=>_n(()=>import("./albert-LSzjEQs3.js"),[]),"./profile/alvin.vue":()=>_n(()=>import("./alvin-YGzZ7_9O.js"),[]),"./profile/arnold.vue":()=>_n(()=>import("./arnold-SNuc1Ta5.js"),[]),"./profile/chalse.vue":()=>_n(()=>import("./chalse-D-2ZTNn3.js"),[]),"./profile/david.vue":()=>_n(()=>import("./david-C_iGRp1x.js"),[]),"./profile/kevin.vue":()=>_n(()=>import("./kevin-B_osKrls.js"),[]),"./profile/potato.vue":()=>_n(()=>import("./potato-C1HATSRd.js"),[]),"./profile/ryan.vue":()=>_n(()=>import("./ryan-DIFz2ovd.js"),[]),"./profile/sam.vue":()=>_n(()=>import("./sam-CzOMgeSS.js"),[]),"./profile/yoha.vue":()=>_n(()=>import("./yoha-BrBSk1Jr.js"),[])}),`./profile/${e.name}.vue`,3));return(i,r)=>(mt(),kt("div",nb,[Ve(qe(n))]))}}),rb=mn(ib,[["__scopeId","data-v-fe135e10"]]),sb={class:"member-wraper"},ab={class:"container"},ob=en({__name:"Members",setup(t){const e=bi(),{selectPlayerNameOrNull:n,updatePlayerStep:i,randomChoiceIndex:r}=e,{currentPlayerNameOrNull:s,seats:a}=Zr(e),o=c=>{n(c)},l=()=>{i(Xn.Finding),r()};return(c,u)=>(mt(),kt("div",sb,[u[1]||(u[1]=Be("div",{class:"header"},"입장할 멤버를 선택하세요.",-1)),Be("div",ab,[(mt(!0),kt(Kt,null,D0(qe(Wv),f=>(mt(),qn(rb,{key:f,name:f,onClick:d=>!qe(a).includes(f)&&o(f),class:pn(["member",{select:qe(s)===f,disable:qe(a).includes(f)}])},null,8,["name","onClick","class"]))),128))]),Ve(qe(Gr),{size:"x-large",disabled:qe(s)===null,width:350,onClick:l},{default:ar(()=>[...u[0]||(u[0]=[or("자리찾기 시작하기",-1)])]),_:1},8,["disabled"])]))}}),lb=mn(ob,[["__scopeId","data-v-42bb65a7"]]),cb={},ub={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function fb(t,e){return mt(),kt("svg",ub,[...e[0]||(e[0]=[Be("circle",{cx:"32",cy:"32",r:"32",fill:"#43C078"},null,-1),Be("path",{d:"M26.1694 38.7241L18.5833 30.95L16 33.5787L26.1694 44L48 21.6286L45.4349 19L26.1694 38.7241Z",fill:"white"},null,-1)])])}const db=mn(cb,[["render",fb]]),hb={class:"radar"},pb={class:"count"},mb=en({__name:"radar",setup(t){let e;const n=ht(0),i=()=>{n.value++,e=setTimeout(i,1e3)};return jr(()=>{clearTimeout(e)}),i(),(r,s)=>(mt(),kt("div",hb,[s[0]||(s[0]=Be("div",{class:"circle"},null,-1)),Be("div",pb,xo(n.value),1)]))}}),xb=mn(mb,[["__scopeId","data-v-fe71ba58"]]),gb=["src"],_b=en({__name:"Character",props:{name:{},action:{},width:{},height:{}},setup(t){const e=t,n=Ke(()=>e.action===ha.STRAIGHT||e.action===ha.BACK?ha.STANDING:e.action),i=Ke(()=>`./animate/${e.name}_${n.value}.svg`);return(r,s)=>(mt(),kt("div",{class:"character",style:Ni({width:e.width+"px",height:e.height+"px"})},[Be("img",{src:i.value},null,8,gb)],4))}}),Yf=mn(_b,[["__scopeId","data-v-39a8fb73"]]),vb={class:"member-action"},bb={class:"header"},Sb={class:"container"},Mb={class:"container"},yb=en({__name:"MemberAction",setup(t){const e=bi(),{updatePlayerStep:n,confirmAndNext:i}=e,{currentPlayerNameOrNull:r,playerStep:s}=Zr(e),a=Ke(()=>r.value?r.value[0].toUpperCase()+r.value.slice(1):"");return(o,l)=>(mt(),kt("div",vb,[Be("div",bb,xo(a.value),1),qe(s)===qe(Xn).Finding?(mt(),kt(Kt,{key:0},[Be("div",Sb,[l[0]||(l[0]=Be("div",{class:"messages"},[Be("div",null,"자리를 찾고 있습니다."),Be("div",null,"어디에 앉게 될까요?")],-1)),Ve(xb),qe(r)?(mt(),qn(Yf,{key:0,width:130,height:240,name:qe(r),action:"hi"},null,8,["name"])):ys("",!0)]),Ve(qe(Gr),{size:"x-large",width:350,class:"disable"},{default:ar(()=>[...l[1]||(l[1]=[or("자리찾는중...",-1)])]),_:1})],64)):qe(s)===qe(Xn).Found?(mt(),kt(Kt,{key:1},[Be("div",Mb,[l[2]||(l[2]=Be("div",{class:"messages"},[Be("div",null,"자리를 찾기가 완료 되었습니다."),Be("div",null,"위치를 확인하세요.")],-1)),Ve(db),qe(r)?(mt(),qn(Yf,{key:0,width:130,height:240,name:qe(r),action:"hi"},null,8,["name"])):ys("",!0)]),Ve(qe(Gr),{size:"x-large",width:350,onClick:qe(i)},{default:ar(()=>[...l[3]||(l[3]=[or("확인",-1)])]),_:1},8,["onClick"])],64)):ys("",!0)]))}}),Eb=mn(yb,[["__scopeId","data-v-e65a1358"]]),Tb={class:"member-wrapper"},Ab=en({__name:"MemberWrapper",setup(t){const e=bi(),{playerStep:n}=Zr(e);return(i,r)=>(mt(),kt("div",Tb,[qe(n)===qe(Xn).Ready?(mt(),qn(lb,{key:0})):(mt(),qn(Eb,{key:1}))]))}}),wb=mn(Ab,[["__scopeId","data-v-eec4c330"]]);const hu="181",Cb=0,qf=1,Rb=2,kp=1,Pb=2,ai=3,Bi=0,Qt=1,ui=2,pi=0,Br=1,jf=2,Kf=3,Zf=4,Db=5,Qi=100,Ib=101,Lb=102,Ub=103,Nb=104,Fb=200,Ob=201,Bb=202,kb=203,Yl=204,ql=205,zb=206,Vb=207,Hb=208,Gb=209,Wb=210,Xb=211,$b=212,Yb=213,qb=214,jl=0,Kl=1,Zl=2,Wr=3,Jl=4,Ql=5,ec=6,tc=7,zp=0,jb=1,Kb=2,Li=0,Zb=1,Jb=2,Qb=3,eS=4,tS=5,nS=6,iS=7,Vp=300,Xr=301,$r=302,nc=303,ic=304,Po=306,rc=1e3,fi=1001,sc=1002,dn=1003,rS=1004,pa=1005,En=1006,Zo=1007,tr=1008,jn=1009,Hp=1010,Gp=1011,Os=1012,pu=1013,lr=1014,di=1015,Jr=1016,mu=1017,xu=1018,Bs=1020,Wp=35902,Xp=35899,$p=1021,Yp=1022,In=1023,ks=1026,zs=1027,qp=1028,gu=1029,_u=1030,vu=1031,bu=1033,ka=33776,za=33777,Va=33778,Ha=33779,ac=35840,oc=35841,lc=35842,cc=35843,uc=36196,fc=37492,dc=37496,hc=37808,pc=37809,mc=37810,xc=37811,gc=37812,_c=37813,vc=37814,bc=37815,Sc=37816,Mc=37817,yc=37818,Ec=37819,Tc=37820,Ac=37821,wc=36492,Cc=36494,Rc=36495,Pc=36283,Dc=36284,Ic=36285,Lc=36286,sS=3200,aS=3201,jp=0,oS=1,Pi="",Sn="srgb",Yr="srgb-linear",lo="linear",ut="srgb",_r=7680,Jf=519,lS=512,cS=513,uS=514,Kp=515,fS=516,dS=517,hS=518,pS=519,Qf=35044,ed="300 es",Gn=2e3,co=2001;function Zp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mS(){const t=uo("canvas");return t.style.display="block",t}const td={};function nd(...t){const e="THREE."+t.shift();console.log(e,...t)}function Xe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Tt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Vs(...t){const e=t.join(" ");e in td||(td[e]=!0,Xe(...t))}function xS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,Uc=180/Math.PI;function Qs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function gS(t,e){return(t%e+e)%e}function Qo(t,e,n){return(1-n)*t+n*e}function rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],x=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o>=1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==d||c!==p||u!==x){let m=l*d+c*p+u*x+f*_;m<0&&(d=-d,p=-p,x=-x,_=-_,m=-m);let h=1-o;if(m<.9995){const E=Math.acos(m),S=Math.sin(E);h=Math.sin(h*E)/S,o=Math.sin(o*E)/S,l=l*h+d*o,c=c*h+p*o,u=u*h+x*o,f=f*h+_*o}else{l=l*h+d*o,c=c*h+p*o,u=u*h+x*o,f=f*h+_*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+u*f+l*p-c*d,e[n+1]=l*x+u*d+c*f-o*p,e[n+2]=c*x+u*p+o*d-l*f,e[n+3]=u*x-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(id.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new Z,id=new ea;class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],_=r[0],m=r[3],h=r[6],E=r[1],S=r[4],A=r[7],C=r[2],w=r[5],P=r[8];return s[0]=a*_+o*E+l*C,s[3]=a*m+o*S+l*w,s[6]=a*h+o*A+l*P,s[1]=c*_+u*E+f*C,s[4]=c*m+u*S+f*w,s[7]=c*h+u*A+f*P,s[2]=d*_+p*E+x*C,s[5]=d*m+p*S+x*w,s[8]=d*h+p*A+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,x=n*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(tl.makeScale(e,n)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,n){return this.premultiply(tl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new $e,rd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _S(){const t={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?lo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yr]:{primaries:e,whitePoint:i,transfer:lo,toXYZ:rd,fromXYZ:sd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:rd,fromXYZ:sd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),t}const it=_S();function mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function kr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vr;class vS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=uo("canvas")),vr.width=e.width,vr.height=e.height;const r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mi(n[i]/255)*255):n[i]=mi(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class Su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nl(r[a].image)):s.push(nl(r[a]))}else s=nl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let SS=0;const il=new Z;class $t extends Qr{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=fi,r=fi,s=En,a=tr,o=In,l=jn,c=$t.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Qs(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Vp;$t.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,A=(p+1)/2,C=(h+1)/2,w=(u+d)/4,P=(f+_)/4,L=(x+m)/4;return S>A&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=P/i):A>C?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=w/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=L/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends Qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new $t(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Su(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends MS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jp extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),xa.subVectors(this.max,ss),br.subVectors(e.a,ss),Sr.subVectors(e.b,ss),Mr.subVectors(e.c,ss),Si.subVectors(Sr,br),Mi.subVectors(Mr,Sr),Xi.subVectors(br,Mr);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!rl(n,br,Sr,Mr,xa)||(n=[1,0,0,0,1,0,0,0,1],!rl(n,br,Sr,Mr,xa))?!1:(ga.crossVectors(Si,Mi),n=[ga.x,ga.y,ga.z],rl(n,br,Sr,Mr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Cn=new Z,ma=new ta,br=new Z,Sr=new Z,Mr=new Z,Si=new Z,Mi=new Z,Xi=new Z,ss=new Z,xa=new Z,ga=new Z,$i=new Z;function rl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){$i.fromArray(t,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=n.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ES=new ta,as=new Z,sl=new Z;class Mu{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ES.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const n=as.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(sl)),this.expandByPoint(as.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new Z,al=new Z,_a=new Z,yi=new Z,ol=new Z,va=new Z,ll=new Z;class TS{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){al.copy(e).add(n).multiplyScalar(.5),_a.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(al);const s=e.distanceTo(n)*.5,a=-this.direction.dot(_a),o=yi.dot(this.direction),l=-yi.dot(_a),c=yi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(al).addScaledVector(_a,d),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){ol.subVectors(n,e),va.subVectors(i,e),ll.crossVectors(ol,va);let a=this.direction.dot(ll),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(va.crossVectors(yi,va));if(l<0)return null;const c=o*this.direction.dot(ol.cross(yi));if(c<0||l+c>a)return null;const u=-o*yi.dot(ll);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,a,o,l,c,u,f,d,p,x,_,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,p,x,_,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,p,x,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,x=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,_=c*f;n[0]=d+_*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-x,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,_=c*f;n[0]=d-_*o,n[4]=-a*f,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*u,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,x=o*u,_=o*f;n[0]=l*u,n[4]=x*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,_=o*c;n[0]=l*u,n[4]=_-d*f,n[8]=x*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+x,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=a*u,n[9]=p*f-x,n[2]=x*f-p,n[6]=o*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,wS)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ei.crossVectors(i,rn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ei.crossVectors(i,rn)),Ei.normalize(),ba.crossVectors(rn,Ei),r[0]=Ei.x,r[4]=ba.x,r[8]=rn.x,r[1]=Ei.y,r[5]=ba.y,r[9]=rn.y,r[2]=Ei.z,r[6]=ba.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],_=i[6],m=i[10],h=i[14],E=i[3],S=i[7],A=i[11],C=i[15],w=r[0],P=r[4],L=r[8],b=r[12],v=r[1],D=r[5],F=r[9],z=r[13],$=r[2],te=r[6],X=r[10],ne=r[14],G=r[3],ue=r[7],de=r[11],Te=r[15];return s[0]=a*w+o*v+l*$+c*G,s[4]=a*P+o*D+l*te+c*ue,s[8]=a*L+o*F+l*X+c*de,s[12]=a*b+o*z+l*ne+c*Te,s[1]=u*w+f*v+d*$+p*G,s[5]=u*P+f*D+d*te+p*ue,s[9]=u*L+f*F+d*X+p*de,s[13]=u*b+f*z+d*ne+p*Te,s[2]=x*w+_*v+m*$+h*G,s[6]=x*P+_*D+m*te+h*ue,s[10]=x*L+_*F+m*X+h*de,s[14]=x*b+_*z+m*ne+h*Te,s[3]=E*w+S*v+A*$+C*G,s[7]=E*P+S*D+A*te+C*ue,s[11]=E*L+S*F+A*X+C*de,s[15]=E*b+S*z+A*ne+C*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],_=e[7],m=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+_*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],_=e[13],m=e[14],h=e[15],E=f*m*c-_*d*c+_*l*p-o*m*p-f*l*h+o*d*h,S=x*d*c-u*m*c-x*l*p+a*m*p+u*l*h-a*d*h,A=u*_*c-x*f*c+x*o*p-a*_*p-u*o*h+a*f*h,C=x*f*l-u*_*l-x*o*d+a*_*d+u*o*m-a*f*m,w=n*E+i*S+r*A+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=E*P,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*h+i*l*h)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*P,e[4]=S*P,e[5]=(u*m*s-x*d*s+x*r*p-n*m*p-u*r*h+n*d*h)*P,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*h-n*l*h)*P,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*p+n*l*p)*P,e[8]=A*P,e[9]=(x*f*s-u*_*s-x*i*p+n*_*p+u*i*h-n*f*h)*P,e[10]=(a*_*s-x*o*s+x*i*c-n*_*c-a*i*h+n*o*h)*P,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*P,e[12]=C*P,e[13]=(u*_*r-x*f*r+x*i*d-n*_*d-u*i*m+n*f*m)*P,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*m-n*o*m)*P,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,x=s*f,_=a*u,m=a*f,h=o*f,E=l*c,S=l*u,A=l*f,C=i.x,w=i.y,P=i.z;return r[0]=(1-(_+h))*C,r[1]=(p+A)*C,r[2]=(x-S)*C,r[3]=0,r[4]=(p-A)*w,r[5]=(1-(d+h))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(x+S)*P,r[9]=(m-E)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const a=yr.set(r[4],r[5],r[6]).length(),o=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/a,f=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Gn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let x,_;if(l)x=s/(a-s),_=a*s/(a-s);else if(o===Gn)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===co)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Gn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,_;if(l)x=1/(a-s),_=a/(a-s);else if(o===Gn)x=-2/(a-s),_=-(a+s)/(a-s);else if(o===co)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const yr=new Z,Rn=new At,AS=new Z(0,0,0),wS=new Z(1,1,1),Ei=new Z,ba=new Z,rn=new Z,ad=new At,od=new ea;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ad,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CS=0;const ld=new Z,Er=new ea,ni=new At,Sa=new Z,os=new Z,RS=new Z,PS=new ea,cd=new Z(1,0,0),ud=new Z(0,1,0),fd=new Z(0,0,1),dd={type:"added"},DS={type:"removed"},Tr={type:"childadded",child:null},cl={type:"childremoved",child:null};class zt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new Z,n=new Kn,i=new ea,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new $e}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(cd,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,n){return ld.copy(e).applyQuaternion(this.quaternion),this.position.add(ld.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cd,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sa.copy(e):Sa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(os,Sa,this.up):ni.lookAt(Sa,os,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(ni),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(DS),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new Z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new Z,ii=new Z,ul=new Z,ri=new Z,Ar=new Z,wr=new Z,hd=new Z,fl=new Z,dl=new Z,hl=new Z,pl=new Et,ml=new Et,xl=new Et;class Dn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ii.subVectors(i,n),ul.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ii),l=Pn.dot(ul),c=ii.dot(ii),u=ii.dot(ul),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return pl.setScalar(0),ml.setScalar(0),xl.setScalar(0),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pl,s.x),a.addScaledVector(ml,s.y),a.addScaledVector(xl,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ii.subVectors(e,n),Pn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ar.subVectors(r,i),wr.subVectors(s,i),fl.subVectors(e,i);const l=Ar.dot(fl),c=wr.dot(fl);if(l<=0&&c<=0)return n.copy(i);dl.subVectors(e,r);const u=Ar.dot(dl),f=wr.dot(dl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Ar,a);hl.subVectors(e,s);const p=Ar.dot(hl),x=wr.dot(hl);if(x>=0&&p<=x)return n.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(wr,o);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return hd.subVectors(s,r),o=(f-u)/(f-u+(p-x)),n.copy(r).addScaledVector(hd,o);const h=1/(m+_+d);return a=_*h,o=d*h,n.copy(i).addScaledVector(Ar,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function gl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=gS(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gl(a,s,e+1/3),this.g=gl(a,s,e),this.b=gl(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return it.workingToColorSpace(Ft.copy(this),e),Math.round(Je(Ft.r*255,0,255))*65536+Math.round(Je(Ft.g*255,0,255))*256+Math.round(Je(Ft.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Sn){it.workingToColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(Ma);const i=Qo(Ti.h,Ma.h,n),r=Qo(Ti.s,Ma.s,n),s=Qo(Ti.l,Ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new rt;rt.NAMES=em;let IS=0;class na extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Br,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=ql,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tm extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new Z,ya=new st;let LS=0;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qf,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qf&&(e.usage=this.usage),e}}class nm extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class im extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hn extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let US=0;const vn=new At,_l=new zt,Cr=new Z,sn=new ta,ls=new ta,Dt=new Z;class Jn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?im:nm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(sn.min,ls.min),sn.expandByPoint(Dt),Dt.addVectors(sn.max,ls.max),sn.expandByPoint(Dt)):(sn.expandByPoint(ls.min),sn.expandByPoint(ls.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),Dt.add(Cr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new Z,l[L]=new Z;const c=new Z,u=new Z,f=new Z,d=new st,p=new st,x=new st,_=new Z,m=new Z;function h(L,b,v){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,v),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),o[L].add(_),o[b].add(_),o[v].add(_),l[L].add(m),l[b].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,b=E.length;L<b;++L){const v=E[L],D=v.start,F=v.count;for(let z=D,$=D+F;z<$;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new Z,A=new Z,C=new Z,w=new Z;function P(L){C.fromBufferAttribute(r,L),w.copy(C);const b=o[L];S.copy(b),S.sub(C.multiplyScalar(C.dot(b))).normalize(),A.crossVectors(w,b);const D=A.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,b=E.length;L<b;++L){const v=E[L],D=v.start,F=v.count;for(let z=D,$=D+F;z<$;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new $n(d,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pd=new At,Yi=new TS,Ea=new Mu,md=new Z,Ta=new Z,Aa=new Z,wa=new Z,vl=new Z,Ca=new Z,xd=new Z,Ra=new Z;class Zt extends zt{constructor(e=new Jn,n=new tm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(vl.fromBufferAttribute(f,e),a?Ca.addScaledVector(vl,u):Ca.addScaledVector(vl.sub(n),u))}n.add(Ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(Ea.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ea,md)===null||Yi.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(pd),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const m=d[x],h=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,C=S;A<C;A+=3){const w=o.getX(A),P=o.getX(A+1),L=o.getX(A+2);r=Pa(this,h,e,i,c,u,f,w,P,L),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const E=o.getX(m),S=o.getX(m+1),A=o.getX(m+2);r=Pa(this,a,e,i,c,u,f,E,S,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const m=d[x],h=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,C=S;A<C;A+=3){const w=A,P=A+1,L=A+2;r=Pa(this,h,e,i,c,u,f,w,P,L),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const E=m,S=m+1,A=m+2;r=Pa(this,a,e,i,c,u,f,E,S,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function NS(t,e,n,i,r,s,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bi,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Pa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ta),t.getVertexPosition(l,Aa),t.getVertexPosition(c,wa);const u=NS(t,e,n,i,Ta,Aa,wa,xd);if(u){const f=new Z;Dn.getBarycoord(xd,Ta,Aa,wa,f),r&&(u.uv=Dn.getInterpolatedAttribute(r,o,l,c,f,new st)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,o,l,c,f,new st)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Z,materialIndex:0};Dn.getNormal(Ta,Aa,wa,d.normal),u.face=d,u.barycoord=f}return u}class Ui extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(f,2));function x(_,m,h,E,S,A,C,w,P,L,b){const v=A/P,D=C/L,F=A/2,z=C/2,$=w/2,te=P+1,X=L+1;let ne=0,G=0;const ue=new Z;for(let de=0;de<X;de++){const Te=de*D-z;for(let Fe=0;Fe<te;Fe++){const tt=Fe*v-F;ue[_]=tt*E,ue[m]=Te*S,ue[h]=$,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[h]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Fe/P),f.push(1-de/L),ne+=1}}for(let de=0;de<L;de++)for(let Te=0;Te<P;Te++){const Fe=d+Te+te*de,tt=d+Te+te*(de+1),at=d+(Te+1)+te*(de+1),Qe=d+(Te+1)+te*de;l.push(Fe,tt,Qe),l.push(tt,at,Qe),G+=6}o.addGroup(p,G,b),p+=G,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=qr(t[n]);for(const r in i)e[r]=i[r]}return e}function FS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const OS={clone:qr,merge:Wt};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sm extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new Z,gd=new st,_d=new st;class yn extends sm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,gd,_d),n.subVectors(_d,gd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Pr=1;class zS extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Rr,Pr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Rr,Pr,e,n);s.layers=this.layers,this.add(s);const a=new yn(Rr,Pr,e,n);a.layers=this.layers,this.add(a);const o=new yn(Rr,Pr,e,n);o.layers=this.layers,this.add(o);const l=new yn(Rr,Pr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Rr,Pr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class am extends $t{constructor(e=[],n=Xr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VS extends cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new am(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ui(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:pi});s.uniforms.tEquirect.value=n;const a=new Zt(r,s),o=n.minFilter;return n.minFilter===tr&&(n.minFilter=En),new zS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class ps extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class GS extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class WS extends $t{constructor(e=null,n=1,i=1,r,s,a,o,l,c=dn,u=dn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sl=new Z,XS=new Z,$S=new $e;class Ji{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sl.subVectors(i,n).cross(XS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$S.getNormalMatrix(e),r=this.coplanarPoint(Sl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Mu,YS=new st(.5,.5),Da=new Z;class yu{constructor(e=new Ji,n=new Ji,i=new Ji,r=new Ji,s=new Ji,a=new Ji){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],x=s[8],_=s[9],m=s[10],h=s[11],E=s[12],S=s[13],A=s[14],C=s[15];if(r[0].setComponents(c-a,p-u,h-x,C-E).normalize(),r[1].setComponents(c+a,p+u,h+x,C+E).normalize(),r[2].setComponents(c+o,p+f,h+_,C+S).normalize(),r[3].setComponents(c-o,p-f,h-_,C-S).normalize(),i)r[4].setComponents(l,d,m,A).normalize(),r[5].setComponents(c-l,p-d,h-m,C-A).normalize();else if(r[4].setComponents(c-l,p-d,h-m,C-A).normalize(),n===Gn)r[5].setComponents(c+l,p+d,h+m,C+A).normalize();else if(n===co)r[5].setComponents(l,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const n=YS.distanceTo(e.center);return qi.radius=.7071067811865476+n,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class om extends $t{constructor(e,n,i=lr,r,s,a,o=dn,l=dn,c,u=ks,f=1){if(u!==ks&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Su(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lm extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eu extends Jn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=n/2,f=Math.PI/2*e,d=n,p=2*f+d,x=i*2+s,_=r+1,m=new Z,h=new Z;for(let E=0;E<=x;E++){let S=0,A=0,C=0,w=0;if(E<=i){const b=E/i,v=b*Math.PI/2;A=-u-e*Math.cos(v),C=e*Math.sin(v),w=-e*Math.cos(v),S=b*f}else if(E<=i+s){const b=(E-i)/s;A=-u+b*n,C=e,w=0,S=f+b*d}else{const b=(E-i-s)/i,v=b*Math.PI/2;A=u+e*Math.sin(v),C=e*Math.cos(v),w=e*Math.sin(v),S=f+d+b*f}const P=Math.max(0,Math.min(1,S/p));let L=0;E===0?L=.5/r:E===x&&(L=-.5/r);for(let b=0;b<=r;b++){const v=b/r,D=v*Math.PI*2,F=Math.sin(D),z=Math.cos(D);h.x=-C*z,h.y=A,h.z=C*F,o.push(h.x,h.y,h.z),m.set(-C*z,w,C*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+L,P)}if(E>0){const b=(E-1)*_;for(let v=0;v<r;v++){const D=b+v,F=b+v+1,z=E*_+v,$=E*_+v+1;a.push(D,F,z),a.push(F,$,z)}}}this.setIndex(a),this.setAttribute("position",new hn(o,3)),this.setAttribute("normal",new hn(l,3)),this.setAttribute("uv",new hn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Tu extends Jn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let x=0;const _=[],m=i/2;let h=0;E(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new hn(f,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2));function E(){const A=new Z,C=new Z;let w=0;const P=(n-e)/i;for(let L=0;L<=s;L++){const b=[],v=L/s,D=v*(n-e)+e;for(let F=0;F<=r;F++){const z=F/r,$=z*l+o,te=Math.sin($),X=Math.cos($);C.x=D*te,C.y=-v*i+m,C.z=D*X,f.push(C.x,C.y,C.z),A.set(te,P,X).normalize(),d.push(A.x,A.y,A.z),p.push(z,1-v),b.push(x++)}_.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const v=_[b][L],D=_[b+1][L],F=_[b+1][L+1],z=_[b][L+1];(e>0||b!==0)&&(u.push(v,D,z),w+=3),(n>0||b!==s-1)&&(u.push(D,F,z),w+=3)}c.addGroup(h,w,0),h+=w}function S(A){const C=x,w=new st,P=new Z;let L=0;const b=A===!0?e:n,v=A===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),x++;const D=x;for(let F=0;F<=r;F++){const $=F/r*l+o,te=Math.cos($),X=Math.sin($);P.x=b*X,P.y=m*v,P.z=b*te,f.push(P.x,P.y,P.z),d.push(0,v,0),w.x=te*.5+.5,w.y=X*.5*v+.5,p.push(w.x,w.y),x++}for(let F=0;F<r;F++){const z=C+F,$=D+F;A===!0?u.push($,$+1,z):u.push($+1,$,z),L+=3}c.addGroup(h,L,A===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,p=[],x=[],_=[],m=[];for(let h=0;h<u;h++){const E=h*d-a;for(let S=0;S<c;S++){const A=S*f-s;x.push(A,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const S=E+c*h,A=E+c*(h+1),C=E+1+c*(h+1),w=E+1+c*h;p.push(S,A,w),p.push(A,C,w)}this.setIndex(p),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class cs extends na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qS extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jS extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cm extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ml=new At,vd=new Z,bd=new Z;class KS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),n.position.copy(vd),bd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bd),n.updateMatrixWorld(),Ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class um extends sm{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ZS extends KS{constructor(){super(new um(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JS extends cm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ZS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QS extends cm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class eM extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Sd(t,e,n,i){const r=nM(i);switch(n){case $p:return t*e;case qp:return t*e/r.components*r.byteLength;case gu:return t*e/r.components*r.byteLength;case _u:return t*e*2/r.components*r.byteLength;case vu:return t*e*2/r.components*r.byteLength;case Yp:return t*e*3/r.components*r.byteLength;case In:return t*e*4/r.components*r.byteLength;case bu:return t*e*4/r.components*r.byteLength;case ka:case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oc:case cc:return Math.max(t,16)*Math.max(e,8)/4;case ac:case lc:return Math.max(t,8)*Math.max(e,8)/2;case uc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wc:case Cc:case Rc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Pc:case Dc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ic:case Lc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nM(t){switch(t){case jn:case Hp:return{byteLength:1,components:1};case Os:case Gp:case Jr:return{byteLength:2,components:1};case mu:case xu:return{byteLength:2,components:4};case lr:case pu:case di:return{byteLength:4,components:1};case Wp:case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);function fm(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function iM(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],_=f[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ny=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ME=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:rM,alphahash_pars_fragment:sM,alphamap_fragment:aM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:hM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:xM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:MM,color_fragment:yM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:AM,common:wM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:RM,displacementmap_pars_vertex:PM,displacementmap_vertex:DM,emissivemap_fragment:IM,emissivemap_pars_fragment:LM,colorspace_fragment:UM,colorspace_pars_fragment:NM,envmap_fragment:FM,envmap_common_pars_fragment:OM,envmap_pars_fragment:BM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:KM,envmap_vertex:zM,fog_vertex:VM,fog_pars_vertex:HM,fog_fragment:GM,fog_pars_fragment:WM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:$M,lights_lambert_fragment:YM,lights_lambert_pars_fragment:qM,lights_pars_begin:jM,lights_toon_fragment:ZM,lights_toon_pars_fragment:JM,lights_phong_fragment:QM,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:ry,lights_fragment_end:sy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:oy,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:fy,map_particle_fragment:dy,map_particle_pars_fragment:hy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:xy,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:by,normal_fragment_begin:Sy,normal_fragment_maps:My,normal_pars_fragment:yy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Py,opaque_fragment:Dy,packing:Iy,premultiplied_alpha_fragment:Ly,project_vertex:Uy,dithering_fragment:Ny,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:zy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:$y,specularmap_fragment:Yy,specularmap_pars_fragment:qy,tonemapping_fragment:jy,tonemapping_pars_fragment:Ky,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:Qy,uv_pars_vertex:eE,uv_vertex:tE,worldpos_vertex:nE,background_vert:iE,background_frag:rE,backgroundCube_vert:sE,backgroundCube_frag:aE,cube_vert:oE,cube_frag:lE,depth_vert:cE,depth_frag:uE,distanceRGBA_vert:fE,distanceRGBA_frag:dE,equirect_vert:hE,equirect_frag:pE,linedashed_vert:mE,linedashed_frag:xE,meshbasic_vert:gE,meshbasic_frag:_E,meshlambert_vert:vE,meshlambert_frag:bE,meshmatcap_vert:SE,meshmatcap_frag:ME,meshnormal_vert:yE,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:AE,meshphysical_vert:wE,meshphysical_frag:CE,meshtoon_vert:RE,meshtoon_frag:PE,points_vert:DE,points_frag:IE,shadow_vert:LE,shadow_frag:UE,sprite_vert:NE,sprite_frag:FE},ge={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Vn={basic:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Wt([ge.common,ge.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Wt([ge.lights,ge.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Vn.physical={uniforms:Wt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ia={r:0,b:0,g:0},ji=new Kn,OE=new At;function BE(t,e,n,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function x(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?n:e).get(A)),A}function _(S){let A=!1;const C=x(S);C===null?h(o,l):C&&C.isColor&&(h(C,1),A=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,A){const C=x(A);C&&(C.isCubeTexture||C.mapping===Po)?(u===void 0&&(u=new Zt(new Ui(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:qr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ji.copy(A.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(ji)),u.material.toneMapped=it.getTransfer(C.colorSpace)!==ut,(f!==C||d!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Zt(new ia(2,2),new _i({name:"BackgroundMaterial",uniforms:qr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,A){S.getRGB(Ia,rm(t)),i.buffers.color.setClear(Ia.r,Ia.g,Ia.b,A,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:_,addToRenderList:m,dispose:E}}function kE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,D,F,z,$){let te=!1;const X=f(z,F,D);s!==X&&(s=X,c(s.object)),te=p(v,z,F,$),te&&x(v,z,F,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,A(v,D,F,z),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function u(v){return t.deleteVertexArray(v)}function f(v,D,F){const z=F.wireframe===!0;let $=i[v.id];$===void 0&&($={},i[v.id]=$);let te=$[D.id];te===void 0&&(te={},$[D.id]=te);let X=te[z];return X===void 0&&(X=d(l()),te[z]=X),X}function d(v){const D=[],F=[],z=[];for(let $=0;$<n;$++)D[$]=0,F[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,D,F,z){const $=s.attributes,te=D.attributes;let X=0;const ne=F.getAttributes();for(const G in ne)if(ne[G].location>=0){const de=$[G];let Te=te[G];if(Te===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Te=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Te=v.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function x(v,D,F,z){const $={},te=D.attributes;let X=0;const ne=F.getAttributes();for(const G in ne)if(ne[G].location>=0){let de=te[G];de===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),$[G]=Te,X++}s.attributes=$,s.attributesNum=X,s.index=z}function _(){const v=s.newAttributes;for(let D=0,F=v.length;D<F;D++)v[D]=0}function m(v){h(v,0)}function h(v,D){const F=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;F[v]=1,z[v]===0&&(t.enableVertexAttribArray(v),z[v]=1),$[v]!==D&&(t.vertexAttribDivisor(v,D),$[v]=D)}function E(){const v=s.newAttributes,D=s.enabledAttributes;for(let F=0,z=D.length;F<z;F++)D[F]!==v[F]&&(t.disableVertexAttribArray(F),D[F]=0)}function S(v,D,F,z,$,te,X){X===!0?t.vertexAttribIPointer(v,D,F,$,te):t.vertexAttribPointer(v,D,F,z,$,te)}function A(v,D,F,z){_();const $=z.attributes,te=F.getAttributes(),X=D.defaultAttributeValues;for(const ne in te){const G=te[ne];if(G.location>=0){let ue=$[ne];if(ue===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){const de=ue.normalized,Te=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;const tt=Fe.buffer,at=Fe.type,Qe=Fe.bytesPerElement,ee=at===t.INT||at===t.UNSIGNED_INT||ue.gpuType===pu;if(ue.isInterleavedBufferAttribute){const re=ue.data,ve=re.stride,ze=ue.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)h(G.location+De,re.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<G.locationSize;De++)m(G.location+De);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let De=0;De<G.locationSize;De++)S(G.location+De,Te/G.locationSize,at,de,ve*Qe,(ze+Te/G.locationSize*De)*Qe,ee)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)h(G.location+re,ue.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let re=0;re<G.locationSize;re++)S(G.location+re,Te/G.locationSize,at,de,Te*Qe,Te/G.locationSize*re*Qe,ee)}}else if(X!==void 0){const de=X[ne];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(G.location,de);break;case 3:t.vertexAttrib3fv(G.location,de);break;case 4:t.vertexAttrib4fv(G.location,de);break;default:t.vertexAttrib1fv(G.location,de)}}}}E()}function C(){L();for(const v in i){const D=i[v];for(const F in D){const z=D[F];for(const $ in z)u(z[$].object),delete z[$];delete D[F]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;const D=i[v.id];for(const F in D){const z=D[F];for(const $ in z)u(z[$].object),delete z[$];delete D[F]}delete i[v.id]}function P(v){for(const D in i){const F=i[D];if(F[v.id]===void 0)continue;const z=F[v.id];for(const $ in z)u(z[$].object),delete z[$];delete F[v.id]}}function L(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function zE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_]*d[_];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function VE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==In&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==jn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!L)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:C,maxSamples:w}}function HE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ji,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,S=E*4;let A=h.clippingState||null;l.value=A,A=u(x,d,S,p);for(let C=0;C!==S;++C)A[C]=n[C];h.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const h=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,A=p;S!==_;++S,A+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function GE(t){let e=new WeakMap;function n(a,o){return o===nc?a.mapping=Xr:o===ic&&(a.mapping=$r),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===nc||o===ic)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new VS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Di=4,Md=[.125,.215,.35,.446,.526,.582],er=20,WE=256,us=new um,yd=new rt;let yl=null,El=0,Tl=0,Al=!1;const XE=new Z;class Ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=XE}=s;yl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,El,Tl),this._renderer.xr.enabled=Al,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Jr,format:In,colorSpace:Yr,depthBuffer:!1},r=Td(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$E(s)),this._blurMaterial=qE(s,e,n),this._ggxMaterial=YE(s,e,n)}return r}_compileMaterial(e){const n=new Zt(new Jn,e);this._renderer.compile(n,us)}_sceneToCubeUV(e,n,i,r,s){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(yd),f.toneMapping=Li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Ui,new tm({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,h=!0):(m.color.copy(yd),h=!0);for(let S=0;S<6;S++){const A=S%3;A===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):A===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const C=this._cubeSize;Dr(r,A*C,S>2?C:0,C,C),f.setRenderTarget(r),h&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Dr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,us)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,p=f*d,{_lodMax:x}=this,_=this._sizeLods[i],m=3*_*(i>x-Di?i-x+Di:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,Dr(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(o,us),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Dr(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(o,us)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*er-1),_=s/x,m=isFinite(s)?1+Math.floor(u*_):er;m>er&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const h=[];let E=0;for(let P=0;P<er;++P){const L=P/_,b=Math.exp(-L*L/2);h.push(b),P===0?E+=b:P<m&&(E+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;const A=this._sizeLods[r],C=3*A*(r>S-Di?r-S+Di:0),w=4*(this._cubeSize-A);Dr(n,C,w,3*A,2*A),l.setRenderTarget(n),l.render(f,us)}}function $E(t){const e=[],n=[],i=[];let r=t;const s=t-Di+1+Md.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Di?l=Md[a-t+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,_=3,m=2,h=1,E=new Float32Array(_*x*p),S=new Float32Array(m*x*p),A=new Float32Array(h*x*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,L=w>2?0:-1,b=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];E.set(b,_*x*w),S.set(d,m*x*w);const v=[w,w,w,w,w,w];A.set(v,h*x*w)}const C=new Jn;C.setAttribute("position",new $n(E,_)),C.setAttribute("uv",new $n(S,m)),C.setAttribute("faceIndex",new $n(A,h)),i.push(new Zt(C,null)),r>Di&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Td(t,e,n){const i=new cr(t,e,n);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YE(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function qE(t,e,n){const i=new Float32Array(er),r=new Z(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ad(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wd(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===nc||l===ic,u=l===Xr||l===$r;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Ed(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ed(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function KE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Vs("WebGLRenderer: "+i+" extension not supported."),r}}}function ZE(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,x=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let S=0,A=E.length;S<A;S+=3){const C=E[S+0],w=E[S+1],P=E[S+2];d.push(C,w,w,P,P,C)}}else if(x!==void 0){const E=x.array;_=x.version;for(let S=0,A=E.length/3-1;S<A;S+=3){const C=S+0,w=S+1,P=S+2;d.push(C,w,w,P,P,C)}}else return;const m=new(Zp(d)?im:nm)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function JE(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,d*a,x),n.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];n.update(m,i,1)}function f(d,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,x);let h=0;for(let E=0;E<x;E++)h+=p[E]*_[E];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function QE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function e1(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let b=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let A=o.attributes.position.count*S,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*C*4*f),P=new Jp(w,A,C,f);P.type=di,P.needsUpdate=!0;const L=S*4;for(let v=0;v<f;v++){const D=m[v],F=h[v],z=E[v],$=A*C*4*v;for(let te=0;te<D.count;te++){const X=te*L;p===!0&&(r.fromBufferAttribute(D,te),w[$+X+0]=r.x,w[$+X+1]=r.y,w[$+X+2]=r.z,w[$+X+3]=0),x===!0&&(r.fromBufferAttribute(F,te),w[$+X+4]=r.x,w[$+X+5]=r.y,w[$+X+6]=r.z,w[$+X+7]=0),_===!0&&(r.fromBufferAttribute(z,te),w[$+X+8]=r.x,w[$+X+9]=r.y,w[$+X+10]=r.z,w[$+X+11]=z.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new st(A,C)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function t1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const dm=new $t,Cd=new om(1,1),hm=new Jp,pm=new yS,mm=new am,Rd=[],Pd=[],Dd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);function es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rd[r];if(s===void 0&&(s=new Float32Array(r),Rd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Io(t,e){let n=Pd[e];n===void 0&&(n=new Int32Array(e),Pd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function n1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function s1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function a1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Ld.set(i),t.uniformMatrix2fv(this.addr,!1,Ld),Pt(n,i)}}function o1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Id.set(i),t.uniformMatrix3fv(this.addr,!1,Id),Pt(n,i)}}function l1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Dd.set(i),t.uniformMatrix4fv(this.addr,!1,Dd),Pt(n,i)}}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function h1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function g1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cd.compareFunction=Kp,s=Cd):s=dm,n.setTexture2D(e||s,r)}function _1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||pm,r)}function v1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mm,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hm,r)}function S1(t){switch(t){case 5126:return n1;case 35664:return i1;case 35665:return r1;case 35666:return s1;case 35674:return a1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return d1;case 5125:return h1;case 36294:return p1;case 36295:return m1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return b1}}function M1(t,e){t.uniform1fv(this.addr,e)}function y1(t,e){const n=es(e,this.size,2);t.uniform2fv(this.addr,n)}function E1(t,e){const n=es(e,this.size,3);t.uniform3fv(this.addr,n)}function T1(t,e){const n=es(e,this.size,4);t.uniform4fv(this.addr,n)}function A1(t,e){const n=es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function w1(t,e){const n=es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function C1(t,e){const n=es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function R1(t,e){t.uniform1iv(this.addr,e)}function P1(t,e){t.uniform2iv(this.addr,e)}function D1(t,e){t.uniform3iv(this.addr,e)}function I1(t,e){t.uniform4iv(this.addr,e)}function L1(t,e){t.uniform1uiv(this.addr,e)}function U1(t,e){t.uniform2uiv(this.addr,e)}function N1(t,e){t.uniform3uiv(this.addr,e)}function F1(t,e){t.uniform4uiv(this.addr,e)}function O1(t,e,n){const i=this.cache,r=e.length,s=Io(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||dm,s[a])}function B1(t,e,n){const i=this.cache,r=e.length,s=Io(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||pm,s[a])}function k1(t,e,n){const i=this.cache,r=e.length,s=Io(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||mm,s[a])}function z1(t,e,n){const i=this.cache,r=e.length,s=Io(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||hm,s[a])}function V1(t){switch(t){case 5126:return M1;case 35664:return y1;case 35665:return E1;case 35666:return T1;case 35674:return A1;case 35675:return w1;case 35676:return C1;case 5124:case 35670:return R1;case 35667:case 35671:return P1;case 35668:case 35672:return D1;case 35669:case 35673:return I1;case 5125:return L1;case 36294:return U1;case 36295:return N1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return z1}}class H1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=S1(n.type)}}class G1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=V1(n.type)}}class W1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function Ud(t,e){t.seq.push(e),t.map[e.id]=e}function X1(t,e,n){const i=t.name,r=i.length;for(wl.lastIndex=0;;){const s=wl.exec(i),a=wl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ud(n,c===void 0?new H1(o,t,e):new G1(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new W1(o),Ud(n,f)),n=f}}}class Ga{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);X1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Nd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $1=37297;let Y1=0;function q1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Fd=new $e;function j1(t){it._getMatrix(Fd,it.workingColorSpace,t);const e=`mat3( ${Fd.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case lo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Od(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+q1(t.getShaderSource(e),o)}else return s}function K1(t,e){const n=j1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Z1(t,e){let n;switch(e){case Zb:n="Linear";break;case Jb:n="Reinhard";break;case Qb:n="Cineon";break;case eS:n="ACESFilmic";break;case nS:n="AgX";break;case iS:n="Neutral";break;case tS:n="Custom";break;default:Xe("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new Z;function J1(){it.getLuminanceCoefficients(La);const t=La.x.toFixed(4),e=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function e3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function t3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ms(t){return t!==""}function Bd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(t){return t.replace(n3,r3)}const i3=new Map;function r3(t,e){let n=Ye[e];if(n===void 0){const i=i3.get(e);if(i!==void 0)n=Ye[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(n)}const s3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(t){return t.replace(s3,a3)}function a3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Pb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function l3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xr:case $r:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function u3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case jb:e="ENVMAP_BLENDING_MIX";break;case Kb:e="ENVMAP_BLENDING_ADD";break}return e}function f3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function d3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=o3(n),c=l3(n),u=c3(n),f=u3(n),d=f3(n),p=Q1(n),x=e3(s),_=r.createProgram();let m,h,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ms).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ms).join(`
`),h.length>0&&(h+=`
`)):(m=[Vd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),h=[Vd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Li?Z1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,K1("linearToOutputTexel",n.outputColorSpace),J1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ms).join(`
`)),a=Nc(a),a=Bd(a,n),a=kd(a,n),o=Nc(o),o=Bd(o,n),o=kd(o,n),a=zd(a),o=zd(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=E+m+a,A=E+h+o,C=Nd(r,r.VERTEX_SHADER,S),w=Nd(r,r.FRAGMENT_SHADER,A);r.attachShader(_,C),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(C)||"",$=r.getShaderInfoLog(w)||"",te=F.trim(),X=z.trim(),ne=$.trim();let G=!0,ue=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,w);else{const de=Od(r,C,"vertex"),Te=Od(r,w,"fragment");Tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+te+`
`+de+`
`+Te)}else te!==""?Xe("WebGLProgram: Program Info Log:",te):(X===""||ne==="")&&(ue=!1);ue&&(D.diagnostics={runnable:G,programLog:te,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:h}})}r.deleteShader(C),r.deleteShader(w),L=new Ga(r,_),b=t3(r,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,$1)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let h3=0;class p3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m3(e),n.set(e,i)),i}}class m3{constructor(e){this.id=h3++,this.code=e,this.usedTimes=0}}function x3(t,e,n,i,r,s,a){const o=new Qp,l=new p3,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,D,F,z){const $=F.fog,te=z.geometry,X=b.isMeshStandardMaterial?F.environment:null,ne=(b.isMeshStandardMaterial?n:e).get(b.envMap||X),G=ne&&ne.mapping===Po?ne.image.height:null,ue=x[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&Xe("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const de=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Te=de!==void 0?de.length:0;let Fe=0;te.morphAttributes.position!==void 0&&(Fe=1),te.morphAttributes.normal!==void 0&&(Fe=2),te.morphAttributes.color!==void 0&&(Fe=3);let tt,at,Qe,ee;if(ue){const lt=Vn[ue];tt=lt.vertexShader,at=lt.fragmentShader}else tt=b.vertexShader,at=b.fragmentShader,l.update(b),Qe=l.getVertexShaderID(b),ee=l.getFragmentShaderID(b);const re=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,De=z.isBatchedMesh===!0,je=!!b.map,R=!!b.matcap,I=!!ne,V=!!b.aoMap,T=!!b.lightMap,K=!!b.bumpMap,J=!!b.normalMap,oe=!!b.displacementMap,q=!!b.emissiveMap,se=!!b.metalnessMap,H=!!b.roughnessMap,le=b.anisotropy>0,M=b.clearcoat>0,g=b.dispersion>0,N=b.iridescence>0,W=b.sheen>0,Q=b.transmission>0,k=le&&!!b.anisotropyMap,Se=M&&!!b.clearcoatMap,fe=M&&!!b.clearcoatNormalMap,Ae=M&&!!b.clearcoatRoughnessMap,ye=N&&!!b.iridescenceMap,ae=N&&!!b.iridescenceThicknessMap,he=W&&!!b.sheenColorMap,we=W&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,be=!!b.specularColorMap,Ue=!!b.specularIntensityMap,U=Q&&!!b.transmissionMap,_e=Q&&!!b.thicknessMap,me=!!b.gradientMap,xe=!!b.alphaMap,ce=b.alphaTest>0,ie=!!b.alphaHash,Re=!!b.extensions;let Ge=Li;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const _t={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:at,defines:b.defines,customVertexShaderID:Qe,customFragmentShaderID:ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Yr,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:R,envMap:I,envMapMode:I&&ne.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:T,bumpMap:K,normalMap:J,displacementMap:d&&oe,emissiveMap:q,normalMapObjectSpace:J&&b.normalMapType===oS,normalMapTangentSpace:J&&b.normalMapType===jp,metalnessMap:se,roughnessMap:H,anisotropy:le,anisotropyMap:k,clearcoat:M,clearcoatMap:Se,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:g,iridescence:N,iridescenceMap:ye,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:he,sheenRoughnessMap:we,specularMap:Ce,specularColorMap:be,specularIntensityMap:Ue,transmission:Q,transmissionMap:U,thicknessMap:_e,gradientMap:me,opaque:b.transparent===!1&&b.blending===Br&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:ce,alphaHash:ie,combine:b.combine,mapUv:je&&_(b.map.channel),aoMapUv:V&&_(b.aoMap.channel),lightMapUv:T&&_(b.lightMap.channel),bumpMapUv:K&&_(b.bumpMap.channel),normalMapUv:J&&_(b.normalMap.channel),displacementMapUv:oe&&_(b.displacementMap.channel),emissiveMapUv:q&&_(b.emissiveMap.channel),metalnessMapUv:se&&_(b.metalnessMap.channel),roughnessMapUv:H&&_(b.roughnessMap.channel),anisotropyMapUv:k&&_(b.anisotropyMap.channel),clearcoatMapUv:Se&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(b.sheenRoughnessMap.channel),specularMapUv:Ce&&_(b.specularMap.channel),specularColorMapUv:be&&_(b.specularColorMap.channel),specularIntensityMapUv:Ue&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:_e&&_(b.thicknessMap.channel),alphaMapUv:xe&&_(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(J||le),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(je||xe),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:q&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ui,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Re&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&b.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function h(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)v.push(D),v.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(E(v,b),S(v,b),v.push(t.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function E(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function S(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const v=x[b.type];let D;if(v){const F=Vn[v];D=OS.clone(F.uniforms)}else D=b.uniforms;return D}function C(b,v){let D;for(let F=0,z=u.length;F<z;F++){const $=u[F];if($.cacheKey===v){D=$,++D.usedTimes;break}}return D===void 0&&(D=new d3(t,v,b,s),u.push(D)),D}function w(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:A,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:L}}function g3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function _3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,x,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,d,p,x,_,m){const h=a(f,d,p,x,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,x,_,m){const h=a(f,d,p,x,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||_3),i.length>1&&i.sort(d||Hd),r.length>1&&r.sort(d||Hd)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function v3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gd,t.set(i,[a])):r>=s.length?(a=new Gd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function b3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new rt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function S3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M3=0;function y3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function E3(t){const e=new b3,n=S3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new At,a=new At;function o(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,_=0,m=0,h=0,E=0,S=0,A=0,C=0,w=0,P=0;c.sort(y3);for(let b=0,v=c.length;b<v;b++){const D=c[b],F=D.color,z=D.intensity,$=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*z,f+=F.g*z,d+=F.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);P++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,G=n.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=D.shadow.matrix,E++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=$,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const ne=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,ne.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=ne.matrix,D.castShadow){const G=n.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=te,A++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ne=D.shadow,G=n.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=D.shadow.matrix,S++}i.point[x]=X,x++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[h]=X,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==A||L.numSpotMaps!==C||L.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,L.directionalLength=p,L.pointLength=x,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=A,L.numSpotMaps=C,L.numLightProbes=P,i.version=M3++)}function l(c,u){let f=0,d=0,p=0,x=0,_=0;const m=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const S=c[h];if(S.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),f++}else if(S.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Wd(t){const e=new E3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function T3(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wd(t),e.set(r,[o])):s>=a.length?(o=new Wd(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C3(t,e,n){let i=new yu;const r=new st,s=new st,a=new Et,o=new qS({depthPacking:aS}),l=new jS,c={},u=n.maxTextureSize,f={[Bi]:Qt,[Qt]:Bi,[ui]:ui},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:A3,fragmentShader:w3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Jn;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let h=this.type;this.render=function(w,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=t.getRenderTarget(),v=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=h!==ai&&this.type===ai,$=h===ai&&this.type!==ai;for(let te=0,X=w.length;te<X;te++){const ne=w[te],G=ne.shadow;if(G===void 0){Xe("WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ue=G.getFrameExtents();if(r.multiply(ue),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,G.mapSize.y=s.y)),G.map===null||z===!0||$===!0){const Te=this.type!==ai?{minFilter:dn,magFilter:dn}:{};G.map!==null&&G.map.dispose(),G.map=new cr(r.x,r.y,Te),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const de=G.getViewportCount();for(let Te=0;Te<de;Te++){const Fe=G.getViewport(Te);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),F.viewport(a),G.updateMatrices(ne,Te),i=G.getFrustum(),A(P,L,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===ai&&E(G,L),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,v,D)};function E(w,P){const L=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(P,null,L,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(P,null,L,p,_,null)}function S(w,P,L,b){let v=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=v.uuid,z=P.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let te=$[z];te===void 0&&(te=v.clone(),$[z]=te,P.addEventListener("dispose",C)),v=te}if(v.visible=P.visible,v.wireframe=P.wireframe,b===ai?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:f[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=t.properties.get(v);F.light=L}return v}function A(w,P,L,b,v){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ai)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const z=e.update(w),$=w.material;if(Array.isArray($)){const te=z.groups;for(let X=0,ne=te.length;X<ne;X++){const G=te[X],ue=$[G.materialIndex];if(ue&&ue.visible){const de=S(w,ue,b,v);w.onBeforeShadow(t,w,P,L,z,de,G),t.renderBufferDirect(L,null,z,de,w,G),w.onAfterShadow(t,w,P,L,z,de,G)}}}else if($.visible){const te=S(w,$,b,v);w.onBeforeShadow(t,w,P,L,z,te,null),t.renderBufferDirect(L,null,z,te,w,null),w.onAfterShadow(t,w,P,L,z,te,null)}}const F=w.children;for(let z=0,$=F.length;z<$;z++)A(F[z],P,L,b,v)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const b=c[L],v=w.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const R3={[jl]:Kl,[Zl]:ec,[Jl]:tc,[Wr]:Ql,[Kl]:jl,[ec]:Zl,[tc]:Jl,[Ql]:Wr};function P3(t,e){function n(){let U=!1;const _e=new Et;let me=null;const xe=new Et(0,0,0,0);return{setMask:function(ce){me!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),me=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ie,Re,Ge,_t){_t===!0&&(ce*=Ge,ie*=Ge,Re*=Ge),_e.set(ce,ie,Re,Ge),xe.equals(_e)===!1&&(t.clearColor(ce,ie,Re,Ge),xe.copy(_e))},reset:function(){U=!1,me=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,_e=!1,me=null,xe=null,ce=null;return{setReversed:function(ie){if(_e!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),_e=ie;const Ge=ce;ce=null,this.setClear(Ge)}},getReversed:function(){return _e},setTest:function(ie){ie?re(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(ie){me!==ie&&!U&&(t.depthMask(ie),me=ie)},setFunc:function(ie){if(_e&&(ie=R3[ie]),xe!==ie){switch(ie){case jl:t.depthFunc(t.NEVER);break;case Kl:t.depthFunc(t.ALWAYS);break;case Zl:t.depthFunc(t.LESS);break;case Wr:t.depthFunc(t.LEQUAL);break;case Jl:t.depthFunc(t.EQUAL);break;case Ql:t.depthFunc(t.GEQUAL);break;case ec:t.depthFunc(t.GREATER);break;case tc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ce!==ie&&(_e&&(ie=1-ie),t.clearDepth(ie),ce=ie)},reset:function(){U=!1,me=null,xe=null,ce=null,_e=!1}}}function r(){let U=!1,_e=null,me=null,xe=null,ce=null,ie=null,Re=null,Ge=null,_t=null;return{setTest:function(lt){U||(lt?re(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(lt){_e!==lt&&!U&&(t.stencilMask(lt),_e=lt)},setFunc:function(lt,On,wn){(me!==lt||xe!==On||ce!==wn)&&(t.stencilFunc(lt,On,wn),me=lt,xe=On,ce=wn)},setOp:function(lt,On,wn){(ie!==lt||Re!==On||Ge!==wn)&&(t.stencilOp(lt,On,wn),ie=lt,Re=On,Ge=wn)},setLocked:function(lt){U=lt},setClear:function(lt){_t!==lt&&(t.clearStencil(lt),_t=lt)},reset:function(){U=!1,_e=null,me=null,xe=null,ce=null,ie=null,Re=null,Ge=null,_t=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],x=null,_=!1,m=null,h=null,E=null,S=null,A=null,C=null,w=null,P=new rt(0,0,0),L=0,b=!1,v=null,D=null,F=null,z=null,$=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ne>=2);let ue=null,de={};const Te=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),tt=new Et().fromArray(Te),at=new Et().fromArray(Fe);function Qe(U,_e,me,xe){const ce=new Uint8Array(4),ie=t.createTexture();t.bindTexture(U,ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<me;Re++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(_e+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ie}const ee={};ee[t.TEXTURE_2D]=Qe(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=Qe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=Qe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=Qe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Wr),K(!1),J(qf),re(t.CULL_FACE),V(pi);function re(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ve(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function ze(U,_e){return f[U]!==_e?(t.bindFramebuffer(U,_e),f[U]=_e,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=_e),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function De(U,_e){let me=p,xe=!1;if(U){me=d.get(_e),me===void 0&&(me=[],d.set(_e,me));const ce=U.textures;if(me.length!==ce.length||me[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Re=ce.length;ie<Re;ie++)me[ie]=t.COLOR_ATTACHMENT0+ie;me.length=ce.length,xe=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,xe=!0);xe&&t.drawBuffers(me)}function je(U){return x!==U?(t.useProgram(U),x=U,!0):!1}const R={[Qi]:t.FUNC_ADD,[Ib]:t.FUNC_SUBTRACT,[Lb]:t.FUNC_REVERSE_SUBTRACT};R[Ub]=t.MIN,R[Nb]=t.MAX;const I={[Fb]:t.ZERO,[Ob]:t.ONE,[Bb]:t.SRC_COLOR,[Yl]:t.SRC_ALPHA,[Wb]:t.SRC_ALPHA_SATURATE,[Hb]:t.DST_COLOR,[zb]:t.DST_ALPHA,[kb]:t.ONE_MINUS_SRC_COLOR,[ql]:t.ONE_MINUS_SRC_ALPHA,[Gb]:t.ONE_MINUS_DST_COLOR,[Vb]:t.ONE_MINUS_DST_ALPHA,[Xb]:t.CONSTANT_COLOR,[$b]:t.ONE_MINUS_CONSTANT_COLOR,[Yb]:t.CONSTANT_ALPHA,[qb]:t.ONE_MINUS_CONSTANT_ALPHA};function V(U,_e,me,xe,ce,ie,Re,Ge,_t,lt){if(U===pi){_===!0&&(ve(t.BLEND),_=!1);return}if(_===!1&&(re(t.BLEND),_=!0),U!==Db){if(U!==m||lt!==b){if((h!==Qi||A!==Qi)&&(t.blendEquation(t.FUNC_ADD),h=Qi,A=Qi),lt)switch(U){case Br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jf:t.blendFunc(t.ONE,t.ONE);break;case Kf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Tt("WebGLState: Invalid blending: ",U);break}else switch(U){case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Kf:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zf:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",U);break}E=null,S=null,C=null,w=null,P.set(0,0,0),L=0,m=U,b=lt}return}ce=ce||_e,ie=ie||me,Re=Re||xe,(_e!==h||ce!==A)&&(t.blendEquationSeparate(R[_e],R[ce]),h=_e,A=ce),(me!==E||xe!==S||ie!==C||Re!==w)&&(t.blendFuncSeparate(I[me],I[xe],I[ie],I[Re]),E=me,S=xe,C=ie,w=Re),(Ge.equals(P)===!1||_t!==L)&&(t.blendColor(Ge.r,Ge.g,Ge.b,_t),P.copy(Ge),L=_t),m=U,b=!1}function T(U,_e){U.side===ui?ve(t.CULL_FACE):re(t.CULL_FACE);let me=U.side===Qt;_e&&(me=!me),K(me),U.blending===Br&&U.transparent===!1?V(pi):V(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;o.setTest(xe),xe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){v!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),v=U)}function J(U){U!==Cb?(re(t.CULL_FACE),U!==D&&(U===qf?t.cullFace(t.BACK):U===Rb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),D=U}function oe(U){U!==F&&(X&&t.lineWidth(U),F=U)}function q(U,_e,me){U?(re(t.POLYGON_OFFSET_FILL),(z!==_e||$!==me)&&(t.polygonOffset(_e,me),z=_e,$=me)):ve(t.POLYGON_OFFSET_FILL)}function se(U){U?re(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function H(U){U===void 0&&(U=t.TEXTURE0+te-1),ue!==U&&(t.activeTexture(U),ue=U)}function le(U,_e,me){me===void 0&&(ue===null?me=t.TEXTURE0+te-1:me=ue);let xe=de[me];xe===void 0&&(xe={type:void 0,texture:void 0},de[me]=xe),(xe.type!==U||xe.texture!==_e)&&(ue!==me&&(t.activeTexture(me),ue=me),t.bindTexture(U,_e||ee[U]),xe.type=U,xe.texture=_e)}function M(){const U=de[ue];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function W(){try{t.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Q(){try{t.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function fe(){try{t.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Ae(){try{t.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ye(){try{t.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ae(){try{t.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function he(U){tt.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function we(U){at.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),at.copy(U))}function Ce(U,_e){let me=c.get(_e);me===void 0&&(me=new WeakMap,c.set(_e,me));let xe=me.get(U);xe===void 0&&(xe=t.getUniformBlockIndex(_e,U.name),me.set(U,xe))}function be(U,_e){const xe=c.get(_e).get(U);l.get(_e)!==xe&&(t.uniformBlockBinding(_e,xe,U.__bindingPointIndex),l.set(_e,xe))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ue=null,de={},f={},d=new WeakMap,p=[],x=null,_=!1,m=null,h=null,E=null,S=null,A=null,C=null,w=null,P=new rt(0,0,0),L=0,b=!1,v=null,D=null,F=null,z=null,$=null,tt.set(0,0,t.canvas.width,t.canvas.height),at.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:ve,bindFramebuffer:ze,drawBuffers:De,useProgram:je,setBlending:V,setMaterial:T,setFlipSided:K,setCullFace:J,setLineWidth:oe,setPolygonOffset:q,setScissorTest:se,activeTexture:H,bindTexture:le,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:ye,texImage3D:ae,updateUBOMapping:Ce,uniformBlockBinding:be,texStorage2D:fe,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:k,compressedTexSubImage3D:Se,scissor:he,viewport:we,reset:Ue}}function D3(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,g){return p?new OffscreenCanvas(M,g):uo("canvas")}function _(M,g,N){let W=1;const Q=le(M);if((Q.width>N||Q.height>N)&&(W=N/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const k=Math.floor(W*Q.width),Se=Math.floor(W*Q.height);f===void 0&&(f=x(k,Se));const fe=g?x(k,Se):f;return fe.width=k,fe.height=Se,fe.getContext("2d").drawImage(M,0,0,k,Se),Xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+k+"x"+Se+")."),fe}else return"data"in M&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,g,N,W,Q=!1){if(M!==null){if(t[M]!==void 0)return t[M];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=g;if(g===t.RED&&(N===t.FLOAT&&(k=t.R32F),N===t.HALF_FLOAT&&(k=t.R16F),N===t.UNSIGNED_BYTE&&(k=t.R8)),g===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(k=t.R8UI),N===t.UNSIGNED_SHORT&&(k=t.R16UI),N===t.UNSIGNED_INT&&(k=t.R32UI),N===t.BYTE&&(k=t.R8I),N===t.SHORT&&(k=t.R16I),N===t.INT&&(k=t.R32I)),g===t.RG&&(N===t.FLOAT&&(k=t.RG32F),N===t.HALF_FLOAT&&(k=t.RG16F),N===t.UNSIGNED_BYTE&&(k=t.RG8)),g===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(k=t.RG8UI),N===t.UNSIGNED_SHORT&&(k=t.RG16UI),N===t.UNSIGNED_INT&&(k=t.RG32UI),N===t.BYTE&&(k=t.RG8I),N===t.SHORT&&(k=t.RG16I),N===t.INT&&(k=t.RG32I)),g===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(k=t.RGB8UI),N===t.UNSIGNED_SHORT&&(k=t.RGB16UI),N===t.UNSIGNED_INT&&(k=t.RGB32UI),N===t.BYTE&&(k=t.RGB8I),N===t.SHORT&&(k=t.RGB16I),N===t.INT&&(k=t.RGB32I)),g===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),N===t.UNSIGNED_INT&&(k=t.RGBA32UI),N===t.BYTE&&(k=t.RGBA8I),N===t.SHORT&&(k=t.RGBA16I),N===t.INT&&(k=t.RGBA32I)),g===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(k=t.R11F_G11F_B10F)),g===t.RGBA){const Se=Q?lo:it.getTransfer(W);N===t.FLOAT&&(k=t.RGBA32F),N===t.HALF_FLOAT&&(k=t.RGBA16F),N===t.UNSIGNED_BYTE&&(k=Se===ut?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function A(M,g){let N;return M?g===null||g===lr||g===Bs?N=t.DEPTH24_STENCIL8:g===di?N=t.DEPTH32F_STENCIL8:g===Os&&(N=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===lr||g===Bs?N=t.DEPTH_COMPONENT24:g===di?N=t.DEPTH_COMPONENT32F:g===Os&&(N=t.DEPTH_COMPONENT16),N}function C(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==dn&&M.minFilter!==En?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){const g=M.target;g.removeEventListener("dispose",w),L(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),v(g)}function L(M){const g=i.get(M);if(g.__webglInit===void 0)return;const N=M.source,W=d.get(N);if(W){const Q=W[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(M),Object.keys(W).length===0&&d.delete(N)}i.remove(M)}function b(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const N=M.source,W=d.get(N);delete W[g.__cacheKey],a.memory.textures--}function v(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Q=0;Q<g.__webglFramebuffer[W].length;Q++)t.deleteFramebuffer(g.__webglFramebuffer[W][Q]);else t.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)t.deleteFramebuffer(g.__webglFramebuffer[W]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=M.textures;for(let W=0,Q=N.length;W<Q;W++){const k=i.get(N[W]);k.__webglTexture&&(t.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(N[W])}i.remove(M)}let D=0;function F(){D=0}function z(){const M=D;return M>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),D+=1,M}function $(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function te(M,g){const N=i.get(M);if(M.isVideoTexture&&se(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const W=M.image;if(W===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,M,g);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+g)}function X(M,g){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){ee(N,M,g);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+g)}function ne(M,g){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){ee(N,M,g);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+g)}function G(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){re(N,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+g)}const ue={[rc]:t.REPEAT,[fi]:t.CLAMP_TO_EDGE,[sc]:t.MIRRORED_REPEAT},de={[dn]:t.NEAREST,[rS]:t.NEAREST_MIPMAP_NEAREST,[pa]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Zo]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},Te={[lS]:t.NEVER,[pS]:t.ALWAYS,[cS]:t.LESS,[Kp]:t.LEQUAL,[uS]:t.EQUAL,[hS]:t.GEQUAL,[fS]:t.GREATER,[dS]:t.NOTEQUAL};function Fe(M,g){if(g.type===di&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===En||g.magFilter===Zo||g.magFilter===pa||g.magFilter===tr||g.minFilter===En||g.minFilter===Zo||g.minFilter===pa||g.minFilter===tr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ue[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ue[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ue[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,de[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,de[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Te[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===dn||g.minFilter!==pa&&g.minFilter!==tr||g.type===di&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function tt(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));const W=g.source;let Q=d.get(W);Q===void 0&&(Q={},d.set(W,Q));const k=$(g);if(k!==M.__cacheKey){Q[k]===void 0&&(Q[k]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[k].usedTimes++;const Se=Q[M.__cacheKey];Se!==void 0&&(Q[M.__cacheKey].usedTimes--,Se.usedTimes===0&&b(g)),M.__cacheKey=k,M.__webglTexture=Q[k].texture}return N}function at(M,g,N){return Math.floor(Math.floor(M/N)/g)}function Qe(M,g,N,W){const k=M.updateRanges;if(k.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,N,W,g.data);else{k.sort((ae,he)=>ae.start-he.start);let Se=0;for(let ae=1;ae<k.length;ae++){const he=k[Se],we=k[ae],Ce=he.start+he.count,be=at(we.start,g.width,4),Ue=at(he.start,g.width,4);we.start<=Ce+1&&be===Ue&&at(we.start+we.count-1,g.width,4)===be?he.count=Math.max(he.count,we.start+we.count-he.start):(++Se,k[Se]=we)}k.length=Se+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),ye=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ae=0,he=k.length;ae<he;ae++){const we=k[ae],Ce=Math.floor(we.start/4),be=Math.ceil(we.count/4),Ue=Ce%g.width,U=Math.floor(Ce/g.width),_e=be,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ue,U,_e,me,N,W,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function ee(M,g,N){let W=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=t.TEXTURE_3D);const Q=tt(M,g),k=g.source;n.bindTexture(W,M.__webglTexture,t.TEXTURE0+N);const Se=i.get(k);if(k.version!==Se.__version||Q===!0){n.activeTexture(t.TEXTURE0+N);const fe=it.getPrimaries(it.workingColorSpace),Ae=g.colorSpace===Pi?null:it.getPrimaries(g.colorSpace),ye=g.colorSpace===Pi||fe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ae=_(g.image,!1,r.maxTextureSize);ae=H(g,ae);const he=s.convert(g.format,g.colorSpace),we=s.convert(g.type);let Ce=S(g.internalFormat,he,we,g.colorSpace,g.isVideoTexture);Fe(W,g);let be;const Ue=g.mipmaps,U=g.isVideoTexture!==!0,_e=Se.__version===void 0||Q===!0,me=k.dataReady,xe=C(g,ae);if(g.isDepthTexture)Ce=A(g.format===zs,g.type),_e&&(U?n.texStorage2D(t.TEXTURE_2D,1,Ce,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ae.width,ae.height,0,he,we,null));else if(g.isDataTexture)if(Ue.length>0){U&&_e&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,Ue[0].width,Ue[0].height);for(let ce=0,ie=Ue.length;ce<ie;ce++)be=Ue[ce],U?me&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,be.width,be.height,he,we,be.data):n.texImage2D(t.TEXTURE_2D,ce,Ce,be.width,be.height,0,he,we,be.data);g.generateMipmaps=!1}else U?(_e&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,ae.width,ae.height),me&&Qe(g,ae,he,we)):n.texImage2D(t.TEXTURE_2D,0,Ce,ae.width,ae.height,0,he,we,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ce,Ue[0].width,Ue[0].height,ae.depth);for(let ce=0,ie=Ue.length;ce<ie;ce++)if(be=Ue[ce],g.format!==In)if(he!==null)if(U){if(me)if(g.layerUpdates.size>0){const Re=Sd(be.width,be.height,g.format,g.type);for(const Ge of g.layerUpdates){const _t=be.data.subarray(Ge*Re/be.data.BYTES_PER_ELEMENT,(Ge+1)*Re/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Ge,be.width,be.height,1,he,_t)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ae.depth,he,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,Ce,be.width,be.height,ae.depth,0,be.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ae.depth,he,we,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,Ce,be.width,be.height,ae.depth,0,he,we,be.data)}else{U&&_e&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,Ue[0].width,Ue[0].height);for(let ce=0,ie=Ue.length;ce<ie;ce++)be=Ue[ce],g.format!==In?he!==null?U?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,be.width,be.height,he,be.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,Ce,be.width,be.height,0,be.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?me&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,be.width,be.height,he,we,be.data):n.texImage2D(t.TEXTURE_2D,ce,Ce,be.width,be.height,0,he,we,be.data)}else if(g.isDataArrayTexture)if(U){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ce,ae.width,ae.height,ae.depth),me)if(g.layerUpdates.size>0){const ce=Sd(ae.width,ae.height,g.format,g.type);for(const ie of g.layerUpdates){const Re=ae.data.subarray(ie*ce/ae.data.BYTES_PER_ELEMENT,(ie+1)*ce/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,he,we,Re)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,we,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ae.width,ae.height,ae.depth,0,he,we,ae.data);else if(g.isData3DTexture)U?(_e&&n.texStorage3D(t.TEXTURE_3D,xe,Ce,ae.width,ae.height,ae.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,we,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ae.width,ae.height,ae.depth,0,he,we,ae.data);else if(g.isFramebufferTexture){if(_e)if(U)n.texStorage2D(t.TEXTURE_2D,xe,Ce,ae.width,ae.height);else{let ce=ae.width,ie=ae.height;for(let Re=0;Re<xe;Re++)n.texImage2D(t.TEXTURE_2D,Re,Ce,ce,ie,0,he,we,null),ce>>=1,ie>>=1}}else if(Ue.length>0){if(U&&_e){const ce=le(Ue[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ce,ce.width,ce.height)}for(let ce=0,ie=Ue.length;ce<ie;ce++)be=Ue[ce],U?me&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,he,we,be):n.texImage2D(t.TEXTURE_2D,ce,Ce,he,we,be);g.generateMipmaps=!1}else if(U){if(_e){const ce=le(ae);n.texStorage2D(t.TEXTURE_2D,xe,Ce,ce.width,ce.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,we,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ce,he,we,ae);m(g)&&h(W),Se.__version=k.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function re(M,g,N){if(g.image.length!==6)return;const W=tt(M,g),Q=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+N);const k=i.get(Q);if(Q.version!==k.__version||W===!0){n.activeTexture(t.TEXTURE0+N);const Se=it.getPrimaries(it.workingColorSpace),fe=g.colorSpace===Pi?null:it.getPrimaries(g.colorSpace),Ae=g.colorSpace===Pi||Se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ye=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!ye&&!ae?he[ie]=_(g.image[ie],!0,r.maxCubemapSize):he[ie]=ae?g.image[ie].image:g.image[ie],he[ie]=H(g,he[ie]);const we=he[0],Ce=s.convert(g.format,g.colorSpace),be=s.convert(g.type),Ue=S(g.internalFormat,Ce,be,g.colorSpace),U=g.isVideoTexture!==!0,_e=k.__version===void 0||W===!0,me=Q.dataReady;let xe=C(g,we);Fe(t.TEXTURE_CUBE_MAP,g);let ce;if(ye){U&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ue,we.width,we.height);for(let ie=0;ie<6;ie++){ce=he[ie].mipmaps;for(let Re=0;Re<ce.length;Re++){const Ge=ce[Re];g.format!==In?Ce!==null?U?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Ge.width,Ge.height,Ce,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Ue,Ge.width,Ge.height,0,Ge.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Ge.width,Ge.height,Ce,be,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Ue,Ge.width,Ge.height,0,Ce,be,Ge.data)}}}else{if(ce=g.mipmaps,U&&_e){ce.length>0&&xe++;const ie=le(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){U?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Ce,be,he[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,he[ie].width,he[ie].height,0,Ce,be,he[ie].data);for(let Re=0;Re<ce.length;Re++){const _t=ce[Re].image[ie].image;U?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,_t.width,_t.height,Ce,be,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Ue,_t.width,_t.height,0,Ce,be,_t.data)}}else{U?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,be,he[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Ce,be,he[ie]);for(let Re=0;Re<ce.length;Re++){const Ge=ce[Re];U?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ce,be,Ge.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Ue,Ce,be,Ge.image[ie])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),k.__version=Q.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ve(M,g,N,W,Q,k){const Se=s.convert(N.format,N.colorSpace),fe=s.convert(N.type),Ae=S(N.internalFormat,Se,fe,N.colorSpace),ye=i.get(g),ae=i.get(N);if(ae.__renderTarget=g,!ye.__hasExternalTextures){const he=Math.max(1,g.width>>k),we=Math.max(1,g.height>>k);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,k,Ae,he,we,g.depth,0,Se,fe,null):n.texImage2D(Q,k,Ae,he,we,0,Se,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),q(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Q,ae.__webglTexture,0,oe(g)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Q,ae.__webglTexture,k),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(M,g,N){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const W=g.depthTexture,Q=W&&W.isDepthTexture?W.type:null,k=A(g.stencilBuffer,Q),Se=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=oe(g);q(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,k,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,k,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,k,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,M)}else{const W=g.textures;for(let Q=0;Q<W.length;Q++){const k=W[Q],Se=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),Ae=S(k.internalFormat,Se,fe,k.colorSpace),ye=oe(g);N&&q(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,Ae,g.width,g.height):q(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,Ae,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const Q=W.__webglTexture,k=oe(g);if(g.depthTexture.format===ks)q(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(g.depthTexture.format===zs)q(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function je(M){const g=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=W}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const W=M.texture.mipmaps;W&&W.length>0?De(g.__webglFramebuffer[0],M):De(g.__webglFramebuffer,M)}else if(N){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=t.createRenderbuffer(),ze(g.__webglDepthbuffer[W],M,!1);else{const Q=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,k)}}else{const W=M.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ze(g.__webglDepthbuffer,M,!1);else{const Q=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,k)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(M,g,N){const W=i.get(M);g!==void 0&&ve(W.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&je(M)}function I(M){const g=M.texture,N=i.get(M),W=i.get(g);M.addEventListener("dispose",P);const Q=M.textures,k=M.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=g.version,a.memory.textures++),k){N.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<g.mipmaps.length;Ae++)N.__webglFramebuffer[fe][Ae]=t.createFramebuffer()}else N.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)N.__webglFramebuffer[fe]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Se)for(let fe=0,Ae=Q.length;fe<Ae;fe++){const ye=i.get(Q[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),a.memory.textures++)}if(M.samples>0&&q(M)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Ae=Q[fe];N.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[fe]);const ye=s.convert(Ae.format,Ae.colorSpace),ae=s.convert(Ae.type),he=S(Ae.internalFormat,ye,ae,Ae.colorSpace,M.isXRRenderTarget===!0),we=oe(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,he,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,N.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(N.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(k){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)ve(N.__webglFramebuffer[fe][Ae],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else ve(N.__webglFramebuffer[fe],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let fe=0,Ae=Q.length;fe<Ae;fe++){const ye=Q[fe],ae=i.get(ye);let he=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ae.__webglTexture),Fe(he,ye),ve(N.__webglFramebuffer,M,ye,t.COLOR_ATTACHMENT0+fe,he,0),m(ye)&&h(he)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(fe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,W.__webglTexture),Fe(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)ve(N.__webglFramebuffer[Ae],M,g,t.COLOR_ATTACHMENT0,fe,Ae);else ve(N.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,fe,0);m(g)&&h(fe),n.unbindTexture()}M.depthBuffer&&je(M)}function V(M){const g=M.textures;for(let N=0,W=g.length;N<W;N++){const Q=g[N];if(m(Q)){const k=E(M),Se=i.get(Q).__webglTexture;n.bindTexture(k,Se),h(k),n.unbindTexture()}}}const T=[],K=[];function J(M){if(M.samples>0){if(q(M)===!1){const g=M.textures,N=M.width,W=M.height;let Q=t.COLOR_BUFFER_BIT;const k=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(M),fe=g.length>1;if(fe)for(let ye=0;ye<g.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ae=M.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ae=i.get(g[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,N,W,0,0,N,W,Q,t.NEAREST),l===!0&&(T.length=0,K.length=0,T.push(t.COLOR_ATTACHMENT0+ye),M.depthBuffer&&M.resolveDepthBuffer===!1&&(T.push(k),K.push(k),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,K)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,T))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<g.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ae=i.get(g[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function oe(M){return Math.min(r.maxSamples,M.samples)}function q(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function se(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function H(M,g){const N=M.colorSpace,W=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Yr&&N!==Pi&&(it.getTransfer(N)===ut?(W!==In||Q!==jn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",N)),g}function le(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=R,this.setupRenderTarget=I,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=q}function I3(t,e){function n(i,r=Pi){let s;const a=it.getTransfer(r);if(i===jn)return t.UNSIGNED_BYTE;if(i===mu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hp)return t.BYTE;if(i===Gp)return t.SHORT;if(i===Os)return t.UNSIGNED_SHORT;if(i===pu)return t.INT;if(i===lr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Jr)return t.HALF_FLOAT;if(i===$p)return t.ALPHA;if(i===Yp)return t.RGB;if(i===In)return t.RGBA;if(i===ks)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===qp)return t.RED;if(i===gu)return t.RED_INTEGER;if(i===_u)return t.RG;if(i===vu)return t.RG_INTEGER;if(i===bu)return t.RGBA_INTEGER;if(i===ka||i===za||i===Va||i===Ha)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ac||i===oc||i===lc||i===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uc||i===fc||i===dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uc||i===fc)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===pc||i===mc||i===xc||i===gc||i===_c||i===vc||i===bc||i===Sc||i===Mc||i===yc||i===Ec||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Cc||i===Rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Dc||i===Ic||i===Lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const L3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new lm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:L3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F3 extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const _=typeof XRWebGLBinding<"u",m=new N3,h={},E=n.getContextAttributes();let S=null,A=null;const C=[],w=[],P=new st;let L=null;const b=new yn;b.viewport=new Et;const v=new yn;v.viewport=new Et;const D=[b,v],F=new eM;let z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=C[ee];return re===void 0&&(re=new bl,C[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=C[ee];return re===void 0&&(re=new bl,C[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=C[ee];return re===void 0&&(re=new bl,C[ee]=re),re.getHandSpace()};function te(ee){const re=w.indexOf(ee.inputSource);if(re===-1)return;const ve=C[re];ve!==void 0&&(ve.update(ee.inputSource,ee.frame,c||a),ve.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<C.length;ee++){const re=w[ee];re!==null&&(w[ee]=null,C[ee].disconnect(re))}z=null,$=null,m.reset();for(const ee in h)delete h[ee];e.setRenderTarget(S),p=null,d=null,f=null,r=null,A=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),E.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ze=null,De=null;E.depth&&(De=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=E.stencil?zs:ks,ze=E.stencil?Bs:lr);const je={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new cr(d.textureWidth,d.textureHeight,{format:In,type:jn,depthTexture:new om(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new cr(p.framebufferWidth,p.framebufferHeight,{format:In,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ee){for(let re=0;re<ee.removed.length;re++){const ve=ee.removed[re],ze=w.indexOf(ve);ze>=0&&(w[ze]=null,C[ze].disconnect(ve))}for(let re=0;re<ee.added.length;re++){const ve=ee.added[re];let ze=w.indexOf(ve);if(ze===-1){for(let je=0;je<C.length;je++)if(je>=w.length){w.push(ve),ze=je;break}else if(w[je]===null){w[je]=ve,ze=je;break}if(ze===-1)break}const De=C[ze];De&&De.connect(ve)}}const G=new Z,ue=new Z;function de(ee,re,ve){G.setFromMatrixPosition(re.matrixWorld),ue.setFromMatrixPosition(ve.matrixWorld);const ze=G.distanceTo(ue),De=re.projectionMatrix.elements,je=ve.projectionMatrix.elements,R=De[14]/(De[10]-1),I=De[14]/(De[10]+1),V=(De[9]+1)/De[5],T=(De[9]-1)/De[5],K=(De[8]-1)/De[0],J=(je[8]+1)/je[0],oe=R*K,q=R*J,se=ze/(-K+J),H=se*-K;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(H),ee.translateZ(se),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),De[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const le=R+se,M=I+se,g=oe-H,N=q+(ze-H),W=V*I/M*le,Q=T*I/M*le;ee.projectionMatrix.makePerspective(g,N,W,Q,le,M),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Te(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let re=ee.near,ve=ee.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),F.near=v.near=b.near=re,F.far=v.far=b.far=ve,(z!==F.near||$!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,$=F.far),F.layers.mask=ee.layers.mask|6,b.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;const ze=ee.parent,De=F.cameras;Te(F,ze);for(let je=0;je<De.length;je++)Te(De[je],ze);De.length===2?de(F,b,v):F.projectionMatrix.copy(b.projectionMatrix),Fe(ee,F,ze)};function Fe(ee,re,ve){ve===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(ve.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Uc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ee){return h[ee]};let tt=null;function at(ee,re){if(u=re.getViewerPose(c||a),x=re,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ze=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let I=0;I<ve.length;I++){const V=ve[I];let T=null;if(p!==null)T=p.getViewport(V);else{const J=f.getViewSubImage(d,V);T=J.viewport,I===0&&(e.setRenderTargetTextures(A,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(A))}let K=D[I];K===void 0&&(K=new yn,K.layers.enable(I),K.viewport=new Et,D[I]=K),K.matrix.fromArray(V.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(V.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(T.x,T.y,T.width,T.height),I===0&&(F.matrix.copy(K.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(K)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const I=f.getDepthInformation(ve[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<ve.length;I++){const V=ve[I].camera;if(V){let T=h[V];T||(T=new lm,h[V]=T);const K=f.getCameraImage(V);T.sourceTexture=K}}}}for(let ve=0;ve<C.length;ve++){const ze=w[ve],De=C[ve];ze!==null&&De!==void 0&&De.update(ze,re,c||a)}tt&&tt(ee,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const Qe=new fm;Qe.setAnimationLoop(at),this.setAnimationLoop=function(ee){tt=ee},this.dispose=function(){}}}const Ki=new Kn,O3=new At;function B3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,rm(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,S,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,A)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Qt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Qt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),S=E.envMap,A=E.envMapRotation;S&&(m.envMap.value=S,Ki.copy(A),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(O3.makeRotationFromEuler(Ki)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Qt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function k3(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const A=S.program;i.uniformBlockBinding(E,A)}function c(E,S){let A=r[E.id];A===void 0&&(x(E),A=u(E),r[E.id]=A,E.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(E,C);const w=e.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function u(E){const S=f();E.__bindingPointIndex=S;const A=t.createBuffer(),C=E.__size,w=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,A),A}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],A=E.uniforms,C=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let w=0,P=A.length;w<P;w++){const L=Array.isArray(A[w])?A[w]:[A[w]];for(let b=0,v=L.length;b<v;b++){const D=L[b];if(p(D,w,b,C)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let te=0;te<z.length;te++){const X=z[te],ne=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+$,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(E,S,A,C){const w=E.value,P=S+"_"+A;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{const L=C[P];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[P]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function x(E){const S=E.uniforms;let A=0;const C=16;for(let P=0,L=S.length;P<L;P++){const b=Array.isArray(S[P])?S[P]:[S[P]];for(let v=0,D=b.length;v<D;v++){const F=b[v],z=Array.isArray(F.value)?F.value:[F.value];for(let $=0,te=z.length;$<te;$++){const X=z[$],ne=_(X),G=A%C,ue=G%ne.boundary,de=G+ue;A+=ue,de!==0&&C-de<ne.storage&&(A+=C-de),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=ne.storage}}}const w=A%C;return w>0&&(A+=C-w),E.__size=A,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const z3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let si=null;function V3(){return si===null&&(si=new WS(z3,32,32,_u,Jr),si.minFilter=En,si.magFilter=En,si.wrapS=fi,si.wrapT=fi,si.generateMipmaps=!1,si.needsUpdate=!0),si}class H3{constructor(e={}){const{canvas:n=mS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=new Set([bu,vu,gu]),_=new Set([jn,lr,Os,Bs,mu,xu]),m=new Uint32Array(4),h=new Int32Array(4);let E=null,S=null;const A=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=Sn;let L=0,b=0,v=null,D=-1,F=null;const z=new Et,$=new Et;let te=null;const X=new rt(0);let ne=0,G=n.width,ue=n.height,de=1,Te=null,Fe=null;const tt=new Et(0,0,G,ue),at=new Et(0,0,G,ue);let Qe=!1;const ee=new yu;let re=!1,ve=!1;const ze=new At,De=new Z,je=new Et,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function V(){return v===null?de:1}let T=i;function K(y,O){return n.getContext(y,O)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hu}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",Re,!1),T===null){const O="webgl2";if(T=K(O,y),T===null)throw K(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let J,oe,q,se,H,le,M,g,N,W,Q,k,Se,fe,Ae,ye,ae,he,we,Ce,be,Ue,U,_e;function me(){J=new KE(T),J.init(),Ue=new I3(T,J),oe=new VE(T,J,e,Ue),q=new P3(T,J),oe.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),se=new QE(T),H=new g3,le=new D3(T,J,q,H,oe,Ue,se),M=new GE(w),g=new jE(w),N=new iM(T),U=new kE(T,N),W=new ZE(T,N,se,U),Q=new t1(T,W,N,se),we=new e1(T,oe,le),ye=new HE(H),k=new x3(w,M,g,J,oe,U,ye),Se=new B3(w,H),fe=new v3,Ae=new T3(J),he=new BE(w,M,g,q,Q,p,l),ae=new C3(w,Q,oe),_e=new k3(T,se,oe,q),Ce=new zE(T,J,se),be=new JE(T,J,se),se.programs=k.programs,w.capabilities=oe,w.extensions=J,w.properties=H,w.renderLists=fe,w.shadowMap=ae,w.state=q,w.info=se}me();const xe=new F3(w,T);this.xr=xe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=J.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=J.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(y){y!==void 0&&(de=y,this.setSize(G,ue,!1))},this.getSize=function(y){return y.set(G,ue)},this.setSize=function(y,O,Y=!0){if(xe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,ue=O,n.width=Math.floor(y*de),n.height=Math.floor(O*de),Y===!0&&(n.style.width=y+"px",n.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(G*de,ue*de).floor()},this.setDrawingBufferSize=function(y,O,Y){G=y,ue=O,de=Y,n.width=Math.floor(y*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(z)},this.getViewport=function(y){return y.copy(tt)},this.setViewport=function(y,O,Y,j){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,O,Y,j),q.viewport(z.copy(tt).multiplyScalar(de).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,O,Y,j){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,O,Y,j),q.scissor($.copy(at).multiplyScalar(de).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(y){q.setScissorTest(Qe=y)},this.setOpaqueSort=function(y){Te=y},this.setTransparentSort=function(y){Fe=y},this.getClearColor=function(y){return y.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,Y=!0){let j=0;if(y){let B=!1;if(v!==null){const pe=v.texture.format;B=x.has(pe)}if(B){const pe=v.texture.type,Me=_.has(pe),Pe=he.getClearColor(),Ee=he.getClearAlpha(),Ne=Pe.r,Oe=Pe.g,Ie=Pe.b;Me?(m[0]=Ne,m[1]=Oe,m[2]=Ie,m[3]=Ee,T.clearBufferuiv(T.COLOR,0,m)):(h[0]=Ne,h[1]=Oe,h[2]=Ie,h[3]=Ee,T.clearBufferiv(T.COLOR,0,h))}else j|=T.COLOR_BUFFER_BIT}O&&(j|=T.DEPTH_BUFFER_BIT),Y&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),he.dispose(),fe.dispose(),Ae.dispose(),H.dispose(),M.dispose(),g.dispose(),Q.dispose(),U.dispose(),_e.dispose(),k.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",wu),xe.removeEventListener("sessionend",Cu),zi.stop()};function ce(y){y.preventDefault(),nd("WebGLRenderer: Context Lost."),P=!0}function ie(){nd("WebGLRenderer: Context Restored."),P=!1;const y=se.autoReset,O=ae.enabled,Y=ae.autoUpdate,j=ae.needsUpdate,B=ae.type;me(),se.autoReset=y,ae.enabled=O,ae.autoUpdate=Y,ae.needsUpdate=j,ae.type=B}function Re(y){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ge(y){const O=y.target;O.removeEventListener("dispose",Ge),_t(O)}function _t(y){lt(y),H.remove(y)}function lt(y){const O=H.get(y).programs;O!==void 0&&(O.forEach(function(Y){k.releaseProgram(Y)}),y.isShaderMaterial&&k.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,Y,j,B,pe){O===null&&(O=R);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Pe=gm(y,O,Y,j,B);q.setMaterial(j,Me);let Ee=Y.index,Ne=1;if(j.wireframe===!0){if(Ee=W.getWireframeAttribute(Y),Ee===void 0)return;Ne=2}const Oe=Y.drawRange,Ie=Y.attributes.position;let Ze=Oe.start*Ne,ct=(Oe.start+Oe.count)*Ne;pe!==null&&(Ze=Math.max(Ze,pe.start*Ne),ct=Math.min(ct,(pe.start+pe.count)*Ne)),Ee!==null?(Ze=Math.max(Ze,0),ct=Math.min(ct,Ee.count)):Ie!=null&&(Ze=Math.max(Ze,0),ct=Math.min(ct,Ie.count));const Mt=ct-Ze;if(Mt<0||Mt===1/0)return;U.setup(B,j,Pe,Y,Ee);let yt,ft=Ce;if(Ee!==null&&(yt=N.get(Ee),ft=be,ft.setIndex(yt)),B.isMesh)j.wireframe===!0?(q.setLineWidth(j.wireframeLinewidth*V()),ft.setMode(T.LINES)):ft.setMode(T.TRIANGLES);else if(B.isLine){let Le=j.linewidth;Le===void 0&&(Le=1),q.setLineWidth(Le*V()),B.isLineSegments?ft.setMode(T.LINES):B.isLineLoop?ft.setMode(T.LINE_LOOP):ft.setMode(T.LINE_STRIP)}else B.isPoints?ft.setMode(T.POINTS):B.isSprite&&ft.setMode(T.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Vs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Le=B._multiDrawStarts,bt=B._multiDrawCounts,nt=B._multiDrawCount,tn=Ee?N.get(Ee).bytesPerElement:1,hr=H.get(j).currentProgram.getUniforms();for(let nn=0;nn<nt;nn++)hr.setValue(T,"_gl_DrawID",nn),ft.render(Le[nn]/tn,bt[nn])}else if(B.isInstancedMesh)ft.renderInstances(Ze,Mt,B.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,Le);ft.renderInstances(Ze,Mt,bt)}else ft.render(Ze,Mt)};function On(y,O,Y){y.transparent===!0&&y.side===ui&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,sa(y,O,Y),y.side=Bi,y.needsUpdate=!0,sa(y,O,Y),y.side=ui):sa(y,O,Y)}this.compile=function(y,O,Y=null){Y===null&&(Y=y),S=Ae.get(Y),S.init(O),C.push(S),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),y!==Y&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),S.setupLights();const j=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Pe=pe[Me];On(Pe,Y,B),j.add(Pe)}else On(pe,Y,B),j.add(pe)}),S=C.pop(),j},this.compileAsync=function(y,O,Y=null){const j=this.compile(y,O,Y);return new Promise(B=>{function pe(){if(j.forEach(function(Me){H.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){B(y);return}setTimeout(pe,10)}J.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let wn=null;function xm(y){wn&&wn(y)}function wu(){zi.stop()}function Cu(){zi.start()}const zi=new fm;zi.setAnimationLoop(xm),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(y){wn=y,xe.setAnimationLoop(y),y===null?zi.stop():zi.start()},xe.addEventListener("sessionstart",wu),xe.addEventListener("sessionend",Cu),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,O,v),S=Ae.get(y,C.length),S.init(O),C.push(S),ze.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(ze,Gn,O.reversedDepth),ve=this.localClippingEnabled,re=ye.init(this.clippingPlanes,ve),E=fe.get(y,A.length),E.init(),A.push(E),xe.enabled===!0&&xe.isPresenting===!0){const pe=w.xr.getDepthSensingMesh();pe!==null&&Lo(pe,O,-1/0,w.sortObjects)}Lo(y,O,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(Te,Fe),I=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,I&&he.addToRenderList(E,y),this.info.render.frame++,re===!0&&ye.beginShadows();const Y=S.state.shadowsArray;ae.render(Y,y,O),re===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=E.opaque,B=E.transmissive;if(S.setupLights(),O.isArrayCamera){const pe=O.cameras;if(B.length>0)for(let Me=0,Pe=pe.length;Me<Pe;Me++){const Ee=pe[Me];Pu(j,B,y,Ee)}I&&he.render(y);for(let Me=0,Pe=pe.length;Me<Pe;Me++){const Ee=pe[Me];Ru(E,y,Ee,Ee.viewport)}}else B.length>0&&Pu(j,B,y,O),I&&he.render(y),Ru(E,y,O);v!==null&&b===0&&(le.updateMultisampleRenderTarget(v),le.updateRenderTargetMipmap(v)),y.isScene===!0&&y.onAfterRender(w,y,O),U.resetDefaultState(),D=-1,F=null,C.pop(),C.length>0?(S=C[C.length-1],re===!0&&ye.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function Lo(y,O,Y,j){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){j&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ze);const Me=Q.update(y),Pe=y.material;Pe.visible&&E.push(y,Me,Pe,Y,je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){const Me=Q.update(y),Pe=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(ze)),Array.isArray(Pe)){const Ee=Me.groups;for(let Ne=0,Oe=Ee.length;Ne<Oe;Ne++){const Ie=Ee[Ne],Ze=Pe[Ie.materialIndex];Ze&&Ze.visible&&E.push(y,Me,Ze,Y,je.z,Ie)}}else Pe.visible&&E.push(y,Me,Pe,Y,je.z,null)}}const pe=y.children;for(let Me=0,Pe=pe.length;Me<Pe;Me++)Lo(pe[Me],O,Y,j)}function Ru(y,O,Y,j){const{opaque:B,transmissive:pe,transparent:Me}=y;S.setupLightsView(Y),re===!0&&ye.setGlobalState(w.clippingPlanes,Y),j&&q.viewport(z.copy(j)),B.length>0&&ra(B,O,Y),pe.length>0&&ra(pe,O,Y),Me.length>0&&ra(Me,O,Y),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Pu(y,O,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[j.id]===void 0&&(S.state.transmissionRenderTarget[j.id]=new cr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Jr:jn,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const pe=S.state.transmissionRenderTarget[j.id],Me=j.viewport||z;pe.setSize(Me.z*w.transmissionResolutionScale,Me.w*w.transmissionResolutionScale);const Pe=w.getRenderTarget(),Ee=w.getActiveCubeFace(),Ne=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(X),ne=w.getClearAlpha(),ne<1&&w.setClearColor(16777215,.5),w.clear(),I&&he.render(Y);const Oe=w.toneMapping;w.toneMapping=Li;const Ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),re===!0&&ye.setGlobalState(w.clippingPlanes,j),ra(y,Y,j),le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ct=0,Mt=O.length;ct<Mt;ct++){const yt=O[ct],{object:ft,geometry:Le,material:bt,group:nt}=yt;if(bt.side===ui&&ft.layers.test(j.layers)){const tn=bt.side;bt.side=Qt,bt.needsUpdate=!0,Du(ft,Y,j,Le,bt,nt),bt.side=tn,bt.needsUpdate=!0,Ze=!0}}Ze===!0&&(le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe))}w.setRenderTarget(Pe,Ee,Ne),w.setClearColor(X,ne),Ie!==void 0&&(j.viewport=Ie),w.toneMapping=Oe}function ra(y,O,Y){const j=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pe=y.length;B<pe;B++){const Me=y[B],{object:Pe,geometry:Ee,group:Ne}=Me;let Oe=Me.material;Oe.allowOverride===!0&&j!==null&&(Oe=j),Pe.layers.test(Y.layers)&&Du(Pe,O,Y,Ee,Oe,Ne)}}function Du(y,O,Y,j,B,pe){y.onBeforeRender(w,O,Y,j,B,pe),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(w,O,Y,j,y,pe),B.transparent===!0&&B.side===ui&&B.forceSinglePass===!1?(B.side=Qt,B.needsUpdate=!0,w.renderBufferDirect(Y,O,j,B,y,pe),B.side=Bi,B.needsUpdate=!0,w.renderBufferDirect(Y,O,j,B,y,pe),B.side=ui):w.renderBufferDirect(Y,O,j,B,y,pe),y.onAfterRender(w,O,Y,j,B,pe)}function sa(y,O,Y){O.isScene!==!0&&(O=R);const j=H.get(y),B=S.state.lights,pe=S.state.shadowsArray,Me=B.state.version,Pe=k.getParameters(y,B.state,pe,O,Y),Ee=k.getProgramCacheKey(Pe);let Ne=j.programs;j.environment=y.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(y.isMeshStandardMaterial?g:M).get(y.envMap||j.environment),j.envMapRotation=j.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",Ge),Ne=new Map,j.programs=Ne);let Oe=Ne.get(Ee);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===Me)return Lu(y,Pe),Oe}else Pe.uniforms=k.getUniforms(y),y.onBeforeCompile(Pe,w),Oe=k.acquireProgram(Pe,Ee),Ne.set(Ee,Oe),j.uniforms=Pe.uniforms;const Ie=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=ye.uniform),Lu(y,Pe),j.needsLights=vm(y),j.lightsStateVersion=Me,j.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function Iu(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ga.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Lu(y,O){const Y=H.get(y);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function gm(y,O,Y,j,B){O.isScene!==!0&&(O=R),le.resetTextureUnits();const pe=O.fog,Me=j.isMeshStandardMaterial?O.environment:null,Pe=v===null?w.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Yr,Ee=(j.isMeshStandardMaterial?g:M).get(j.envMap||Me),Ne=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Oe=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ie=!!Y.morphAttributes.position,Ze=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let Mt=Li;j.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=yt!==void 0?yt.length:0,Le=H.get(j),bt=S.state.lights;if(re===!0&&(ve===!0||y!==F)){const Ht=y===F&&j.id===D;ye.setState(j,y,Ht)}let nt=!1;j.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==bt.state.version||Le.outputColorSpace!==Pe||B.isBatchedMesh&&Le.batching===!1||!B.isBatchedMesh&&Le.batching===!0||B.isBatchedMesh&&Le.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Le.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Le.instancing===!1||!B.isInstancedMesh&&Le.instancing===!0||B.isSkinnedMesh&&Le.skinning===!1||!B.isSkinnedMesh&&Le.skinning===!0||B.isInstancedMesh&&Le.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Le.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Le.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Le.instancingMorph===!1&&B.morphTexture!==null||Le.envMap!==Ee||j.fog===!0&&Le.fog!==pe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ye.numPlanes||Le.numIntersection!==ye.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==Oe||Le.morphTargets!==Ie||Le.morphNormals!==Ze||Le.morphColors!==ct||Le.toneMapping!==Mt||Le.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Le.__version=j.version);let tn=Le.currentProgram;nt===!0&&(tn=sa(j,O,B));let hr=!1,nn=!1,ts=!1;const St=tn.getUniforms(),Yt=Le.uniforms;if(q.useProgram(tn.program)&&(hr=!0,nn=!0,ts=!0),j.id!==D&&(D=j.id,nn=!0),hr||F!==y){q.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),St.setValue(T,"projectionMatrix",y.projectionMatrix),St.setValue(T,"viewMatrix",y.matrixWorldInverse);const qt=St.map.cameraPosition;qt!==void 0&&qt.setValue(T,De.setFromMatrixPosition(y.matrixWorld)),oe.logarithmicDepthBuffer&&St.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),F!==y&&(F=y,nn=!0,ts=!0)}if(B.isSkinnedMesh){St.setOptional(T,B,"bindMatrix"),St.setOptional(T,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),St.setValue(T,"boneTexture",Ht.boneTexture,le))}B.isBatchedMesh&&(St.setOptional(T,B,"batchingTexture"),St.setValue(T,"batchingTexture",B._matricesTexture,le),St.setOptional(T,B,"batchingIdTexture"),St.setValue(T,"batchingIdTexture",B._indirectTexture,le),St.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&St.setValue(T,"batchingColorTexture",B._colorsTexture,le));const xn=Y.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&we.update(B,Y,tn),(nn||Le.receiveShadow!==B.receiveShadow)&&(Le.receiveShadow=B.receiveShadow,St.setValue(T,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yt.envMap.value=Ee,Yt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(Yt.envMapIntensity.value=O.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=V3()),nn&&(St.setValue(T,"toneMappingExposure",w.toneMappingExposure),Le.needsLights&&_m(Yt,ts),pe&&j.fog===!0&&Se.refreshFogUniforms(Yt,pe),Se.refreshMaterialUniforms(Yt,j,de,ue,S.state.transmissionRenderTarget[y.id]),Ga.upload(T,Iu(Le),Yt,le)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ga.upload(T,Iu(Le),Yt,le),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(T,"center",B.center),St.setValue(T,"modelViewMatrix",B.modelViewMatrix),St.setValue(T,"normalMatrix",B.normalMatrix),St.setValue(T,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let qt=0,Uo=Ht.length;qt<Uo;qt++){const Vi=Ht[qt];_e.update(Vi,tn),_e.bind(Vi,tn)}}return tn}function _m(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function vm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(y,O,Y){const j=H.get(y);j.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),H.get(y.texture).__webglTexture=O,H.get(y.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const Y=H.get(y);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const bm=T.createFramebuffer();this.setRenderTarget=function(y,O=0,Y=0){v=y,L=O,b=Y;let j=!0,B=null,pe=!1,Me=!1;if(y){const Ee=H.get(y);if(Ee.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(T.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)le.setupRenderTarget(y);else if(Ee.__hasExternalTextures)le.rebindTextures(y,H.get(y.texture).__webglTexture,H.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(Ee.__boundDepthTexture!==Ie){if(Ie!==null&&H.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(y)}}const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Oe=H.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?B=Oe[O][Y]:B=Oe[O],pe=!0):y.samples>0&&le.useMultisampledRTT(y)===!1?B=H.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[Y]:B=Oe,z.copy(y.viewport),$.copy(y.scissor),te=y.scissorTest}else z.copy(tt).multiplyScalar(de).floor(),$.copy(at).multiplyScalar(de).floor(),te=Qe;if(Y!==0&&(B=bm),q.bindFramebuffer(T.FRAMEBUFFER,B)&&j&&q.drawBuffers(y,B),q.viewport(z),q.scissor($),q.setScissorTest(te),pe){const Ee=H.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,Y)}else if(Me){const Ee=O;for(let Ne=0;Ne<y.textures.length;Ne++){const Oe=H.get(y.textures[Ne]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Y,Ee)}}else if(y!==null&&Y!==0){const Ee=H.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ee.__webglTexture,Y)}D=-1},this.readRenderTargetPixels=function(y,O,Y,j,B,pe,Me,Pe=0){if(!(y&&y.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){q.bindFramebuffer(T.FRAMEBUFFER,Ee);try{const Ne=y.textures[Pe],Oe=Ne.format,Ie=Ne.type;if(!oe.textureFormatReadable(Oe)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ie)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-j&&Y>=0&&Y<=y.height-B&&(y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Pe),T.readPixels(O,Y,j,B,Ue.convert(Oe),Ue.convert(Ie),pe))}finally{const Ne=v!==null?H.get(v).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,O,Y,j,B,pe,Me,Pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(O>=0&&O<=y.width-j&&Y>=0&&Y<=y.height-B){q.bindFramebuffer(T.FRAMEBUFFER,Ee);const Ne=y.textures[Pe],Oe=Ne.format,Ie=Ne.type;if(!oe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.bufferData(T.PIXEL_PACK_BUFFER,pe.byteLength,T.STREAM_READ),y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Pe),T.readPixels(O,Y,j,B,Ue.convert(Oe),Ue.convert(Ie),0);const ct=v!==null?H.get(v).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,ct);const Mt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await xS(T,Mt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,pe),T.deleteBuffer(Ze),T.deleteSync(Mt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,Y=0){const j=Math.pow(2,-Y),B=Math.floor(y.image.width*j),pe=Math.floor(y.image.height*j),Me=O!==null?O.x:0,Pe=O!==null?O.y:0;le.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,Y,0,0,Me,Pe,B,pe),q.unbindTexture()};const Sm=T.createFramebuffer(),Mm=T.createFramebuffer();this.copyTextureToTexture=function(y,O,Y=null,j=null,B=0,pe=null){pe===null&&(B!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=B,B=0):pe=0);let Me,Pe,Ee,Ne,Oe,Ie,Ze,ct,Mt;const yt=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(Y!==null)Me=Y.max.x-Y.min.x,Pe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Oe=Y.min.y,Ie=Y.isBox3?Y.min.z:0;else{const xn=Math.pow(2,-B);Me=Math.floor(yt.width*xn),Pe=Math.floor(yt.height*xn),y.isDataArrayTexture?Ee=yt.depth:y.isData3DTexture?Ee=Math.floor(yt.depth*xn):Ee=1,Ne=0,Oe=0,Ie=0}j!==null?(Ze=j.x,ct=j.y,Mt=j.z):(Ze=0,ct=0,Mt=0);const ft=Ue.convert(O.format),Le=Ue.convert(O.type);let bt;O.isData3DTexture?(le.setTexture3D(O,0),bt=T.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(le.setTexture2DArray(O,0),bt=T.TEXTURE_2D_ARRAY):(le.setTexture2D(O,0),bt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const nt=T.getParameter(T.UNPACK_ROW_LENGTH),tn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),hr=T.getParameter(T.UNPACK_SKIP_PIXELS),nn=T.getParameter(T.UNPACK_SKIP_ROWS),ts=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,yt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,yt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),T.pixelStorei(T.UNPACK_SKIP_ROWS,Oe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ie);const St=y.isDataArrayTexture||y.isData3DTexture,Yt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const xn=H.get(y),Ht=H.get(O),qt=H.get(xn.__renderTarget),Uo=H.get(Ht.__renderTarget);q.bindFramebuffer(T.READ_FRAMEBUFFER,qt.__webglFramebuffer),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,Uo.__webglFramebuffer);for(let Vi=0;Vi<Ee;Vi++)St&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,H.get(y).__webglTexture,B,Ie+Vi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,H.get(O).__webglTexture,pe,Mt+Vi)),T.blitFramebuffer(Ne,Oe,Me,Pe,Ze,ct,Me,Pe,T.DEPTH_BUFFER_BIT,T.NEAREST);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||H.has(y)){const xn=H.get(y),Ht=H.get(O);q.bindFramebuffer(T.READ_FRAMEBUFFER,Sm),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,Mm);for(let qt=0;qt<Ee;qt++)St?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,B,Ie+qt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,B),Yt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ht.__webglTexture,pe,Mt+qt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ht.__webglTexture,pe),B!==0?T.blitFramebuffer(Ne,Oe,Me,Pe,Ze,ct,Me,Pe,T.COLOR_BUFFER_BIT,T.NEAREST):Yt?T.copyTexSubImage3D(bt,pe,Ze,ct,Mt+qt,Ne,Oe,Me,Pe):T.copyTexSubImage2D(bt,pe,Ze,ct,Ne,Oe,Me,Pe);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Yt?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(bt,pe,Ze,ct,Mt,Me,Pe,Ee,ft,Le,yt.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(bt,pe,Ze,ct,Mt,Me,Pe,Ee,ft,yt.data):T.texSubImage3D(bt,pe,Ze,ct,Mt,Me,Pe,Ee,ft,Le,yt):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,pe,Ze,ct,Me,Pe,ft,Le,yt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,pe,Ze,ct,yt.width,yt.height,ft,yt.data):T.texSubImage2D(T.TEXTURE_2D,pe,Ze,ct,Me,Pe,ft,Le,yt);T.pixelStorei(T.UNPACK_ROW_LENGTH,nt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,hr),T.pixelStorei(T.UNPACK_SKIP_ROWS,nn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ts),pe===0&&O.generateMipmaps&&T.generateMipmap(bt),q.unbindTexture()},this.initRenderTarget=function(y){H.get(y).__webglFramebuffer===void 0&&le.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?le.setTextureCube(y,0):y.isData3DTexture?le.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?le.setTexture2DArray(y,0):le.setTexture2D(y,0),q.unbindTexture()},this.resetState=function(){L=0,b=0,v=null,q.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const Ua=.1,Ir=100,bn=70,Xd=560,Na=240,Lr=30,$d=100,fs=100,G3=en({__name:"Office3D",setup(t){const e=ht(null),n=bi(),{currentPlayerPosition:i,aniStep:r,seats:s,goingSeatIndex:a,currentPlayerNameOrNull:o,playerStep:l}=Zr(n);let c,u,f,d,p;const x=()=>{if(!e.value)return;c=new GS,c.background=new rt(15256459),u=new yn(45,e.value.clientWidth/e.value.clientHeight,.1,1e3),u.position.set(22,80,80),u.lookAt(22,0,30),f=new H3({antialias:!0}),f.setSize(e.value.clientWidth,e.value.clientHeight),f.shadowMap.enabled=!0,e.value.appendChild(f.domElement);const P=new QS(16777215,.6);c.add(P);const L=new JS(16777215,.8);L.position.set(50,100,50),L.castShadow=!0,c.add(L);const b=new ia(100,100),v=new cs({color:15256459}),D=new Zt(b,v);D.rotation.x=-Math.PI/2,D.receiveShadow=!0,c.add(D),_(),h(),_(),h(),C()},_=()=>{const D=["bottom","bottom","top","bottom","top","bottom","top","bottom","top","bottom","top","bottom"];for(let F=0;F<12;F++){let $=F<6?5:39,te=10+F%6*10;const X=m(D[F]);X.position.set($,0,te),c.add(X)}},m=P=>{const L=new ps,b=16*Ua*10,v=10*Ua*10,D=4,F=new Ui(b,.5,v),z=new cs({color:16777215}),$=new Zt(F,z);$.position.y=D,$.castShadow=!0,$.receiveShadow=!0,L.add($);const te=15718836,X=3,ne=1,G=new Ui(b,X,ne),ue=new cs({color:te}),de=new Zt(G,ue),Te=v/2-ne/2;de.position.y=D+X/2,de.position.z=P==="top"?-Te:Te,de.castShadow=!0,de.receiveShadow=!0,L.add(de);const Fe=15066597,tt=new Tu(2,2,.5,16),at=new cs({color:Fe}),Qe=new Zt(tt,at),ee=v/2+2;Qe.position.y=2,Qe.position.z=P==="top"?ee:-ee,Qe.castShadow=!0,Qe.receiveShadow=!0,L.add(Qe);const re=new Ui(3,3,.5),ve=new Zt(re,at);return ve.position.y=2+1.5,ve.position.z=P==="top"?ee+1:-ee-1,ve.castShadow=!0,ve.receiveShadow=!0,L.add(ve),L},h=()=>{const P=new Eu(1.5,4,4,8),L=new cs({color:16711680});p=new Zt(P,L),p.position.set(22,3.5,0),p.castShadow=!0,p.visible=!1,c.add(p)},E=[bn+Lr+10,bn+Lr+fs+10,bn+Lr+fs*2+10,bn+Lr+fs*3+10,bn+Lr+fs*4+10,bn+Lr+fs*5+10],S=new tM,A=P=>{const L=$d*P;r.value===It.APPEAR?(i.value.y+=$d*P,bn<=i.value.y&&(r.value=It.ROTATION_RIGHT,i.value.y=bn)):r.value===It.ROTATION_RIGHT?(i.value.x+=L,Ir+Na<=i.value.x&&(r.value=It.ROTATION_DOWN,i.value.x=Ir+Na)):r.value===It.ROTATION_DOWN?(i.value.y+=L,i.value.y>=bn+Xd&&(r.value=It.ROTATION_LEFT,i.value.y=bn+Xd),6<=a.value&&a.value<12&&E[a.value-6]<=i.value.y&&(i.value.y=E[a.value-6],r.value=It.MOVE_RIGHT)):r.value===It.ROTATION_LEFT?(i.value.x-=L,Ir>=i.value.x&&(r.value=It.ROTATION_UP,i.value.x=Ir)):r.value===It.ROTATION_UP?(i.value.y-=L,bn>=i.value.y&&(r.value=It.ROTATION_RIGHT,i.value.y=bn),0<=a.value&&a.value<6&&E[a.value]>=i.value.y&&(i.value.y=E[a.value],r.value=It.MOVE_LEFT)):r.value===It.MOVE_LEFT?(i.value.x-=L,0>=i.value.x&&(i.value.x=0,r.value=It.STOP,n.seatDown())):r.value===It.MOVE_RIGHT&&(i.value.x+=L,i.value.x>=Na+Ir*2&&(i.value.x=Na+Ir*2,r.value=It.STOP,n.seatDown()))},C=()=>{d=requestAnimationFrame(C);const P=S.getDelta();l.value===Xn.Finding&&A(P),p&&(p.position.x=i.value.x*Ua,p.position.z=i.value.y*Ua,p.visible=!!o.value&&l.value===Xn.Finding),f.render(c,u)},w=()=>{e.value&&(u.aspect=e.value.clientWidth/e.value.clientHeight,u.updateProjectionMatrix(),f.setSize(e.value.clientWidth,e.value.clientHeight))};return $s(()=>{x(),window.addEventListener("resize",w)}),jr(()=>{window.removeEventListener("resize",w),cancelAnimationFrame(d),f&&f.dispose()}),(P,L)=>(mt(),kt("div",{ref_key:"containerRef",ref:e,class:"office-3d"},null,512))}}),W3=mn(G3,[["__scopeId","data-v-ad12a8e0"]]),X3=["src"],$3=en({__name:"CardLayer",props:{card:{}},setup(t){const e=bi(),{closeCardLayer:n}=e,i=new Audio("./sound/card-slide-left.wav"),r=t,s=ht(!1);$s(()=>{setTimeout(()=>{s.value=!0,i.play()},100)}),jr(()=>{s.value=!1});const a=Ke(()=>`./card/${r.card}.svg`);return(o,l)=>(mt(),kt("div",{class:"background-glass",onClick:l[1]||(l[1]=Wx(()=>{},["stop"]))},[Be("img",{class:pn({show:s.value}),src:a.value,onClick:l[0]||(l[0]=c=>qe(n)())},null,10,X3)]))}}),Y3=mn($3,[["__scopeId","data-v-7f186442"]]),q3={class:"background-glass"},j3=en({__name:"FinishModal",setup(t){const{reset:e}=bi(),n=()=>{qv.emit("saveImage")},i=new Audio("./sound/applause-clapping.wav"),r=ht(!1);return $s(()=>{setTimeout(()=>{r.value=!0},100),i.play()}),jr(()=>{r.value=!1}),(s,a)=>(mt(),kt("div",q3,[Be("div",{class:pn(["window",{show:r.value}])},[a[2]||(a[2]=Be("img",{src:"./etc/clap.svg"},null,-1)),a[3]||(a[3]=Be("div",{class:"messages"},[Be("div",null,"축하합니다."),Be("div",null,"모두 자리를 찾으셨네요."),Be("div",null,"다음에 또 만나요.")],-1)),Ve(qe(Gr),{size:"x-large",style:{"margin-top":"12px"},width:380,onClick:n},{default:ar(()=>[...a[0]||(a[0]=[or("이미지 내려받기",-1)])]),_:1}),Ve(qe(Gr),{size:"x-large",style:{"margin-top":"12px"},width:380,onClick:qe(e)},{default:ar(()=>[...a[1]||(a[1]=[or("게임 다시하기",-1)])]),_:1},8,["onClick"])],2)]))}}),K3=mn(j3,[["__scopeId","data-v-ffc5c84e"]]),Z3={class:"area"},J3={class:"ui-layer"},Q3=en({__name:"Office",setup(t){const e=bi(),{cardOrNull:n,seatsFull:i,currentPlayerNameOrNull:r}=Zr(e);return(s,a)=>(mt(),kt("div",Z3,[Ve(W3),Be("div",J3,[Ve(wb)]),qe(n)!==null?(mt(),qn(Y3,{key:0,card:qe(n)},null,8,["card"])):qe(i)&&qe(r)===null?(mt(),qn(K3,{key:1})):ys("",!0)]))}}),eT=mn(Q3,[["__scopeId","data-v-31ca4488"]]),tT={id:"main"},nT=en({__name:"App",setup(t){const e=bi(),{sceneStep:n}=Zr(e);return(i,r)=>(mt(),kt("div",tT,[qe($l).Intro===qe(n)?(mt(),qn(Jv,{key:0})):qe($l).Office===qe(n)?(mt(),qn(eT,{key:1})):ys("",!0)]))}}),iT=mn(nT,[["__scopeId","data-v-262e70d0"]]),rT=_p({defaults:{}}),Au=Yx(iT);Au.use(rT);Au.use(Kx());Au.mount("#app");export{mn as _,sT as a,kt as c,mt as o};
