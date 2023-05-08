function generateEndpoint(route: string) {
  return `/api${route}`;
}

export const API_ENDPOINTS = {
  CHECKLOGIN: generateEndpoint("/check-login"),
  GETSPOTIFYURL: generateEndpoint("/url"),
};

export const THEME_COLORS = {
  darkerblue: "#0A4D68",
  darkblue: "#088395",
  lightblue: "#05BFDB",
  greenprincipal: "#00FFCA",
  superdarkblue: "#001117",
};
