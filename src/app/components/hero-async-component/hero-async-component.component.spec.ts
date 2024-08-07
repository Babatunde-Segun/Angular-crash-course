import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAsyncComponentComponent } from './hero-async-component.component';

describe('HeroAsyncComponentComponent', () => {
  let component: HeroAsyncComponentComponent;
  let fixture: ComponentFixture<HeroAsyncComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAsyncComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
