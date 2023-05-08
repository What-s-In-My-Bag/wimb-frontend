import { api } from "$lib/config/api";

export async function loadSpotifyUrl(origin: string) {
  return await api
    .get("/url", {
      params: {
        origin: `${origin}/api/callback`,
      },
    })
    .then(({ data }) => {
      console.log("DATA", data);
      return data.data.url;
    });
}
