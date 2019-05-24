import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAWComponent } from './shop-aw.component';

describe('ShopAWComponent', () => {
  let component: ShopAWComponent;
  let fixture: ComponentFixture<ShopAWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
