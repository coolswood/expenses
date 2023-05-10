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

onEditHandler() {
    this.itemEdit.emit({
        id: this.id,
        description: this.description,
        amount: this.amount
    });
}

  @Event({
    eventName: 'itemDelete',
  }) itemDelete: EventEmitter;

  onDeleteHandler() {
    this.itemDelete.emit({
        id: this.id,
    });
  }

  render() {
    return (
      <div>
        <p>{this.description}</p>
        <p>{this.amount}</p>
        <button onClick={() => this.onEditHandler()}>edit</button>
        <button onClick={() => this.onDeleteHandler()}>delete</button>
      </div>
    );
  }
}
