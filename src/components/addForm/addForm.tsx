import { Component, State, h, Event, EventEmitter } from '@stencil/core';
import formStore from '../../stores/formStore';
import { onChangeField, submit } from './actions';

@Component({
  tag: 'app-form',
  styleUrl: 'addForm.scss',
})
export class MyComponent {  
  render() {
    return (<div>
        <div onClick={() => {
            formStore.shown = false;
        }} class='overlay'></div>
      <div class='form'>
        <input name='description' type="text" value={formStore.description} onChange={onChangeField} />
        <input name='amount' type="text" value={formStore.amount} onChange={onChangeField} />
        <button onClick={submit} disabled={formStore.description === '' || formStore.amount === ''}>Add</button>
      </div>
    </div>);
  }
}
