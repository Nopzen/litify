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

      div.activity {
        display: flex;
        align-items: center;
        margin-bottom: 1.6rem;
      }

      div.activity-content {
        flex: 1 1 100%;
        padding: 0 1.6rem;
      }
      
      div.activity-content litify-caption {
        color: var(--success);
      }

      div.activity-album {
        display: flex;
        font-size: 1.4rem;
        padding-top: .4rem;
      }
      
      div.activity-album fa-icon {
        margin-right: .8rem;
      }

      .activity-time {
        flex: 0 0 auto;
        align-self: flex-start;
        font-size: 1rem;
        line-height: 1.5rem;
        opacity: .8;
        margin: 0;
      }
    `
  }
  render() {
    return html`
      <section>
        <h1>Friend Activity</h1>
        <div class="activity">
          <litify-avatar size="large" avatarUrl="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg"></litify-avatar>
          <div class="activity-content">
            <litify-caption>Ana De Amas</litify-caption>
            <litify-paragraph>Tehran</litify-paragraph>
            <litify-paragraph>Mark Eliyuha</litify-paragraph>
            <div class="activity-album">
              <fa-icon icon="fas fa-record-vinyl"></fa-icon> 
              <litify-paragraph>Tehran</litify-paragraph>
            </div>
          </div>
          <p class="activity-time">16 h</p>
        </div>
        <div class="activity">
          <litify-avatar size="large" avatarUrl="https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY256_CR19,0,172,256_AL_.jpg"></litify-avatar>
          <div class="activity-content">
            <litify-caption>Scarlett Johansson</litify-caption>
            <litify-paragraph>The Hacker</litify-paragraph>
            <litify-paragraph>Johnny Jewel</litify-paragraph>
            <div class="activity-album">
              <fa-icon icon="fas fa-record-vinyl"></fa-icon> 
              <litify-paragraph>Ghost in a Shell</litify-paragraph>
            </div>
          </div>
          <p class="activity-time">1 d</p>
        </div>
      </section>
    `
  }
}