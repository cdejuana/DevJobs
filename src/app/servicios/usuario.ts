export interface Usuario {
    Id: number;
    cod_pais: string;
    password: string;
    recuperar_password: string;   
    nombre: string;
    apellidos: string;
    telefono: string;
    imagen: string;
    fecha_nacimiento: Date;
    id_lugar: number;
    carta_presentacion: string;
    fecha_alta: Date;
    id_estado: number;
}
