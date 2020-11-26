import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarSistemaFormComponent } from './logar-sistema-form.component';

describe('LogarSistemaFormComponent', () => {
  let component: LogarSistemaFormComponent;
  let fixture: ComponentFixture<LogarSistemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogarSistemaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarSistemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
