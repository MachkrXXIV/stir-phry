import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavLink } from '../../interfaces/navLink.interface';
import {
  faHome,
  faCompass,
  faPlus,
  faPortrait,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private offcanvasService: NgbOffcanvas) {}
  faHome = faHome;
  faCompass = faCompass;
  faPlus = faPlus;
  faPortrait = faPortrait;
  faStore = faStore;

  isMenuCollapsed = true;
  navLinks: NavLink[] = [
    { name: 'Discover', route: '/discover', icon: faCompass },
    { name: 'Pantry', route: '/pantry', icon: faStore },
    { name: 'Create', route: '/create', icon: faPlus },
    { name: 'Profile', route: '/profile', icon: faPortrait },
    { name: 'Extra', route: '/home', icon: faHome },
  ];

  openMenuRight(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'start' });
  }

  ngOnInit(): void {}
}
