import { css, customElement, html, LitElement, property } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

enum RecordSize {
  DISPLAY = "display",
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small"
}

type RecordClassMap = {
  [key in RecordSize]: boolean;
}

@customElement("litify-record")
export class Record extends LitElement {
  @property({ type: String })
  recordUrl: string = ""

  @property({ type: String })
  size: RecordSize = RecordSize.MEDIUM

  static get styles() {
    return css`
      img {
        object-fit: cover;
      }

      img.display {
        width: 15rem;
        height: 15rem;
      }
      img.large {
        width: 10rem;
        height: 10rem;
      }
      img.medium {
        width: 5rem;
        height: 5rem;
      }
      img.small {
        width: 3.5rem;
        height: 3.5rem;
      }
    `
  }

  private getClassMap(): RecordClassMap {
    return {
      display: this. size === RecordSize.DISPLAY,
      large: this. size === RecordSize.LARGE,
      medium: this.size === RecordSize.MEDIUM,
      small: this.size === RecordSize.SMALL
    } 
  }

  render() {
    return html`
      <img class=${classMap(this.getClassMap())} src=${this.recordUrl} />
    `
  }
}