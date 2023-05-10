import { Component, h } from '@stencil/core';
import formStore from '../../stores/formStore';
import chartStore from '../../stores/chartStore';
import { getGraphData } from '../../actions/graph';
import { getListData } from '../../actions/expenses';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
  shadow: true
})
export class App {

  componentWillLoad() {
    getGraphData();
    getListData();
  }

  render() {
    return <div class='root'>
      <app-chart data={chartStore.chartWeekScores}></app-chart>
    {formStore.shown && <app-form></app-form>}
      <app-list></app-list>
    </div>;
  }
}
