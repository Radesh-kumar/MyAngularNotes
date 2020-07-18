import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteparamComponent } from './routeparam.component';

describe('RouteparamComponent', () => {
  let component: RouteparamComponent;
  let fixture: ComponentFixture<RouteparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
