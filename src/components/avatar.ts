import { css, customElement, html, LitElement, property } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

enum AvatarSizes {
  SMALL="small",
  LARGE="large"
}

type AvatarClassMap = {
  small: boolean;
  large: boolean;
}

@customElement('litify-avatar')
export class Avatar extends LitElement {
  @property({ type: String })
  avatarUrl = "";

  @property({ type: String })
  size: AvatarSizes = AvatarSizes.SMALL

  static get styles() {
    return css`
      img {
        border-radius: 100%;
        object-fit: cover;
      }

      img.small {
        width: 3.2rem;
        height: 3.2rem;
      }

      img.large {
        height: 4.8rem;
        width: 4.8rem;
      }
    `
  };

  private getClassMap(): AvatarClassMap {
    return { small: this.size === "small", large:this. size === "large" }
  }

  render() {
    return html`
        <img class=${classMap(this.getClassMap())} src="${this.avatarUrl}" />
    `
  }
}