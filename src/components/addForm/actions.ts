import formStore from '../../stores/formStore';
import listStore from '../../stores/listStore';
import chartStore from '../../stores/chartStore';
import { SERVER_URL } from '../../constants';
import axios from 'axios';

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

export const submit = e => {
  e.preventDefault();

  if (formStore.id === null) {
    axios
      .post(`${SERVER_URL}/expenses`, {
        description: formStore.description,
        amount: formStore.amount,
      })
      .then(function (response) {
        listStore.expensesList = response.data.expenses;
        chartStore.state.chartWeekScores = response.data.chartWeekScores;
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    axios
      .patch(`${SERVER_URL}/expenses`, {
        description: formStore.description,
        amount: formStore.amount,
      })
      .then(function (response) {
        listStore.expensesList = response.data.expenses;
        chartStore.state.chartWeekScores = response.data.chartWeekScores;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  formStore.shown = false;
};
