import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChildren('ThatReference')
    menu: ElementRef;

  public openedMenu: boolean  = false;

  constructor(element: ElementRef) { 
    this.menu = element.nativeElement;
  }

  ngOnInit(): void {

    

    this.openMenu();

  }

  public openMenu():  void {
   this.openedMenu = !this.openedMenu;
  }


}
