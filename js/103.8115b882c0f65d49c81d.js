(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{501:function(e,t,n){"use strict";n.r(t),n.d(t,"executeScript",(function(){return H})),n.d(t,"extend",(function(){return _})),n.d(t,"extractFieldLiterals",(function(){return X})),n.d(t,"findFunctionCalls",(function(){return G})),n.d(t,"functionHelper",(function(){return L})),n.d(t,"referencesFunction",(function(){return Y})),n.d(t,"referencesMember",(function(){return V})),n.d(t,"validateScript",(function(){return B}));var r=n(0),c=n(166),o=n(410);n(1),n(24),n(347),n(9),n(51),n(6),n(82),n(83),n(17),n(322),n(324),n(369),n(72),n(5);const a=100;function i(e){return e instanceof Error?Object(r.af)(e):Object(r.af)(new Error(e))}function l(e){return Object(r.cI)(e)}function s(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(b(e,t.arguments[r]));return Object(r.cD)(n)}function u(e,t,n){return Object(r.cH)(((r,c)=>{s(e,t).then((o=>{try{r(n(e,t,o))}catch(e){c(e)}}),c)}))}function f(e,t,n){try{return s(e,t).then((c=>{try{const o=n(e,t,c);return function(e){return e&&"function"==typeof e.then}(o)?o:Object(r.cI)(o)}catch(e){return i(e)}}))}catch(e){return i(e)}}function b(e,t,n){try{if(t.breakpoint&&!0!==n)return t.breakpoint().then((()=>b(e,t,!0)));switch(t.type){case"VariableDeclarator":return function(e,t){try{let n=null;return n=null===t.init?Object(r.cI)(null):b(e,t.init),null!==e.localScope?n.then((n=>Object(r.cH)((r=>{if(n===c.e&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();e.localScope[o]={value:n,valueset:!0,node:t.init},r(c.e)})))):n.then((n=>Object(r.cH)((r=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();n===c.e&&(n=null),e.globalScope[o]={value:n,valueset:!0,node:t.init},r(c.e)}))))}catch(e){return i(e)}}(e,t);case"VariableDeclaration":return w(e,t,0);case"BlockStatement":return function(e,t){try{return y(e,t,0)}catch(e){return i(e)}}(e,t);case"FunctionDeclaration":return function(e,t){try{const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new c.t(t,e)},Object(r.cI)(c.e)}catch(e){return i(e)}}(e,t);case"ReturnStatement":return function(e,t){return Object(r.cH)(((n,r)=>{null===t.argument?n(new c.c(c.e)):b(e,t.argument).then((e=>{try{n(new c.c(e))}catch(e){r(e)}}),r)}))}(e,t);case"IfStatement":return function(e,t){return Object(r.cH)(((n,r)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?b(e,t.test).then((o=>{try{!0===o?b(e,t.consequent).then(n,r):!1===o?null!==t.alternate?b(e,t.alternate).then(n,r):n(c.e):r(new Error(Object(c.g)(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){r(e)}}),r):r(new Error(Object(c.g)(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?b(e,t.expression):(t.expression.type,b(e,t.expression).then((e=>Object(r.cH)((t=>{t(e===c.e?c.e:new c.T(e))})))))}catch(e){return Object(r.af)(e)}}(e,t);case"UpdateExpression":return function(e,t){try{const n=t.argument;if("MemberExpression"===n.type){const o={t:null};return b(e,n.object).then((t=>{let c=null;return o.t=t,!0===n.computed?c=b(e,n.property):"Identifier"===n.property.type&&(c=Object(r.cI)(n.property.name)),c})).then((e=>Object(r.cH)((n=>{const r=o.t;let a;if(Object(c.Z)(r)){if(!Object(c.w)(e))throw new Error("Invalid Parameter");if(e<0&&(e=r.length+e),e<0||e>=r.length)throw new Error("Assignment outside of array bounds");a=Object(c.X)(r[e]),r[e]="++"===t.operator?a+1:a-1}else if(r instanceof c.i){if(!1===Object(c.F)(e))throw new Error("Dictionary accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");a=Object(c.X)(r.field(e)),r.setField(e,"++"===t.operator?a+1:a-1)}else{if(!(r instanceof c.k))throw Object(c.E)(r)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(c.F)(e))throw new Error("Feature accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");a=Object(c.X)(r.field(e)),r.setField(e,"++"===t.operator?a+1:a-1)}!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1)}))))}return Object(r.cH)(((n,r)=>{const o="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!o)throw new Error("Invalid identifier");let a;return null!==e.localScope&&void 0!==e.localScope[o]?(a=Object(c.X)(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void 0!==e.globalScope[o]?(a=Object(c.X)(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void r(new Error("Variable not recognised"))}))}catch(e){return Object(r.af)(e)}}(e,t);case"AssignmentExpression":return function(e,t){return Object(r.cH)(((n,o)=>{const a=t.left;if("MemberExpression"===a.type)b(e,t.right).then((i=>{try{b(e,a.object).then((l=>{try{let s=null;if(!0===a.computed)s=b(e,a.property);else{if("Identifier"!==a.property.type)throw new Error("Expected computed or identifier for assignemnt target");s=Object(r.cI)(a.property.name)}s.then((e=>{try{if(Object(c.Z)(l)){if(!Object(c.w)(e))throw new Error("Invalid Parameter");if(e<0&&(e=l.length+e),e<0||e>l.length)throw new Error("Assignment outside of array bounds");if(e===l.length){if("="!==t.operator)throw new Error("Invalid Parameter");l[e]=E(i,t.operator,l[e],t)}else l[e]=E(i,t.operator,l[e],t)}else if(l instanceof c.i){if(!1===Object(c.F)(e))throw new Error("Dictionary accessor must be a string");if(!0===l.hasField(e))l.setField(e,E(i,t.operator,l.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");l.setField(e,E(i,t.operator,null,t))}}else{if(!(l instanceof c.k))throw Object(c.E)(l)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(c.F)(e))throw new Error("Feature accessor must be a string");if(!0===l.hasField(e))l.setField(e,E(i,t.operator,l.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");l.setField(e,E(i,t.operator,null,t))}}n(c.e)}catch(e){o(e)}}),o)}catch(e){o(e)}}),o)}catch(e){o(e)}}),o);else{const r=a.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[r])return void b(e,t.right).then((a=>{try{e.localScope[r]={value:E(a,t.operator,e.localScope[r].value,t),valueset:!0,node:t.right},n(c.e)}catch(e){o(e)}}),o);void 0!==e.globalScope[r]?b(e,t.right).then((a=>{try{e.globalScope[r]={value:E(a,t.operator,e.globalScope[r].value,t),valueset:!0,node:t.right},n(c.e)}catch(e){o(e)}}),o):o(new Error("Cannot assign undeclared variable"))}}))}(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?b(e,t.init).then((()=>Object(r.cH)(((n,r)=>{O(e,t,{testResult:!0,lastAction:c.e},(e=>{n(e)}),(e=>{r(e)}),0)})))):Object(r.cH)(((n,r)=>{O(e,t,{testResult:!0,lastAction:c.e},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(e){return Object(r.af)(e)}}(e,t);case"ForInStatement":return function(e,t){return Object(r.cH)(((n,o)=>{b(e,t.right).then((a=>{try{let i=null;i="VariableDeclaration"===t.left.type?b(e,t.left):Object(r.cI)(),i.then((()=>{try{let r="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(r=e.name)}else"Identifier"===t.left.type&&(r=t.left.name);if(!r)throw new Error(Object(c.g)(t,"RUNTIME","INVALIDVARIABLE"));r=r.toLowerCase();let i=null;if(null!==e.localScope&&void 0!==e.localScope[r]&&(i=e.localScope[r]),null===i&&void 0!==e.globalScope[r]&&(i=e.globalScope[r]),null===i)return void o(new Error(Object(c.g)(t,"RUNTIME","VARIABLENOTDECLARED")));Object(c.Z)(a)||Object(c.F)(a)?j(e,t,a,{reject:o,resolve:n},i):Object(c.E)(a)?function(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(c.e);p(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}(e,t,a,{reject:o,resolve:n},i):a instanceof c.i||a instanceof c.k?function(e,t,n,r,c){try{j(e,t,n.keys(),r,c,"k")}catch(e){r.reject(e)}}(e,t,a,{reject:o,resolve:n},i):Object(c.l)(a)?g(a.iterator(e.abortSignal),e,t,a,i,(e=>{n(e)}),(e=>{o(e)}),0):j(e,t,[],{reject:o,resolve:n},i)}catch(e){o(e)}}),o)}catch(e){o(e)}}),o)}))}(e,t);case"BreakStatement":return Object(r.cI)(c._);case"EmptyStatement":return Object(r.cI)(c.e);case"ContinueStatement":return Object(r.cI)(c.j);case"TemplateElement":return function(e,t){return Object(r.cI)(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return Object(r.cH)((n=>{const r=[];Object(c.O)(t.expressions,((t,n,o,a)=>b(e,n).then((e=>{r[o]=Object(c.K)(e)})))).then((()=>{let e="",c=0;for(const n of t.quasis)e+=n.value?n.value.cooked:"",!1===n.tail&&(e+=r[c]?r[c]:"",c++);n(e)}))}))}(e,t);case"Identifier":return v(e,t);case"MemberExpression":return function(e,t){try{return b(e,t.object).then((n=>{try{return null===n?Object(r.af)(new Error(Object(c.g)(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof c.i||n instanceof c.k?Object(r.cI)(n.field(t.property.name)):n instanceof r.ao?Object(r.cI)(m(n,t.property.name,e,t)):Object(r.af)(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE"))):Object(r.af)(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE"))):b(e,t.property).then((o=>Object(r.cH)(((a,i)=>{if(n instanceof c.i||n instanceof c.k)Object(c.F)(o)?a(n.field(o)):i(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof r.ao)Object(c.F)(o)?a(m(n,o,e,t)):i(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE")));else if(Object(c.Z)(n))if(Object(c.w)(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=n.length+o),o>=n.length||o<0)throw new Error(Object(c.g)(t,"RUNTIME","OUTOFBOUNDS"));a(n[o])}else i(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE")));else if(Object(c.E)(n))if(Object(c.w)(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=n.length()+o),o>=n.length()||o<0)throw new Error(Object(c.g)(t,"RUNTIME","OUTOFBOUNDS"));a(n.get(o))}else i(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE")));else if(Object(c.F)(n))if(Object(c.w)(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=n.length+o),o>=n.length||o<0)throw new Error(Object(c.g)(t,"RUNTIME","OUTOFBOUNDS"));a(n[o])}else i(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE")));else i(new Error(Object(c.g)(t,"RUNTIME","INVALIDTYPE")))}))))}catch(e){return i(e)}}))}catch(e){return i(e)}}(e,t);case"Literal":return l(t.value);case"CallExpression":return function(e,t){try{if("Identifier"!==t.callee.type)return i(Object(c.g)(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof c.S?n.value.fn(e,t):n.value instanceof c.t?M(e,t,n.value.definition):i(Object(c.g)(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];return n.value instanceof c.S?n.value.fn(e,t):n.value instanceof c.t?M(e,t,n.value.definition):i(Object(c.g)(t,"RUNTIME","NOTAFUNCTION"))}return i(Object(c.g)(t,"RUNTIME","NOTFOUND"))}catch(e){return i(e)}}(e,t);case"UnaryExpression":return function(e,t){try{return b(e,t.argument).then((e=>Object(r.cH)(((n,r)=>{Object(c.I)(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*Object(c.X)(e)):"+"===t.operator?n(1*Object(c.X)(e)):"~"===t.operator?n(~Object(c.X)(e)):r(new Error(Object(c.g)(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))))}catch(e){return i(e)}}(e,t);case"BinaryExpression":return function(e,t){try{return Object(r.cD)([b(e,t.left),b(e,t.right)]).then((e=>Object(r.cH)(((n,r)=>{const o=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n(Object(c.y)(Object(c.X)(o),Object(c.X)(a),t.operator));case"==":n(Object(c.B)(o,a));break;case"!=":n(!Object(c.B)(o,a));break;case"<":case">":case"<=":case">=":n(Object(c.q)(o,a,t.operator));break;case"+":Object(c.F)(o)||Object(c.F)(a)?n(Object(c.K)(o)+Object(c.K)(a)):n(Object(c.X)(o)+Object(c.X)(a));break;case"-":n(Object(c.X)(o)-Object(c.X)(a));break;case"*":n(Object(c.X)(o)*Object(c.X)(a));break;case"/":n(Object(c.X)(o)/Object(c.X)(a));break;case"%":n(Object(c.X)(o)%Object(c.X)(a));break;default:r(new Error(Object(c.g)(t,"RUNTIME","OPERATORNOTRECOGNISED")))}}))))}catch(e){return i(e)}}(e,t);case"LogicalExpression":return function(e,t){return Object(r.cH)(((n,r)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?b(e,t.left).then((o=>{try{if(!Object(c.I)(o))throw new Error(Object(c.g)(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===o?n(o):b(e,t.right).then((e=>{try{if(!Object(c.I)(e))throw new Error(Object(c.g)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(e){r(e)}}),r);break;case"&&":!1===o?n(o):b(e,t.right).then((e=>{try{if(!Object(c.I)(e))throw new Error(Object(c.g)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(e){r(e)}}),r);break;default:throw new Error(Object(c.g)(t,"RUNTIME","ONLYORORAND"))}}catch(e){r(e)}}),r):r(new Error(Object(c.g)(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error(Object(c.g)(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ConditionalExpression":return i(Object(c.g)(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)n.push(b(e,t.elements[r]));return Object(r.cD)(n).then((e=>Object(r.cH)(((n,r)=>{for(let n=0;n<e.length;n++){if(Object(c.v)(e[n]))return void r(new Error(Object(c.g)(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[n]===c.e&&(e[n]=null)}n(e)}))))}catch(e){return i(e)}}(e,t);case"ObjectExpression":return function(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(b(e,t.properties[r]));return Object(r.cD)(n).then((e=>Object(r.cH)((t=>{const n={};for(let t=0;t<e.length;t++){const r=e[t];if(Object(c.v)(r.value))throw new Error("Illegal Argument");if(!1===Object(c.F)(r.key))throw new Error("Illegal Argument");r.value===c.e?n[r.key.toString()]=null:n[r.key.toString()]=r.value}const r=new c.i(n);r.immutable=!1,t(r)}))))}catch(e){return i(e)}}(e,t);case"Property":return function(e,t){try{return b(e,t.value).then((n=>Object(r.cH)((r=>{"Identifier"===t.key.type?r({key:t.key.name,value:n}):b(e,t.key).then((e=>{r({key:e,value:n})}))}))))}catch(e){return Object(r.af)(e)}}(e,t);default:return i(Object(c.g)(t,"RUNTIME","UNREOGNISED"))}}catch(e){return i(e)}}function h(e,t,n){try{return b(e,t.body).then((o=>{try{return n.lastAction=o,n.lastAction===c._||n.lastAction instanceof c.c?(n.testResult=!1,Object(r.cI)(n)):null!==t.update?b(e,t.update).then((()=>Object(r.cI)(n))):Object(r.cI)(n)}catch(e){return Object(r.af)(e)}}))}catch(e){return Object(r.af)(e)}}function O(e,t,n,o,i,l){try{(function(e,t,n){try{return null!==t.test?b(e,t.test).then((o=>{try{return!0===e.abortSignal.aborted?Object(r.af)(new Error("Cancelled")):(n.testResult=o,!1===n.testResult?Object(r.cI)(n):!0!==n.testResult?Object(r.af)(new Error(Object(c.g)(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):h(e,t,n))}catch(e){return Object(r.af)(e)}})):h(e,t,n)}catch(e){return Object(r.af)(e)}})(e,t,n).then((()=>{try{!0===n.testResult?++l>a?(l=0,setTimeout((()=>{O(e,t,n,o,i,l)}),0)):O(e,t,n,o,i,l):n.lastAction instanceof c.c?o(n.lastAction):o(c.e)}catch(e){i(e)}}),(e=>{i(e)}))}catch(e){i(e)}}function d(e,t,n,r,o,i,l,s,u,f){try{if(r<=i)return void s(c.e);o.value="k"===l?n[i]:i,b(e,t.body).then((b=>{try{b instanceof c.c?s(b):b===c._?s(c.e):++f>a?(f=0,setTimeout((()=>{d(e,t,n,r,o,i+1,l,s,u,f)}),0)):d(e,t,n,r,o,i+1,l,s,u,f)}catch(e){u(e)}}),(e=>{u(e)}))}catch(e){u(e)}}function p(e,t,n,r,o,i,l,s,u){try{if(n.length()<=o)return void l(c.e);r.value="k"===i?n.get(o):o,b(e,t.body).then((f=>{f instanceof c.c?l(f):f===c._?l(c.e):++u>a?(u=0,setTimeout((()=>{p(e,t,n,r,o+1,i,l,s,u)}),0)):p(e,t,n,r,o+1,i,l,s,u)}),(e=>{s(e)}))}catch(e){s(e)}}function j(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(c.e);d(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}function g(e,t,n,r,o,i,l,s){try{e.next().then((u=>{try{if(null===u)i(c.e);else{const f=c.k.createFromGraphicLikeObject(u.geometry,u.attributes,r);f._underlyingGraphic=u,o.value=f,b(t,n.body).then((u=>{try{u===c._?i(c.e):u instanceof c.c?i(u):++s>a?(s=0,setTimeout((()=>{g(e,t,n,r,o,i,l,s)}),0)):g(e,t,n,r,o,i,l,s)}catch(e){l(e)}}),(e=>{l(e)}))}}catch(e){l(e)}}),(e=>{l(e)}))}catch(e){l(e)}}function E(e,t,n,r){switch(t){case"=":return e===c.e?null:e;case"/=":return Object(c.X)(n)/Object(c.X)(e);case"*=":return Object(c.X)(n)*Object(c.X)(e);case"-=":return Object(c.X)(n)-Object(c.X)(e);case"+=":return Object(c.F)(n)||Object(c.F)(e)?Object(c.K)(n)+Object(c.K)(e):Object(c.X)(n)+Object(c.X)(e);case"%=":return Object(c.X)(n)%Object(c.X)(e);default:throw new Error(Object(c.g)(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function y(e,t,n){try{return n>=t.body.length?Object(r.cI)(c.e):Object(r.cH)(((r,o)=>{b(e,t.body[n]).then((a=>{try{a instanceof c.c||a===c._||a===c.j||n===t.body.length-1?r(a):y(e,t,n+1).then(r,o)}catch(e){o(e)}}),o)}))}catch(e){return i(e)}}function w(e,t,n){return Object(r.cH)(((r,o)=>{n>=t.declarations.length?r(c.e):b(e,t.declarations[n]).then((()=>{n===t.declarations.length-1?r(c.e):w(e,t,n+1).then((()=>{r(c.e)}),o)}),o)}))}let I=0;function m(e,t,n,r){let o;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(I++,e.spatialReference._arcadeCacheId=I,t=I)}const n=new c.i({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return o=e.cache._arcadeCacheId,void 0===o&&(I++,o=I,e.cache._arcadeCacheId=o),new c.C(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return o=e.cache._arcadeCacheId,void 0===o&&(I++,o=I,e.cache._arcadeCacheId=o),new c.C(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return o=e.cache._arcadeCacheId,void 0===o&&(I++,o=I,e.cache._arcadeCacheId=o),new c.z(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,o,1);case"type":return"Multipoint"}}throw new Error(Object(c.g)(r,"RUNTIME","PROPERTYNOTFOUND"))}function v(e,t){return Object(r.cH)(((n,r)=>{const o=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])r(new Error(Object(c.g)(t,"RUNTIME","VARIABLENOTFOUND")));else{const t=e.globalScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=b(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(e){r(e)}}),r))}else{const t=e.localScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=b(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(e){r(e)}}),r))}}))}const N={};function S(e){return null===e?"":Object(c.Z)(e)||Object(c.E)(e)?"Array":Object(c.P)(e)?"Date":Object(c.F)(e)?"String":Object(c.I)(e)?"Boolean":Object(c.w)(e)?"Number":e instanceof c.n?"Attachment":e instanceof c.s?"Portal":e instanceof c.i?"Dictionary":e instanceof c.k?"Feature":e instanceof r._?"Point":e instanceof r.au?"Polygon":e instanceof r.aJ?"Polyline":e instanceof r.aK?"Multipoint":e instanceof r.M?"Extent":Object(c.v)(e)?"Function":Object(c.l)(e)?"FeatureSet":Object(c.r)(e)?"FeatureSetCollection":e===c.e?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function T(e,t,n,o){return Object(r.cH)(((r,a)=>{b(e,t.arguments[n]).then((i=>{try{if(Object(c.B)(i,o))return void b(e,t.arguments[n+1]).then(r,a);{const c=t.arguments.length-n;return 1===c?void b(e,t.arguments[n]).then(r,a):(2===c&&r(null),3===c?void b(e,t.arguments[n+2]).then(r,a):void T(e,t,n+2,o).then(r,a))}}catch(e){a(e)}}),a)}))}function R(e,t,n,o){return Object(r.cH)(((r,a)=>{!0===o?b(e,t.arguments[n+1]).then(r,a):3==t.arguments.length-n?b(e,t.arguments[n+2]).then(r,a):b(e,t.arguments[n+2]).then((o=>{try{if(!1===Object(c.I)(o))return void a(new Error("WHEN needs boolean test conditions"));R(e,t,n+2,o).then(r,a)}catch(e){a(e)}}))}))}function F(e,t){try{const n=e.length,c=Math.floor(n/2);return 0===n?Object(r.cI)([]):1===n?Object(r.cI)([e[0]]):Object(r.cH)(((o,a)=>{const i=[F(e.slice(0,c),t),F(e.slice(c,n),t)];Object(r.cD)(i).then((e=>{try{A(e[0],e[1],t,[]).then(o,a)}catch(e){a(e)}}),a)}))}catch(e){return i(e)}}function A(e,t,n,c){return Object(r.cH)(((r,o)=>{const a=c;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then((i=>{try{isNaN(i)&&(i=1),i<=0?(a.push(e[0]),e=e.slice(1)):(a.push(t[0]),t=t.slice(1)),A(e,t,n,c).then(r,o)}catch(e){o(e)}}),o):e.length>0?(a.push(e[0]),A(e=e.slice(1),t,n,c).then(r,o)):t.length>0&&(a.push(t[0]),t=t.slice(1),A(e,t,n,c).then(r,o)):r(c)}))}function C(e,t){const n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let c=n(e[0],t[0]);isNaN(c)&&(c=1),c<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}(C(e.slice(0,r),t),C(e.slice(r,n),t),t)}function U(e,t,n){try{const o=e.body;if(n.length!==e.params.length)return i(new Error("Invalid Parameter calls to function."));for(let r=0;r<n.length;r++){const c=e.params[r];"Identifier"===c.type&&(t.localScope[c.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}return b(t,o).then((e=>Object(r.cH)(((t,n)=>{e instanceof c.c?t(e.value):e!==c._?e!==c.j?t(e instanceof c.T?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))}))))}catch(e){return Object(r.af)(e)}}function M(e,t,n){return f(e,t,(function(t,r,c){const o={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(o.depthCounter>64)throw new Error("Exceeded maximum function depth");return U(n,o,c)}))}function x(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return U(e.definition,t,arguments)}}Object(c.h)(N,u),Object(c.d)(N,u),Object(c.N)(N,u),Object(c.a)(N,u),Object(c.D)(N,u),Object(c.o)(N,u),Object(o.registerFunctions)({functions:N,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:u,standardFunctionAsync:f}),N.typeof=function(e,t){return u(e,t,(function(e,t,n){Object(c.J)(n,1,1);const r=S(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r}))},N.iif=function(e,t){return Object(r.cH)(((n,o)=>{Object(c.J)(null===t.arguments?[]:t.arguments,3,3),b(e,t.arguments[0]).then((a=>{try{if(!1===Object(c.I)(a))return void o(new Error("IF Function must have a boolean test condition"));Object(r.cD)([b(e,t.arguments[1]),b(e,t.arguments[2])]).then((e=>{n(a?e[0]:e[1])}),o)}catch(e){o(e)}}),o)}))},N.decode=function(e,t){return Object(r.cH)(((n,r)=>{t.arguments.length<2?r(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?b(e,t.arguments[0]).then((c=>{try{T(e,t,1,c).then(n,r)}catch(e){r(e)}}),r):r(new Error("Must have a default value result.")):b(e,t.arguments[1]).then(n,r)}))},N.when=function(e,t){try{return t.arguments.length<3?i("Missing Parameters"):t.arguments.length%2==0?i("Must have a default value result."):b(e,t.arguments[0]).then((n=>Object(r.cH)(((r,o)=>{!1!==Object(c.I)(n)?R(e,t,0,n).then(r,o):o(new Error("WHEN needs boolean test conditions"))}))))}catch(e){return i(e)}},N.sort=function(e,t){return f(e,t,(function(e,t,n){Object(c.J)(n,1,2);let o=n[0];if(Object(c.E)(o)&&(o=o.toArray()),!1===Object(c.Z)(o))return i(Error("Illegal Argument"));if(n.length>1)return!1===Object(c.v)(n[1])?i(Error("Illegal Argument")):F(o,x(n[1]));{let e=o;if(0===e.length)return Object(r.cI)([]);const t={};for(let n=0;n<e.length;n++){const r=S(e[n]);""!==r&&(t[r]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return Object(r.cI)(e.slice(0));let n=0,a="";for(const e in t)n++,a=e;return n>1||"String"===a?e=C(e,(function(e,t){if(null==e||e===c.e)return null==t||t===c.e?0:1;if(null==t||t===c.e)return-1;const n=Object(c.K)(e),r=Object(c.K)(t);return n<r?-1:n===r?0:1})):"Number"===a?e=C(e,(function(e,t){return e-t})):"Boolean"===a?e=C(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===a&&(e=C(e,(function(e,t){return t-e}))),Object(r.cI)(e)}}))};const D={failDefferred:i,resolveDeffered:l,fixSpatialReference:c.x,parseArguments:s,standardFunction:u,standardFunctionAsync:f,evaluateIdentifier:v,arcadeCustomFunction:x};for(const e in N)N[e]={value:new c.S(N[e]),valueset:!0,node:null};const k=function(){};function P(e){console.log(e)}(k.prototype=N).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},k.prototype.pi={value:Math.PI,valueset:!0,node:null};const L=D;function _(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:u,standardFunctionAsync:f,failDefferred:i,evaluateIdentifier:v,arcadeCustomFunctionHandler:x};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const e in t.functions)N[e]={value:new c.S(t.functions[e]),valueset:!0,node:null},k.prototype[e]=N[e];for(let e=0;e<t.signatures.length;e++)Object(c.b)(t.signatures[e],"async")}function H(e,t){let n=t.spatialReference;null==n&&(n=new r.A({wkid:102100}));const o=function(e,t){const n=new k;null==e&&(e={}),null==t&&(t={});const r=new c.i({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null};for(const e in t)n[e]={value:new c.S(t[e]),native:!0,valueset:!0,node:null};for(const t in e)e[t]&&"esri.Graphic"===e[t].declaredClass?n[t]={value:c.k.createFromGraphic(e[t]),valueset:!0,node:null}:n[t]={value:e[t],valueset:!0,node:null};return n}(t.vars,t.customfunctions);return b({spatialReference:n,services:t.services,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console?t.console:P,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:1},e.body[0].body).then((e=>Object(r.cH)(((t,n)=>{e instanceof c.c&&(e=e.value),e instanceof c.T&&(e=e.value),e===c.e&&(e=null),e!==c._?e!==c.j?e instanceof c.S||e instanceof c.t?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))}))))}function X(e,t){return Object(c.u)(e)}function B(e,t){return Object(c.f)(e,t,"full")}function V(e,t){return Object(c.m)(e,t)}function Y(e,t){return Object(c.p)(e,t)}function G(e){return Object(c.A)(e)}}}]);