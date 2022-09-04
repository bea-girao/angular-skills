import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  get loading () {
    return this.cardService.loading;
  }

  onLike(card: any){
    this.cardService.like(card.id).then(cardAtualizado => {
      this.card = cardAtualizado;
    });
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}
