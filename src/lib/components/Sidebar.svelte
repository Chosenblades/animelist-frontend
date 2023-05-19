<script>
  import { drawerStore } from '@skeletonlabs/skeleton';
  import Footer from '$lib/components/Footer/Footer.svelte';

  function onLinkClick() {
    drawerStore.close();
  }
</script>

<div class="flex flex-col justify-between h-full">
  <div class="flex flex-col space-y-4 p-4">
    <a href="/" class="!text-white" on:click={onLinkClick}>Home</a>
    <a href="/anime" class="!text-white" on:click={onLinkClick}>Anime</a>
    <a href="/people" class="!text-white" on:click={onLinkClick}>People</a>
    <a href="/character" class="!text-white" on:click={onLinkClick}>Characters</a>
    <a href="/studios" class="!text-white" on:click={onLinkClick}>Studios</a>
    <a href="/producers" class="!text-white" on:click={onLinkClick}>Producers</a>
    <a href="/licensors" class="!text-white" on:click={onLinkClick}>Licensors</a>
  </div>

  <Footer />
</div>





