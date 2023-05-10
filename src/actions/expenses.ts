import listStore from '../stores/expensesStore';
import formStore from '../stores/formStore';
import { SERVER_URL } from '../constants';
import axios from 'axios';
import { toggleForm } from './form';

export const getListData = async () => {
    axios
        .get(`${SERVER_URL}/init/expenses`)
        .then(function (response) {
            console.log(response.data.expenses);
            listStore.expensesList = response.data.expenses;
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const editItem = (id: string, description: string, amount: string) => {
    formStore.amount = amount;
    formStore.description = description;
    formStore.id = id;

    toggleForm();
};

export const deleteItem = (id: string) => {
    axios
        .delete(`${SERVER_URL}/expenses`, {
            data: {
                id,
            },
        })
        .then(function (response) {
            listStore.expensesList = response.data.expenses;
        })
        .catch(function (error) {
            console.log(error);
        });
};
