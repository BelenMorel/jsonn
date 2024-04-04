import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContFirebaseComponent } from './cont-firebase.component';

describe('ContFirebaseComponent', () => {
  let component: ContFirebaseComponent;
  let fixture: ComponentFixture<ContFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContFirebaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
