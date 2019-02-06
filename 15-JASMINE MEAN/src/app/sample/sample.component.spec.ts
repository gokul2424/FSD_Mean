// dash.component.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent } from './sample.component';

describe(' SampleComponent', () => {
  let component:  SampleComponent;
  let fixture: ComponentFixture< SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'dash'`, async(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('dash');
  }));

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SampleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  });
});

// dash.component.spec.ts

