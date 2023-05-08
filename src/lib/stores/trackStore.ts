import type { ITrack } from "$lib/types/track.type";
import { writable } from "svelte/store";

export const tracksStore = writable<ITrack[]>();
