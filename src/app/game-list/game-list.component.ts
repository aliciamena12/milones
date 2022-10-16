import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public games: Array<Game> = [
    {title: 'Milones'},
    {title: 'Verdad o reto'},
    {title:'Yo nunca'},
    {title: 'Triman'},
    {title: 'All in'},

   ];
  constructor() {

    
  }

  ngOnInit(): void {}

}
