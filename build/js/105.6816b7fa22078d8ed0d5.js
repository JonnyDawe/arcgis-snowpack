(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{522:function(n,t,r){"use strict";r.r(t),function(n,e){r.d(t,"b",(function(){return u}));r(87),r(25),r(164),r(165),r(139),r(140),r(163),r(88),r(76),r(167);var i=r(387),o=r(310),a=Object(o.b)((function(t,o){var a,u=(a=(a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||n,function(n){var t,o=void 0!==(n=n||{})?n:{},u={};for(t in o)o.hasOwnProperty(t)&&(u[t]=o[t]);var s,c,l,f;s="object"==typeof window,c="function"==typeof importScripts,l="object"==typeof i.a&&"object"==typeof i.a.versions&&"string"==typeof i.a.versions.node,f=!s&&!l&&!c;var p,d,y,h,v="";l?(v=c?r(381).dirname(v)+"/":e+"/",p=function(n,t){return y||(y=r(404)),h||(h=r(381)),n=h.normalize(n),y.readFileSync(n,t?null:"utf8")},d=function(n){var t=p(n,!0);return t.buffer||(t=new Uint8Array(t)),$(t.buffer),t},i.a.argv.length>1&&i.a.argv[1].replace(/\\/g,"/"),i.a.argv.slice(2),i.a.on("uncaughtException",(function(n){if(!(n instanceof Ht))throw n})),i.a.on("unhandledRejection",en),o.inspect=function(){return"[Emscripten Module object]"}):f?("undefined"!=typeof read&&(p=function(n){return read(n)}),d=function(n){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):($("object"==typeof(t=read(n,"binary"))),t)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||c)&&(c?v=self.location.href:document.currentScript&&(v=document.currentScript.src),a&&(v=a),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},c&&(d=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var m,g,w=o.print||console.log.bind(console),b=o.printErr||console.warn.bind(console);for(t in u)u.hasOwnProperty(t)&&(o[t]=u[t]);u=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(m=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&b("no native wasm support detected");var C=new WebAssembly.Table({initial:59,maximum:59,element:"anyfunc"}),T=!1;function $(n,t){n||en("Assertion failed: "+t)}var P="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function _(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.subarray&&P)return P.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function A(n,t){return n?_(D,n,t):""}var E="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function W(n){for(var t=n,r=t>>1;x[r];)++r;if((t=r<<1)-n>32&&E)return E.decode(D.subarray(n,t));for(var e=0,i="";;){var o=x[n+2*e>>1];if(0==o)return i;++e,i+=String.fromCharCode(o)}}function S(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var a=n.charCodeAt(o);x[t>>1]=a,t+=2}return x[t>>1]=0,t-e}function F(n){return 2*n.length}function O(n){for(var t=0,r="";;){var e=M[n+4*t>>2];if(0==e)return r;if(++t,e>=65536){var i=e-65536;r+=String.fromCharCode(55296|i>>10,56320|1023&i)}else r+=String.fromCharCode(e)}}function j(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),M[t>>2]=a,(t+=4)+4>i)break}return M[t>>2]=0,t-e}function k(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4}return t}var R,I,D,x,U,M,V,z,H;function B(n,t){return n%t>0&&(n+=t-n%t),n}function q(n){R=n,o.HEAP8=I=new Int8Array(n),o.HEAP16=x=new Int16Array(n),o.HEAP32=M=new Int32Array(n),o.HEAPU8=D=new Uint8Array(n),o.HEAPU16=U=new Uint16Array(n),o.HEAPU32=V=new Uint32Array(n),o.HEAPF32=z=new Float32Array(n),o.HEAPF64=H=new Float64Array(n)}var G=o.INITIAL_MEMORY||16777216;function L(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?o.dynCall_v(r):o.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t()}}(g=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:G/65536}))&&(R=g.buffer),G=R.byteLength,q(R),M[79544]=5561216;var N=[],J=[],X=[],Y=[];function Z(n){N.unshift(n)}function K(n){Y.unshift(n)}var Q=Math.ceil,nn=Math.floor,tn=0,rn=null;function en(n){throw o.onAbort&&o.onAbort(n),w(n+=""),b(n),T=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}o.preloadedImages={},o.preloadedAudios={};var on="data:application/octet-stream;base64,";function an(n){return String.prototype.startsWith?n.startsWith(on):0===n.indexOf(on)}var un="basis_transcoder.wasm";function sn(){try{if(m)return new Uint8Array(m);if(d)return d(un);throw"both async and sync fetching of the wasm failed"}catch(n){en(n)}}function cn(){return m||!s&&!c||"function"!=typeof fetch?new Promise((function(n,t){n(sn())})):fetch(un,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+un+"'";return n.arrayBuffer()})).catch((function(){return sn()}))}function ln(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}an(un)||(un=function(n){return o.locateFile?o.locateFile(n,v):v+n}(un)),J.push({func:function(){Ut()}});var fn=void 0;function pn(n){for(var t="",r=n;D[r];)t+=fn[D[r++]];return t}var dn={},yn={},hn={};function vn(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=48&&t<=57?"_"+n:n}function mn(n,t){return n=vn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)}function gn(n,t){var r=mn(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var wn=void 0;function bn(n){throw new wn(n)}var Cn=void 0;function Tn(n){throw new Cn(n)}function $n(n,t,r){function e(t){var e=r(t);e.length!==n.length&&Tn("Mismatched type converter count");for(var i=0;i<n.length;++i)Pn(n[i],e[i])}n.forEach((function(n){hn[n]=t}));var i=new Array(t.length),o=[],a=0;t.forEach((function(n,t){yn.hasOwnProperty(n)?i[t]=yn[n]:(o.push(n),dn.hasOwnProperty(n)||(dn[n]=[]),dn[n].push((function(){i[t]=yn[n],++a===o.length&&e(i)})))})),0===o.length&&e(i)}function Pn(n,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||bn('type "'+e+'" must have a positive integer typeid pointer'),yn.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;bn("Cannot register type '"+e+"' twice")}if(yn[n]=t,delete hn[n],dn.hasOwnProperty(n)){var i=dn[n];delete dn[n],i.forEach((function(n){n()}))}}function _n(n){if(!(this instanceof Mn))return!1;if(!(n instanceof Mn))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,e=n.$$.ptrType.registeredClass,i=n.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;e.baseClass;)i=e.upcast(i),e=e.baseClass;return t===e&&r===i}function An(n){return{count:n.count,deleteScheduled:n.deleteScheduled,preservePointerOnDelete:n.preservePointerOnDelete,ptr:n.ptr,ptrType:n.ptrType,smartPtr:n.smartPtr,smartPtrType:n.smartPtrType}}function En(n){bn(function(n){return n.$$.ptrType.registeredClass.name}(n)+" instance already deleted")}var Wn=!1;function Sn(n){}function Fn(n){n.count.value-=1,0===n.count.value&&function(n){n.smartPtr?n.smartPtrType.rawDestructor(n.smartPtr):n.ptrType.registeredClass.rawDestructor(n.ptr)}(n)}function On(n){return"undefined"==typeof FinalizationGroup?(On=function(n){return n},n):(Wn=new FinalizationGroup((function(n){for(var t=n.next();!t.done;t=n.next()){var r=t.value;r.ptr?Fn(r):console.warn("object already deleted: "+r.ptr)}})),Sn=function(n){Wn.unregister(n.$$)},(On=function(n){return Wn.register(n,n.$$,n.$$),n})(n))}function jn(){if(this.$$.ptr||En(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var n=On(Object.create(Object.getPrototypeOf(this),{$$:{value:An(this.$$)}}));return n.$$.count.value+=1,n.$$.deleteScheduled=!1,n}function kn(){this.$$.ptr||En(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&bn("Object already scheduled for deletion"),Sn(this),Fn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Rn(){return!this.$$.ptr}var In=void 0,Dn=[];function xn(){for(;Dn.length;){var n=Dn.pop();n.$$.deleteScheduled=!1,n.delete()}}function Un(){return this.$$.ptr||En(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&bn("Object already scheduled for deletion"),Dn.push(this),1===Dn.length&&In&&In(xn),this.$$.deleteScheduled=!0,this}function Mn(){}var Vn={};function zn(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||bn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}function Hn(n,t,r){o.hasOwnProperty(n)?((void 0===r||void 0!==o[n].overloadTable&&void 0!==o[n].overloadTable[r])&&bn("Cannot register public name '"+n+"' twice"),zn(o,n,n),o.hasOwnProperty(r)&&bn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[n].overloadTable[r]=t):(o[n]=t,void 0!==r&&(o[n].numArguments=r))}function Bn(n,t,r,e,i,o,a,u){this.name=n,this.constructor=t,this.instancePrototype=r,this.rawDestructor=e,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function qn(n,t,r){for(;t!==r;)t.upcast||bn("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.upcast(n),t=t.baseClass;return n}function Gn(n,t){if(null===t)return this.isReference&&bn("null is not a valid "+this.name),0;t.$$||bn('Cannot pass "'+Tt(t)+'" as a '+this.name),t.$$.ptr||bn("Cannot pass deleted object as a pointer of type "+this.name);var r=t.$$.ptrType.registeredClass;return qn(t.$$.ptr,r,this.registeredClass)}function Ln(n,t){var r;if(null===t)return this.isReference&&bn("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==n&&n.push(this.rawDestructor,r),r):0;t.$$||bn('Cannot pass "'+Tt(t)+'" as a '+this.name),t.$$.ptr||bn("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&bn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var e=t.$$.ptrType.registeredClass;if(r=qn(t.$$.ptr,e,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&bn("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:bn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var i=t.clone();r=this.rawShare(r,Ct((function(){i.delete()}))),null!==n&&n.push(this.rawDestructor,r)}break;default:bn("Unsupporting sharing policy")}return r}function Nn(n,t){if(null===t)return this.isReference&&bn("null is not a valid "+this.name),0;t.$$||bn('Cannot pass "'+Tt(t)+'" as a '+this.name),t.$$.ptr||bn("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&bn("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass;return qn(t.$$.ptr,r,this.registeredClass)}function Jn(n){return this.fromWireType(V[n>>2])}function Xn(n){return this.rawGetPointee&&(n=this.rawGetPointee(n)),n}function Yn(n){this.rawDestructor&&this.rawDestructor(n)}function Zn(n){null!==n&&n.delete()}function Kn(n,t,r){if(t===r)return n;if(void 0===r.baseClass)return null;var e=Kn(n,t,r.baseClass);return null===e?null:r.downcast(e)}function Qn(){return Object.keys(rt).length}function nt(){var n=[];for(var t in rt)rt.hasOwnProperty(t)&&n.push(rt[t]);return n}function tt(n){In=n,Dn.length&&In&&In(xn)}var rt={};function et(n,t){return t=function(n,t){for(void 0===t&&bn("ptr should not be undefined");n.baseClass;)t=n.upcast(t),n=n.baseClass;return t}(n,t),rt[t]}function it(n,t){return t.ptrType&&t.ptr||Tn("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&Tn("Both smartPtrType and smartPtr must be specified"),t.count={value:1},On(Object.create(n,{$$:{value:t}}))}function ot(n){var t=this.getPointee(n);if(!t)return this.destructor(n),null;var r=et(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=n,r.clone();var e=r.clone();return this.destructor(n),e}function i(){return this.isSmartPointer?it(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:n}):it(this.registeredClass.instancePrototype,{ptrType:this,ptr:n})}var o,a=this.registeredClass.getActualType(t),u=Vn[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Kn(t,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?it(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:n}):it(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function at(n,t,r,e,i,o,a,u,s,c,l){this.name=n,this.registeredClass=t,this.isReference=r,this.isConst=e,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==t.baseClass?this.toWireType=Ln:e?(this.toWireType=Gn,this.destructorFunction=null):(this.toWireType=Nn,this.destructorFunction=null)}function ut(n,t,r){o.hasOwnProperty(n)||Tn("Replacing nonexistant public symbol"),void 0!==o[n].overloadTable&&void 0!==r?o[n].overloadTable[r]=t:(o[n]=t,o[n].argCount=r)}function st(n,t){n=pn(n);var r=function(r){for(var e=[],i=1;i<n.length;++i)e.push("a"+i);var o="return function dynCall_"+n+"_"+t+"("+e.join(", ")+") {\n";return o+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n",o+="};\n",new Function("dynCall","rawFunction",o)(r,t)}(o["dynCall_"+n]);return"function"!=typeof r&&bn("unknown function pointer with signature "+n+": "+t),r}var ct=void 0;function lt(n){var t=zt(n),r=pn(t);return Vt(t),r}function ft(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||yn[t]||(hn[t]?hn[t].forEach(n):(r.push(t),e[t]=!0))})),new ct(n+": "+r.map(lt).join([", "]))}function pt(n,t){for(var r=[],e=0;e<n;e++)r.push(M[(t>>2)+e]);return r}function dt(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function yt(n,t){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var r=mn(n.name||"unknownFunctionName",(function(){}));r.prototype=n.prototype;var e=new r,i=n.apply(e,t);return i instanceof Object?i:e}function ht(n,t,r,e,i){var o=t.length;o<2&&bn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,s=1;s<t.length;++s)if(null!==t[s]&&void 0===t[s].destructorFunction){u=!0;break}var c="void"!==t[0].name,l="",f="";for(s=0;s<o-2;++s)l+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+vn(n)+"("+l+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",y=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[bn,e,i,dt,t[0],t[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+t[s+2].name+"\n",y.push("argType"+s),h.push(t[s+2]);if(a&&(f="thisWired"+(f.length>0?", ":"")+f),p+=(c?"var rv = ":"")+"invoker(fn"+(f.length>0?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<t.length;++s){var v=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==t[s].destructorFunction&&(p+=v+"_dtor("+v+"); // "+t[s].name+"\n",y.push(v+"_dtor"),h.push(t[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",y.push(p),yt(Function,y).apply(null,h)}var vt=[],mt=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function gt(n){n>4&&0==--mt[n].refcount&&(mt[n]=void 0,vt.push(n))}function wt(){for(var n=0,t=5;t<mt.length;++t)void 0!==mt[t]&&++n;return n}function bt(){for(var n=5;n<mt.length;++n)if(void 0!==mt[n])return mt[n];return null}function Ct(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=vt.length?vt.pop():mt.length;return mt[t]={refcount:1,value:n},t}}function Tt(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function $t(n,t){switch(t){case 2:return function(n){return this.fromWireType(z[n>>2])};case 3:return function(n){return this.fromWireType(H[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Pt(n,t,r){switch(t){case 0:return r?function(n){return I[n]}:function(n){return D[n]};case 1:return r?function(n){return x[n>>1]}:function(n){return U[n>>1]};case 2:return r?function(n){return M[n>>2]}:function(n){return V[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function _t(n){return n||bn("Cannot use deleted val. handle = "+n),mt[n].value}function At(n,t){var r=yn[n];return void 0===r&&bn(t+" has unknown type "+lt(n)),r}var Et={};function Wt(n){var t=Et[n];return void 0===t?pn(n):t}var St=[];function Ft(){return"object"==typeof globalThis?globalThis:Function("return this")()}function Ot(n){for(var t="",r=0;r<n;++r)t+=(0!==r?", ":"")+"arg"+r;var e="return function emval_allocator_"+n+"(constructor, argTypes, args) {\n";for(r=0;r<n;++r)e+="var argType"+r+" = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + "+r+'], "parameter '+r+'");\nvar arg'+r+" = argType"+r+".readValueFromPointer(args);\nargs += argType"+r+"['argPackAdvance'];\n";return e+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",e)(At,o,Ct)}var jt={};function kt(n){try{return g.grow(n-R.byteLength+65535>>16),q(g.buffer),1}catch(n){}}var Rt={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var r=Rt.buffers[n];0===t||10===t?((1===n?w:b)(_(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return Rt.varargs+=4,M[Rt.varargs-4>>2]},getStr:function(n){return A(n)},get64:function(n,t){return n}};(function(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);fn=n})(),wn=o.BindingError=gn(Error,"BindingError"),Cn=o.InternalError=gn(Error,"InternalError"),Mn.prototype.isAliasOf=_n,Mn.prototype.clone=jn,Mn.prototype.delete=kn,Mn.prototype.isDeleted=Rn,Mn.prototype.deleteLater=Un,at.prototype.getPointee=Xn,at.prototype.destructor=Yn,at.prototype.argPackAdvance=8,at.prototype.readValueFromPointer=Jn,at.prototype.deleteObject=Zn,at.prototype.fromWireType=ot,o.getInheritedInstanceCount=Qn,o.getLiveInheritedInstances=nt,o.flushPendingDeletes=xn,o.setDelayFunction=tt,ct=o.UnboundTypeError=gn(Error,"UnboundTypeError"),o.count_emval_handles=wt,o.get_first_emval=bt;var It={G:function(n){return Mt(n)},D:function(n,t,r){throw n},A:function(n,t,r,e,i){var o=ln(r);Pn(n,{name:t=pn(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=I;else if(2===r)e=x;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=M}return this.fromWireType(e[n>>o])},destructorFunction:null})},t:function(n,t,r,e,i,o,a,u,s,c,l,f,p){l=pn(l),o=st(i,o),u&&(u=st(a,u)),c&&(c=st(s,c)),p=st(f,p);var d=vn(l);Hn(d,(function(){ft("Cannot construct "+l+" due to unbound types",[e])})),$n([n,t,r],e?[e]:[],(function(t){var r,i;t=t[0],i=e?(r=t.registeredClass).instancePrototype:Mn.prototype;var a=mn(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new wn("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new wn(l+" has no accessible constructor");var n=f.constructor_body[arguments.length];if(void 0===n)throw new wn("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return n.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Bn(l,a,s,p,r,o,u,c),y=new at(l,f,!0,!1,!1),h=new at(l+"*",f,!1,!1,!1),v=new at(l+" const*",f,!1,!0,!1);return Vn[n]={pointerType:h,constPointerType:v},ut(d,a),[y,h,v]}))},s:function(n,t,r,e,i,o){$(t>0);var a=pt(t,r);i=st(e,i);var u=[o],s=[];$n([],[n],(function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.registeredClass.constructor_body&&(n.registeredClass.constructor_body=[]),void 0!==n.registeredClass.constructor_body[t-1])throw new wn("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.registeredClass.constructor_body[t-1]=function(){ft("Cannot construct "+n.name+" due to unbound types",a)},$n([],a,(function(e){return n.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&bn(r+" called with "+arguments.length+" arguments, expected "+(t-1)),s.length=0,u.length=t;for(var n=1;n<t;++n)u[n]=e[n].toWireType(s,arguments[n-1]);var o=i.apply(null,u);return dt(s),e[0].fromWireType(o)},[]})),[]}))},c:function(n,t,r,e,i,o,a,u){var s=pt(r,e);t=pn(t),o=st(i,o),$n([],[n],(function(n){var e=(n=n[0]).name+"."+t;function i(){ft("Cannot call "+e+" due to unbound types",s)}u&&n.registeredClass.pureVirtualFunctions.push(t);var c=n.registeredClass.instancePrototype,l=c[t];return void 0===l||void 0===l.overloadTable&&l.className!==n.name&&l.argCount===r-2?(i.argCount=r-2,i.className=n.name,c[t]=i):(zn(c,t,e),c[t].overloadTable[r-2]=i),$n([],s,(function(i){var u=ht(e,i,n,o,a);return void 0===c[t].overloadTable?(u.argCount=r-2,c[t]=u):c[t].overloadTable[r-2]=u,[]})),[]}))},z:function(n,t){Pn(n,{name:t=pn(t),fromWireType:function(n){var t=mt[n].value;return gt(n),t},toWireType:function(n,t){return Ct(t)},argPackAdvance:8,readValueFromPointer:Jn,destructorFunction:null})},j:function(n,t,r){var e=ln(r);Pn(n,{name:t=pn(t),fromWireType:function(n){return n},toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Tt(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:$t(t,e),destructorFunction:null})},x:function(n,t,r,e,i,o){var a=pt(t,r);n=pn(n),i=st(e,i),Hn(n,(function(){ft("Cannot call "+n+" due to unbound types",a)}),t-1),$n([],a,(function(r){var e=[r[0],null].concat(r.slice(1));return ut(n,ht(n,e,null,i,o),t-1),[]}))},d:function(n,t,r,e,i){t=pn(t),-1===i&&(i=4294967295);var o=ln(r),a=function(n){return n};if(0===e){var u=32-8*r;a=function(n){return n<<u>>>u}}var s=-1!=t.indexOf("unsigned");Pn(n,{name:t,fromWireType:a,toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Tt(r)+'" to '+this.name);if(r<e||r>i)throw new TypeError('Passing a number "'+Tt(r)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+e+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:Pt(t,o,0!==e),destructorFunction:null})},b:function(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=V,r=t[n>>=2],i=t[n+1];return new e(R,i,r)}Pn(n,{name:r=pn(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},k:function(n,t){var r="std::string"===(t=pn(t));Pn(n,{name:t,fromWireType:function(n){var t,e=V[n>>2];if(r){var i=D[n+4+e],o=0;0!=i&&(o=i,D[n+4+e]=0);for(var a=n+4,u=0;u<=e;++u){var s=n+4+u;if(0==D[s]){var c=A(a);void 0===t?t=c:(t+=String.fromCharCode(0),t+=c),a=s+1}}0!=o&&(D[n+4+e]=o)}else{var l=new Array(e);for(u=0;u<e;++u)l[u]=String.fromCharCode(D[n+4+u]);t=l.join("")}return Vt(n),t},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e="string"==typeof t;e||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||bn("Cannot pass non-string to std::string");var i=(r&&e?function(){return function(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++r)),e<=127?++t:t+=e<=2047?2:e<=65535?3:4}return t}(t)}:function(){return t.length})(),o=Mt(4+i+1);if(V[o>>2]=i,r&&e)!function(n,t,r){(function(n,t,r,e){if(!(e>0))return 0;for(var i=r,o=r+e-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(r>=o)break;t[r++]=u}else if(u<=2047){if(r+1>=o)break;t[r++]=192|u>>6,t[r++]=128|63&u}else if(u<=65535){if(r+2>=o)break;t[r++]=224|u>>12,t[r++]=128|u>>6&63,t[r++]=128|63&u}else{if(r+3>=o)break;t[r++]=240|u>>18,t[r++]=128|u>>12&63,t[r++]=128|u>>6&63,t[r++]=128|63&u}}t[r]=0})(n,D,t,r)}(t,o+4,i+1);else if(e)for(var a=0;a<i;++a){var u=t.charCodeAt(a);u>255&&(Vt(o),bn("String has UTF-16 code units that do not fit in 8 bits")),D[o+4+a]=u}else for(a=0;a<i;++a)D[o+4+a]=t[a];return null!==n&&n.push(Vt,o),o},argPackAdvance:8,readValueFromPointer:Jn,destructorFunction:function(n){Vt(n)}})},i:function(n,t,r){var e,i,o,a,u;r=pn(r),2===t?(e=W,i=S,a=F,o=function(){return U},u=1):4===t&&(e=O,i=j,a=k,o=function(){return V},u=2),Pn(n,{name:r,fromWireType:function(n){var r,i=V[n>>2],a=o(),s=a[n+4+i*t>>u],c=0;0!=s&&(c=s,a[n+4+i*t>>u]=0);for(var l=n+4,f=0;f<=i;++f){var p=n+4+f*t;if(0==a[p>>u]){var d=e(l);void 0===r?r=d:(r+=String.fromCharCode(0),r+=d),l=p+t}}return 0!=c&&(a[n+4+i*t>>u]=c),Vt(n),r},toWireType:function(n,e){"string"!=typeof e&&bn("Cannot pass non-string to C++ string type "+r);var o=a(e),s=Mt(4+o+t);return V[s>>2]=o>>u,i(e,s+4,o+t),null!==n&&n.push(Vt,s),s},argPackAdvance:8,readValueFromPointer:Jn,destructorFunction:function(n){Vt(n)}})},B:function(n,t){Pn(n,{isVoid:!0,name:t=pn(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})},r:function(n,t,r){n=_t(n),t=At(t,"emval::as");var e=[],i=Ct(e);return M[r>>2]=i,t.toWireType(e,n)},m:function(n,t,r,e){(n=St[n])(t=_t(t),r=Wt(r),null,e)},a:gt,F:function(n){return 0===n?Ct(Ft()):(n=Wt(n),Ct(Ft()[n]))},n:function(n,t){for(var r=function(n,t){for(var r=new Array(n),e=0;e<n;++e)r[e]=At(M[(t>>2)+e],"parameter "+e);return r}(n,t),e=r[0],i=e.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$",o=["retType"],a=[e],u="",s=0;s<n-1;++s)u+=(0!==s?", ":"")+"arg"+s,o.push("argType"+s),a.push(r[1+s]);var c="return function "+vn("methodCaller_"+i)+"(handle, name, destructors, args) {\n",l=0;for(s=0;s<n-1;++s)c+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=r[s+1].argPackAdvance;for(c+="    var rv = handle[name]("+u+");\n",s=0;s<n-1;++s)r[s+1].deleteObject&&(c+="    argType"+s+".deleteObject(arg"+s+");\n");return e.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",o.push(c),function(n){var t=St.length;return St.push(n),t}(yt(Function,o).apply(null,a))},p:function(n){return n=Wt(n),Ct(o[n])},f:function(n,t){return Ct((n=_t(n))[t=_t(t)])},h:function(n){n>4&&(mt[n].refcount+=1)},o:function(n,t,r,e){n=_t(n);var i=jt[t];return i||(i=Ot(t),jt[t]=i),i(n,r,e)},g:function(n){return Ct(Wt(n))},q:function(n){dt(mt[n].value),gt(n)},E:function(){en()},w:function(n,t,r){D.copyWithin(n,t,t+r)},y:function(n){var t=D.length,r=2147418112;if(n>r)return!1;for(var e=1;e<=4;e*=2){var i=t*(1+.2/e);if(i=Math.min(i,n+100663296),kt(Math.min(r,B(Math.max(16777216,n,i),65536))))return!0}return!1},C:function(n){return 0},u:function(n,t,r,e,i){},l:function(n,t,r,e){for(var i=0,o=0;o<r;o++){for(var a=M[t+8*o>>2],u=M[t+(8*o+4)>>2],s=0;s<u;s++)Rt.printChar(n,D[a+s]);i+=u}return M[e>>2]=i,0},memory:g,e:function(n){return(n=+n)>=0?+nn(n+.5):+Q(n-.5)},v:function(n){},table:C},Dt=function(){var n={a:It};function t(n,t){var r=n.exports;o.asm=r,function(n){if(tn--,o.monitorRunDependencies&&o.monitorRunDependencies(tn),0==tn&&rn){var t=rn;rn=null,t()}}()}function r(n){t(n.instance)}function e(t){return cn().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){b("failed to asynchronously prepare wasm: "+n),en(n)}))}if(tn++,o.monitorRunDependencies&&o.monitorRunDependencies(tn),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(n){return b("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||an(un)||"function"!=typeof fetch)return e(r);fetch(un,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(r,(function(n){b("wasm streaming compile failed: "+n),b("falling back to ArrayBuffer instantiation"),e(r)}))}))}(),{}}();o.asm=Dt;var xt,Ut=o.___wasm_call_ctors=function(){return(Ut=o.___wasm_call_ctors=o.asm.H).apply(null,arguments)},Mt=o._malloc=function(){return(Mt=o._malloc=o.asm.I).apply(null,arguments)},Vt=o._free=function(){return(Vt=o._free=o.asm.J).apply(null,arguments)},zt=o.___getTypeName=function(){return(zt=o.___getTypeName=o.asm.K).apply(null,arguments)};function Ht(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Bt(n){function t(){xt||(xt=!0,o.calledRun=!0,T||(L(J),L(X),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)K(o.postRun.shift());L(Y)}()))}tn>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)Z(o.preRun.shift());L(N)}(),tn>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.L).apply(null,arguments)},o.dynCall_viii=function(){return(o.dynCall_viii=o.asm.M).apply(null,arguments)},o.dynCall_ii=function(){return(o.dynCall_ii=o.asm.N).apply(null,arguments)},o.dynCall_vi=function(){return(o.dynCall_vi=o.asm.O).apply(null,arguments)},o.dynCall_v=function(){return(o.dynCall_v=o.asm.P).apply(null,arguments)},o.dynCall_iii=function(){return(o.dynCall_iii=o.asm.Q).apply(null,arguments)},o.dynCall_vii=function(){return(o.dynCall_vii=o.asm.R).apply(null,arguments)},o.dynCall_iiii=function(){return(o.dynCall_iiii=o.asm.S).apply(null,arguments)},o.dynCall_iiiii=function(){return(o.dynCall_iiiii=o.asm.T).apply(null,arguments)},o.dynCall_iiiiii=function(){return(o.dynCall_iiiiii=o.asm.U).apply(null,arguments)},o.dynCall_iiiiiiii=function(){return(o.dynCall_iiiiiiii=o.asm.V).apply(null,arguments)},o.dynCall_iiiiiiiii=function(){return(o.dynCall_iiiiiiiii=o.asm.W).apply(null,arguments)},o.dynCall_iidiiii=function(){return(o.dynCall_iidiiii=o.asm.X).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.Y).apply(null,arguments)},o.dynCall_viiiiii=function(){return(o.dynCall_viiiiii=o.asm.Z).apply(null,arguments)},o.dynCall_viiiii=function(){return(o.dynCall_viiiii=o.asm._).apply(null,arguments)},o.dynCall_viiii=function(){return(o.dynCall_viiii=o.asm.$).apply(null,arguments)},o.asm=Dt,o.then=function(n){if(xt)n(o);else{var t=o.onRuntimeInitialized;o.onRuntimeInitialized=function(){t&&t(),n(o)}}return o},rn=function n(){xt||Bt(),xt||(rn=n)},o.run=Bt,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Bt(),n});t.exports=u})),u=Object.freeze(Object.assign(Object.create(null),a,{default:a}))}.call(this,"/index.js","/")}}]);