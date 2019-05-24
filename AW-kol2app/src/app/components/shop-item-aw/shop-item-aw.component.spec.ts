import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemAWComponent } from './shop-item-aw.component';

describe('ShopItemAWComponent', () => {
  let component: ShopItemAWComponent;
  let fixture: ComponentFixture<ShopItemAWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemAWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
