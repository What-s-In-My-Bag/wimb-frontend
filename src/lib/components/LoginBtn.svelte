<script>
  import { Button } from "flowbite-svelte";
  import logo from "$lib/images/spotifylogo.svg";
</script>

<Button
  gradient
  color="greenToBlue"
  class="flex justify-center items-center gap-2"
>
  <img src="{logo}" class="h-[25px] w-[25px]" alt="spotify" />
  <span>Login with spotify </span>
</Button>
