<script>
  import MultiSelect from '$lib/components/MultiSelect.svelte';
  import { PUBLIC_API_URL } from '$env/static/public';

  export let data;
  let results = [];
  let controller = null;

  const seasonsOptions = {
    data: ['Spring', 'Summer', 'Fall', 'Winter']
  }

  const typesOptions = {
    data: ['TV', 'Movie', 'OVA', 'Special', 'ONA']
  }

  const statusesOptions = {
    data: ["Finished Airing", "Currently Airing", "Not yet aired"]
  }

  let titleInput = "";
  let genres = [];
  let years = [];
  let seasons = [];
  let types = [];
  let statuses = [];
  let demographics = [];
  let licensors = [];
  let producers = [];
  let studios = [];
  let themes = [];

  async function search() {
    const queryString = await generateQueryString();
    console.log(queryString);

    if(queryString.length < 1) {
      console.log("No query string");
    }

    if(controller) {
      console.log("Aborted");
      controller.abort();
    }

    controller = new AbortController();

    try {
      const res = await fetch(`${PUBLIC_API_URL}/anime?${queryString}`, { signal: controller.signal });

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

  async function generateQueryString() {
    let queryString = "";
    if(titleInput.length > 0) {
      queryString += `title=${titleInput}`;
    }

    genres.forEach(genre => {
      queryString += `&genres=${genre}`;
    });

    years.forEach(year => {
      queryString += `&years=${year}`;
    });

    seasons.forEach(season => {
      queryString += `&seasons=${season}`;
    });

    types.forEach(type => {
      queryString += `&types=${type}`;
    });

    statuses.forEach(status => {
      queryString += `&statuses=${status}`;
    });

    demographics.forEach(demographic => {
      queryString += `&demographic=${demographic}`;
    });

    licensors.forEach(licensor => {
      queryString += `&licensors=${licensor}`;
    });

    producers.forEach(producer => {
      queryString += `&producers=${producer}`;
    });

    studios.forEach(studio => {
      queryString += `&studios=${studio}`;
    });

    themes.forEach(theme => {
      queryString += `&themes=${theme}`;
    });

    return queryString;
  }

  $: results = search(titleInput, genres, years, seasons, types, statuses, demographics, licensors, producers, studios, themes);

</script>

<style>
    #gridContainer {
        grid-template-columns: repeat( auto-fit, minmax(112px, 1fr) );
    }
    @media (min-width: 640px) {
        #gridContainer {
            grid-template-columns: repeat( auto-fit, minmax(112px, 1fr) );
        }
    }
    @media (min-width: 768px) {
        #gridContainer {
            grid-template-columns: repeat( auto-fit, minmax(224px, 1fr) );
        }
    }

    #attributesGrid {
        grid-template-columns: repeat( auto-fit, minmax(160px, 1fr) );
    }


</style>

<svelte:head>
  <title>Search anime - AniDatabase</title>
</svelte:head>

<section>
  <div class="container p-10 mx-auto">
    <div class="flex flex-col items-center space-y-4">
      <div class="card flex items-center w-[95%] md:w-[40rem]">
        <i class="fa-solid fa-magnifying-glass text-xl ml-4"></i>
        <input class="bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg" type="search" placeholder="Search..." bind:value={titleInput}/>
      </div>


      <div class="grid gap-6 overflow-x-scroll md:overflow-x-auto overflow-y-hidden max-w-[95%] md:max-w-full pb-3 w-full" id="attributesGrid">
        <MultiSelect label="Genres" options={data.streamed.genres} bind:selected={genres} />
        <MultiSelect label="Years" options={data.streamed.years} bind:selected={years} />
        <MultiSelect label="Seasons" options={seasonsOptions} bind:selected={seasons} />
        <MultiSelect label="Types" options={typesOptions} bind:selected={types} />
        <MultiSelect label="Statuses" options={statusesOptions} bind:selected={statuses} />
        <MultiSelect label="Demographics" options={data.streamed.demographics} bind:selected={demographics} />
        <MultiSelect label="Licensors" options={data.streamed.licensors} bind:selected={licensors} />
        <MultiSelect label="Producers" options={data.streamed.producers} bind:selected={producers} />
        <MultiSelect label="Studios" options={data.streamed.studios} bind:selected={studios} />
        <MultiSelect label="Themes" options={data.streamed.themes} bind:selected={themes} />
      </div>

    </div>
  </div>
</section>

<section>
  <div class="container px-10 mx-auto">
    <div class="flex flex-row flex-wrap gap-2">
      {#each genres as genre}
        <span class="chip variant-filled-surface" on:click={() => {genres = genres.filter(item => item !== genre);}}>{genre}</span>
      {/each}
      {#each years as year}
        <span class="chip variant-filled-surface" on:click={() => {years = years.filter(item => item !== year);}}>{year}</span>
      {/each}
      {#each seasons as season}
        <span class="chip variant-filled-surface" on:click={() => {seasons = seasons.filter(item => item !== season);}}>{season}</span>
      {/each}
      {#each types as type}
        <span class="chip variant-filled-surface" on:click={() => {types = types.filter(item => item !== type);}}>{type}</span>
      {/each}
      {#each statuses as status}
        <span class="chip variant-filled-surface" on:click={() => {statuses = statuses.filter(item => item !== status);}}>{status}</span>
      {/each}
      {#each demographics as demographic}
        <span class="chip variant-filled-surface" on:click={() => {demographics = demographics.filter(item => item !== demographic);}}>{demographic}</span>
      {/each}
      {#each licensors as licensor}
        <span class="chip variant-filled-surface" on:click={() => {licensors = licensors.filter(item => item !== licensor);}}>{licensor}</span>
      {/each}
      {#each producers as producer}
        <span class="chip variant-filled-surface" on:click={() => {producers = producers.filter(item => item !== producer);}}>{producer}</span>
      {/each}
      {#each studios as studio}
        <span class="chip variant-filled-surface" on:click={() => {studios = studios.filter(item => item !== studio);}}>{studio}</span>
      {/each}
      {#each themes as theme}
        <span class="chip variant-filled-surface" on:click={() => {themes = themes.filter(item => item !== theme);}}>{theme}</span>
      {/each}
    </div>
  </div>
</section>

<section>
  <div class="container p-10 mx-auto">
    <div id="gridContainer" class="grid gap-4 gap-y-4 md:gap-y-6 justify-items-center">
      {#await results then stuff}
        {#each stuff as anime}
          <a data-sveltekit-preload-data="hover" href="/anime/{anime.id}">
            <div class="flex flex-col space-y-1">
              <img src={anime.image_url} class="w-28 h-40 md:w-56 md:h-80 object-fill object-center"/>
              <h6 class="text-sm md:text-base max-w-[112px] md:max-w-[224px]"><strong>{anime.title_romaji}</strong></h6>
            </div>
          </a>
        {/each}
      {/await}
    </div>
  </div>
</section>