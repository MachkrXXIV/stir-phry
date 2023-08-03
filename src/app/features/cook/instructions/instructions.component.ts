import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  @Input() detailedRecipe: Meal;
  @Output() relocation: EventEmitter<string>;
  opacity: number = 1;
  scrollProgress = window.scrollY;
  scrollMax!: number;

  constructor() {
    this.detailedRecipe = { id: '', name: '' };
    this.relocation = new EventEmitter<string>();
  }

  routeToMiseEnPlace() {
    this.relocation.emit('mise-en-place');
  }

  @HostListener('window:scroll')
  onScroll() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / this.scrollMax) * 100;
    const opacity = 1 - this.scrollProgress / 100;

    this.opacity = opacity < 0 ? 0 : opacity;
  }

  ngOnInit(): void {
    this.scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  }
}
