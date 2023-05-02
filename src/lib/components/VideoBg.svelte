<div class="container">
  <video id="background-video" autoplay loop muted class="video">
    <source src="/videos/vinyl.mp4" type="video/mp4" />
  </video>
</div>

<style lang="scss">
  .container {
    @apply fixed object-cover  h-screen w-screen bg-darkerblue;
    z-index: -1;
    .video {
      @apply blur-sm h-full w-full object-cover opacity-95 brightness-[0.2] scale-[1.1];
    }
  }
</style>
