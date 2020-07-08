export interface Oferta {
    Id: number;
    // cod_pais: string;
    empresa: string;
    localidad: string;
    sector: string;
    contrato: string;
    jornada: string;
    titulo: string;
    descripcion: string;   
    que_ofrece: string;
    salario: string;
    fecha_alta: Date;
    fecha_limite_inscripcion: Date;
    visitas_contacto: number;
    estado: string;
    // migrado_afl: number;
    // id_importacion: number;
}
