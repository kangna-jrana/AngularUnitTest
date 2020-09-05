import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowordComponent } from './helloword.component';

describe('HellowordComponent', () => {
  let component: HellowordComponent;
  let fixture: ComponentFixture<HellowordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellowordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellowordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Hello World'`, async(() => {
    fixture = TestBed.createComponent(HellowordComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Hello World');
  }));

 /* it('should change title to Hello New World', async(() => {
    fixture = TestBed.createComponent(HellowordComponent);
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('Hello New World');
})); */

});
