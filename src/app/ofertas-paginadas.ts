import { Oferta } from './oferta';

export interface OfertasPaginadas {
    current_page: number;
    data: Array<Oferta>;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}
