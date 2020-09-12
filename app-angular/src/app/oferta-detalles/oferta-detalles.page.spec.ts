import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertaDetallesPage } from './oferta-detalles.page';

describe('OfertaDetallesPage', () => {
  let component: OfertaDetallesPage;
  let fixture: ComponentFixture<OfertaDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertaDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
