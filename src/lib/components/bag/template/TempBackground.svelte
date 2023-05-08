<script lang="ts">
  import storebg from "$lib/images/store-bg.jpg";
</script>

<div class="temp_bg">
  <img src="{storebg}" alt="storebg" />
</div>

<style lang="scss">
  .temp_bg {
    @apply absolute bg-superdarkblue 
      opacity-80 top-0 left-0 bottom-0 
      right-0 rounded-lg;
    z-index: -1;
    img {
      @apply object-cover w-full h-full blur-sm brightness-50;
    }
  }
</style>
