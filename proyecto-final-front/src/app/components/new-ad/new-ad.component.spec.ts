import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdComponent } from './new-ad.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewAdComponent', () => {
  let component: NewAdComponent;
  let fixture: ComponentFixture<NewAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAdComponent],
      imports: [NewAdComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.newAdForm).toBeDefined();
  });
});
