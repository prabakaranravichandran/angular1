import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlightzone',
  templateUrl: './highlightzone.component.html',
  styleUrls: ['./highlightzone.component.css']
})
export class HighlightzoneComponent implements OnInit {
  highlightzone=[
{img:"../assets/img/srzHilight-MagGold.png",txt:"Anyone present at a Smart Reading Zone will have unlimited access to 5,000+ Magzter GOLD magazines, curated premium stories and newspapers"},
{img:"../assets/img/gogreen.png",txt:"A Go Green initiative which offers a world-class digital reading experience for everyone present at Smart Reading Zones"},
{img:"../assets/img/usercomplet.png",txt:"Increase customer and employee retention – there’s something exciting for everyone"},
{img:"../assets/img/customisebranding.png",txt:"Customized branding for your organization on the Smart Reading Zone page"},
{img:"../assets/img/custom.png",txt:"Customized welcome message for each Smart Reading Zone with your organization name"},
{img:"../assets/img/smiley.png",txt:"We can even turn an entire city or country into a Smart Reading Zone. No, we’re not kidding!"}
];

  constructor() { }

  ngOnInit(): void {
  }

}
