import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheListeComponent } from './tache-liste.component';

describe('TacheListeComponent', () => {
  let component: TacheListeComponent;
  let fixture: ComponentFixture<TacheListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
