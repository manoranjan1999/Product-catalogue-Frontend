import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshComponentComponent } from './refresh-component.component';

describe('RefreshComponentComponent', () => {
  let component: RefreshComponentComponent;
  let fixture: ComponentFixture<RefreshComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
