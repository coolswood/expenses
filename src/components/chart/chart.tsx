import { Component, Prop, h, Element, Watch } from '@stencil/core';
import {init, ECharts} from 'echarts';

@Component({
  tag: 'app-chart',
  styleUrl: 'chart.scss',
  shadow: true
})
export class MyComponent {
    @Prop() data: number[];
    @Element() element: HTMLElement;

    @Watch('data')
    dataChanged(newValue: number[]) {
        this.chart.setOption({
            series: [
              {
                data: newValue,
                type: 'bar'
              }
            ]
          });
    }
    
    private chart: ECharts;

    componentDidLoad(){
        var chartDom = this.element.shadowRoot.getElementById('chart');
        this.chart = init(chartDom);
        this.chart.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: this.data,
              type: 'bar'
            }
          ]
        });
      }

  render() {
    return <div class='chart' id='chart'></div>;
  }
}