import { Track } from './track';

export interface Tracks {
    href: string;
    items: Track[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
  }