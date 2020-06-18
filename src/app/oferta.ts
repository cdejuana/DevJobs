export interface Oferta {
    Id: number;
    cod_pais: string;
    id_empresa: number;
    id_localidad: number;
    id_sector: number;
    id_contrato: number;
    id_jornada: number;
    titulo: string;
    descripcion: string;   
    que_ofrece: string;
    salario: string;
    fecha_alta: Date;
    fecha_limite_inscripcion: Date;
    visitas_contacto: number;
    id_estado: number;
    migrado_afl: number;
    id_importacion: number;
}
