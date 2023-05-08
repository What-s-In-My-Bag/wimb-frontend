import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { loadUserInfo } from "$lib/api/loadUserInfo";
import { loadUserTopTracks } from "$lib/api/loadUserTopTracks";

export const load = (async ({ cookies }) => {
  const authcookies = [`token=${cookies.get("token")}` ?? ""];
  const userInfo = await loadUserInfo(authcookies).catch(() => {
    throw redirect(304, "/");
  });
  const topTracks = await loadUserTopTracks(authcookies).catch(() => {
    throw redirect(304, "/");
  });
  return {
    user: userInfo,
    topTracks: topTracks,
  };
}) satisfies PageServerLoad;
