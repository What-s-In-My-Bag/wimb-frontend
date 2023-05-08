<script lang="ts">
  import { tracksStore } from "$lib/stores/trackStore";
  import TempVinyl from "./TempVinyl.svelte";
</script>

<div class="temp_vinyls">
  {#each $tracksStore as vinyl}
    <!-- content here -->
    <TempVinyl vinyl="{vinyl}" />
  {/each}
</div>

<style lang="scss">
  .temp_vinyls {
    @apply w-[90%] h-[90%] grid grid-cols-3 gap-2
     justify-center items-center content-center;
  }
</style>
