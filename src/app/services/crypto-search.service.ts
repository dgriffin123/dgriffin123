import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CryptoSearchService {

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams| {[param: string]: string | number | boolean |
      ReadonlyArray<string | number | boolean>},
      reportProgress?: boolean,
      repsonseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean
  }
  coinGeckoBaseUrl = "https://api.coingecko.com/apicoingecko"



  constructor(private http: HttpClient) { }

  pingGecko(): Observable<any> {
    return this.http.get('https://api.coingecko.com/api/v3/ping');
  }

  getListOfCoins(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  }
}
