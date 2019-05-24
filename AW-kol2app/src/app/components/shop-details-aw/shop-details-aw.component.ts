import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-details-aw',
  templateUrl: './shop-details-aw.component.html',
  styleUrls: ['./shop-details-aw.component.css']
})
export class ShopDetailsAWComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
