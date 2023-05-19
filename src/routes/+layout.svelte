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
  import { afterNavigate } from '$app/navigation';

  const modalComponentRegistry = {
    modalSearch: {
      ref: SearchModal
    }
  }

  // Scroll heading into view
  function scrollHeadingIntoView() {
    if (!window.location.hash) return;
    const elemTarget = document.querySelector(window.location.hash);
    if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
  }

  afterNavigate((params) => {
    // Scroll to top
    const isNewPage = params.from && params.to && params.from.route.id !== params.to.route.id;
    const elemPage = document.querySelector('#page');
    if (isNewPage && elemPage !== null) {
      elemPage.scrollTop = 0;
    }
    // Scroll heading into view
    scrollHeadingIntoView();
  });
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
