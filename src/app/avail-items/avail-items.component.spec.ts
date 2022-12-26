import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailItemsComponent } from './avail-items.component';

describe('AvailItemsComponent', () => {
  let component: AvailItemsComponent;
  let fixture: ComponentFixture<AvailItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
