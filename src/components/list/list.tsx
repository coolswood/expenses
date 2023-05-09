import { Component, Listen, Prop, State, h } from '@stencil/core';

type expenseType = {
  id: number,
  amount: number,
  description: string
}

@Component({
  tag: 'app-list',
})
export class MyComponent {
  @State() expensesList: expenseType[] = [
    {
      id: 1,
      amount: 1000,
      description: 'This is my rent'
    }
  ];

  @Listen('buttonClicked')
  onButtonClicked(event: CustomEvent) {
    this.expensesList = [...this.expensesList, event.detail];
  }

  render() {
    return <div>
      <app-form></app-form>

      {
        this.expensesList.map((expense) => {
          return <div>
          <p>{expense.description}</p>
          <p>{expense.amount}</p>
          <button>edit</button>
        </div>
        })
      }
    </div>;
  }
}
