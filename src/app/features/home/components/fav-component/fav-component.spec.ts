import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavComponent } from './fav-component';

describe('FavComponent', () => {
  let component: FavComponent;
  let fixture: ComponentFixture<FavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
