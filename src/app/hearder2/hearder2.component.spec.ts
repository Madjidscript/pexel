import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hearder2Component } from './hearder2.component';

describe('Hearder2Component', () => {
  let component: Hearder2Component;
  let fixture: ComponentFixture<Hearder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hearder2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hearder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
