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

      div.controls {
        display: flex;
        justify-content: center;
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
        <div class="controls">
          Controls
        </div>
        <div>
          Devices & Volume
        </div>
      </section>
    `
  }
}