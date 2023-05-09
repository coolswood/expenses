import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class MyComponent {

  render() {
    return <div>
      <app-list></app-list>
    </div>;
  }
}
