<script>
  export let data;
  console.log(data);
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
  <title>{data.person.name} - AniDatabase</title>
</svelte:head>

<section class="bg-surface-500">
  <div class="container p-10 mx-auto">
    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
      <!-- Column 1 -->
      {#if data.person.image_url}
        <img class="object-cover w-20" src="{data.person.image_url}"  alt="cover image"/>
      {:else}
        <div class="placeholder w-56"></div>
      {/if}

      <!-- Column 2 -->
      <div class="flex flex-col md:pl-6 space-y-2 items-center md:items-start">
        <!-- Row 1 -->
        <h1 class="h1">{data.person.name}</h1>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container p-10 mx-auto">

    <p class="pb-2">Characters voiced</p>
    {#await data.streamed.characters}

    {:then value}
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {#each value.Characters as character}
          <div class="card rounded pr-2 max-h-20 basis-full lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 m-0 min-w-0 grow">
            <div class="flex flex-row space-x-2 min-w-0">
              <img class="w-14 h-20 object-cover rounded-l" src="{character.image_url}" loading="lazy"/>
              <div class="flex flex-col space-y-2 justify-between min-w-0">
                <h6 class=""><a data-sveltekit-preload-data="hover" href="/character/{character.id}"><strong>{character.name}</strong></a></h6>
                <p title={character.CharacterVoiceActors.language} class="text-sm opacity-80 truncate min-w-0">
                  {character.CharacterVoiceActors.language}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/await}

  </div>
</section>