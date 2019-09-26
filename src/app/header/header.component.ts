import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = true;
  contentMargin = 240;

  activeLinkIndex = -1;

  constructor() { }

  navBar = [
    {linkName: 'Home', url1:'home',icon:'home'},
    {linkName: 'Experiences',url1:'experiences',icon:'work'},
    {linkName: 'Formations', url1:'formations',icon:'school'},
    {linkName: 'Loisirs', url1:'loisirs',icon:'near_me'},
    {linkName: 'Contacts', url1:'contacts',icon:'contacts'},
  ];
  ngOnInit() {

  /* this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });*/
  }

/*    task: string[] = [
    "clearning out my closet",""

  ]*/
  private onTollbarMenuToggle() {
    console.log("on toolbar toogled", this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
