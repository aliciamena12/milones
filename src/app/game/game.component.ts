import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

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

  public gameName: string  = '';
  
  constructor(
    @Inject(DOCUMENT) document: any) {
    //myArray = this.string.split('/');
    console.log(document.location.href);
    this.gameName = document.location.href.split("/").pop();
    console.log(this.gameName);

  }

  ngOnInit(): void {
  }

}
