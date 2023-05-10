import { Component, Prop, h, Element } from '@stencil/core';
import {init, ECharts} from 'echarts';

@Component({
  tag: 'app-chart',
  styleUrl: 'chart.scss',
  shadow: true
})
export class MyComponent {
    @Element() element: HTMLElement;
    
    private chart: ECharts;

    option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000'
                }
              },
              150,
              80,
              70,
              110,
              130
            ],
            type: 'bar'
          }
        ]
      };

    componentDidLoad(){
        var chartDom = this.element.shadowRoot.getElementById('chart');
        this.chart = init(chartDom);
        this.chart.setOption(this.option);
      }

  render() {
    return <div class='chart' id='chart'></div>;
  }
}