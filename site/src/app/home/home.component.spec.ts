import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 with text "DreamTeam" inside a div', () => {
    const divElement: HTMLDivElement | null = fixture.nativeElement.querySelector('div');
    expect(divElement).toBeTruthy();

    expect(divElement?.querySelector('h1')).toBeTruthy();
    expect((divElement?.querySelector('h1'))?.textContent).toContain('DreamTeam');
  });
});