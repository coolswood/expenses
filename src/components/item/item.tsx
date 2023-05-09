import { Component, Listen, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-item',
})
export class MyComponent {
  @Prop() id: string;
  @Prop() description: string;
  @Prop() amount: string;

  @Event({
    eventName: 'itemEdit',
}) itemEdit: EventEmitter;

buttonClickHandler() {
    this.itemEdit.emit({
        id: this.id,
        description: this.description,
        amount: this.amount
    });
}

  render() {
    return (
      <div>
        <p>{this.description}</p>
        <p>{this.amount}</p>
        <button onClick={() => this.buttonClickHandler()}>edit</button>
      </div>
    );
  }
}
