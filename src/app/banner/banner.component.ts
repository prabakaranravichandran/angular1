import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
slides=[
{  img:"../assets/img/banner-1a.jpg"},
{  img:"../assets/img/banner-1b.jpg"}
];
slideConfig={
  "slidesToShow":1,
  "slidesToScroll":1,
  "dots":true,
  "infinite":true,
  'autoplay': true,
  'autoplaySpeed': 2000,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
