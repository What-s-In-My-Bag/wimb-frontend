<script>
  import Footer from "$lib/components/Layout/Footer.svelte";
  import "../app.css";
</script>

<div class="h-screen w-screen flex flex-col justify-between">
  <slot />
  <Footer />
</div>
