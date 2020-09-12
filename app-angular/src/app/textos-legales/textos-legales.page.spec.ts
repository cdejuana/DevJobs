import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextosLegalesPage } from './textos-legales.page';

describe('TextosLegalesPage', () => {
  let component: TextosLegalesPage;
  let fixture: ComponentFixture<TextosLegalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextosLegalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextosLegalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
