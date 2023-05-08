<script>
  import { Heading, P } from "flowbite-svelte";
  import LoginBtn from "$lib/components/homepage/LoginBtn.svelte";
  import Vinyl from "$lib/components/homepage/Vinyl.svelte";
</script>

<div
  class="min-h-full p-4 flex flex-col gap-4 justify-center items-center text-center z-20"
>
  <Vinyl />
  <Heading
    tag="h1"
    class="mb-4 font-principal text-white"
    customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl"
    >What's in my bag?</Heading
  >
  <P size="lg" class="text-white text-center"
    >Rediscover the soul of your music with a vinyl twist</P
  >

  <LoginBtn />
</div>
