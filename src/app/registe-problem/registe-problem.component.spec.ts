import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteProblemComponent } from './registe-problem.component';

describe('RegisteProblemComponent', () => {
  let component: RegisteProblemComponent;
  let fixture: ComponentFixture<RegisteProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
