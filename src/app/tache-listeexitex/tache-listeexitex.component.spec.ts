import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheListeexitexComponent } from './tache-listeexitex.component';

describe('TacheListeexitexComponent', () => {
  let component: TacheListeexitexComponent;
  let fixture: ComponentFixture<TacheListeexitexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheListeexitexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheListeexitexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
