<script lang="ts">
  import TempBackground from "./TempBackground.svelte";
  import Header from "./TempHeader.svelte";
  import TempVinyls from "./TempVinyls.svelte";
</script>

<div id="template" class="template">
  <TempBackground />
  <Header />
  <TempVinyls />
</div>

<style lang="scss">
  .template {
    @apply relative p-2  rounded-3xl
     md:p-3 w-full h-full 
      scale-95 md:scale-100 md:h-[400px] md:w-[400px] flex justify-center items-center gap-2 flex-col;
    z-index: 1;
  }
</style>
