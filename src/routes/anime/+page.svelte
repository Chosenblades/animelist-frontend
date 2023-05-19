<script>
  import Carousel from '$lib/components/Carousel.svelte';
  export let data;

</script>

<svelte:head>
  <title>Browse anime - AniDatabase</title>
</svelte:head>

<section>
  <div class="container p-10 mx-auto">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h3 class="h3">
          This Season
        </h3>
        {#await data.streamed.thisSeasonAnime}
          <div class="placeholder animate-pulse rounded-none w-full h-40 md:h-80" />
        {:then value}
          <Carousel images={value} />
        {/await}
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="h3">
          Last Season
        </h3>
        {#await data.streamed.lastSeasonAnime}
          <div class="placeholder animate-pulse rounded-none w-full h-40 md:h-80" />
        {:then value}
          <Carousel images={value} />
        {/await}
      </div>
    </div>
  </div>
</section>