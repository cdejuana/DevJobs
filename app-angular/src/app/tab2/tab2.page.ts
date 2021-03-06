import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  protected ofertas=[
    {
      id: "1",
      id_empresa:"HakunaMatataVegie",
      id_localidad:"Villaviciosa de Odon",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",
      leido: true,
      comentarios: [
        { comentario: "1"},
        { comentario: "2"},
        { comentario: "3"},
        { comentario: "4"}
      ],

      titulo: "Cocinero para restaurante vegano",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000 - 26.000",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "2",
      id_empresa:"Goiko Grill",
      id_localidad:"Madrid",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",
      leido: false,
      comentarios: [],

      titulo: "Repartidor",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000 - 26.000",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "3",
      id_empresa:"Telepizza",
      id_localidad:"Barcelona",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",
      leido: false,
      comentarios: [],

      titulo: "Jefe de cocina",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000 - 26.000",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "4",
      id_empresa:"HakunaMatataVegie",
      id_localidad:"Villaviciosa de Odon",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",
      leido: true,
      comentarios: [
        { comentario: "1"},
        { comentario: "2"},
        { comentario: "3"},
        { comentario: "4"}
      ],

      titulo: "Cocinero para restaurante vegano",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000 - 26.000",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "5",
      id_empresa:"Goiko Grill",
      id_localidad:"Madrid",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",
      leido: true,
      comentarios: [
        { comentario: "1"},
        { comentario: "2"},
        { comentario: "3"},
        { comentario: "4"}
      ],

      titulo: "Repartidor",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000 - 26.000",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "6",
      id_empresa:"Telepizza",
      id_localidad:"Barcelona",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",
      leido: true,
      comentarios: [
        { comentario: "1"},
        { comentario: "2"},
        { comentario: "3"},
        { comentario: "4"}
      ],

      titulo: "Jefe de cocina",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000 - 26.000",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    
  ]


  constructor() {}

}
