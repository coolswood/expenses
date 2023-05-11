import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
    id: null,
    description: '',
    amount: '',
    date: null,
    shown: false,
});

onChange('shown', (value: boolean) => {
    if (value === false) {
        state.id = null;
        state.description = '';
        state.amount = '';
        state.date = null;
    }
});

export default state;
