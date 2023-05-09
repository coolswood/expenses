import { Component, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-form',
})
export class MyComponent {

    @State() description: string;
    @State() amount: string;

    onChangeField = (event) => {
        switch (event.target.name) {
            case 'description':
                this.description = event.target.value;
                break;
            case 'amount':
                this.amount = event.target.value;
                break;
            default:
                break;
        }
    }

    @Event({
        eventName: 'buttonClicked',
    }) buttonClicked: EventEmitter;

    buttonClickHandler() {
        this.buttonClicked.emit({
            description: this.description,
            amount: this.amount
        });
        
        this.description = undefined;
        this.amount = undefined;
    }
  
  render() {
    return <div>
      <div>
        <input name='description' type="text" value={this.description} onChange={this.onChangeField} />
        <input name='amount' type="text" value={this.amount} onChange={this.onChangeField} />
        <button onClick={() => this.buttonClickHandler()} disabled={!this.description && !this.amount}>Add</button>
      </div>
    </div>;
  }
}
