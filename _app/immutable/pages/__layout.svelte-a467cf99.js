import{S as G,i as W,s as M,l as d,r as I,a as S,m,n as v,u as N,h as u,c as w,p,b as j,F as f,E as z,G as Q,H as T,w as U,I as Y,x as Z,y as ee,J as te,K as se,L as ae,f as L,t as X,B as ne}from"../chunks/index-142cf791.js";function B(i,e,n){const s=i.slice();return s[1]=e[n],s}function F(i){let e,n=i[1].name+"",s;return{c(){e=d("a"),s=I(n),this.h()},l(l){e=m(l,"A",{href:!0});var o=v(e);s=N(o,n),o.forEach(u),this.h()},h(){p(e,"href",O+i[1].href)},m(l,o){j(l,e,o),f(e,s)},p:z,d(l){l&&u(e)}}}function le(i){let e,n,s,l,o,g,r,t,_,x,E,k,D,R,b,y=i[0],h=[];for(let c=0;c<y.length;c+=1)h[c]=F(B(i,y,c));return{c(){e=d("header"),n=d("div"),s=d("div"),l=d("span"),o=I("X"),g=S(),r=d("h1"),t=d("a"),_=I("Jackson Salopek"),x=S(),E=d("div"),k=d("span"),D=I("Resize"),R=S(),b=d("nav");for(let c=0;c<h.length;c+=1)h[c].c();this.h()},l(c){e=m(c,"HEADER",{class:!0});var $=v(e);n=m($,"DIV",{class:!0});var a=v(n);s=m(a,"DIV",{class:!0});var A=v(s);l=m(A,"SPAN",{class:!0});var H=v(l);o=N(H,"X"),H.forEach(u),A.forEach(u),g=w(a),r=m(a,"H1",{class:!0});var J=v(r);t=m(J,"A",{href:!0});var P=v(t);_=N(P,"Jackson Salopek"),P.forEach(u),J.forEach(u),x=w(a),E=m(a,"DIV",{class:!0});var q=v(E);k=m(q,"SPAN",{class:!0});var C=v(k);D=N(C,"Resize"),C.forEach(u),q.forEach(u),a.forEach(u),R=w($),b=m($,"NAV",{});var K=v(b);for(let V=0;V<h.length;V+=1)h[V].l(K);K.forEach(u),$.forEach(u),this.h()},h(){p(l,"class","hidden"),p(s,"class","close"),p(t,"href",O),p(r,"class","title"),p(k,"class","hidden"),p(E,"class","resize"),p(n,"class","title-bar"),p(e,"class","js-navigation window")},m(c,$){j(c,e,$),f(e,n),f(n,s),f(s,l),f(l,o),f(n,g),f(n,r),f(r,t),f(t,_),f(n,x),f(n,E),f(E,k),f(k,D),f(e,R),f(e,b);for(let a=0;a<h.length;a+=1)h[a].m(b,null)},p(c,[$]){if($&1){y=c[0];let a;for(a=0;a<y.length;a+=1){const A=B(c,y,a);h[a]?h[a].p(A,$):(h[a]=F(A),h[a].c(),h[a].m(b,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=y.length}},i:z,o:z,d(c){c&&u(e),Q(h,c)}}}const O="/jacksonsalopekcom";function re(i){return[[{name:"Resume",href:"/resume"},{name:"Works",href:"/works"},{name:"Experiments",href:"/experiments/list"},{name:"Contact",href:"/contact"}]]}class oe extends G{constructor(e){super(),W(this,e,re,le,M,{})}}function ce(i){let e,n,s,l,o;s=new oe({});const g=i[1].default,r=T(g,i,i[0],null);return{c(){e=d("link"),n=S(),U(s.$$.fragment),l=S(),r&&r.c(),this.h()},l(t){const _=Y('[data-svelte="svelte-d6bgpi"]',document.head);e=m(_,"LINK",{href:!0,rel:!0}),_.forEach(u),n=w(t),Z(s.$$.fragment,t),l=w(t),r&&r.l(t),this.h()},h(){p(e,"href","https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"),p(e,"rel","stylesheet")},m(t,_){f(document.head,e),j(t,n,_),ee(s,t,_),j(t,l,_),r&&r.m(t,_),o=!0},p(t,[_]){r&&r.p&&(!o||_&1)&&te(r,g,t,t[0],o?ae(g,t[0],_,null):se(t[0]),null)},i(t){o||(L(s.$$.fragment,t),L(r,t),o=!0)},o(t){X(s.$$.fragment,t),X(r,t),o=!1},d(t){u(e),t&&u(n),ne(s,t),t&&u(l),r&&r.d(t)}}}function ie(i,e,n){let{$$slots:s={},$$scope:l}=e;return i.$$set=o=>{"$$scope"in o&&n(0,l=o.$$scope)},[l,s]}class fe extends G{constructor(e){super(),W(this,e,ie,ce,M,{})}}export{fe as default};