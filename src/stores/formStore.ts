import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  description: '',
  amount: '',
  shown: false,
  isEditing: false,
});

onChange('shown', value => {});

export default state;
