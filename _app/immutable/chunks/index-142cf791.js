function j(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(q)}function F(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return j;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ct(t,n,e){t.$$.on_destroy.push(I(n,e))}function lt(t,n,e,i){if(t){const o=B(t,n,e,i);return t[0](o)}}function B(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ut(t,n,e,i){if(t[2]&&i){const o=t[2](i(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(n.dirty.length,o.length);for(let l=0;l<c;l+=1)s[l]=n.dirty[l]|o[l];return s}return n.dirty|o}return n.dirty}function st(t,n,e,i,o,s){if(o){const c=B(n,e,i,s);t.p(c,o)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function at(t,n,e){return t.set(e),n}let $=!1;function G(){$=!0}function J(){$=!1}function K(t,n,e,i){for(;t<n;){const o=t+(n-t>>1);e(o)<=i?t=o+1:n=o}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let o=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(o>0&&n[e[o]].claim_order<=u?o+1:K(1,o,y=>n[e[y]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,o=Math.max(f,o)}const s=[],c=[];let l=n.length-1;for(let r=e[o]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);s.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<s.length&&c[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[r],a)}}function R(t,n){if($){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function ht(){return N(" ")}function mt(){return N("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,o=!1){X(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const r=e(l);return r===void 0?t.splice(c,1):t[c]=r,o||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const r=e(l);return r===void 0?t.splice(c,1):t[c]=r,o?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return L(t,o=>o.nodeName===n,o=>{const s=[];for(let c=0;c<o.attributes.length;c++){const l=o.attributes[c];e[l.name]||s.push(l.name)}s.forEach(c=>o.removeAttribute(c))},()=>i(n))}function gt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function bt(t){return Z(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Et(t){w().$$.on_mount.push(t)}function vt(t){w().$$.after_update.push(t)}function At(t){w().$$.on_destroy.push(t)}function jt(t,n){return w().$$.context.set(t,n),n}const _=[],M=[],b=[],T=[],O=Promise.resolve();let v=!1;function P(){v||(v=!0,O.then(D))}function Nt(){return P(),O}function A(t){b.push(t)}const E=new Set;let g=0;function D(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),tt(n.$$)}for(h(null),_.length=0,g=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(_.length);for(;T.length;)T.pop()();v=!1,E.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const x=new Set;let d;function St(){d={r:0,c:[],p:d}}function kt(){d.r||p(d.c),d=d.p}function nt(t,n){t&&t.i&&(x.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Mt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Tt(t,n){const e={},i={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=n[s];if(l){for(const r in c)r in l||(i[r]=1);for(const r in l)o[r]||(e[r]=l[r],o[r]=1);t[s]=l}else for(const r in c)o[r]=1}for(const c in i)c in e||(e[c]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:o,on_mount:s,on_destroy:c,after_update:l}=t.$$;o&&o.m(n,e),i||A(()=>{const r=s.map(q).filter(F);c?c.push(...r):p(r),t.$$.on_mount=[]}),l.forEach(A)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,o,s,c,l=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:j,not_equal:o,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...S)=>{const k=S.length?S[0]:y;return u.ctx&&o(u.ctx[f],u.ctx[f]=k)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](k),a&&rt(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);u.fragment&&u.fragment.l(f),f.forEach(W)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),D()}h(r)}class Pt{$destroy(){it(this,1),this.$destroy=j}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,it as B,z as C,Nt as D,j as E,R as F,_t as G,lt as H,wt as I,st as J,ft as K,ut as L,pt as M,ct as N,at as O,At as P,Mt as Q,M as R,Pt as S,ht as a,dt as b,bt as c,kt as d,mt as e,nt as f,St as g,W as h,Ot as i,jt as j,vt as k,U as l,gt as m,V as n,Et as o,yt as p,$t as q,N as r,ot as s,Ct as t,Z as u,xt as v,Bt as w,Lt as x,et as y,Tt as z};