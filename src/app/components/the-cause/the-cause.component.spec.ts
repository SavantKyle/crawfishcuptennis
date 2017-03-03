import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCauseComponent } from './the-cause.component';

describe('TheCauseComponent', () => {
  let component: TheCauseComponent;
  let fixture: ComponentFixture<TheCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
