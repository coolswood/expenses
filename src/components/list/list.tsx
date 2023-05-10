import { Component, Listen, h } from '@stencil/core';
import listStore from '../../stores/listStore';
import { deleteItem, editItem, getListData, toggleForm } from './actions';

@Component({
  tag: 'app-list',
})
export class MyComponent {

  componentWillLoad() {
    getListData();
  }

  @Listen('itemEdit')
  onItemEdited(event: CustomEvent) {
    editItem(event.detail.id, event.detail.description, event.detail.amount);
  }

  @Listen('itemDelete')
  onItemDeleted(event: CustomEvent) {
    deleteItem(event.detail.id)
  }

  render() {
    return <div>
      {
        listStore.expensesList.map((expense) => {
          return <app-item id={expense.id} description={expense.description} amount={expense.amount}></app-item>
        })
      }
      <div>
        <button onClick={toggleForm}>Add new</button>
      </div>
    </div>;
  }
}
