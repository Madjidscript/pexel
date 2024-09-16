import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcourComponent } from './concour.component';

describe('ConcourComponent', () => {
  let component: ConcourComponent;
  let fixture: ComponentFixture<ConcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
