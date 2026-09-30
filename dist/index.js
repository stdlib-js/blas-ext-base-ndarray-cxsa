"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=s(function(y,t){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-cxsa/dist').ndarray,l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function m(a){var r,e;return e=a[0],r=l(a[1]),d(n(e,0),r,c(e),q(e,0),o(e)),e}t.exports=m
});var x=require("path").join,f=require('@stdlib/utils-try-require/dist'),p=require('@stdlib/assert-is-error/dist'),g=u(),i,v=f(x(__dirname,"./native.js"));p(v)?i=g:i=v;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
