import { Component, h } from '@stencil/core';
import formStore from '../../stores/formStore';
import { getGraphData } from './actions';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
})
export class MyComponent {

  componentWillLoad() {
    getGraphData();
  }

  render() {
    return <div class='root'>
      <app-chart></app-chart>
    {formStore.shown && <app-form></app-form>}
      <app-list></app-list>
    </div>;
  }
}
