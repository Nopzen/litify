import { css, customElement, html, LitElement } from "lit-element";

@customElement("litify-header")
export class Header extends LitElement {
  static get styles() {
    return css`
      section {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        padding: .8rem 3.2rem .8rem 1.6rem;
      }

      section nav {
        display: flex;
        align-items: center;
        padding-right: 1.6rem;
      }

      section nav fa-icon {
        margin: 0 1.6rem;
      }

      section input {
        padding: 6px 8px;
        border-radius: 20px;
        border: none;
      }

      section input:focus {
        box-shadow: none;
        outline: none;
      }

      div.user {
        display: flex;
        flex: 1 1 auto;
        justify-content: flex-end;
        align-items: center;
        padding: .8rem 0;
      }

      div.user litify-paragraph {
        margin-left: .8rem;
      }

      div.user litify-paragraph fa-icon {
        margin-left: 1.6rem;
      }
    `
  }
  render() {
    return html`
      <section>
        <nav>
          <fa-icon icon="fas fa-chevron-left"></fa-icon>
          <fa-icon icon="fas fa-chevron-right"></fa-icon>
        </nav>
        <input placeholder="Search" />
        <div class="user">
          <litify-avatar avatarUrl="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY256_CR15,0,172,256_AL_.jpg"></litify-avatar>
          <litify-paragraph>Ryan Gosling <fa-icon icon="fas fa-chevron-down"></fa-icon></litify-paragraph>
        </div>
      </section>
    `
  }
}