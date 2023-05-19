<script>
  export let images;
</script>

<style>


    @media (max-width: 767px) {
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    }

</style>

<ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar">
  {#each images as { id, title_romaji, image_url }}
    <li class="shrink-0 snap-center">
      <a href="/anime/{id}">
        <img class="w-28 h-40 md:w-56 md:h-80 object-fill object-center" title={title_romaji} src={image_url} alt={title_romaji} />
        <h6 class="text-sm md:text-base max-w-[112px] md:max-w-[224px]"><strong>{title_romaji}</strong></h6>
      </a>
    </li>
  {/each}
</ul>