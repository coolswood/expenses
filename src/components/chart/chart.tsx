import { Component, Prop, h, Element } from '@stencil/core';
import {init, ECharts} from 'echarts';
import chartStore from '../../stores/chartStore';

@Component({
  tag: 'app-chart',
  styleUrl: 'chart.scss',
  shadow: true
})
export class MyComponent {
    @Element() element: HTMLElement;
    
    private chart: ECharts;

    private option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: chartStore.state.chartWeekScores,
            type: 'bar'
          }
        ]
      };

    componentDidLoad(){
        var chartDom = this.element.shadowRoot.getElementById('chart');
        this.chart = init(chartDom);
        this.chart.setOption(this.option);

        chartStore.onChange('chartWeekScores', value => {
            this.chart.setOption(this.option);
          });
      }

  render() {
    return <div class='chart' id='chart'></div>;
  }
}