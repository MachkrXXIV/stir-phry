import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
