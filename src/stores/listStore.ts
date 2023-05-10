import { createStore } from '@stencil/store';

type expenseType = {
  id: string;
  amount: string;
  description: string;
};

const { state } = createStore<{ expensesList: expenseType[] }>({
  expensesList: [],
});

export default state;
