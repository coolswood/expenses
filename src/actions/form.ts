import formStore from '../stores/formStore';
import listStore from '../stores/expensesStore';
import { SERVER_URL } from '../constants';
import axios from 'axios';
import { getCurrentTimeStamp } from '../utils';

export const toggleForm = () => {
    formStore.shown = !formStore.shown;
};

export const onChangeField = event => {
    switch (event.target.name) {
        case 'description':
            formStore.description = event.target.value;
            break;
        case 'amount':
            formStore.amount = event.target.value;
            break;
        default:
            break;
    }
};

export const onChangeDate = event => {
    formStore.date = event.target.value;
};

export const submit = event => {
    event.preventDefault();

    if (formStore.id === null) {
        axios
            .post(`${SERVER_URL}/expenses`, {
                description: formStore.description,
                amount: formStore.amount,
                date: formStore.date || getCurrentTimeStamp(),
            })
            .then(response => {
                listStore.expensesList = response.data.expenses;
            })
            .catch(console.error);
    } else {
        axios
            .patch(`${SERVER_URL}/expenses`, {
                id: formStore.id,
                description: formStore.description,
                amount: formStore.amount,
                date: formStore.date,
            })
            .then(response => {
                listStore.expensesList = response.data.expenses;
            })
            .catch(console.error);
    }

    formStore.shown = false;
};
