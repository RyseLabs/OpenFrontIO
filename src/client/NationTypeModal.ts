import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { NationType } from "../core/game/Game";
import { translateText } from "./Utils";

@customElement("nation-type-modal")
export class NationTypeModal extends LitElement {
  @state() private isOpen = false;
  @property({ type: Function }) onSelect?: (type: NationType) => void;

  static styles = css`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    }

    .modal-content {
      background: #232323;
      border-radius: 8px;
      padding: 2rem;
      max-width: 600px;
      width: 90%;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .modal-header {
      font-size: 24px;
      color: #fff;
      margin-bottom: 1rem;
      text-align: center;
      font-weight: bold;
    }

    .modal-description {
      color: #ccc;
      margin-bottom: 1.5rem;
      text-align: center;
      font-size: 14px;
    }

    .nation-types {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .nation-type-option {
      background: #1a1a1a;
      border: 2px solid #444;
      border-radius: 6px;
      padding: 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .nation-type-option:hover {
      border-color: #6c63ff;
      background: #252525;
      transform: translateX(4px);
    }

    .nation-type-name {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    .nation-type-desc {
      color: #aaa;
      font-size: 14px;
      line-height: 1.4;
    }

    .modal-buttons {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
    }

    .cancel-button {
      background: #444;
      color: #fff;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.2s ease;
    }

    .cancel-button:hover {
      background: #555;
    }
  `;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  private handleSelect(type: NationType) {
    if (this.onSelect) {
      this.onSelect(type);
    }
    this.close();
  }

  render() {
    if (!this.isOpen) {
      return html``;
    }

    return html`
      <div class="modal-overlay" @click=${() => this.close()}>
        <div class="modal-content" @click=${(e: Event) => e.stopPropagation()}>
          <div class="modal-header">
            ${translateText("nation_type.title")}
          </div>
          <div class="modal-description">
            ${translateText("nation_type.description")}
          </div>

          <div class="nation-types">
            <div
              class="nation-type-option"
              @click=${() => this.handleSelect(NationType.Merchant)}
            >
              <div class="nation-type-name">
                ${translateText("nation_type.merchant")}
              </div>
              <div class="nation-type-desc">
                ${translateText("nation_type.merchant_desc")}
              </div>
            </div>

            <div
              class="nation-type-option"
              @click=${() => this.handleSelect(NationType.Pirate)}
            >
              <div class="nation-type-name">
                ${translateText("nation_type.pirate")}
              </div>
              <div class="nation-type-desc">
                ${translateText("nation_type.pirate_desc")}
              </div>
            </div>

            <div
              class="nation-type-option"
              @click=${() => this.handleSelect(NationType.Industrial)}
            >
              <div class="nation-type-name">
                ${translateText("nation_type.industrial")}
              </div>
              <div class="nation-type-desc">
                ${translateText("nation_type.industrial_desc")}
              </div>
            </div>

            <div
              class="nation-type-option"
              @click=${() => this.handleSelect(NationType.Warmonger)}
            >
              <div class="nation-type-name">
                ${translateText("nation_type.warmonger")}
              </div>
              <div class="nation-type-desc">
                ${translateText("nation_type.warmonger_desc")}
              </div>
            </div>

            <div
              class="nation-type-option"
              @click=${() => this.handleSelect(NationType.Expansionist)}
            >
              <div class="nation-type-name">
                ${translateText("nation_type.expansionist")}
              </div>
              <div class="nation-type-desc">
                ${translateText("nation_type.expansionist_desc")}
              </div>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="cancel-button" @click=${() => this.close()}>
              ${translateText("nation_type.cancel")}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
