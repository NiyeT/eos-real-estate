import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `projects-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ProjectsElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'projects-element',
      },
    };
  }
}

window.customElements.define('projects-element', ProjectsElement);
