import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcontentComponent } from './secondcontent.component';

describe('SecondcontentComponent', () => {
  let component: SecondcontentComponent;
  let fixture: ComponentFixture<SecondcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
