import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public games: Game[] = [
    {title:  "a"}
  ];
  constructor() {

    
  }

  ngOnInit(): void {
    console.log('aaaaa');
  }

}
