import { Component, OnInit } from '@angular/core';
import { CryptoSearchService } from 'src/app/services/crypto-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public cryptoSearch: CryptoSearchService) {}
  coinList: Crypto[] = [];

  selectedCoins: Crypto[] = [];
  timeLeft: number = 60;
  interval;
  responseMessage = '';
  ngOnInit(): void {

  }

  ping(): void {
    this.cryptoSearch.pingGecko().subscribe(response => {
      this.responseMessage = response;
    });
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  getListOfCoins(): void {
    this.cryptoSearch.getListOfCoins().subscribe((response => {
      response.forEach(coin => {
        this.coinList.push(coin);
      })
    }))
  }

  addCoin(coin: Crypto): void {
    this.selectedCoins.push(coin);
  }

}
