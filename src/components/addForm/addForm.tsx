import { Component, State, h, Event, EventEmitter } from '@stencil/core';
import formStore from '../../stores/formStore';

@Component({
  tag: 'app-form',
  styleUrl: 'addForm.scss',
})
export class MyComponent {

    onChangeField = (event) => {
        switch (event.target.name) {
            case 'description':
                formStore.description = event.target.value;
                break;
            case 'amount':
                formStore.amount = event.target.value;
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
            description: formStore.description,
            amount: formStore.amount
        });

        formStore.description = undefined;
        formStore.amount = undefined;
    }
  
  render() {
    return <div>
        <div onClick={() => {
            formStore.shown = false;
        }} class='overlay'></div>
      <div class='form'>
        <input name='description' type="text" value={formStore.description} onChange={this.onChangeField} />
        <input name='amount' type="text" value={formStore.amount} onChange={this.onChangeField} />
        <button onClick={() => this.buttonClickHandler()} disabled={formStore.description === '' || formStore.amount === ''}>Add</button>
      </div>
    </div>;
  }
}
