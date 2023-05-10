import { Component, Prop, h, Element, Watch } from '@stencil/core';
import {init, ECharts} from 'echarts';

@Component({
  tag: 'app-chart',
  styleUrl: 'chart.scss',
  shadow: true
})
export class Chart {
    @Prop() data: expenseType[];
    @Element() element: HTMLElement;

    @Watch('data')
    dataChanged(newValue: expenseType[]) {
        this.chart.setOption({
            series: [
              {
                data: newValue.map((item) => {
                  return {
                    value: item.amount,
                    name: item.description
                  };
                }),
              }
            ]
          });
    }
    
    private chart: ECharts;

    componentDidLoad(){
        var chartDom = this.element.shadowRoot.getElementById('chart');
        this.chart = init(chartDom);
        this.chart.setOption({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: this.data.map((item) => {
        return {
          value: item.amount,
          name: item.description
        };
      })
    }
  ]
});
      }

  render() {
    return <div class='chart' id='chart'></div>;
  }
}