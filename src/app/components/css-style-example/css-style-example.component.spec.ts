import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStyleExampleComponent } from './css-style-example.component';

describe('CssStyleExampleComponent', () => {
  let component: CssStyleExampleComponent;
  let fixture: ComponentFixture<CssStyleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssStyleExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssStyleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
