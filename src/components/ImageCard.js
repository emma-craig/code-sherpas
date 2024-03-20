class MyImageCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<slot name = "item-img"></slot>';
  }
}

customElements.define('my-image-card', MyImageCard);
