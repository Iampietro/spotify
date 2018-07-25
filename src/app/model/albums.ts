import { Album } from './album';

export interface Albums {
    href: string,
    items: Album[],
    limit: number,
    next: string,
    offset: number,
    previous: any,
    total: number
}