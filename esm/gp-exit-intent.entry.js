import { r as registerInstance, h, g as getAssetPath, e as getElement } from './index-47fd2c4f.js';

const isValidEmail = str => /(^[^@][a-z0-9-_.]+)(@{1})([a-z0-9-_]+[^@])(\.{1})([a-z0-9]+[^@])/i.test(str);

const CookieService = {
  setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + ';';
  },
  getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      if (cookie.indexOf(name + '=') > -1) {
        return cookie.split('=')[1];
      }
    }
    return null;
  },
};

const gpExitIntentCss = "h2{font-family:'proxima-lt';font-style:normal;font-size:1rem;font-weight:600;line-height:120%;color:var(--white)}p,label{font-family:'proxima-lt';font-style:normal;font-size:0.875rem;font-weight:normal;line-height:145%;letter-spacing:-0.005em;color:var(--white);opacity:0.7}button{cursor:pointer}input[type='email']:focus,input[type='email']:focus-visible{outline:2px solid var(--spirit-stone)}input[type='checkbox']:focus-visible+.checkbox__check,input[type='checkbox']:focus+.checkbox__check{border:2px solid var(--spirit-stone)}.main-button--submit:focus-visible{outline:2px solid var(--spirit-stone)}.close-button.desktop{display:none;height:2rem;width:2rem;background:var(--dark-700);border:1px solid transparent;border-radius:50%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.main-input{-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--dark-700);color:var(--white);padding:13px 20px;width:100%;border:none;border-radius:6px}.main-input:hover{outline:2px solid var(--spirit-stone)}.main-input:hover+.main-button--arrow{top:6px;border:2px solid var(--spirit-stone);border-left:none;right:-2px}.main-button{background-color:var(--spirit-stone);padding:15px 36px;border:none;outline:none;border-radius:6px;color:var(--dark);display:block;text-align:center;font-size:0.875rem;font-weight:700;width:100%}.main-button--arrow{background:var(--dark-700);border:none;position:absolute;right:0px;top:8px;padding:7px 12px;border-radius:0 6px 6px 0;-webkit-box-sizing:border-box;box-sizing:border-box}.main-button--arrow svg{stroke:var(--white)}.main-button--arrow svg path{stroke:inherit}.main-button--submit{display:none;background-color:var(--dark-700);color:var(--grey);opacity:1}.close-button{background-color:transparent;border:none}.close-button__text{color:var(--white);opacity:1;margin:0}.exit-intent-popup{z-index:3;position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.9);visibility:hidden;-webkit-transform:translateY(60%) scale(0);transform:translateY(60%) scale(0);-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.exit-intent-popup.visible{visibility:visible;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}.exit-intent-inner{min-height:470px;max-height:660px;width:262px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background:var(--dark-850);border-radius:16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:3px 5px 10px #304445;box-shadow:3px 5px 10px #304445}.exit-intent-inner .ebook{height:207px;border-top-left-radius:16px;border-top-right-radius:16px;position:relative}.exit-intent-inner .ebook .gradient{background:-webkit-gradient(linear, left top, left bottom, from(rgba(196, 196, 196, 0.1)), color-stop(97.92%, rgba(0, 0, 0, 0.83)));background:linear-gradient(180deg, rgba(196, 196, 196, 0.1) 0%, rgba(0, 0, 0, 0.83) 97.92%);position:absolute;z-index:1;height:100%;width:100%;border-radius:16px 16px 0 0}.exit-intent-inner .ebook img{width:100%;height:100%}.exit-intent-inner .content{-ms-flex:1;flex:1;padding:24px 0 32px;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.exit-intent-inner .content .title{margin-top:-50px;padding:0 10px;text-align:center;z-index:1;background-color:var(--dark-850);-webkit-box-shadow:0 -20px 40px var(--dark-850);box-shadow:0 -20px 40px var(--dark-850)}.exit-intent-inner .content .description{margin:16px 0 0;text-align:center}.exit-intent-inner .content .lead-form{width:calc(100% - 32px)}.exit-intent-inner .content .lead-form .form-group{margin-top:16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.exit-intent-inner .content .lead-form .form-group .email-label{display:none;color:var(--white);font-weight:400;line-height:140%;text-align:left;opacity:1}.exit-intent-inner .content .lead-form .form-group input[type='email']{width:calc(100% - 40px);margin-top:8px}.exit-intent-inner .content .lead-form .form-group input[type='email'].error{outline:2px solid var(--error)}.exit-intent-inner .content .lead-form .form-group input[type='email'].error+.main-button--arrow{border:2px solid var(--error);border-left:none;top:6px;right:-2px}.exit-intent-inner .content .lead-form .form-group input[type='checkbox'].error+.checkbox__check{border:2px solid var(--error);opacity:1}.checkbox{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:8px 0 0}.checkbox input{opacity:0;position:absolute;left:9999px;bottom:9999px}.checkbox input:checked+.checkbox__check{border:2px solid var(--spirit-stone);position:relative;opacity:1}.checkbox input:checked+.checkbox__check:before{content:'';position:absolute;left:3px;bottom:5px;width:4px;height:2px;background-color:var(--spirit-stone);-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.checkbox input:checked+.checkbox__check:after{content:'';position:absolute;right:2px;bottom:6px;width:8px;height:2px;background-color:var(--spirit-stone);-webkit-transform:rotateZ(-55deg);transform:rotateZ(-55deg)}.checkbox__check{width:14px;height:14px;border-radius:4px;border:2px solid var(--white);background:transparent;margin-right:8px}.checkbox__text{font-size:0.75rem;opacity:1}.main-input--checkbox{max-width:15px}@media (min-width: 390px){.exit-intent-inner .ebook{height:230px}.main-button--submit{display:block;margin-bottom:20px;font-size:1rem;line-height:150%}.exit-intent-inner .content .lead-form .form-group input[type='email']{width:100%}.main-button--arrow{display:none}.exit-intent-inner{width:325px}.exit-intent-inner .content{padding:24px 16px}}@media (min-width: 768px){.exit-intent-inner{width:480px;max-height:1000px}.exit-intent-inner .ebook{height:320px}.exit-intent-inner .content{padding:52px 46px}.exit-intent-inner .content .title{margin-top:-100px;font-size:1.25rem}.exit-intent-inner .content .description{font-size:1rem;margin-top:0}.main-button{font-size:1rem}.checkbox{-ms-flex-pack:start;justify-content:flex-start}.close-button__text{font-size:1rem}}@media (min-width: 1440px){h2{font-size:1.5rem}p,label{font-size:1.125rem}.close-button.desktop{display:-ms-flexbox;display:flex;position:absolute;right:24px;top:24px}.exit-intent-inner{-ms-flex-direction:row;flex-direction:row;min-height:504px;min-width:840px;border-radius:16px}.exit-intent-inner .ebook{height:504px;width:318px;border-radius:16px 0 0 16px}.exit-intent-inner .ebook img{height:100%;border-radius:16px 0 0 16px}.exit-intent-inner .ebook .gradient{display:none}.exit-intent-inner .content{padding:72px 56px 48px 66px;-ms-flex-align:start;align-items:flex-start}.exit-intent-inner .content .title{margin:0 60px 16px 0;padding:0;text-align:left}.exit-intent-inner .content .description{text-align:left;font-size:1.125rem}.exit-intent-inner .content .lead-form .form-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.exit-intent-inner .content .lead-form .form-group button{width:100%}.exit-intent-inner .content .lead-form .form-group .email-label{display:block;font-size:1rem;margin-bottom:-6px}.checkbox{margin-top:30px}.checkbox__check{margin:0 23px 0 0}.checkbox__text{font-size:0.875rem}.main-button--submit{margin:0;padding:12px 0}.close-button{display:none}.exit-intent-inner .content .lead-form{width:99%}}";

let GpExitIntent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.SETTINGS = {
      ESCAPE_KEY_CODE: 27,
      COOKIE_NAME: 'exitIntentShown',
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
    this.imageSrcDesktop = '';
    this.downloadDocSrc = '';
    this.downloadDocName = '';
    this.checkboxLabel = '';
    this.open = false;
    this.email = '';
    this.checkbox = false;
    this.hasEmailError = false;
    this.hasCheckboxError = false;
    this.isMobile = false;
  }
  connectedCallback() {
    this.isMobile = window.matchMedia('(max-width: 1439px)').matches;
  }
  componentDidRender() {
    this.submitArrow = this.element.shadowRoot.querySelector('.main-button--arrow svg');
    this.submitCta = this.element.shadowRoot.querySelector('.main-button--submit');
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
    const shouldShow = !CookieService.getCookie(this.SETTINGS.COOKIE_NAME) && !e.toElement && !e.relatedTarget && e.clientY < this.SETTINGS.MIN_MOUSE_DISTANCE_FROM_TOP;
    if (shouldShow) {
      this.open = true;
      CookieService.setCookie(this.SETTINGS.COOKIE_NAME, true, 30);
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
    CookieService.setCookie(this.SETTINGS.COOKIE_NAME, true, 365);
    downloadButton.click();
  }
  updateSubmitStyles() {
    if (!this.getSubmitCtaDisabled()) {
      this.submitArrow.style.stroke = '#00e7f9';
      this.submitCta.style.background = '#00e7f9';
      this.submitCta.style.color = '#000';
    }
    else {
      this.submitArrow.style.stroke = 'white';
      this.submitCta.style.color = '#e1e5e5';
      this.submitCta.style.background = '';
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
    const body = {
      unit: this.SETTINGS.UNIT_TO_SEND,
      tag: this.SETTINGS.TAG_TO_SEND,
      email: this.email,
      checkbox: this.checkbox,
      meta: { origin: window.location.href },
    };
    fetch(this.SETTINGS.URL_TO_SEND, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(() => {
      this.handleDownload();
      this.open = false;
    })
      .catch(err => {
      console.error('## FIN ## err', err);
    });
  }
  getImageSrc() {
    return this.isMobile ? this.imageSrcMobile : this.imageSrcDesktop;
  }
  render() {
    return (h("div", { onClick: e => this.handleExitIntent(e), class: { 'exit-intent-popup': true, 'visible': this.open } }, h("div", { class: "exit-intent-inner" }, h("div", { class: "ebook" }, h("div", { class: "gradient" }), h("img", { src: getAssetPath(this.getImageSrc()), alt: "" })), h("div", { class: "content" }, h("h2", { class: "title" }, this.caption), h("p", { class: "description" }, this.description), h("form", { onSubmit: event => this.handleSubmit(event), class: "lead-form" }, h("div", { class: "form-group" }, h("label", { htmlFor: "email", class: "email-label" }, "E-mail"), h("input", { type: "email", value: this.email, onInput: event => this.handleEmailChange(event), id: "email", name: "email", class: { 'main-input': true, 'error': this.hasEmailError }, placeholder: this.getEmailPlaceholder(), required: true }), h("button", { type: "submit", class: "main-button--arrow link-bold", onClick: (event) => this.handleSubmitClick(event), "aria-disabled": this.getSubmitCtaDisabled() }, h("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M8.30024 7.55348H4.10008", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { d: "M8.41574 16.422L4.10008 16.4442", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { d: "M8.41574 11.9988H2", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.6722 12.8246L12.2946 16.4709C11.9281 17.4423 12.9152 18.3636 13.7793 17.8557L22.6417 12.6446C23.1194 12.3634 23.1194 11.6366 22.6417 11.3554L13.7793 6.14431C12.9152 5.63642 11.9271 6.55773 12.2946 7.52905L13.6722 11.1754C13.8728 11.7033 13.8728 12.2945 13.6722 12.8246Z", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))), h("div", { class: "checkbox" }, h("input", { type: "checkbox", onClick: event => this.handleCheckboxChange(event), id: "checkbox", name: "checkbox", class: { 'main-input main-input--checkbox': true, 'error': this.hasCheckboxError }, required: true }), h("label", { htmlFor: "checkbox", class: "checkbox__check" }), h("label", { htmlFor: "checkbox", class: "checkbox__text" }, this.checkboxLabel, h("span", { "aria-hidden": "true" }, "*")))), h("div", { class: "form-group" }, h("button", { type: "submit", class: "main-button main-button--submit link-bold", onClick: (event) => this.handleSubmitClick(event), "aria-disabled": this.getSubmitCtaDisabled() }, this.buttonLabel))), h("button", { onClick: event => this.handleExitIntent(event), class: "close-button desktop" }, h("img", { src: getAssetPath('./assets/img/close.svg'), alt: "Close button", class: "close-button__image" })), h("button", { onClick: event => this.handleExitIntent(event), class: "close-button" }, h("p", { class: "close-button__text" }, "N\u00E3o, obrigado")))), h("a", { href: getAssetPath(this.downloadDocSrc), download: this.downloadDocName, id: "download", hidden: true })));
  }
  static get assetsDirs() { return ["assets"]; }
  get element() { return getElement(this); }
};
GpExitIntent.style = gpExitIntentCss;

export { GpExitIntent as gp_exit_intent };
