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
    editItem(event.detail.id, event.detail.description, event.detail.amount, event.detail.date);
  }

  @Listen('itemDelete')
  onItemDeleted(event: CustomEvent) {
    deleteItem(event.detail.id)
  }

  render() {
    return <div>
      {
        listStore.expensesList.map((expense) => {
          return <app-item idEl={expense.id} date={expense.date} description={expense.description} amount={expense.amount} />
        })
      }
      <div>
        <button class='add-button' onClick={toggleForm}>Add new</button>
      </div>
    </div>;
  }
}
