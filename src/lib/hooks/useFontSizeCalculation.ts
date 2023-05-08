import { onDestroy, onMount } from "svelte";
import { writable } from "svelte/store";

export function useFontSizeCalculation(elementId: string, text: string) {
  let fontSize = writable<number>(16);

  const handleFontCalculation = () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementSide = element.offsetWidth * 0.4;

    fontSize.set(Math.min(elementSide / Math.sqrt(text.length), 18));
  };

  onMount(() => {
    window.addEventListener("resize", handleFontCalculation);
    handleFontCalculation();
  });
  onDestroy(() => {
    window.removeEventListener("resize", handleFontCalculation);
  });
  return fontSize;
}
