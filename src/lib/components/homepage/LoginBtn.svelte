<script lang="ts">
  import { Button } from "flowbite-svelte";
  import logo from "$lib/images/spotifylogo.svg";
  import { API_ENDPOINTS } from "$lib/config/consts";
  import { goto } from "$app/navigation";
  import { SuccessfullToast } from "$lib/utils/toaster";
  import { onMount } from "svelte";
  import { getCookie } from "$lib/utils/apihelpers";

  let isLogged = false;

  async function handleLogin() {
    try {
      if (!isLogged) {
        goto(API_ENDPOINTS.GETSPOTIFYURL);
        return;
      }

      goto("/bag");
    } catch (e) {
      console.log(e);
    }
  }
  onMount(() => {
    isLogged = getCookie("logged") != undefined;
  });
</script>

<Button
  gradient
  color="greenToBlue"
  class="flex justify-center items-center gap-2"
  on:click="{handleLogin}"
>
  <img src="{logo}" class="h-[25px] w-[25px]" alt="spotify" />
  <span>Login with spotify </span>
</Button>
