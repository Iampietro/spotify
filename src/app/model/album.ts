import { Artist } from './artist';
import { Copyright } from './copyright';
import { ExternalIds } from './external-ids';
import { ExternalUrls2 } from './external-urls2';
import { Image } from './image';
import { Tracks } from './tracks';
 
export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIds;
    external_urls: ExternalUrls2;
    genres: any[];
    href: string;
    id: string;
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    tracks: Tracks;
    type: string;
    uri: string;
  }