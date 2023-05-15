<script>
	// The ordering of these imports is critical to your app working properly
	//import '@skeletonlabs/skeleton/themes/theme-modern.css';
  import '../themenew.pcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.pcss';

  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import { AppShell } from '@skeletonlabs/skeleton';
  import HeaderAppBar from '$lib/components/Header/HeaderAppBar.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
  import Drawer from '$lib/components/Drawer.svelte';

  import { Modal, modalStore } from '@skeletonlabs/skeleton';
  import SearchModal from '$lib/components/Modals/SearchModal.svelte';

  const modalComponentRegistry = {
    modalSearch: {
      ref: SearchModal
    }
  }
</script>

<Drawer />
<Modal components={modalComponentRegistry} />

<AppShell>
  <svelte:fragment slot="header">
    <HeaderAppBar />
  </svelte:fragment>
  <!--<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
  <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>-->
  <!--<svelte:fragment slot="pageHeader">
    <img class="object-contain md:object-cover object-top w-full h-full" src="/images/anime-girl-3.png"/>
  </svelte:fragment>-->
  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
  <svelte:fragment slot="footer">

  </svelte:fragment>
</AppShell>
