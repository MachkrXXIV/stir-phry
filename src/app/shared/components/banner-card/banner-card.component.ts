import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Banner } from '../../interfaces/banner.interface';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss'],
})
export class BannerCardComponent implements OnInit {
  @Input() banner: Banner = {
    name: '',
    imgUrl: '',
  };
  @Output() onBannerSelect: EventEmitter<Banner> = new EventEmitter<Banner>();

  constructor() {}

  showBannerQuery(banner: any) {
    this.onBannerSelect.emit(banner);
  }

  ngOnInit(): void {}
}
