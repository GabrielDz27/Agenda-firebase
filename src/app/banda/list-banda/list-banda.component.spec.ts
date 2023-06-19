import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBandaComponent } from './list-banda.component';

describe('ListBandaComponent', () => {
  let component: ListBandaComponent;
  let fixture: ComponentFixture<ListBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
