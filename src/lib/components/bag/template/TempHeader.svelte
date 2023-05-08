<script lang="ts">
  import { userStore } from "$lib/stores/userStore";
  import { Heading } from "flowbite-svelte";
</script>

<div class="temp_header">
  <img alt="profile pic" src="{$userStore.images[0].url}" />
  <Heading tag="h1" customSize="text-xl font-bold " class="text-white">
    {$userStore.display_name}'s Bag
  </Heading>
</div>

<style lang="scss">
  .temp_header {
    @apply flex flex-col justify-center items-center
     gap-3 text-center;
    z-index: 2;
    img {
      @apply rounded-full w-[30px] h-[30px];
    }
  }
</style>
