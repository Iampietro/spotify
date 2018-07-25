import { Artist } from './artist';

export interface ArtistsModel {
    href: string;
    items: Artist[];
    limit: number;
    next: any;
    offset: number;
    previous: any;
    total: number;
}