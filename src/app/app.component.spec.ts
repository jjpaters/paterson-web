import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('navbarOpen should be set to true', () => {
    component.navbarOpen = true;
    expect(component.navbarOpen).toBeTruthy();
  });

  it('closeMenu() should set navbarOpen to false', () => {
    component.navbarOpen = true;
    component.closeMenu();
    expect(component.navbarOpen).toBeFalsy();
  });

  it('toggleNavbar() should set navbarOpen to true, when navbarOpen is false', () => {
    component.navbarOpen = false;
    component.toggleNavbar();
    expect(component.navbarOpen).toBeTruthy();
  });

  it('toggleNavbar() should set navbarOpen to false, when navbarOpen is true', () => {
    component.navbarOpen = true;
    component.toggleNavbar();
    expect(component.navbarOpen).toBeFalsy();
  });

});
