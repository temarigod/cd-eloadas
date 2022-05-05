import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStatusComponent } from './auth-status.component';

describe('AuthStatusComponent', () => {
  let component: AuthStatusComponent;
  let fixture: ComponentFixture<AuthStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
