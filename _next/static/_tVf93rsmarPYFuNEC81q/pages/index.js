(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"+SFK":function(t,e,n){n("AUvm"),n("wgeU"),n("adOz"),n("dl0q"),t.exports=n("WEpk").Symbol},"+plK":function(t,e,n){n("ApPD"),t.exports=n("WEpk").Object.getPrototypeOf},"/eQG":function(t,e,n){n("v5Dd");var r=n("WEpk").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},"0FAB":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("xeG1");n("cqJL"),n("iOjB");e.default=function(){return i.a.createElement("head",null,i.a.createElement("title",null,"".concat(o.default.name.firstName," ").concat(o.default.name.lastName)),i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),i.a.createElement("meta",{name:"description",content:o.default.description}),i.a.createElement("meta",{property:"og:type",content:o.default.openGraph.type}),i.a.createElement("meta",{property:"og:title",content:o.default.openGraph.title}),i.a.createElement("meta",{property:"og:description",content:o.default.openGraph.description}),i.a.createElement("meta",{property:"og:url",content:o.default.openGraph.url}),i.a.createElement("meta",{name:"twitter:card",content:o.default.twitter.card}),i.a.createElement("meta",{property:"twitter:title",content:o.default.twitter.title}),i.a.createElement("meta",{property:"twitter:description",content:o.default.twitter.description}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600",rel:"stylesheet"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css"}))}},"0MoN":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r);e.default=function(t){return i.a.createElement("h1",null,t.fullName)}},"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},"29s/":function(t,e,n){var r=n("WEpk"),i=n("5T2Y"),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"2Nb0":function(t,e,n){n("FlQf"),n("bBy9"),t.exports=n("zLkG").f("iterator")},"2faE":function(t,e,n){var r=n("5K7Z"),i=n("eUtF"),o=n("G8Mo"),a=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"2ok3":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r);e.default=function(t){return i.a.createElement("img",{className:"dp",src:t.src})}},"3GJH":function(t,e,n){n("lCc8");var r=n("WEpk").Object;t.exports=function(t,e){return r.create(t,e)}},"3VxF":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),a=n("a7VT"),c=n("Tit0"),u=n("AT/M"),s=n("q1tI"),f=n.n(s),l=n("V0PI"),p=n("0FAB"),m=n("7L3P"),d=n("nA5J"),h=n("C+7Y"),v=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(a.a)(e).call(this,t))).navigations=[{id:"education",name:"📚 Education"},{id:"experience",name:"👨‍💻 Experience"},{id:"achievements",name:"🏅 Achievements"},{id:"activities",name:"👨‍🏫 Activities"}],n.state={activeContentRoot:n.navigations[0].id},n.updateActiveContentRoot=n.updateActiveContentRoot.bind(Object(u.a)(Object(u.a)(n))),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"updateActiveContentRoot",value:function(t){this.setState({activeContentRoot:t})}},{key:"render",value:function(){return f.a.createElement("div",{className:"container"},f.a.createElement(p.default,null),f.a.createElement(l.default,null),f.a.createElement(m.default,{navigations:this.navigations,activeTab:this.state.activeContentRoot,onActiveContentRootChange:this.updateActiveContentRoot}),f.a.createElement("hr",null),f.a.createElement(d.default,{navigations:this.navigations,activeTab:this.state.activeContentRoot}),f.a.createElement("hr",null),f.a.createElement(h.default,null))}}]),e}(f.a.Component);e.default=v},"4mXO":function(t,e,n){t.exports=n("7TPF")},"4rGy":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r);e.default=function(t){return i.a.createElement("a",{className:"tab "+(t.active===t.id?"active":""),onClick:function(){return t.onClick(t.id)}},t.name)}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var r=n("B+OT"),i=n("NsO/"),o=n("W070")(!1),a=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,c=i(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~o(s,n)||s.push(n));return s}},"6/1s":function(t,e,n){var r=n("YqAc")("meta"),i=n("93I4"),o=n("B+OT"),a=n("2faE").f,c=0,u=Object.isExtensible||function(){return!0},s=!n("KUxP")(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&u(t)&&!o(t,r)&&f(t),t}}},"6tYh":function(t,e,n){var r=n("93I4"),i=n("5K7Z"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("2GTP")(Function.call,n("vwuL").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},"7L3P":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),a=n("a7VT"),c=n("Tit0"),u=n("AT/M"),s=n("q1tI"),f=n.n(s),l=n("4rGy"),p=(n("i4aw"),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(a.a)(e).call(this,t))).ELLIPSIS_ICON="fa-ellipsis-v",n.CLOSE_ICON="fa-times",n.state={showNavicon:!0,navicon:n.ELLIPSIS_ICON},n.toggleNavicon=n.toggleNavicon.bind(Object(u.a)(Object(u.a)(n))),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"toggleNavicon",value:function(){this.setState({showNavicon:!this.state.showNavicon,navicon:this.state.navicon===this.ELLIPSIS_ICON?this.CLOSE_ICON:this.ELLIPSIS_ICON})}},{key:"render",value:function(){var t=this,e=this.props.navigations&&this.props.navigations.map(function(e,n){return f.a.createElement(l.default,{key:n,id:e.id,active:t.props.activeTab,name:e.name,onClick:t.props.onActiveContentRootChange})});return f.a.createElement("div",null,f.a.createElement("button",{id:"navicon",className:"navicon",onClick:this.toggleNavicon},f.a.createElement("i",{className:"fas fa-lg "+this.state.navicon})),f.a.createElement("nav",{id:"tabs",className:"tabs "+(this.state.showNavicon?"hide":"")},e))}}]),e}(f.a.Component));e.default=p},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"7Xos":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var t=n("RNiq");return{page:t.default||t}}])},"93I4":function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"9ZMg":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r);n("HT/I");e.default=function(t){var e=t.positionData&&t.positionData.map(function(t){return i.a.createElement("li",{key:t.id,className:"position"},t.role," at ",i.a.createElement("b",null,t.org))});return i.a.createElement("ul",{className:"positions"},e)}},A5Xg:function(t,e,n){var r=n("NsO/"),i=n("ar/p").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(e){return a.slice()}}(t):i(r(t))}},"AT/M":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},AUvm:function(t,e,n){"use strict";var r=n("5T2Y"),i=n("B+OT"),o=n("jmDH"),a=n("Y7ZC"),c=n("kTiW"),u=n("6/1s").KEY,s=n("KUxP"),f=n("29s/"),l=n("RfKB"),p=n("YqAc"),m=n("UWiX"),d=n("zLkG"),h=n("Zxgi"),v=n("R+7+"),y=n("kAMH"),g=n("5K7Z"),b=n("93I4"),O=n("NsO/"),w=n("G8Mo"),S=n("rr1i"),E=n("oVml"),x=n("A5Xg"),j=n("vwuL"),T=n("2faE"),N=n("w6GO"),k=j.f,P=T.f,C=x.f,A=r.Symbol,_=r.JSON,I=_&&_.stringify,M=m("_hidden"),L=m("toPrimitive"),D={}.propertyIsEnumerable,R=f("symbol-registry"),F=f("symbols"),U=f("op-symbols"),G=Object.prototype,q="function"==typeof A,B=r.QObject,V=!B||!B.prototype||!B.prototype.findChild,W=o&&s(function(){return 7!=E(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(G,e);r&&delete G[e],P(t,e,n),r&&t!==G&&P(G,e,r)}:P,K=function(t){var e=F[t]=E(A.prototype);return e._k=t,e},Y=q&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},H=function(t,e,n){return t===G&&H(U,e,n),g(t),e=w(e,!0),g(n),i(F,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=E(n,{enumerable:S(0,!1)})):(i(t,M)||P(t,M,S(1,{})),t[M][e]=!0),W(t,e,n)):P(t,e,n)},Z=function(t,e){g(t);for(var n,r=v(e=O(e)),i=0,o=r.length;o>i;)H(t,n=r[i++],e[n]);return t},J=function(t){var e=D.call(this,t=w(t,!0));return!(this===G&&i(F,t)&&!i(U,t))&&(!(e||!i(this,t)||!i(F,t)||i(this,M)&&this[M][t])||e)},X=function(t,e){if(t=O(t),e=w(e,!0),t!==G||!i(F,e)||i(U,e)){var n=k(t,e);return!n||!i(F,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n}},z=function(t){for(var e,n=C(O(t)),r=[],o=0;n.length>o;)i(F,e=n[o++])||e==M||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===G,r=C(n?U:O(t)),o=[],a=0;r.length>a;)!i(F,e=r[a++])||n&&!i(G,e)||o.push(F[e]);return o};q||(c((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(U,n),i(this,M)&&i(this[M],t)&&(this[M][t]=!1),W(this,t,S(1,n))};return o&&V&&W(G,t,{configurable:!0,set:e}),K(t)}).prototype,"toString",function(){return this._k}),j.f=X,T.f=H,n("ar/p").f=x.f=z,n("NV0k").f=J,n("mqlF").f=Q,o&&!n("uOPS")&&c(G,"propertyIsEnumerable",J,!0),d.f=function(t){return K(m(t))}),a(a.G+a.W+a.F*!q,{Symbol:A});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)m($[tt++]);for(var et=N(m.store),nt=0;et.length>nt;)h(et[nt++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=A(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!q,"Object",{create:function(t,e){return void 0===e?E(t):Z(E(t),e)},defineProperty:H,defineProperties:Z,getOwnPropertyDescriptor:X,getOwnPropertyNames:z,getOwnPropertySymbols:Q}),_&&a(a.S+a.F*(!q||s(function(){var t=A();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(b(e)||void 0!==t)&&!Y(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,I.apply(_,r)}}),A.prototype[L]||n("NegM")(A.prototype,L,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},ApPD:function(t,e,n){var r=n("JB68"),i=n("U+KD");n("zn7N")("getPrototypeOf",function(){return function(t){return i(r(t))}})},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Bhuq:function(t,e,n){t.exports=n("+plK")},"C+7Y":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r);n("XcQv");e.default=function(){return i.a.createElement("footer",null,i.a.createElement("h4",null,"© 2018 Anand Balan"),i.a.createElement("p",null,"Made with ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank"},"React"),", ",i.a.createElement("a",{href:"https://nextjs.org/",target:"_blank"},"Next.js"),", ",i.a.createElement("a",{href:"https://fontawesome.com",target:"_blank"},"Font Awesome Icons")))}},D8kY:function(t,e,n){var r=n("Ojgd"),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},FlQf:function(t,e,n){"use strict";var r=n("ccE7")(!0);n("MPFp")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},Hfiw:function(t,e,n){var r=n("Y7ZC");r(r.S,"Object",{setPrototypeOf:n("6tYh").set})},Hsns:function(t,e,n){var r=n("93I4"),i=n("5T2Y").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},JB68:function(t,e,n){var r=n("Jes0");t.exports=function(t){return Object(r(t))}},JbBM:function(t,e,n){n("Hfiw"),t.exports=n("WEpk").Object.setPrototypeOf},Jes0:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},"Jo+v":function(t,e,n){t.exports=n("/eQG")},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},M1xp:function(t,e,n){var r=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),i=n.n(r),o=n("Z7t5"),a=n.n(o);function c(t){return(c="function"==typeof a.a&&"symbol"==typeof i.a?function(t){return typeof t}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function u(t){return(u="function"==typeof a.a&&"symbol"===c(i.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":c(t)})(t)}var s=n("AT/M");function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?Object(s.a)(t):e}n.d(e,"a",function(){return f})},MPFp:function(t,e,n){"use strict";var r=n("uOPS"),i=n("Y7ZC"),o=n("kTiW"),a=n("NegM"),c=n("SBuE"),u=n("j2DC"),s=n("RfKB"),f=n("U+KD"),l=n("UWiX")("iterator"),p=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,d,h,v,y){u(n,e,d);var g,b,O,w=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",E="values"==h,x=!1,j=t.prototype,T=j[l]||j["@@iterator"]||h&&j[h],N=T||w(h),k=h?E?w("entries"):N:void 0,P="Array"==e&&j.entries||T;if(P&&(O=f(P.call(new t)))!==Object.prototype&&O.next&&(s(O,S,!0),r||"function"==typeof O[l]||a(O,l,m)),E&&T&&"values"!==T.name&&(x=!0,N=function(){return T.call(this)}),r&&!y||!p&&!x&&j[l]||a(j,l,N),c[e]=N,c[S]=m,h)if(g={values:E?N:w("values"),keys:v?N:w("keys"),entries:k},y)for(b in g)b in j||o(j,b,g[b]);else i(i.P+i.F*(p||x),e,g);return g}},MgzW:function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(t,e){for(var n,a,c=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))i.call(n,s)&&(c[s]=n[s]);if(r){a=r(n);for(var f=0;f<a.length;f++)o.call(n,a[f])&&(c[a[f]]=n[a[f]])}}return c}},Mqbl:function(t,e,n){var r=n("JB68"),i=n("w6GO");n("zn7N")("keys",function(){return function(t){return i(r(t))}})},MvwC:function(t,e,n){var r=n("5T2Y").document;t.exports=r&&r.documentElement},NV0k:function(t,e){e.f={}.propertyIsEnumerable},NegM:function(t,e,n){var r=n("2faE"),i=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var r=n("M1xp"),i=n("Jes0");t.exports=function(t){return r(i(t))}},Ojgd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"R+7+":function(t,e,n){var r=n("w6GO"),i=n("mqlF"),o=n("NV0k");t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,c=n(t),u=o.f,s=0;c.length>s;)u.call(t,a=c[s++])&&e.push(a);return e}},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("3VxF");e.default=function(){return i.a.createElement(o.default,null)}},"RU/L":function(t,e,n){n("Rqdy");var r=n("WEpk").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},RfKB:function(t,e,n){var r=n("2faE").f,i=n("B+OT"),o=n("UWiX")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},Rqdy:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SBuE:function(t,e){t.exports={}},SqZg:function(t,e,n){t.exports=n("3GJH")},TG4M:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r);n("xaOs");e.default=function(t){var e=t.positionData&&t.positionData.map(function(t){return i.a.createElement("li",{key:t.id,className:"profile"},i.a.createElement("a",{href:t.url,target:"_blank",title:t.name},i.a.createElement("i",{className:t.icon})))});return i.a.createElement("ul",{className:"profiles"},e)}},TRZx:function(t,e,n){t.exports=n("JbBM")},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),i=n.n(r),o=n("TRZx"),a=n.n(o);function c(t,e){return(c=a.a||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=i()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}n.d(e,"a",function(){return u})},"U+KD":function(t,e,n){var r=n("B+OT"),i=n("JB68"),o=n("VVlx")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},UO39:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},UWiX:function(t,e,n){var r=n("29s/")("wks"),i=n("YqAc"),o=n("5T2Y").Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},V0PI:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),a=n("a7VT"),c=n("Tit0"),u=n("q1tI"),s=n.n(u),f=n("2ok3"),l=n("xeG1"),p=n("0MoN"),m=n("9ZMg"),d=n("TG4M"),h=(n("7d/H"),function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement("section",{className:"bio"},s.a.createElement(f.default,{src:"/static/images/anand.jpg"}),s.a.createElement("div",{className:"headline"},s.a.createElement(p.default,{fullName:"".concat(l.default.name.firstName," ").concat(l.default.name.lastName)}),s.a.createElement(m.default,{positionData:l.default.positions}),s.a.createElement(d.default,{positionData:l.default.social})))}}]),e}(s.a.Component));e.default=h},VVlx:function(t,e,n){var r=n("29s/")("keys"),i=n("YqAc");t.exports=function(t){return r[t]||(r[t]=i(t))}},W070:function(t,e,n){var r=n("NsO/"),i=n("tEej"),o=n("D8kY");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=i(u.length),f=o(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.6.4"};"number"==typeof __e&&(__e=n)},XVgq:function(t,e,n){t.exports=n("2Nb0")},Y7ZC:function(t,e,n){var r=n("5T2Y"),i=n("WEpk"),o=n("2GTP"),a=n("NegM"),c=n("B+OT"),u=function(t,e,n){var s,f,l,p=t&u.F,m=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,y=t&u.W,g=m?i:i[e]||(i[e]={}),b=g.prototype,O=m?r:d?r[e]:(r[e]||{}).prototype;for(s in m&&(n=e),n)(f=!p&&O&&void 0!==O[s])&&c(g,s)||(l=f?O[s]:n[s],g[s]=m&&"function"!=typeof O[s]?n[s]:v&&f?o(l,r):y&&O[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[s]=l,t&u.R&&b&&!b[s]&&a(b,s,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},YqAc:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},Z7t5:function(t,e,n){t.exports=n("+SFK")},Zxgi:function(t,e,n){var r=n("5T2Y"),i=n("WEpk"),o=n("uOPS"),a=n("zLkG"),c=n("2faE").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},a7VT:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("Bhuq"),i=n.n(r),o=n("TRZx"),a=n.n(o);function c(t){return(c=a.a?i.a:function(t){return t.__proto__||i()(t)})(t)}},adOz:function(t,e,n){n("Zxgi")("asyncIterator")},"ar/p":function(t,e,n){var r=n("5vMV"),i=n("FpHa").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},bBy9:function(t,e,n){n("w2d+");for(var r=n("5T2Y"),i=n("NegM"),o=n("SBuE"),a=n("UWiX")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var s=c[u],f=r[s],l=f&&f.prototype;l&&!l[a]&&i(l,a,s),o[s]=o.Array}},ccE7:function(t,e,n){var r=n("Ojgd"),i=n("Jes0");t.exports=function(t){return function(e,n){var o,a,c=String(i(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u))<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},dl0q:function(t,e,n){n("Zxgi")("observable")},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fpC5:function(t,e,n){var r=n("2faE"),i=n("5K7Z"),o=n("w6GO");t.exports=n("jmDH")?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),c=a.length,u=0;c>u;)r.f(t,n=a[u++],e[n]);return t}},hDam:function(t,e){t.exports=function(){}},hfKm:function(t,e,n){t.exports=n("RU/L")},iq4v:function(t,e,n){n("Mqbl"),t.exports=n("WEpk").Object.keys},j2DC:function(t,e,n){"use strict";var r=n("oVml"),i=n("rr1i"),o=n("RfKB"),a={};n("NegM")(a,n("UWiX")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},jmDH:function(t,e,n){t.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(t,e,n){var r=n("a0xu");t.exports=Array.isArray||function(t){return"Array"==r(t)}},kTiW:function(t,e,n){t.exports=n("NegM")},lCc8:function(t,e,n){var r=n("Y7ZC");r(r.S,"Object",{create:n("oVml")})},mqlF:function(t,e){e.f=Object.getOwnPropertySymbols},nA5J:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),a=n("a7VT"),c=n("Tit0"),u=n("q1tI"),s=n.n(u),f=n("znlY"),l=(n("R/D5"),function(t){function e(t){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).call(this,t))}return Object(c.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=f.default[this.props.activeTab]&&f.default[this.props.activeTab].map(function(t,e){var n=t.what.map(function(t,e){return s.a.createElement("li",{key:e},s.a.createElement("p",{className:"title"},t.title),s.a.createElement("p",{className:"description"},t.description))});return s.a.createElement("div",{key:e},s.a.createElement("h1",{className:"when"},t.when),s.a.createElement("ul",null,n))}),e=this.props.activeTab,n=this.props.navigations&&this.props.navigations.filter(function(t){return t.id==e})[0].name;return s.a.createElement("section",{className:"highlights"},s.a.createElement("h1",{className:"section"},n),t)}}]),e}(s.a.Component));e.default=l},oVml:function(t,e,n){var r=n("5K7Z"),i=n("fpC5"),o=n("FpHa"),a=n("VVlx")("IE_PROTO"),c=function(){},u=function(){var t,e=n("Hsns")("iframe"),r=o.length;for(e.style.display="none",n("MvwC").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},pLtp:function(t,e,n){t.exports=n("iq4v")},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},sLSF:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("hfKm"),i=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},tEej:function(t,e,n){var r=n("Ojgd"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},uOPS:function(t,e){t.exports=!0},v5Dd:function(t,e,n){var r=n("NsO/"),i=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},vwuL:function(t,e,n){var r=n("NV0k"),i=n("rr1i"),o=n("NsO/"),a=n("G8Mo"),c=n("B+OT"),u=n("eUtF"),s=Object.getOwnPropertyDescriptor;e.f=n("jmDH")?s:function(t,e){if(t=o(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"w2d+":function(t,e,n){"use strict";var r=n("hDam"),i=n("UO39"),o=n("SBuE"),a=n("NsO/");t.exports=n("MPFp")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},w6GO:function(t,e,n){var r=n("5vMV"),i=n("FpHa");t.exports=Object.keys||function(t){return r(t,i)}},wgeU:function(t,e){},xeG1:function(t,e,n){"use strict";n.r(e);var r=n("Jo+v"),i=n.n(r),o=n("4mXO"),a=n.n(o),c=n("pLtp"),u=n.n(c),s=n("hfKm"),f=n.n(s);function l(t,e,n){return e in t?f()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("q1tI");var p={firstName:"Anand",lastName:"Balan"},m={name:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=u()(n);"function"==typeof a.a&&(r=r.concat(a()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}({},p),description:"Anand Balan is a computer science graduate student at the University of Texas at Dallas.",openGraph:{url:"http://anand-b.github.io",title:"".concat(p.firstName," ").concat(p.lastName),description:"Computer Science Graduate Student at the UT Dallas",type:"website"},twitter:{card:"summary",title:"".concat(p.firstName," ").concat(p.lastName),description:"Computer Science Graduate Student at the UT Dallas"},positions:[{id:"1",role:"Computer Science Graduate Student",org:"The University of Texas at Dallas"}],social:[{id:"1",name:"LinkedIn",icon:"fab fa-linkedin-in fa-lg",url:"https://www.linkedin.com/in/anandbalan1",title:"anandbalan1"},{id:"2",name:"GitHub",icon:"fab fa-github fa-lg",url:"https://github.com/anand-b",title:"anand-b"},{id:"3",name:"Blog",icon:"fab fa-medium fa-lg",url:"https://medium.com/@anandb",title:"anandb"},{id:"4",name:"Twitter",icon:"fab fa-twitter fa-lg",url:"https://twitter.com/nand_01",title:"nand_01"}]};e.default=m},zLkG:function(t,e,n){e.f=n("UWiX")},zn7N:function(t,e,n){var r=n("Y7ZC"),i=n("WEpk"),o=n("KUxP");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},znlY:function(t,e,n){"use strict";n.r(e),e.default={education:[{when:"2017 - 2019",what:[{title:"Master of Science in Computer Science at University of Texas at Dallas, Texas, USA",description:"Relevant Courses: Web Programming Languages, Machine Learning, Database Design, Artificial Intelligence, Video Analytics, Advanced Operating System, Design and Analysis of Algorithm, Statistics for Data Science, Big Data Analytics, Computational Geometry"}]},{when:"2011 - 2015",what:[{title:"Bachelor of Technology in Computer Science and Engineering at SASTRA University, Tamil Nadu, India",description:"Relevant Courses: Design and analysis of Algorithms, Data Structures, Computer Organization and Architecture, Operating System"}]}],experience:[{when:"2018",what:[{title:"Software Engineering Intern at Google, USA",description:""}]},{when:"2015 - 2017",what:[{title:"Software Engineer at Zoho Corporation, India",description:""}]},{when:"2014 - 2015",what:[{title:"Software Engineering Intern at Zoho Corporation, India",description:""}]},{when:"2013 - 2014",what:[{title:"Member of Daksh Design Team at SASTRA University, India",description:""},{title:"Member of Technical Team at SASTRA University, India",description:""}]}],achievements:[{when:"2014",what:[{title:"Runner-up in National Programming League in Daksh",description:""},{title:"Participated in Save The Hacker hackathon conducted by FreshDesk",description:""}]},{when:"2013",what:[{title:"Reached semi-final in Codevita conducted by Tata Consultancy Services",description:""},{title:"Participated in ICPC Regionals conducted at Amrita University, India",description:""},{title:"Participated in ICPC Regionals conducted at IIT Kanpur, India",description:""},{title:"Finalist in a workshop conducted by KLA Tencor",description:""}]},{when:"2012",what:[{title:"Finalist in Crack the code in Daksh",description:""},{title:"Runner-up in Heptathlon (Seven rounds of technical exercises) in Daksh",description:""},{title:"Received Dean's List Merit Scholarship at SASTRA University for securing a rank among top 2% of the students in the university",description:""}]}],activities:[{when:"2014",what:[{title:"Organised and designed brochures, banners and certificates for International Conference on Intelligent Computing and Data Science at SASTRA University",description:""},{title:"Organised a programming event in PROTOCOL at SASTRA University",description:""},{title:"Trained juniors on Java and C++ programming to prepare them for job",description:""}]},{when:"2013",what:[{title:"Organised a conference for Engineers' Day at SASTRA University",description:""}]}]}}},[["7Xos",0,1,2]]]);