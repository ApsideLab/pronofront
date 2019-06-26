import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorUpdateComponent } from './actor-update.component';

describe('ActorUpdateComponent', () => {
  let component: ActorUpdateComponent;
  let fixture: ComponentFixture<ActorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
