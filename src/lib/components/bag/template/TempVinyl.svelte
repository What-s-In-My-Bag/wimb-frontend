<script lang="ts">
  import { useFontSizeCalculation } from "$lib/hooks/useFontSizeCalculation";
  import type { ITrack } from "$lib/types/track.type";
  import VinylDisc from "./VinylDisc.svelte";
  const elementId = "vinyl-box";
  export let vinyl: ITrack;
  let fontSize = useFontSizeCalculation(elementId, vinyl.name);
  console.log("FONT SIZE", $fontSize);
</script>

<div class="vinyl">
  <div class="v-content" id="{'vinyl-box'}">
    <img src="{vinyl.album.images[0].url}" alt="vinyl" />
    <p style="{`font-size: ${$fontSize}px ;`}">
      {vinyl.name.trim()}
    </p>
  </div>
  <VinylDisc album="{vinyl.album}" />
</div>

<style lang="scss">
  @import "$lib/styles/mixins/responsive";
  .vinyl {
    @apply w-full gap-2  flex justify-center items-center;
    .v-content {
      @apply w-max relative;

      img {
        @apply w-[80%] brightness-50;
      }
      p {
        @apply text-sm text-white text-center 
       absolute left-[40%] top-[50%]
       -translate-y-[50%] -translate-x-[50%] font-extrabold
       block break-words;
      }
    }
  }
</style>
