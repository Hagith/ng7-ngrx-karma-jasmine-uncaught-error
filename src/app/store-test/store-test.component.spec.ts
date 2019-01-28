import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { StoreTestComponent } from './store-test.component';

describe('StoreTestComponent', () => {
  let component: StoreTestComponent;
  let fixture: ComponentFixture<StoreTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        // StoreModule.forFeature('store-test', reducer),
      ],
      declarations: [StoreTestComponent],
    })
      .compileComponents();
    // .then(() => {
    //   fixture = TestBed.createComponent(StoreTestComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();
    // });

    fixture = TestBed.createComponent(StoreTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(StoreTestComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // afterEach(() => {
  //   fixture.destroy();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
