import { createStore } from '@stencil/store';
import chartStore from './chartStore';

type expenseType = {
  id: string;
  amount: string;
  description: string;
};

const { state, onChange } = createStore<{ expensesList: expenseType[] }>({
  expensesList: [],
});

onChange('expensesList', value => {
  chartStore.state.chartWeekScores[chartStore.state.chartWeekScores.length - 1] = value.reduce((acc, item) => {
    return acc + parseInt(item.amount);
  }, 0);

  chartStore.state.chartWeekScores = [...chartStore.state.chartWeekScores];
});

export default state;
