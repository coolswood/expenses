import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ui-theme-toggle',
  styleUrl: 'themeToggle.scss',
  shadow: true
})
export class themeToggle {

    onToggleHandler(e: any) {
        const html = document.querySelector('html');

        html.setAttribute('data-theme', e.target.checked ? 'light' : 'dark');
    }

  render() {
    return <div class='theme-switcher'>
        <h3>Dark</h3>
        <div>
            <input checked={true} onChange={this.onToggleHandler} type="checkbox" id='switch' />
            <label htmlFor="switch">Toggle</label>
        </div>
        <h3>Light</h3>
    </div>
  }
}