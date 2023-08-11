import { Component, OnInit } from '@angular/core';
declare function TestNav():any;


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(){}

  ngOnInit(){
    TestNav();

  }


  menu_variable:boolean=true;   

  menu_open(){
    this.menu_variable =! this.menu_variable;
  }
}
