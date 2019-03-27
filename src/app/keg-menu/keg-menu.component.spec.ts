import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegMenuComponent } from './keg-menu.component';

describe('KegMenuComponent', () => {
  let component: KegMenuComponent;
  let fixture: ComponentFixture<KegMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
