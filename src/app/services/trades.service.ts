import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TradesService {
  IBM_url =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=CAV0P2PLXDZZS53W';

  appleUrl =
    'https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_4142bc0eb0fd4ea3a4fb5cc14fd4ff6a';

  AAurl =
    'https://cloud.iexapis.com/stable/stock/AVGO/quote?token=pk_4142bc0eb0fd4ea3a4fb5cc14fd4ff6a';

  stockGeuge =
    'http://api.marketstack.com/v1/eod?access_key=935ee3ff642a6cc5c86a26062bc6b894&symbols=AAPL';
  constructor(private http: HttpClient) {}

  getIBM(): Observable<any> {
    return this.http.get<any>(this.IBM_url).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getTrades(): Observable<any> {
    return this.http.get<any>(this.appleUrl).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getAvgoTrades(): Observable<any> {
    return this.http.get<any>(this.AAurl).pipe(
      map((res) => {
        return res;
      })
    );
  }

  stockG(): Observable<any> {
    const params = {
      access_key: '935ee3ff642a6cc5c86a26062bc6b894',
    };
    return this.http.get<any>(this.stockGeuge).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
