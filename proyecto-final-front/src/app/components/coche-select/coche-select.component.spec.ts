import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheSelectComponent } from './coche-select.component';

describe('CocheSelectComponent', () => {
  let component: CocheSelectComponent;
  let fixture: ComponentFixture<CocheSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocheSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocheSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
