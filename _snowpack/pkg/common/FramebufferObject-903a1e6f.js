import { o as o$3 } from './_commonjsHelpers-268aa74f.js';
import './config-b3bf08ce.js';
import { n as n$1, P as r$3, c4 as o$4 } from './Identifiable-c8406192.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var r$2=o$3((function(e){var r;void 0!==(r=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(e.exports=r);})),t$1=o$3((function(e){var r;void 0!==(r=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(e.exports=r);})),o$2=o$3((function(e){var r;void 0!==(r=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(e.exports=r);}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
n$1.getLogger("esri/views/webgl");function o$1(r){}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=4,s$1=0;class o{constructor(t,e,i=null){this._context=null,this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(0,this),this._context=t,this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},this.setData(i);}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){if(this._context&&this._context.gl){if(this._glName){const t=this._context.gl;this._context.unbindTextureAllUnits(this),t.deleteTexture(this._glName),this._glName=null;}this._context.instanceCounter.decrement(0,this),this._context=null;}}release(){this.dispose();}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,this.setData(null));}setData(e){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||a,this._descriptor.height=this._descriptor.height||a);const n=this._context.getBoundTexture(s$1);this._context.bindTexture(this,s$1);const p=this._descriptor;o._validateTexture(this._context,p),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0);const h=p.pixelFormat;let l=p.internalFormat?p.internalFormat:h;if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let t=e.width,a=e.height;e instanceof HTMLVideoElement&&(t=e.videoWidth,a=e.videoHeight),p.width&&p.height&&console.assert(t===p.width&&a===p.height),i.texImage2D(i.TEXTURE_2D,0,l,h,p.dataType,e),p.hasMipmap&&this.generateMipmap(),void 0===p.width&&(p.width=t),void 0===p.height&&(p.height=a);}else {null!=p.width&&null!=p.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8);let a=p.width,s=p.height;if(r$1(e)){const t=Math.round(Math.log(Math.max(a,s))/Math.LN2)+1;p.hasMipmap=p.hasMipmap&&t===e.levels.length;for(let o=0;;++o){const t=e.levels[Math.min(o,e.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,o,l,a,s,0,t),1===a&&1===s||!p.hasMipmap)break;a=Math.max(1,a>>1),s=Math.max(1,s>>1);}}else if(r$3(e))i.texImage2D(i.TEXTURE_2D,0,l,a,s,0,h,p.dataType,e),p.hasMipmap&&this.generateMipmap();else for(let t=0;i.texImage2D(i.TEXTURE_2D,t,l,a,s,0,h,p.dataType,null),(1!==a||1!==s)&&p.hasMipmap;++t)a=Math.max(1,a>>1),s=Math.max(1,s>>1);}o._applySamplingMode(i,this._descriptor),o._applyWrapMode(i,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),n&&this._context.bindTexture(n,s$1);}updateData(t,e,i,a,o,r){r||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,p=this._descriptor,h=this._context.getBoundTexture(s$1);this._context.bindTexture(this,s$1),(e<0||i<0||a>p.width||o>p.height||e+a>p.width||i+o>p.height)&&console.error("An attempt to update out of bounds of the texture!"),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0),r instanceof ImageData||r instanceof HTMLImageElement||r instanceof HTMLCanvasElement||r instanceof HTMLVideoElement?n.texSubImage2D(n.TEXTURE_2D,t,e,i,p.pixelFormat,p.dataType,r):n.texSubImage2D(n.TEXTURE_2D,t,e,i,a,o,p.pixelFormat,p.dataType,r),this._context.bindTexture(h,s$1);}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.getBoundTexture(s$1);this._context.bindTexture(this,s$1);const i=this._context.gl;i.generateMipmap(i.TEXTURE_2D),this._context.bindTexture(e,s$1);}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,o._validateTexture(this._context,this._descriptor),this._samplingModeDirty=!0);}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0);}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1);}static _validateTexture(t,a){(a.width<0||a.height<0)&&console.error("Negative dimension parameters are not allowed!");const s=o$4(a.width)&&o$4(a.height);n(t.gl)||s||("number"==typeof a.wrapMode?33071!==a.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===a.wrapMode.s&&33071===a.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),a.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"));}static _applySamplingMode(t,e){let i=e.samplingMode,a=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(a=9728)),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a);}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode.t));}static _applyAnisotropicFilteringParameters(t,e){if(null==e.maxAnisotropy)return;const i=t.capabilities.textureFilterAnisotropic;if(!i)return;const a=t.gl;a.texParameterf(a.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy);}}function r$1(e){return r$3(e)&&"type"in e&&"compressed"===e.type}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._context=t,this._desc=e,this._context.instanceCounter.increment(5,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,e.internalFormat,e.width,e.height);}get descriptor(){return this._desc}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const n=this._context.gl;this._context.bindRenderbuffer(this),n.renderbufferStorage(n.RENDERBUFFER,i.internalFormat,i.width,i.height);}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(5,this),this._context=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=n$1.getLogger("esri.views.webgl.FrameBufferObject");class r{constructor(t$1,s,h,n){if(this._context=t$1,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...s},t$1.instanceCounter.increment(4,this),h){let i;var o$1;if(Array.isArray(h))for(const s of h){const{attachmentPoint:r,texture:h}=s,n=h instanceof o?h:new o(t$1,h);i=n.descriptor,this._colorAttachments.set(r,n),this._validateColorAttachmentPoint(r),this._validateTextureDimensions(i,this._desc);}else h instanceof o?(i=h.descriptor,this._colorAttachments.set(36064,h)):(i=h,this._colorAttachments.set(36064,new o(t$1,h))),0!==(null==(o$1=this._desc)?void 0:o$1.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateTextureDimensions(i,this._desc);}if(n instanceof t){var c;const t=null!=(c=this._desc.depthStencilTarget)?c:3;2===t?this._stencilAttachment=n:1===t||3===t?this._depthAttachment=n:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),r._validateBufferDimensions(n.descriptor,this._desc);}else if(n){let t;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),n instanceof o?(this._depthStencilTexture=n,t=this._depthStencilTexture.descriptor):(t=n,this._depthStencilTexture=new o(this._context,t)),this._validateTextureDimensions(t,this._desc);}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();if(this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null;}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(4,this),this._desc=null;}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&t instanceof o?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}getColorTexture(t){const i=this._colorAttachments.get(t);return i&&i instanceof o?i:null}attachColorTexture(t,e=36064){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;if(this._validateTextureDimensions(i,this._desc),this._disposeColorAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl;i.framebufferTexture2D(i.FRAMEBUFFER,e,i.TEXTURE_2D,t.glName,0);}this._colorAttachments.set(e,t);}detachColorTexture(t=36064){const i=this._colorAttachments.get(t);if(i instanceof o){const e=i;if(this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,t,e.TEXTURE_2D,null,0);}return this._colorAttachments.delete(t),e}}attachDepthStencilTexture(t){if(!t)return;const e=t.descriptor;if(34041!==e.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==e.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(e,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,t.glName,0);}this._depthStencilTexture=t;}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;this._context.gl.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0);}return this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(!t)return;const e=t.descriptor;if(34041!==e.internalFormat&&33189!==e.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),r._validateBufferDimensions(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===e.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,t.glName);}this._depthAttachment=t;}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null);}return this._depthAttachment=null,e}copyToTexture(t,e,i,s,r,h,n){(t<0||e<0||r<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!");const o=this._desc,c=n.descriptor;3553!==n.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>o.width||e+s>o.height||r+i>c.width||h+s>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const a=this._context;a.bindTexture(n,0),a.bindFramebuffer(this),a.gl.copyTexSubImage2D(3553,0,r,h,t,e,i,s);}readPixels(t,e,i,s,r,h,n){(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this);this._context.gl.readPixels(t,e,i,s,r,h,n);}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e);})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e);})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1;}}initializeAndBind(){var t$1,s,r,n;const o$1=this._context.gl;if(this._initialized)return void o$1.bindFramebuffer(o$1.FRAMEBUFFER,this.glName);this._glName&&o$1.deleteFramebuffer(this._glName);const c=this._context,a=o$1.createFramebuffer(),l=this._desc,_=null!=(t$1=l.colorTarget)?t$1:1,d=null!=(s=l.width)?s:1,f=null!=(r=l.height)?r:1;if(o$1.bindFramebuffer(o$1.FRAMEBUFFER,a),0===this._colorAttachments.size)if(0===_)this._colorAttachments.set(36064,h(c,l));else {const t$1=new t(c,{internalFormat:32854,width:d,height:f});this._colorAttachments.set(36064,t$1);}this._colorAttachments.forEach(((t,i)=>{t&&(t instanceof o?o$1.framebufferTexture2D(o$1.FRAMEBUFFER,i,o$1.TEXTURE_2D,t.glName,0):o$1.framebufferRenderbuffer(o$1.FRAMEBUFFER,o$1.COLOR_ATTACHMENT0,o$1.RENDERBUFFER,t.glName));}));const u=null!=(n=l.depthStencilTarget)?n:0;switch(u){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new t(c,{internalFormat:1===l.depthStencilTarget?33189:34041,width:d,height:f}));const t$1=1===u?o$1.DEPTH_ATTACHMENT:o$1.DEPTH_STENCIL_ATTACHMENT;o$1.framebufferRenderbuffer(o$1.FRAMEBUFFER,t$1,o$1.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new t(c,{internalFormat:36168,width:d,height:f})),o$1.framebufferRenderbuffer(o$1.FRAMEBUFFER,o$1.STENCIL_ATTACHMENT,o$1.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){c.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const t={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:d,height:f};this._depthStencilTexture=new o(c,t);}o$1.framebufferTexture2D(o$1.FRAMEBUFFER,o$1.DEPTH_STENCIL_ATTACHMENT,o$1.TEXTURE_2D,this._depthStencilTexture.glName,0);}this._glName=a,this._initialized=!0;}_disposeColorAttachments(){this._colorAttachments.forEach(((t,i)=>{if(t instanceof o){if(this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,i,t.TEXTURE_2D,null,0);}t.dispose();}else if(t instanceof WebGLRenderbuffer){const e=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t);}})),this._colorAttachments.clear();}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null);}this._depthAttachment.dispose(),this._depthAttachment=null;}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null);}static _validateBufferDimensions(t,e){console.assert(t.width>=0&&t.height>=0),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height);}_validateTextureDimensions(t,e){console.assert(t.width>=0&&t.height>=0),3553!==t.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height);}_validateColorAttachmentPoint(t){if(-1===r._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;r._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS);}else r._MAX_COLOR_ATTACHMENTS=1;}const e=t-36064;e+1>r._MAX_COLOR_ATTACHMENTS&&s.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${r._MAX_COLOR_ATTACHMENTS} color attachments`);}}r._MAX_COLOR_ATTACHMENTS=-1;const h=(t,i)=>new o(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:i.width,height:i.height});

export { t$1 as a, r$2 as b, o$2 as c, o$1 as d, n, o, r, t };