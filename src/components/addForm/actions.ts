import formStore from '../../stores/formStore';
import listStore from '../../stores/listStore';

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

export const submit = () => {
  if (formStore.id === null) {
    listStore.expensesList = [
      ...listStore.expensesList,
      {
        id: Math.random().toString(),
        description: formStore.description,
        amount: formStore.amount,
      },
    ];
  } else {
    listStore.expensesList = listStore.expensesList.map(item => {
      if (item.id === formStore.id) {
        item.description = formStore.description;
        item.amount = formStore.amount;
      }
      return item;
    });
  }

  formStore.shown = false;
};
