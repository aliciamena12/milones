import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChildren('ThatReference')
    menu: ElementRef;

  @Output()
  toggleMenu = new EventEmitter<boolean>();

  public openedMenu: boolean  = false;

  constructor(element: ElementRef) { 
    this.menu = element.nativeElement;
  }

  ngOnInit(): void {
    this.toggleMenuIcon();
  }

  public toggleMenuIcon():  void {
   this.openedMenu = !this.openedMenu;
   this.toggleMenu.emit(this.openedMenu);
  }

  public procesatoggle() {

  }


}
