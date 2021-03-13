import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeamsComponent } from './form-teams.component';

describe('FormTeamsComponent', () => {
  let component: FormTeamsComponent;
  let fixture: ComponentFixture<FormTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
