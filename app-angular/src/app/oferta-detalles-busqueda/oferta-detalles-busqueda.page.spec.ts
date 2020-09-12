import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertaDetallesBusquedaPage } from './oferta-detalles-busqueda.page';

describe('OfertaDetallesBusquedaPage', () => {
  let component: OfertaDetallesBusquedaPage;
  let fixture: ComponentFixture<OfertaDetallesBusquedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDetallesBusquedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertaDetallesBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
