import{S,i as T,s as q,O as f,P as _,l as w,a as y,w as E,J,m as j,h as $,c as z,x as A,p as k,F as B,b as C,y as F,Q as h,f as H,t as M,B as O}from"../chunks/index-b4de2c74.js";import{T as P}from"../chunks/Three-5eff331b.js";import{a as v}from"../chunks/paths-e5e2c35e.js";function Q(l){let a,n,t,i,r,u,m,d;function b(e){l[4](e)}function g(e){l[5](e)}function U(e){l[6](e)}function o(e){l[7](e)}let c={};return l[0]!==void 0&&(c.modelUrl=l[0]),l[1]!==void 0&&(c.amplitude=l[1]),l[2]!==void 0&&(c.oscillate=l[2]),l[3]!==void 0&&(c.subtitle=l[3]),t=new P({props:c}),f.push(()=>_(t,"modelUrl",b)),f.push(()=>_(t,"amplitude",g)),f.push(()=>_(t,"oscillate",U)),f.push(()=>_(t,"subtitle",o)),{c(){a=w("meta"),n=y(),E(t.$$.fragment),this.h()},l(e){const s=J('[data-svelte="svelte-19zmt8d"]',document.head);a=j(s,"META",{name:!0,content:!0}),s.forEach($),n=z(e),A(t.$$.fragment,e),this.h()},h(){document.title="home | jacksonsalopek.com",k(a,"name","description"),k(a,"content","Home of Jackson Salopek")},m(e,s){B(document.head,a),C(e,n,s),F(t,e,s),d=!0},p(e,[s]){const p={};!i&&s&1&&(i=!0,p.modelUrl=e[0],h(()=>i=!1)),!r&&s&2&&(r=!0,p.amplitude=e[1],h(()=>r=!1)),!u&&s&4&&(u=!0,p.oscillate=e[2],h(()=>u=!1)),!m&&s&8&&(m=!0,p.subtitle=e[3],h(()=>m=!1)),t.$set(p)},i(e){d||(H(t.$$.fragment,e),d=!0)},o(e){M(t.$$.fragment,e),d=!1},d(e){$(a),e&&$(n),O(t,e)}}}function R(l,a,n){const t={porsche:{modelUrl:`${v}/stl/porsche.stl`,amplitude:.3333333333333333,oscillate:!1},vt:{modelUrl:`${v}/stl/vt.stl`,amplitude:1.5,oscillate:!0}};let i=t.porsche.modelUrl,r=t.porsche.amplitude,u=t.porsche.oscillate,m="porsche 930";function d(o){i=o,n(0,i)}function b(o){r=o,n(1,r)}function g(o){u=o,n(2,u)}function U(o){m=o,n(3,m)}return[i,r,u,m,d,b,g,U]}class K extends S{constructor(a){super(),T(this,a,R,Q,q,{})}}export{K as default};