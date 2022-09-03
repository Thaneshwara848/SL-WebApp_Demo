import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavavaComponent } from './ravava.component';

describe('RavavaComponent', () => {
  let component: RavavaComponent;
  let fixture: ComponentFixture<RavavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RavavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
