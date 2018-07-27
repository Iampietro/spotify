import { Artist2 } from './artist2';
import { ExternalUrls4 } from './external-urls4';
import { Album } from './album';

export interface Track {
    album: Album
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }