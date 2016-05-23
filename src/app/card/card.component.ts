import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pictureUrl :string = 'http://interfacelift.com/wallpaper/previews/04024_tanjungarusunset_672x420.jpg';
  constructor() {
    
  }

  ngOnInit() {
  }

}
