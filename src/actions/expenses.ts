import listStore from '../stores/listStore';
import chartStore from '../stores/chartStore';
import formStore from '../stores/formStore';
import { SERVER_URL } from '../constants';
import axios from 'axios';
import { toggleForm } from './form';

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
  formStore.amount = amount;
  formStore.description = description;
  formStore.id = id;

  toggleForm();
};

export const deleteItem = id => {
  axios
    .delete(`${SERVER_URL}/expenses`, {
      data: {
        id,
      },
    })
    .then(function (response) {
      listStore.expensesList = response.data.expenses;
      chartStore.chartWeekScores = response.data.chartWeekScores;
    })
    .catch(function (error) {
      console.log(error);
    });
};
