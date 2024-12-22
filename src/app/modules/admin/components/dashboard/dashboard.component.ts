import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  ChartOptions,
  ChartType,
  registerables,
} from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
    this.createChartTwo();

    this.chart = new Chart('bar', {
      type: 'doughnut',
      data: {
        labels: ['Affiliate', 'Social Media'],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.1)'],
          },
        ],
      },
    });
  }

  createChart() {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Overall sales',
          backgroundColor: '#00DA45',
          borderColor: '#00DA45',
          data: [10, 5, 2, 20, 30, 45],
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false,
        },
      },
    };
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options,
    };
    const chartItem: ChartItem = document.getElementById(
      'myChart'
    ) as ChartItem;
    new Chart(chartItem, config);
  }

  createChartTwo() {
    Chart.register(...registerables);
    const data = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
      ],
      datasets: [
        {
          label: 'Last year',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [5, 5, 24, 20, 30, 32, 45, 40, 24, 50],
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false,
        },
      },
    };
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options,
    };
    const chartItem: ChartItem = document.getElementById(
      'chartTwo'
    ) as ChartItem;
    new Chart(chartItem, config);
  }
}
