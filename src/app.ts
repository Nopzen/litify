import { LitElement, customElement, html, css } from "lit-element";

@customElement('litify-app')
export class LitifyApp extends LitElement {
  static get styles(){
    return css`
      litify-navigation {
        grid-column-start: col-1;
        grid-row-start: row-1;
        grid-row-end: span 2;
      }
      litify-player-controls {
        grid-column-start: col-1;
        grid-column-end: span 3;
        grid-row-start: row-3;
      }
      litify-social-feed {
        grid-column-start: col-3;
        grid-row-start: row-1;
        grid-row-end: span 2;
      }
      litify-header {
        grid-column-start: col-2;
        grid-row-start: row-1;
      }
    `
  }
  render() {
    return html`
      <litify-header></litify-header>
      <litify-navigation></litify-navigation>
      <litify-social-feed></litify-social-feed>
      <litify-player-controls></litify-player-controls>
    `
  }
}