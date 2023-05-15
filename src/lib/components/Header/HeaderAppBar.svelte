<script>
  import { AppBar } from '@skeletonlabs/skeleton';
  import { modalStore } from '@skeletonlabs/skeleton';
  import { drawerStore } from '@skeletonlabs/skeleton';
  import { popup } from '@skeletonlabs/skeleton';

  let popupSettings = {
    event: 'click',
    target: 'industryPopup'
  };

  // Drawer Handler
  function drawerOpen() {
    const s = { id: 'sidebar' };
    drawerStore.open(s);
  }

  function triggerSearch() {
    const d = {
      type: 'component',
      component: 'modalSearch',
      position: 'item-start'
    }
    modalStore.trigger(d);
  }
</script>

<AppBar padding="py-4 px-4 md:px-10" regionRowMain="container md:px-10 mx-auto" gap="gap-6">
  <svelte:fragment slot="lead">
    <div class="flex items-center space-x-4">
      <!-- Hamburger Menu -->
      <button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
      <img class="w-10 h-10" src="/images/logo-transparent.webp"/>
    </div>

  </svelte:fragment>
  <div class="hidden md:flex space-x-6">
    <a href="/" class="hover:text-primary-400">Home</a>
    <a href="/" class="hover:text-primary-400">Anime</a>
    <a href="/" class="hover:text-primary-400">Staff</a>
    <a href="/" class="hover:text-primary-400">Characters</a>
    <div class="hover:text-primary-400 cursor-pointer" use:popup={popupSettings}>
      Industry
      <i class="fa-solid fa-caret-down opacity-50"></i>
    </div>
    <div class="card p-4" data-popup="industryPopup">
      <div class="flex flex-col space-y-2">
        <a href="/" class="hover:text-primary-400 border-0 ring-0 focus:ring-0 focus:outline-none">Studios</a>
        <a href="/" class="hover:text-primary-400">Producers</a>
        <a href="/" class="hover:text-primary-400">Licensors</a>
      </div>
    </div>
  </div>
  <svelte:fragment slot="trail">
    <button class="btn p-2 px-4 variant-soft hover:variant-soft-primary" on:click={triggerSearch}>
      <span class="badge hidden md:inline-block">Search</span>
      <i class="fa-sharp fa-solid fa-magnifying-glass" style="margin-left: 0;"></i>
    </button>
  </svelte:fragment>
</AppBar>