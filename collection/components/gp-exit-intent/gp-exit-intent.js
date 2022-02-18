/**
 * Adapted from https://www.webtips.dev/how-to-make-an-effective-exit-intent-popup-in-javascript
 * @author joao.veronese@timeprimo.com
 */
import { Component, Element, Prop, State, h, getAssetPath, Listen } from '@stencil/core';
import { isValidEmail } from '../../lib/validation';
import CookieService from '../../lib/CookieService';
export class GpExitIntent {
  constructor() {
    this.SETTINGS = {
      ESCAPE_KEY_CODE: 27,
      URL_TO_SEND: 'https://lm.timeprimo.com/app/lead/subscribe',
      UNIT_TO_SEND: 'FINCLASS',
      TAG_TO_SEND: 'F0050_Exit',
      MIN_MOUSE_DISTANCE_FROM_TOP: 10,
      MOBILE_TRIGGER_TIMEOUT: 30000
    };
    this.caption = 'Espera aí! Quer saber quanto tempo vai levar até o seu primeiro Milhão?';
    this.description = '';
    this.buttonLabel = 'Quero receber minha planilha';
    this.imageSrcMobile = '';
    this.imageSrcTablet = '';
    this.imageSrcDesktop = '';
    this.downloadDocSrc = '';
    this.downloadDocName = '';
    this.checkboxLabel = '';
    this.campaignName = '';
    this.open = false;
    this.email = '';
    this.checkbox = false;
    this.hasEmailError = false;
    this.hasCheckboxError = false;
    this.isMobile = false;
    this.isTablet = false;
  }
  connectedCallback() {
    this.isMobile = window.matchMedia('(max-width: 767px)').matches;
    this.isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches;
    window.alert(this.campaignName);
    window.addEventListener('leadsCaptureSubmitSuccess', () => {
      this.handleDownload();
      this.open = false;
    });
  }
  componentDidRender() {
    this.submitArrow = this.element.shadowRoot.querySelector('.main-button--arrow svg');
    // Mobile Exit Intent triggers
    if (window.matchMedia('(max-width: 1023px)').matches) {
      window.setTimeout(() => {
        const e = { clientY: 0 };
        this.handleMouseout(e);
      }, this.SETTINGS.MOBILE_TRIGGER_TIMEOUT);
    }
  }
  handleKeydown(e) {
    this.handleExitIntent(e);
  }
  handleMouseout(e) {
    const header = this.element.shadowRoot.querySelector('header');
    const wasDownloadedOrClosed = !CookieService.getCookie(this.campaignName);
    const isInWindowTopCorner = !e.toElement && !e.relatedTarget && e.clientY < this.SETTINGS.MIN_MOUSE_DISTANCE_FROM_TOP;
    const shouldShow = wasDownloadedOrClosed && isInWindowTopCorner;
    if (shouldShow) {
      this.open = true;
      header.style.zIndex = '1';
    }
  }
  getSubmitCtaDisabled() {
    return !this.email || this.hasEmailError || !this.checkbox || this.hasCheckboxError;
  }
  getEmailPlaceholder() {
    return this.isMobile ? 'E-mail' : 'Insira seu e-mail';
  }
  handleExitIntent(e) {
    const { className } = e.target;
    const shouldClose = (e.keyCode && e.keyCode === this.SETTINGS.ESCAPE_KEY_CODE) ||
      ['close-button', 'exit-intent-popup', 'close-image'].some(v => className.includes(v));
    if (shouldClose) {
      this.open = false;
    }
  }
  handleDownload() {
    const downloadButton = this.element.shadowRoot.getElementById('download');
    CookieService.setCookie(this.campaignName, true, 365);
    downloadButton.click();
  }
  updateSubmitStyles() {
    if (!this.getSubmitCtaDisabled()) {
      this.submitArrow.style.stroke = '#00e7f9';
    }
    else {
      this.submitArrow.style.stroke = 'white';
    }
  }
  handleEmailChange(e) {
    this.email = e.target.value;
    this.hasEmailError = !isValidEmail(this.email);
    this.updateSubmitStyles();
  }
  handleCheckboxChange(e) {
    this.checkbox = e.target.checked;
    this.hasCheckboxError = !e.target.checked;
    this.updateSubmitStyles();
  }
  handleCloseModal(e, period) {
    CookieService.setCookie(this.campaignName, true, period);
    this.handleExitIntent(e);
  }
  handleSubmitClick(e) {
    e.preventDefault();
    let shouldDownload = true;
    if (!this.email || !isValidEmail(this.email)) {
      this.hasEmailError = true;
      shouldDownload = false;
    }
    if (!this.checkbox) {
      this.hasCheckboxError = true;
      shouldDownload = false;
    }
    if (shouldDownload) {
      this.handleSubmit(e);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // Form submit is handled by leadsCapture.js script
    const exitIntentForm = this.element.shadowRoot.querySelector('form.form');
    const event = new CustomEvent("leadsCaptureSubmit", { detail: { form: exitIntentForm } });
    window.dispatchEvent(event);
  }
  getImageSrc() {
    if (this.isMobile)
      return this.imageSrcMobile;
    else if (this.isTablet)
      return this.imageSrcTablet;
    return this.imageSrcDesktop;
  }
  render() {
    return (h("div", { onClick: e => this.handleExitIntent(e), class: { 'exit-intent-popup': true, 'visible': this.open } },
      h("div", { class: "exit-intent-inner" },
        h("div", { class: "ebook" },
          h("div", { class: "gradient" }),
          h("img", { src: getAssetPath(this.getImageSrc()), alt: "" })),
        h("div", { class: "content" },
          h("h2", { class: "title" }, this.caption),
          h("p", { class: "description" }, this.description),
          h("form", { onSubmit: event => this.handleSubmit(event), class: "lead-form form" },
            h("div", { class: "form-group" },
              h("label", { htmlFor: "email", class: "email-label" }, "E-mail"),
              h("input", { type: "email", value: this.email, onInput: event => this.handleEmailChange(event), id: "email", name: "email", class: { 'main-input': true, 'error': this.hasEmailError }, placeholder: this.getEmailPlaceholder(), required: true }),
              h("button", { type: "submit", class: "main-button--arrow link-bold", onClick: (event) => this.handleSubmitClick(event), "aria-disabled": this.getSubmitCtaDisabled() },
                h("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                  h("path", { d: "M8.30024 7.55348H4.10008", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                  h("path", { d: "M8.41574 16.422L4.10008 16.4442", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                  h("path", { d: "M8.41574 11.9988H2", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                  h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.6722 12.8246L12.2946 16.4709C11.9281 17.4423 12.9152 18.3636 13.7793 17.8557L22.6417 12.6446C23.1194 12.3634 23.1194 11.6366 22.6417 11.3554L13.7793 6.14431C12.9152 5.63642 11.9271 6.55773 12.2946 7.52905L13.6722 11.1754C13.8728 11.7033 13.8728 12.2945 13.6722 12.8246Z", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
              h("div", { class: "checkbox" },
                h("input", { type: "checkbox", onClick: event => this.handleCheckboxChange(event), id: "checkbox", name: "checkbox", class: { 'main-input main-input--checkbox': true, 'error': this.hasCheckboxError }, required: true }),
                h("label", { htmlFor: "checkbox", class: "checkbox__check" }),
                h("label", { htmlFor: "checkbox", class: "checkbox__text" },
                  this.checkboxLabel,
                  h("span", { "aria-hidden": "true" }, "*")))),
            h("div", { class: "form-group" },
              h("button", { type: "submit", id: 'submit-cta', class: { 'main-button main-button--submit link-bold': true, 'main-button--submit--disabled': this.getSubmitCtaDisabled() }, onClick: (event) => this.handleSubmitClick(event), "aria-disabled": this.getSubmitCtaDisabled() }, this.buttonLabel))),
          h("button", { onClick: event => this.handleCloseModal(event, 0), class: "close-button desktop" },
            h("img", { src: getAssetPath('./assets/img/close.svg'), alt: "Close button", class: "close-button__image" })),
          h("button", { onClick: event => this.handleCloseModal(event, 0), class: "close-button" },
            h("p", { class: "close-button__text" }, "Agora n\u00E3o, obrigado")),
          h("button", { onClick: event => this.handleCloseModal(event, 365), class: "close-button close-button--forever" },
            h("p", { class: "close-button__text--forever" }, "N\u00E3o mostrar novamente")))),
      h("a", { href: getAssetPath(this.downloadDocSrc), download: this.downloadDocName, id: "download", hidden: true })));
  }
  static get is() { return "gp-exit-intent"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gp-exit-intent.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gp-exit-intent.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "caption": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "caption",
      "reflect": false,
      "defaultValue": "'Espera a\u00ED! Quer saber quanto tempo vai levar at\u00E9 o seu primeiro Milh\u00E3o?'"
    },
    "description": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "description",
      "reflect": false,
      "defaultValue": "''"
    },
    "buttonLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "button-label",
      "reflect": false,
      "defaultValue": "'Quero receber minha planilha'"
    },
    "imageSrcMobile": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image-src-mobile",
      "reflect": false,
      "defaultValue": "''"
    },
    "imageSrcTablet": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image-src-tablet",
      "reflect": false,
      "defaultValue": "''"
    },
    "imageSrcDesktop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image-src-desktop",
      "reflect": false,
      "defaultValue": "''"
    },
    "downloadDocSrc": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "download-doc-src",
      "reflect": false,
      "defaultValue": "''"
    },
    "downloadDocName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "download-doc-name",
      "reflect": false,
      "defaultValue": "''"
    },
    "checkboxLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "checkbox-label",
      "reflect": false,
      "defaultValue": "''"
    },
    "campaignName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "campaign-name",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "open": {},
    "email": {},
    "checkbox": {},
    "hasEmailError": {},
    "hasCheckboxError": {},
    "isMobile": {},
    "isTablet": {}
  }; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeydown",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "mouseout",
      "method": "handleMouseout",
      "target": "document",
      "capture": false,
      "passive": true
    }]; }
}
