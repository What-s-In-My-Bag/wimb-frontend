<script>
  import Layout from "./+layout.svelte";
  import VideoBg from "$lib/components/homepage/VideoBg.svelte";
  import Homepage from "$lib/components/homepage/homepage.svelte";
</script>

<svelte:head>
  <title>What's In My bag</title>
  <meta name="title" content="What's In My bag" />
  <meta
    name="description"
    content="Discover your music in a new way with What's in My Bag. Connect your Spotify account to see your top tracks displayed like vinyl records. Explore your personal music taste and share it with others. Enjoy a simple and unique music experience."
  />
</svelte:head>

<Layout>
  <Homepage />
  <VideoBg />
</Layout>
