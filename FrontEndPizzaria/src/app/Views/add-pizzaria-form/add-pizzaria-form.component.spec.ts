import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPizzariaFormComponent } from './add-pizzaria-form.component';

describe('AddPizzariaFormComponent', () => {
  let component: AddPizzariaFormComponent;
  let fixture: ComponentFixture<AddPizzariaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPizzariaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPizzariaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
