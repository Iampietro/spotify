import { ExternalUrls } from './external-urls';
import { Image } from './image';
import { Followers } from './followers';

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }