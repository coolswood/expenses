import { Component, Listen, h } from '@stencil/core';
import listStore from '../../stores/expensesStore';
import { deleteItem, editItem } from '../../actions/expenses';
import { toggleForm } from '../../actions/form';

@Component({
  tag: 'app-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List {
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
          return <app-item id={expense.id} date={expense.date} description={expense.description} amount={expense.amount}></app-item>
        })
      }
      <div>
        <button class='add-button' onClick={toggleForm}>Add new</button>
      </div>
    </div>;
  }
}
