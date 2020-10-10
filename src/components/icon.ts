import { customElement, html, LitElement, property } from "lit-element";
import Fontawesome from "../vendor/fontawesome";


@customElement("fa-icon")
export class Icon extends LitElement {
  static get styles() {
    return [ Fontawesome ];
 }

  @property({type: String})
  icon = '';

  render() {
    return html`
      <i class="${this.icon}"></i>
    `
  }
}