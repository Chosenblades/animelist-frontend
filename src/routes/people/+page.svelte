<script>
  export let data;
</script>

<section>
  <div class="container p-10 mx-auto">
    <p class="pb-2">Browse people</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {#each data.people as person}
        <div class="card rounded pr-2 max-h-20 basis-full lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 m-0 min-w-0 grow">
          <div class="flex flex-row space-x-2 min-w-0">
            <img class="w-14 h-20 object-cover rounded-l" src="{person.image_url}" loading="lazy"/>
            <div class="flex flex-col space-y-2 justify-between min-w-0">
              <h6 class=""><a data-sveltekit-preload-data="hover" href="/people/{person.id}"><strong>{person.name}</strong></a></h6>
              <!--<p title={person.CharacterVoiceActors.language} class="text-sm opacity-80 truncate min-w-0">
                {person.CharacterVoiceActors.language}
              </p>-->
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>