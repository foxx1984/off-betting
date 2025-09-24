import {ComponentFixture, TestBed} from '@angular/core/testing';
import {App} from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture: ComponentFixture<App> = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });
});
