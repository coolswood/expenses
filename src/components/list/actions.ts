import listStore from '../../stores/listStore';
import formStore from '../../stores/formStore';
import { SERVER_URL } from '../../constants';
import axios from 'axios';

export const getListData = async () => {
  axios
    .get(`${SERVER_URL}/init/expenses`)
    .then(function (response) {
      listStore.expensesList = response.data.expenses;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const editItem = (id, description, amount) => {
  formStore.id = id;
  formStore.description = description;
  formStore.amount = amount;

  toggleForm();
};

export const deleteItem = id => {
  listStore.expensesList = listStore.expensesList.filter(item => item.id !== id);
};

export const toggleForm = () => {
  formStore.shown = !formStore.shown;
};
