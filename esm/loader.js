import { B as BUILD, C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-47fd2c4f.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (BUILD.cssVarShim && !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-20dbffa5.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["gp-exit-intent",[[1,"gp-exit-intent",{"caption":[1],"description":[1],"buttonLabel":[1,"button-label"],"imageSrcMobile":[1,"image-src-mobile"],"imageSrcDesktop":[1,"image-src-desktop"],"downloadDocSrc":[1,"download-doc-src"],"downloadDocName":[1,"download-doc-name"],"checkboxLabel":[1,"checkbox-label"],"open":[32],"email":[32],"checkbox":[32],"hasEmailError":[32],"hasCheckboxError":[32],"isMobile":[32]},[[4,"keydown","handleKeydown"],[5,"mouseout","handleMouseout"]]]]]], options);
  });
};

export { defineCustomElements };
