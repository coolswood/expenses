import { createStore } from '@stencil/store';

// type expenseType = {
//   id: string,
//   amount: string,
//   description: string
// }

const { state, onChange } = createStore({
  chartWeekScores: [120, 150, 80, 70, 110, 130, 0],
});

export default { state, onChange };
