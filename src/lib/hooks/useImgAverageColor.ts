import { onMount } from "svelte";
import { writable } from "svelte/store";

const INITIAL_COLOR = `rgb(255,255,255)`;

type TColorPrecision = "extreme" | "high" | "medium" | "low" | "fast";

function mapPresition(presicion: TColorPrecision) {
  switch (presicion) {
    case "extreme": {
      return 4;
    }
    case "high": {
      return 8;
    }
    case "medium": {
      return 16;
    }
    case "low": {
      return 36;
    }
    case "fast": {
      return 64;
    }
  }
}
export function useImageAverageColor(
  url: string,
  presicion: TColorPrecision = "fast"
) {
  let averageColor = writable(INITIAL_COLOR);

  const handleAverageColor = (imgElement: HTMLImageElement) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let numPixels = 0;

    if (!imgElement) return INITIAL_COLOR;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return INITIAL_COLOR;
    canvas.width = 400;
    canvas.height = 400;

    context.drawImage(imgElement, 0, 0);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const step =
      Math.ceil(imageData.data.length / 40000) * mapPresition(presicion);

    for (let i = 0; i < imageData.data.length; i += step) {
      console.log("HEY");
      red += imageData.data[i];
      green += imageData.data[i + 1];
      blue += imageData.data[i + 2];
      numPixels++;
    }

    const avgRed = Math.floor(red / numPixels);
    const avgGreen = Math.floor(green / numPixels);
    const avgBlue = Math.floor(blue / numPixels);

    return `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;
  };

  onMount(() => {
    const img = new Image();
    img.src = url;
    img.setAttribute("crossOrigin", "");
    img.style.display = "none";

    img.onload = () => {
      averageColor.set(handleAverageColor(img));
    };
  });
  return averageColor;
}
