import{B as BUILD,C as CSS,p as plt,w as win,a as promiseResolve,b as bootstrapLazy}from"./index-47fd2c4f.js";import{g as globalScripts}from"./app-globals-0f993ce5.js";var patchEsm=function(){if(BUILD.cssVarShim&&!(CSS&&CSS.supports&&CSS.supports("color","var(--c)"))){return import("./css-shim-20dbffa5.js").then((function(){if(plt.$cssShim$=win.__cssshim){return plt.$cssShim$.i()}else{return 0}}))}return promiseResolve()};var defineCustomElements=function(e,o){if(typeof window==="undefined")return Promise.resolve();return patchEsm().then((function(){globalScripts();return bootstrapLazy([["gp-exit-intent",[[1,"gp-exit-intent",{caption:[1],description:[1],buttonLabel:[1,"button-label"],imageSrcMobile:[1,"image-src-mobile"],imageSrcTablet:[1,"image-src-tablet"],imageSrcDesktop:[1,"image-src-desktop"],downloadDocSrc:[1,"download-doc-src"],downloadDocName:[1,"download-doc-name"],checkboxLabel:[1,"checkbox-label"],campaignName:[1,"campaign-name"],open:[32],email:[32],checkbox:[32],hasEmailError:[32],hasCheckboxError:[32],isMobile:[32],isTablet:[32]},[[4,"keydown","handleKeydown"],[5,"mouseout","handleMouseout"]]]]]],o)}))};export{defineCustomElements};