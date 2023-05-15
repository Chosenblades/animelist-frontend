<script>
  import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
  import Sidebar from '$lib/components/Sidebar.svelte';

</script>

<Drawer class="md:hidden">
  {#if $drawerStore.id === 'sidebar'}
    <Sidebar />
  {/if}
</Drawer>