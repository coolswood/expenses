import { createStore } from '@stencil/store';

const { state } = createStore<{ expensesList: expenseType[] }>({
    expensesList: [],
});

export default state;
