import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title: string = 'milones';
  public name: string = 'milones';
  public ngOnInit() {
    console.log(this.title);
  }

}
