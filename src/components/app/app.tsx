import { Component, Prop, h } from '@stencil/core';
import formStore from '../../stores/formStore';
import axios from 'axios';
import { SERVER_URL } from '../../constants';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
})
export class MyComponent {

  componentWillLoad() {
    axios.get(`${SERVER_URL}/init/list`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return <div class='root'>
      <app-chart></app-chart>
    {formStore.shown && <app-form></app-form>}
      <app-list></app-list>
    </div>;
  }
}
