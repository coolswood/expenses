import { Component, h } from '@stencil/core';
import formStore from '../../stores/formStore';
import { onChangeField, submit, toggleForm } from '../../actions/form';

@Component({
  tag: 'app-form',
  styleUrl: 'addForm.scss',
  shadow: true
})
export class addForm {  

  render() {
    return (<div>
      <div onClick={toggleForm} class='overlay'></div>
      <form onSubmit={submit} class='form'>

      <div class='field'>
        <label htmlFor="description">Description</label>
        <input name='description' type="text" value={formStore.description} onChange={onChangeField} required />
      </div>
    
      <div class='field'>
        <label htmlFor="amount">Amount</label>
        <input name='amount' type="number" value={formStore.amount} onChange={onChangeField} required />
      </div>
        
        <div class='button'>
        <ui-button buttonType='add' text='Add'></ui-button>
        </div>
      </form>
    </div>);
  }
}
