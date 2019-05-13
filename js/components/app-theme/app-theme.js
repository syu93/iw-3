import { LitElement, html, css } from 'lit-element';

class AppTheme extends LitElement {
  constructor() {
    super();
    this.theme = "Dark";
  }

  static get properties() {
    return {
      theme: { type: String },
    }
  }

  static get styles(){
    return css`
      :host {
        cursor: pointer;
        display: inline-block;
      }
      input {
        display: none;
      }
    `;
  }

  changeTheme() {
    this.theme = this.theme == "Light" ? "Dark" : "Light";
    if (this.theme != "Dark") {
      document.body.style.setProperty("--app-card-color", "#2b2b2b");
      document.body.style.setProperty("--app-text-color", "#ffffff");
    } else {
      document.body.style.setProperty("--app-card-color", "#ffffff");
      document.body.style.setProperty("--app-text-color", "#313131");
    }
  }

  render() {
    return html`
      <label><input type="checkbox" name="theme" id="theme" @change="${this.changeTheme}">${this.theme} mode</label>
    `;
  }
}

customElements.define('app-theme', AppTheme);