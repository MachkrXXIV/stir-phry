import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavLink } from './NavLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private offcanvasService: NgbOffcanvas) {}

  isMenuCollapsed = true;
  navLinks: NavLink[] = [
    { name: 'Discover', route: 'lol', img: 'null' },
    { name: 'Pantry', route: 'lol', img: 'null' },
    { name: 'Create', route: 'lol', img: 'null' },
    { name: 'Profile', route: 'lol', img: 'null' },
    { name: 'Extra', route: 'lol', img: 'null' },
  ];

  openMenuRight(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  ngOnInit(): void {}
}
