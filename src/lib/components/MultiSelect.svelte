<script>
  import { popup } from '@skeletonlabs/skeleton';

  export let label = '';
  export let options;
  export let selected = [];
  export let input = '';

  let showBadges = selected.length > 0;
  let textInput;

  let popupSettings = {
    event: 'focus-click',
    target: `${label}Popup`,
    placement: 'bottom',
    closeQuery: ''
  };

  function selectOption(option) {
    if(selected.includes(option)) {
      selected = selected.filter(item => item !== option);
    } else {
      selected = [...selected, option];
    }
  }
</script>

<style>
  .active {
      @apply bg-surface-active-token;
  }
  .active:hover {
      @apply bg-surface-300-600-token;
  }
</style>

<div class="flex flex-col gap-2">
  {label}
  <div class="card bg-surface-200-700-token flex items-center w-40 h-10" use:popup={popupSettings} bind:this={textInput}>
    {#if selected.length > 0 && showBadges}
      <span class="badge variant-filled-surface">{selected[0]}</span>
      {#if selected.length > 1}
        <span class="badge variant-filled-surface">+{selected.length - 1}</span>
      {/if}
    {/if}
    <input class="bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg placeholder:text-token placeholder:text-base" type="search" placeholder={selected.length > 0 ? '' : 'Any' } bind:value={input} on:focus={() => showBadges = false} on:blur={() => showBadges = true}/>
    <i class="fa-solid fa-caret-down opacity-50 pr-2"></i>
  </div>

  <div class="card p-0 px-0 w-40 overflow-y-auto max-h-96 z-50" data-popup="{label}Popup">
    <ul class="list">
      {#await options then options}
        {#each options.data as option, i (i)}
          {#if input.length > 0}
            {#if option.toLowerCase().includes(input.toLowerCase())}
              <li class="!rounded-none hover:variant-soft p-2" class:active={selected.includes(option)} on:click={selectOption(option)}>
                <div class="flex flex-row justify-between items-center w-full">
                  {option}
                  {#if selected.includes(option)}
                    <i class="fa-sharp fa-solid fa-circle-check"></i>
                  {/if}
                </div>

              </li>
            {/if}
          {:else}
            <li class="first:!rounded-t last:!rounded-b !rounded-none hover:variant-soft p-2" class:active={selected.includes(option)} on:click={selectOption(option)}>
              <div class="flex flex-row justify-between items-center w-full">
                {option}
                {#if selected.includes(option)}
                  <i class="fa-sharp fa-solid fa-circle-check"></i>
                {/if}
              </div>

            </li>
          {/if}
        {/each}
      {/await}
    </ul>
  </div>
</div>
