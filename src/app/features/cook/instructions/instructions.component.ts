import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() detailedRecipe: Meal;
  @Output() relocation: EventEmitter<string>;
  intersectionObserver!: IntersectionObserver;
  opacity: number = 1;
  scrollProgress = window.scrollY;
  scrollMax!: number;

  constructor(private elementRef: ElementRef) {
    this.detailedRecipe = { id: '', name: '' };
    this.relocation = new EventEmitter<string>();
  }

  routeToMiseEnPlace() {
    this.relocation.emit('mise-en-place');
  }

  @HostListener('window:scroll')
  onScroll() {
    // current scrollbar position
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    this.scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / this.scrollMax) * 100;
  }

  ngOnInit(): void {
    this.scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          entry.target.classList.toggle('show', entry.isIntersecting);
        });
      },
      { rootMargin: '-50%' }
    );

    const intersectionItems =
      this.elementRef.nativeElement.querySelectorAll('.step');
    intersectionItems.forEach((item: Element) =>
      this.intersectionObserver.observe(item)
    );
  }

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }
}
