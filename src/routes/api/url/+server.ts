import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { loadSpotifyUrl } from "$lib/api/loadSpotifyUrl";

export const GET = (async ({ url }) => {
  const spotifyUrl = await loadSpotifyUrl(url.origin).catch((e) => {
    throw error(400, "Error getting url");
  });

  throw redirect(302, spotifyUrl);
}) satisfies RequestHandler;
