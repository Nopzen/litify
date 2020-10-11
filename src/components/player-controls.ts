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
        background-color: var(--grey);
        padding: 0 1.6rem;
        filter: brightness(1.5);
      }

      section div {
        place-self: center stretch;
      }

      div.controller {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      div.controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.6rem;
      }

      div.controls fa-icon {
        font-size: 1.4rem;
        margin: 0 1.6rem;
        cursor: pointer;
      }

      div.controls fa-icon:nth-child(3) {
        padding: .8rem 1.1rem;
        border: 1px solid white;
        border-radius: 100%;
      }

      div.current-track {
        display: flex;
        align-self: center;
      }
      div.current-track litify-record {
        margin-right: 1.6rem;
      }

      div.current-track litify-caption fa-icon {
        float: right;
        cursor: pointer;
      }

      div.current-track litify-caption fa-icon:hover {
        cursor: pointer;
        color: var(--error);
      } 
    `;
  }
  render() {
    return html`
      <section>
        <div class="current-track">
          <litify-record size="medium" recordUrl="https://images-na.ssl-images-amazon.com/images/I/91bVXTuO8dL._AC_SL1500_.jpg"></litify-record>
          <div>
            <litify-caption>Mi Gente <fa-icon icon="far fa-heart"></fa-icon></litify-caption>
            <litify-paragraph>J Balvin, Willy William</litify-paragraph>
          </div>
        </div>
        <div class="controller">
          <div class="controls">
            <fa-icon icon="fas fa-random"></fa-icon>
            <fa-icon icon="fas fa-step-backward"></fa-icon>
            <fa-icon icon="fas fa-play"></fa-icon>
            <fa-icon icon="fas fa-step-forward"></fa-icon>
            <fa-icon icon="fas fa-redo"></fa-icon>
          </div>
          <litfy-slider></litfy-slider>
        </div>
        <div>
          Devices & Volume
        </div>
      </section>
    `
  }
}