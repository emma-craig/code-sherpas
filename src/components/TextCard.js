class MyTextCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <div>
	   <slot name='item-header'></slot>
		<slot name = 'item-description'></slot>
		<ul >
		  <slot name='list-item-1'>	</slot>
		  <slot name='list-item-2'>	</slot>
		  <slot name='list-item-3'>	</slot>	
		</ul>
	</div>
`;
  }
}

customElements.define('my-text-card', MyTextCard);
