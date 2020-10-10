import { css, customElement, html, LitElement } from "lit-element"

@customElement('litify-player-controls')
export class PlayerControls extends LitElement {
  static get styles() {
    return css`
      section {
        display: grid;
        height: 100%;
        grid-template-columns: [col-1]17% [col-2]auto [col-3]17%;
        gap: 1.6rem;
        background-color: var(--black);
        padding: 0 .8rem;
        filter: brightness(1.5);
      }

      section div {
        place-self: center stretch;
      }
    `;
  }
  render() {
    return html`
      <section>
        <div>
          Artist and track
        </div>
        <div>
          Controls
        </div>
        <div>
          Devices & Volume
        </div>
      </section>
    `
  }
}