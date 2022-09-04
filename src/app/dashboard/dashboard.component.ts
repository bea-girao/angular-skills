import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from './card/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cards: Array<any>;

  constructor(private httpClient: HttpClient, private cardService: CardService) { }

  ngOnInit() {
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret;
    });
  }

  get loading () {
    return this.cardService.loading;
  }

}
