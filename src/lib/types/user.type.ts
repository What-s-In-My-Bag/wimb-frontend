interface IUserInfo {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [
    {
      height: number;
      width: number;
      url: string;
    }
  ];
  uri: string;
}
