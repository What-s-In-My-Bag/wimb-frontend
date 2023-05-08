<script lang="ts">
  import { useImageAverageColor } from "$lib/hooks/useImgAverageColor";
  import vinyl from "$lib/images/vinyl-template.webp";
  import type { IAlbum } from "$lib/types/track.type";
  export let album: IAlbum;
  const color = useImageAverageColor(album.images[0].url);
  let disc: HTMLImageElement;
  let tagSize = 40;
  const CONSTANT_RATIO = 0.171875;
  $: {
    tagSize = disc.clientWidth * CONSTANT_RATIO;
  }
</script>

<div class="vinyl-disc">
  <img id="vinyl-disc" bind:this="{disc}" src="{vinyl}" alt="vinyl" />
  <div
    class="album-color"
    style="{`background-color: ${$color}; width:${tagSize}; height:${tagSize};`}"
  ></div>
</div>

<style lang="scss">
  .vinyl-disc {
    width: 40px;
    height: 40px;
    img {
      @apply w-full h-full;
    }
    .album-color {
      width: 20px;
      height: 20px;
    }
  }
</style>
