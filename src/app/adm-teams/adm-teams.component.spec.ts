import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTeamsComponent } from './adm-teams.component';

describe('AdmTeamsComponent', () => {
  let component: AdmTeamsComponent;
  let fixture: ComponentFixture<AdmTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
