import { Component, h } from '@stencil/core';
import formStore from '../../stores/formStore';
import expensesStore from '../../stores/expensesStore';
import { getListData } from '../../actions/expenses';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
  shadow: true
})
export class App {

  componentWillLoad() {
    getListData();
  }

  render() {
    return <div class='root'>
      <app-chart data={expensesStore.expensesList}></app-chart>
    {formStore.shown && <app-form></app-form>}
      <app-list></app-list>
    </div>;
  }
}
