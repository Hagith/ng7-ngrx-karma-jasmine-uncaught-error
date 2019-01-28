import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { StoreTestComponent } from './store-test/store-test.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        // StoreModule.forFeature('store-test', reducer),
      ],
      declarations: [
        AppComponent,
        StoreTestComponent,
      ],
    })
      .compileComponents();
    // .then(() => {
    //   fixture = TestBed.createComponent(AppComponent);
    // });

    fixture = TestBed.createComponent(AppComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  // });

  // afterEach(() => {
  //   fixture.destroy();
  // });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng7-ngrx-testing'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng7-ngrx-testing');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng7-ngrx-testing!');
  });
});
