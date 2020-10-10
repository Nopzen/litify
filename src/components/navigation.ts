import { css, customElement, html, LitElement } from "lit-element";

@customElement('litify-navigation')
export class Navigation extends LitElement {
  static get styles() {
    return css`
      nav {
        background-color: var(--grey-dark);
        height: 100%;
        padding: 1.6rem;
      }

      nav ul {
        margin: 0;
        padding: 0;
        margin-bottom: 2.4rem;
      }

      nav ul li {
        list-style-type: none;
        font-size: 1.3rem;
        padding: .4rem 0;
        opacity: .8;
      }

      nav ul li:hover {
        opacity: 1;
        cursor: pointer;
      }

      nav ul li fa-icon {
        margin-right: .8rem;
      }
      
      nav ul li.title {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: .4rem;
        text-transform: uppercase;
      }
    `
  }
  render() {
    return html`
      <nav>
        <ul>
          <li class="title"><fa-icon icon="fas fa-home"></fa-icon> Home</li>
          <li class="title"><fa-icon icon="fas fa-record-vinyl"></fa-icon>Browse</li>
          <li class="title"><fa-icon icon="fas fa-broadcast-tower"></fa-icon>Radio</li>
        </ul>
        <ul>
          <li class="title">Your Library</li>
          <li>Made for you</li>
          <li>Recently played</li>
          <li>Liked songs</li>
          <li>Albums</li>
          <li>Artists</li>
          <li>Podcasts</li>
        </ul>
        <ul>
          <li class="title">Playlists</li>
          <li>Legendary Quest</li>
          <li>Croners</li>
          <li>Blessings</li>
        </ul>
      </nav>
    `
  }
}