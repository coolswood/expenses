import { Component, Prop, h } from '@stencil/core';
import formStore from '../../stores/formStore';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
})
export class MyComponent {

  render() {
    return <div class='root'>
      <app-chart></app-chart>
    {formStore.shown && <app-form></app-form>}
      <app-list></app-list>
    </div>;
  }
}
