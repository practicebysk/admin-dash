import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart, ChartOptions, ChartType } from 'chart.js';
import { CryptoService } from 'src/app/services/crypto.service';
import { TradesService } from 'src/app/services/trades.service';

@Component({
  selector: 'app-ecommerc',
  templateUrl: './ecommerc.component.html',
  styleUrls: ['./ecommerc.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EcommercComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [
    'January',
    'Februry',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: any[] = [
    {
      data: [45, 37, 60, 70, 46, 33, 40, 72, 30],
      label: 'Profit monthly',
    },
  ];

  coins: any[];
  p: any;
  isLoading: boolean = false;
  selected: any;
  appleTrades: any = [];
  avgo: any = [];
  ax: any = [];
  stock: any = [];
  chart: any;
  constructor(
    private coinService: CryptoService,
    private tradeService: TradesService
  ) {}

  ngOnInit() {
    this.chart = new Chart('the-bar', {
      type: 'doughnut',
      data: {
        labels: ['Bitcoin', 'Etherium', 'PancakeSwap', 'Doge', 'BNB', 'SHIB'],
        datasets: [
          {
            data: [30, 25, 24, 16, 10, 5],
            backgroundColor: [
              '#3CFF7A',
              '#3CFFCD',
              '#3CBBFF',
              '#3F3CFF',
              '#CD3CFF',
              '#FF3CD0',
            ],
          },
        ],
      },
    });

    this.coinService.getCoins().subscribe((res: any) => {
      this.isLoading = true;
      this.coins = res;
      this.isLoading = false;
    });

    this.tradeService.getTrades().subscribe((res: any) => {
      this.isLoading = true;
      this.appleTrades = res;
      this.isLoading = false;
    });

    this.tradeService.getAvgoTrades().subscribe((res: any) => {
      this.isLoading = true;
      this.avgo = res;
      this.isLoading = false;
    });

    this.tradeService.stockG().subscribe((res: any) => {
      this.stock = res;
    });
  }
}
