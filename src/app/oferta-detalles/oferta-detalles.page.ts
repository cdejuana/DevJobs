import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Oferta } from '../oferta';
import { OfertasService} from '../servicios/ofertas.service';

@Component({
  selector: 'app-oferta-detalles',
  templateUrl: './oferta-detalles.page.html',
  styleUrls: ['./oferta-detalles.page.scss'],
})
export class OfertaDetallesPage implements OnInit {

  public listaOfertas: Array<Oferta>;
  public ofertaActual: Oferta;
  public indiceOferta: number;

  constructor(private ruta: ActivatedRoute, private ofertas: OfertasService) { }

  ngOnInit() {
    this.listaOfertas = this.ofertas.listadoOfertas;
    this.ruta.paramMap.subscribe(paramMap => {
      const indiceOferta = paramMap.get('detalleOferta');
      this.ofertaActual = this.listaOfertas[indiceOferta];
      this.indiceOferta = parseInt(indiceOferta);
    });    
  }

}
