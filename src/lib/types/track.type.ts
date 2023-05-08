export interface IArtist {
  name: string;
  id: string;
  uri: string;
  href: string;
  external_urls: {
    spotify: string;
  };
}
export interface IAlbum {
  name: string;
  artists: IArtist[];
  album_group: string;
  album_type: string;
  id: string;
  uri: string;
  href: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  external_urls: {
    spotify: string;
  };
  release_date: string;
  release_date_precision: string;
}

export interface ITrack {
  artists: IArtist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  uri: string;
  album: IAlbum;
  external_ids: {
    isrc: string;
  };
}
