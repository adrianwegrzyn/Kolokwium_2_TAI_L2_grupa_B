import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsAWComponent } from './shop-details-aw.component';

describe('ShopDetailsAWComponent', () => {
  let component: ShopDetailsAWComponent;
  let fixture: ComponentFixture<ShopDetailsAWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsAWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
