import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-item-aw',
  templateUrl: './shop-item-aw.component.html',
  styleUrls: ['./shop-item-aw.component.css']
})
export class ShopItemAWComponent implements OnInit {

  @Input() id: number;
  @Input() image: string;
  @Input() text: string;
  @Input() title: string;
  @Input() price: string;


  constructor() { }

  ngOnInit() {
  }

}
