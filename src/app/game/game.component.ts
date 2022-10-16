import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public sentences: Array<string> = [
    'frase uno',
    'frase dos'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
