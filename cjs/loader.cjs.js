'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c8eea3f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (index.BUILD.cssVarShim && !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-3bfdba4f.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["gp-exit-intent.cjs",[[1,"gp-exit-intent",{"caption":[1],"description":[1],"buttonLabel":[1,"button-label"],"imageSrcMobile":[1,"image-src-mobile"],"imageSrcDesktop":[1,"image-src-desktop"],"downloadDocSrc":[1,"download-doc-src"],"downloadDocName":[1,"download-doc-name"],"checkboxLabel":[1,"checkbox-label"],"open":[32],"email":[32],"checkbox":[32],"hasEmailError":[32],"hasCheckboxError":[32],"isMobile":[32]},[[4,"keydown","handleKeydown"],[5,"mouseout","handleMouseout"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
