import { css, customElement, html, LitElement } from "lit-element";

@customElement('litify-social-feed')
export class SocialFeed extends LitElement {
  static get styles() {
    return css`
      section {
        background-color: var(--grey-dark);
        height: 100%;
        padding: 0 1.6rem;
        display: flex;
        flex-direction: column;
      }

      section h1 {
        font-size: 1.8rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid rgba(255, 255, 255, .05);
        margin-bottom: 1.6rem;
      }
    `
  }
  render() {
    return html`
      <section>
        <h1>Friend Activity</h1>
      </section>
    `
  }
}