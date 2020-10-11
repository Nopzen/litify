import { css, customElement, html, LitElement } from "lit-element";

@customElement("litify-slider")
export class Slider extends LitElement {
  static get styles() {
    return css`
      div.slider {
        width: 100%;
        height: 5px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, .1);
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      div.bar {
        width: 50%;
        height: 100%;
        background-color: var(--success);
        border-radius: 10px;
        opacity: 1;
      }

      div.scrubber {
        visibility: hidden;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 100%;
        background-color: var(--white);
        cursor: pointer;
        margin-right: -.75rem;
      }

      div.slider:hover div.scrubber {
        visibility: visible;
      }
    `
  }

  render() {
    return html`
      <div class="slider">
        <div class="bar"></div>
        <div class="scrubber"></div>
      </div>
    `
  }
}