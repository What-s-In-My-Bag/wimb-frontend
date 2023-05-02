<script lang="ts">
  import vinyl from "$lib/images/vinyl.svg";
</script>

<img class="vinyl" src="{vinyl}" alt="vinyl" />

<style lang="scss">
  .vinyl {
    animation: spin 2s linear infinite;
    @apply w-[120px] h-[120px] brightness-75;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
