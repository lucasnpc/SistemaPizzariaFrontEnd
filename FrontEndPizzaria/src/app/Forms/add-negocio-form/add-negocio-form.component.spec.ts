import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNegocioFormComponent } from './add-negocio-form.component';

describe('AddPizzariaFormComponent', () => {
  let component: AddNegocioFormComponent;
  let fixture: ComponentFixture<AddNegocioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNegocioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNegocioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
