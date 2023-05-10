import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  id: null,
  description: '',
  amount: '',
  shown: false,
});

onChange('shown', (value: boolean) => {
  if (value === false) {
    state.id = null;
    state.description = '';
    state.amount = '';
  }
});

export default state;
