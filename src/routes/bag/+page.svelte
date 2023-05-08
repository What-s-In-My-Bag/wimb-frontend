<script lang="ts">
  import { useLoadTransition } from "$lib/hooks/useLoadTransition";
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";
  import { userStore } from "$lib/stores/userStore";
  import Profile from "$lib/components/bag/Profile.svelte";
  import { Heading } from "flowbite-svelte";
  import { tracksStore } from "$lib/stores/trackStore";
  import Template from "$lib/components/bag/template/Template.svelte";

  export let data: PageData;
  let loaded = useLoadTransition();

  userStore.set(data.user);
  tracksStore.set(data.topTracks);
</script>

<svelte:head>
  <title>Your bag</title>
  <meta name="title" content="Your Bag" />
  <meta
    name="description"
    content="Discover your music in a new way with What's in My Bag. Connect your Spotify account to see your top tracks displayed like vinyl records. Explore your personal music taste and share it with others. Enjoy a simple and unique music experience."
  />
</svelte:head>

<div class="bag-wrapper">
  <div class="bag-content">
    {#if $loaded}
      <h1
        class="text-white text-center text-6xl font-extrabold md:text-8xl lg:text-8xl mb-6"
        in:fly="{{ x: 20, duration: 2000 }}"
      >
        THIS IS YOUR BAG
      </h1>
    {/if}
    {#if $loaded}
      <div class="bag-container" in:fly="{{ y: 20, duration: 2000 }}">
        <Template />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "$lib/styles/mixins/responsive.scss";
  .bag-wrapper {
    @apply w-full h-full  p-2 sm:p-6 lg:p-8 
    flex justify-center items-center bg-superdarkblue;
    .bag-content {
      @apply md:flex flex-col lg:grid justify-center items-center content-center w-[100%] xl:w-[70%];
      grid-template-columns: 1fr;
      @include lg {
        grid-template-columns: 50% 50%;
      }
      @include xl {
        grid-template-columns: 40% 60%;
      }

      .bag-container {
        @apply bg-darkerblue rounded-lg p-4 md:p-8 max-w-full md:max-w-min;
      }
    }
  }
</style>
