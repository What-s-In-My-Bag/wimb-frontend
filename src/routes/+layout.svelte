<script>
  import Footer from "$lib/components/Layout/Footer.svelte";
  import "../app.css";
  import { SvelteToast } from "@zerodevx/svelte-toast";
</script>

<div
  class="h-screen w-screen flex flex-col justify-between bg-superdarkblue overflow-x-hidden"
>
  <slot />
  <Footer />
</div>
<SvelteToast />

<style>
  :root {
    --toastContainerBottom: 3.5rem;
    --toastContainerTop: auto;
    --toastBorderRadius: 0.5rem;
  }
</style>
