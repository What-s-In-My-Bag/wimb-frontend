<script lang="ts">
  import { userStore } from "$lib/stores/userStore";
  import { Heading } from "flowbite-svelte";
</script>

<div class="profile">
  <img alt="profile pic" src="{$userStore.images[0].url}" />
  <Heading
    tag="h1"
    customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl"
    class="text-white"
  >
    {$userStore.display_name}'s Bag
  </Heading>
</div>

<style lang="scss">
  .profile {
    img {
      @apply rounded-full;
    }
  }
</style>
