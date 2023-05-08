import { onMount } from "svelte";
import { writable } from "svelte/store";

export function useLoadTransition() {
  let loaded = writable<boolean>(false);
  onMount(() => {
    loaded.set(true);
  });

  return loaded;
}
