import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  id: null,
  description: '',
  amount: '',
  shown: false,
});

onChange('shown', () => {
  state.id = null;
  state.description = '';
  state.amount = '';
});

export default state;
