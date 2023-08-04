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
  isLargeScreen = false;
  showSearchBar = false;

  constructor(private offcanvasService: NgbOffcanvas, private router: Router) {}

  isMenuCollapsed = true;
  navLinks: NavLink[] = [
    { name: 'Home', route: '/home', icon: faHome },
    { name: 'Discover', route: '/discover', icon: faCompass },
    { name: 'Pantry', route: '/pantry', icon: faStore },
    { name: 'Profile', route: '/profile', icon: faPortrait },
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
