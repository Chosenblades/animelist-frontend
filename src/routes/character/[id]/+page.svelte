<script>
  export let data;

  import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  let tabSet = 0;
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
</style>

<svelte:head>
  <title>{data.character.name} - AniDatabase</title>
</svelte:head>

<section class="bg-surface-500">
  <div class="container p-10 mx-auto">
    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
      <!-- Column 1 -->
      {#if data.character.image_url}
        <img class="object-cover w-20" src="{data.character.image_url}"  alt="cover image"/>
      {:else}
        <div class="placeholder w-56"></div>
      {/if}

      <!-- Column 2 -->
      <div class="flex flex-col md:pl-6 space-y-2 items-center md:items-start">
        <!-- Row 1 -->
        <h1 class="h1">{data.character.name}</h1>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container p-10 mx-auto">

    <TabGroup justify="justify-center">
      <Tab bind:group={tabSet} name="anime" value={0}>Anime</Tab>
      <Tab bind:group={tabSet} name="voiceactors" value={1}>Voice Actors</Tab>
      <!-- Tab Panels --->
      <svelte:fragment slot="panel">
        {#if tabSet === 0}
          <div id="gridContainer" class="grid gap-4 gap-y-4 md:gap-y-6 justify-items-center">
            {#await data.streamed.animeography then animeography}
              {#each animeography.Animes as anime}
                <a data-sveltekit-preload-data="hover" href="/anime/{anime.id}">
                  <div class="flex flex-col space-y-1">
                    <img src={anime.image_url} class="w-28 h-40 md:w-56 md:h-80 object-fill object-center"/>
                    <h6 class="text-sm md:text-base max-w-[112px] md:max-w-[224px]"><strong>{anime.title_romaji}</strong></h6>
                  </div>
                </a>
              {/each}
            {/await}
          </div>
        {:else if tabSet === 1}
          <div class="flex flex-col space-y-6">
            <div class="flex flex-col space-y-2">
              {#await data.streamed.voiceactors}

              {:then data}
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {#each data.People as staff}
                    <div class="card rounded pr-2 max-h-20 basis-full lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 m-0 min-w-0 grow">
                      <div class="flex flex-row space-x-2 min-w-0">
                        <img class="w-14 h-20 object-cover rounded-l" src="{staff.image_url}" loading="lazy"/>
                        <div class="flex flex-col space-y-2 justify-between min-w-0">
                          <h6 class=""><a data-sveltekit-preload-data="hover" href="/people/{staff.id}"><strong>{staff.name}</strong></a></h6>
                          <p title={staff.CharacterVoiceActors.language} class="text-sm opacity-80 truncate min-w-0">
                            {staff.CharacterVoiceActors.language}
                          </p>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              {:catch error}
                <article class="prose prose-sm prose-invert">
                  None
                </article>
              {/await}
            </div>
          </div>
        {/if}
      </svelte:fragment>
    </TabGroup>

  </div>
</section>