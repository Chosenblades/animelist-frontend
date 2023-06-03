<script>
  import { modalStore } from '@skeletonlabs/skeleton';
  import { PUBLIC_API_URL } from '$env/static/public';

  let searchQuery = "";
  let results = [];
  let controller = null;

  async function search(query) {
    if(!query || query === '') {
      return [];
    }

    if(controller) {
      controller.abort();
    }

    controller = new AbortController();

    try {
      const res = await fetch(`${PUBLIC_API_URL}/search/anime?title=${query}`, { signal: controller.signal });

      if (!res.ok) {
        return []
      }

      const anime = await res.json();
      controller = null;
      return anime;
    } catch (e) {
      //console.log("error")
    }
  }

  $: results = search(searchQuery);

</script>

<div class="card bg-surface-100/60 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto">
  <header class="bg-surface-300-600-token flex items-center">
    <i class="fa-solid fa-magnifying-glass text-xl ml-4"></i>
    <input class="bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg" type="search" placeholder="Search..." bind:value={searchQuery}/>
    <a href="/search/anime" class="whitespace-nowrap pr-4" on:click={() => { modalStore.close(); }}>Advanced search</a>
  </header>

  <div class="overflow-x-auto max-h-[480px] hide-scrollbar">
    <nav class="list-nav">
      <ul>
        {#await results}
          <div class="flex flex-row w-full justify-center p-4">
            Loading
          </div>
        {:then results}
          {#if !results || results.length === 0}
            <div class="flex flex-row w-full justify-center p-4">
              {#if searchQuery === ""}

              {:else}
                No results
              {/if}
            </div>
          {:else}
            {#each results || [] as anime}
              <li class="text-lg">
                <a class="!rounded-none justify-between hover:variant-soft focus:!variant-filled-primary outline-0" href="/anime/{anime.id}" on:click={() => { modalStore.close(); }}>
                  <div class="flex items-center gap-4">
                    <img class="w-8 h-12 md:w-12 md:h-12 object-cover" src={anime.image_url}/>
                    <span class="flex-auto font-bold opacity-75">{anime.title_romaji}</span>
                  </div>
                  <span class="hidden md:block text-xs opacity-50">{anime.type}</span>
                </a>
              </li>
            {/each}
          {/if}
        {/await}
      </ul>
    </nav>
  </div>

  {#await results}

  {:then results}
    {#if !results || results.length === 0}

    {:else}
      <footer class="hidden md:flex items-center justify-center gap-2 bg-surface-300-600-token p-4 text-xs font-bold">
        <a href="/anime/search?title={searchQuery}" class="!text-white">View all results</a>
      </footer>
    {/if}
  {/await}


</div>