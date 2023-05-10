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
      <form onSubmit={submit} class='form'>
      <label>Description
      <input name='description' type="text" value={formStore.description} onChange={onChangeField} required />
      </label>
        <label>Amount
        <input name='amount' type="number" value={formStore.amount} onChange={onChangeField} required />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>);
  }
}
