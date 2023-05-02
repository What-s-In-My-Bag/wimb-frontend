<script lang="ts">
  import logo from "$lib/images/github.svg";
</script>

<footer class="footer">
  <div class="nav">
    <h4
      >Made by <a
        class="link"
        href="https://github.com/CarlosRocha2409"
        target="_blank"
        ><img class="w-[25px] h-[25px]" src="{logo}" alt="github" />@MrWright</a
      >
    </h4>
  </div>
</footer>

<style lang="scss">
  .footer {
    @apply text-white w-full  
      flex  justify-center items-center;
    .nav {
      @apply rounded-tl-full rounded-tr-full bg-darkerblue w-[80%] md:w-[50%] lg:w-[30%] p-2 bg-opacity-20;
      h4 {
        @apply flex  justify-center items-center gap-2;
      }
      .link {
        @apply text-white bg-gray-800 hover:bg-gray-900 
      focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium
       rounded-lg text-sm px-3 py-1  dark:bg-gray-800
        dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
        flex justify-center items-center gap-2;
      }
    }
  }
</style>
