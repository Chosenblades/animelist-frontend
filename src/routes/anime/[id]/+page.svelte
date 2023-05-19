<script>
  export let data;

  import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  let tabSet = 0;
</script>

<style>
  a {
      @apply text-primary-500;
  }

  .stats-value {
      @apply text-[0.9rem] text-gray-300;
  }
</style>

<svelte:head>
  <title>{data.anime.title_romaji} - AniDatabase</title>
</svelte:head>

<section class="bg-surface-500">
  <div class="container p-10 mx-auto">
    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
      <!-- Column 1 -->
      {#if data.anime.image_url}
        <img class="object-none w-56" src="{data.anime.image_url}"  alt="cover image"/>
      {:else}
        <div class="placeholder w-56"></div>
      {/if}

      <!-- Column 2 -->
      <div class="flex flex-col md:pl-6 space-y-2 items-center md:items-start">
        <!-- Row 1 -->
        <h1 class="h1">{data.anime.title_romaji}</h1>

        <!-- Row 2 -->
        {#if data.anime.synopsis}
          <div class="hidden md:contents">
            <article class="prose !prose-sm dark:!prose-invert md:max-w-[75%]">
              {data.anime.synopsis}
            </article>
          </div>
        {/if}

        <!-- Row 3 -->
        <div class="flex flex-col">
          {#if data.anime.title_synonyms}
            <p class="text-sm"><strong>Synonyms:</strong> {data.anime.title_synonyms}</p>
          {/if}
          {#if data.anime.title_japanese}
            <p class="text-sm"><strong>Japanese:</strong> {data.anime.title_japanese}</p>
          {/if}
          {#if data.anime.title_english}<p class="text-sm"><strong>English:</strong> {data.anime.title_english}</p>{/if}
          {#if data.anime.title_german}<p class="text-sm"><strong>German:</strong> {data.anime.title_german}</p>{/if}
          {#if data.anime.title_spanish}<p class="text-sm"><strong>Spanish:</strong> {data.anime.title_spanish}</p>{/if}
          {#if data.anime.title_french}<p class="text-sm"><strong>French:</strong> {data.anime.title_french}</p>{/if}
        </div>

        {#if data.anime.synopsis}
          <div class="md:hidden">
            <Accordion>
              <AccordionItem>
                <svelte:fragment slot="summary">Synopsis</svelte:fragment>
                <svelte:fragment slot="content">
                  <article class="prose dark:!prose-invert md:max-w-[75%]">
                    {data.anime.synopsis}
                  </article>
                </svelte:fragment>
              </AccordionItem>
            </Accordion>
          </div>
        {/if}

      </div>
    </div>
  </div>
</section>

<section>
  <div class="container p-10 mx-auto">
    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-x-6">
      <!-- Column 1 (sidebar) -->
      <div class="card p-4 w-[95%] md:w-56 md:shrink-0">
        <div class="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-2 overflow-scroll">
          {#if data.anime.type}
            <div class="min-w-fit">
              <h6>Type</h6>
              <p class="stats-value">
                {data.anime.type}
              </p>
            </div>
          {/if}

          {#if data.anime.episodes}
            <div class="min-w-fit">
              <h6>Episodes</h6>
              <p class="stats-value">
                {data.anime.episodes}
              </p>
            </div>
          {/if}

          {#if data.anime.status}
            <div class="min-w-fit">
              <h6>Status</h6>
              <p class="stats-value">
                {data.anime.status}
              </p>
            </div>
          {/if}

          {#if data.anime.aired}
            <div class="min-w-fit">
              <h6>Aired</h6>
              <p class="stats-value">
                {data.anime.aired}
              </p>
            </div>
          {/if}

          {#if data.anime.season && data.anime.year}
            <div class="min-w-fit">
              <h6>Premiered</h6>
              <p class="stats-value">
                <a href="/search/anime?years={data.anime.year}&seasons={data.anime.season}">{data.anime.season} {data.anime.year}</a>
              </p>
            </div>
          {/if}

          {#if data.anime.broadcast}
            <div class="min-w-fit">
              <h6>Broadcast</h6>
              <p class="stats-value">
                {data.anime.broadcast}
              </p>
            </div>
          {/if}

          {#if data.anime.rating}
            <div class="min-w-fit">
              <h6>Rating</h6>
              <p class="stats-value">
                {data.anime.rating}
              </p>
            </div>
          {/if}

          {#if data.anime.source}
            <div class="min-w-fit">
              <h6>Source</h6>
              <p class="stats-value">
                {data.anime.source}
              </p>
            </div>
          {/if}

          {#await data.streamed.producers}

          {:then data}
            <div class="min-w-fit">
              <h6>Producers</h6>
              {#each data.Producers as producer}
                <p class="stats-value">
                    <a href="/search/anime?producers={producer.name}">{producer.name}</a>
                </p>
              {/each}
            </div>
          {/await}

          {#await data.streamed.licensors}

          {:then data}
            <div class="min-w-fit">
              <h6>Licensors</h6>
              {#each data.Licensors as licensor}
                <p class="stats-value">
                  <a href="/search/anime?licensors={licensor.name}">{licensor.name}</a>
                </p>
              {/each}
            </div>
          {/await}

          {#await data.streamed.studios}

          {:then data}
            <div class="min-w-fit">
              <h6>Studios</h6>
              {#each data.Studios as studio}
                <p class="stats-value">
                  <a href="/search/anime?studios={studio.name}">{studio.name}</a>
                </p>
              {/each}
            </div>
          {/await}

          {#await data.streamed.genres}

          {:then data}
            <div class="min-w-fit">
              <h6>Genres</h6>
              {#each data.Genres as genre}
                <p class="stats-value">
                  <a href="/search/anime?genres={genre.name}">{genre.name}</a>
                </p>
              {/each}
            </div>
          {/await}

          {#await data.streamed.themes}

          {:then data}
            <div class="min-w-fit">
              <h6>Themes</h6>
              {#each data.Themes as theme}
                <p class="stats-value">
                  <a href="/search/anime?themes={theme.name}">{theme.name}</a>
                </p>
              {/each}
            </div>
          {/await}

          {#await data.streamed.demographic}

          {:then data}
            <div class="min-w-fit">
              <h6>Demographic</h6>
              <p class="stats-value">
                <a href="/search/anime?demographics={data.Demographic.name}">{data.Demographic.name}</a>
              </p>
            </div>
          {/await}

        </div>
      </div>

      <!-- Column 2 -->
      <!--<div class="flex flex-col grow">-->
        <TabGroup justify="justify-around" class="w-full">
          <Tab bind:group={tabSet} name="tab1" value={0}>Relations</Tab>
          <Tab bind:group={tabSet} name="tab2" value={1}>Characters</Tab>
          <Tab bind:group={tabSet} name="tab3" value={2}>Staff</Tab>
          <!-- Tab Panels --->
          <svelte:fragment slot="panel">
            {#if tabSet === 0}
              <div class="flex flex-col space-y-6">
                <div class="flex flex-col space-y-2">
                  {#await data.streamed.relations}

                  {:then data}
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                      {#each data.ChildAnime as relation}
                        <div class="card rounded pr-2 max-h-32 basis-full lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 m-0 grow">
                          <div class="flex flex-row space-x-2">
                            <img class="w-24 h-32 object-cover rounded-l" src="{relation.image_url}" loading="lazy" alt="anime cover image"/>
                            <div class="flex flex-col space-y-2 justify-between">
                              <h6 class=""><a data-sveltekit-preload-data="hover" href="/anime/{relation.id}"><strong>{relation.title_romaji}</strong></a></h6>
                              <article class="text-sm opacity-80">
                                {relation.AnimeRelations.relation}
                              </article>
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
            {:else if tabSet === 1}
              <div class="flex flex-col space-y-6">
                <div class="flex flex-col space-y-2">
                  {#await data.streamed.characters}

                  {:then data}
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
                      {#each data.Characters as character}
                        <div class="card rounded max-h-20 basis-full xl:basis-2/5 m-0 grow">
                          <div class="flex flex-row justify-between">
                            <div class="flex flex-row space-x-2">
                              <img class="w-14 h-20 object-cover rounded-l" src="{character.image_url}" loading="lazy"/>
                              <div class="flex flex-col space-y-2 justify-between">
                                <h6 class="text-left"><a data-sveltekit-preload-data="hover" href="/character/{character.id}"><strong>{character.name}</strong></a></h6>
                                <p class="text-sm opacity-80 text-left">
                                  {character.AnimeCharacters.type}
                                </p>
                              </div>
                            </div>

                            <!-- Voice Actor -->
                            {#if character.People[0]}
                            <div class="flex flex-row space-x-2">
                              <div class="flex flex-col space-y-2 justify-between items-end">
                                <h6 class="text-right"><a data-sveltekit-preload-data="hover" href="/character/{character.People[0]?.id}"><strong>{character.People[0]?.name}</strong></a></h6>
                                <p class="text-sm opacity-80 text-right">
                                  Japanese
                                </p>
                              </div>
                              <img class="w-14 h-20 object-cover rounded-r" src="{character.People[0]?.image_url}" loading="lazy"/>
                            </div>
                              {:else}
                              {/if}
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
            {:else if tabSet === 2}
              <div class="flex flex-col space-y-6">
                <div class="flex flex-col space-y-2">
                  {#await data.streamed.staff}

                  {:then data}
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                      {#each data.People as staff}
                        <div class="card rounded pr-2 max-h-20 basis-full lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 m-0 min-w-0 grow">
                          <div class="flex flex-row space-x-2 min-w-0">
                            <img class="w-14 h-20 object-cover rounded-l" src="{staff.image_url}" loading="lazy"/>
                            <div class="flex flex-col space-y-2 justify-between min-w-0">
                              <h6 class=""><a data-sveltekit-preload-data="hover" href="/people/{staff.id}"><strong>{staff.name}</strong></a></h6>
                              <p title={staff.AnimeStaff.roles} class="text-sm opacity-80 truncate min-w-0">
                                {staff.AnimeStaff.roles}
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
      <!--</div>-->



    </div>
  </div>
</section>