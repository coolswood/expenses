import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  id: null,
  description: '',
  amount: '',
  shown: false,
});

onChange('shown', value => {});

export default state;
