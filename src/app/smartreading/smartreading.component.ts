import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartreading',
  templateUrl: './smartreading.component.html',
  styleUrls: ['./smartreading.component.css']
})
export class SmartreadingComponent implements OnInit {
  smartimages=[
    {img:"/assets/img/airport.png",txt:"Airports"},
    {img:"/assets/img/banks.png",txt:"Banks"},
    {img:"/assets/img/city.png",txt:"City"},
    {img:"/assets/img/club.png",txt:"Club"},
    {img:"/assets/img/condominium.png",txt:"Condominium"},
    {img:"/assets/img/corporates.png",txt:"Corporates"},
    {img:"/assets/img/country.png",txt:"Country"},
    {img:"/assets/img/educational-institutions.png",txt:"Educational Institutions"},
    {img:"/assets/img/gated-housing.png",txt:"Gated Housing"},
    {img:"/assets/img/gym.png",txt:"Gym"},
    {img:"/assets/img/hospitals.png",txt:"Hospitals"},
    {img:"/assets/img/Hotels.png",txt:"Hotels"},
    {img:"/assets/img/libraries.png",txt:"Libraries"},
    {img:"/assets/img/malls.png",txt:"Malls"},
    {img:"/assets/img/restaurant.png",txt:"Restaurant"},
    {img:"/assets/img/retail-stores.png",txt:"Retail Stores"},
    {img:"/assets/img/salons.png",txt:"Salons"},
    {img:"/assets/img/villa.png",txt:"Villa"},    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
