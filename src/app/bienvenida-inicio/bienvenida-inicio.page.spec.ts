import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BienvenidaInicioPage } from './bienvenida-inicio.page';

describe('BienvenidaInicioPage', () => {
  let component: BienvenidaInicioPage;
  let fixture: ComponentFixture<BienvenidaInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidaInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BienvenidaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
