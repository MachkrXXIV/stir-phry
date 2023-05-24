import {
  Component,
  OnInit,
  TemplateRef,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavLink } from '../../interfaces/navLink.interface';
import {
  faHome,
  faCompass,
  faPlus,
  faPortrait,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor(private offcanvasService: NgbOffcanvas, private router: Router) {}
  isLargeScreen = false;
  showSearchBar = false;
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
    this.offcanvasService.open(content, {
      position: 'start',
      panelClass: 'sidebar',
    });
  }

  displaySearchBar() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = event.url === '/discover';
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = event.url === '/discover';
      }
    });
    this.isLargeScreen = window.innerWidth >= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 992;
  }
}
