import { css, customElement, html, LitElement } from "lit-element"

@customElement("litify-hero")
export class Hero extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: 4.8rem;
        line-height: 5.8rem;
        margin: 0;
      }
    `
  }

  render() {
    return html`
      <h1><slot></slot></h1>
    `
  }
}

@customElement("litify-title")
export class Title extends LitElement {
  static get styles() {
    return css`
      h2 {
        font-size: 1.8rem;
        line-height: 2.7rem;
        margin: 0;
      }
    `
  }

  render() {
    return html`
      <h2><slot></slot></h2>
    `
  }
}

@customElement("litify-sub-title")
export class SubTitle extends LitElement {
  static get styles() {
    return css`
      h2 {
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin: 0;
      }
    `
  }
  render() {
    return html`
      <h2><slot></slot></h2>
    `
  }
}

@customElement("litify-caption")
export class Caption extends LitElement {
  static get styles() {
    return css`
      h3 {
        font-size: 1.4rem;
        line-height: 2.1rem;
        margin: 0;
      }
    `
  }
  
  render() {
    return html`
      <h3><slot></slot></h3>
    `
  }
}

@customElement("litify-paragraph")
export class Paragraph extends LitElement {
  static get styles() {
    return css`
      p {
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin: 0;
      }
    `
  }

  render() {
    return html`
      <p><slot></slot></p>
    `
  }
}