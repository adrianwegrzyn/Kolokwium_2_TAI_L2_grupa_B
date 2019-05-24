import {Component, OnInit} from '@angular/core';
import {AW25052019Service} from '../../services/aw-25052019.service';

@Component({
  selector: 'shop-aw',
  templateUrl: './shop-aw.component.html',
  styleUrls: ['./shop-aw.component.css']
})
export class ShopAWComponent implements OnInit {

  public items$: any;

  constructor(private service: AW25052019Service) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });


    // getById(id) {
    //   return this.http.get(this.url + '/api/posts/' + id);
    // }


  }
}
