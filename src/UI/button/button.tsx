import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'button.scss',
})
export class Button {
    @Prop() text: string;
    @Prop() disabled: boolean = false;
    @Prop() buttonType: string;

    @Event() buttonClicked: EventEmitter;

  handleClick() {
    if (!this.disabled) {
      this.buttonClicked.emit({ buttonType: this.buttonType });
    }
  }

  render() {
    return <button disabled={this.disabled} onClick={() => this.handleClick()} class="btn">{this.text}</button>;
  }
}