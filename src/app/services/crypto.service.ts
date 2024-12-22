import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  //https://pro-api.coinmarketcap.com/v1/cryptocurrency/map
  //9e06166f-f1d8-4ad8-83a9-e59b3e06f97e
  url: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  constructor(private http: HttpClient) {}
  getCoins(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
