import { api } from "$lib/config/api";
import type { ITrack } from "../types/track.type";

type ITimeRange = "short" | "medium" | "long";
export async function loadUserTopTracks(
  cookies: string[],
  timeRange: ITimeRange = "short"
): Promise<ITrack[]> {
  return await api
    .get("/user/toptracks", {
      withCredentials: true,
      headers: {
        Cookie: cookies,
      },
      params: {
        time_range: timeRange,
      },
    })
    .then(({ data }) => data.data.tracks.items);
}
