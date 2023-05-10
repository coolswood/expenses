import { Component, Prop, h } from '@stencil/core';
import formStore from '../../stores/formStore';

@Component({
  tag: 'app-root',
})
export class MyComponent {

  render() {
    return <div>
    {formStore.shown && <app-form></app-form>}
      <app-list></app-list>
    </div>;
  }
}
