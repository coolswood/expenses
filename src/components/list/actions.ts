import listStore from '../../stores/listStore';
import formStore from '../../stores/formStore';

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
