import { Component, Listen, Prop, State, h } from '@stencil/core';

type expenseType = {
  id: string,
  amount: string,
  description: string
}

@Component({
  tag: 'app-list',
})
export class MyComponent {
  @State() expensesList: expenseType[] = [
    {
      id: '1',
      amount: '1000',
      description: 'This is my rent'
    }
  ];

  @Listen('buttonClicked')
  onButtonClicked(event: CustomEvent) {
    console.log(event.detail);
    this.expensesList = [...this.expensesList, event.detail];
  }

  @Listen('itemEdit')
  onItemEdited(event: CustomEvent) {
    console.log(event.detail);
    this.expensesList = this.expensesList.map((expense) => {
      if (expense.id === event.detail.id) {
        return event.detail;
      }
      return expense;
    });
  }

  render() {
    return <div>
      <app-form></app-form>

      {
        this.expensesList.map((expense) => {
          return <app-item id={expense.id} description={expense.description} amount={expense.amount}></app-item>
        })
      }
    </div>;
  }
}
