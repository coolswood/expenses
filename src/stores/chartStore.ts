import { createStore } from '@stencil/store';

const { state } = createStore<{ chartWeekScores: number[] }>({
  chartWeekScores: [120, 150, 80, 70, 110, 130, 0],
});

export default state;
