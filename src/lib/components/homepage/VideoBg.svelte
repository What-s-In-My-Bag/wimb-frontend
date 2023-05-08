<script lang="ts">
  import { fade } from "svelte/transition";
  import { useLoadTransition } from "$lib/hooks/useLoadTransition";
  let loaded = useLoadTransition();
</script>

<div class="videoContainer">
  {#if $loaded}
    <video
      id="background-video"
      autoplay
      loop
      muted
      class="video"
      in:fade="{{ duration: 1000 }}"
    >
      <source src="/videos/vinyl.mp4" type="video/mp4" />
    </video>
  {/if}
</div>

<style lang="scss">
  .videoContainer {
    @apply fixed h-screen w-screen;
    .video {
      @apply blur-sm h-screen w-screen object-cover opacity-95 brightness-[0.2] scale-[1.1];
    }
  }
</style>
