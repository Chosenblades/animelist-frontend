<script>
  import LogoCloudGrid from "$lib/components/LogoCloudGrid.svelte";
  export let data;
</script>

<section>
  <div class="container p-10 mx-auto">
    <LogoCloudGrid type="producers" values={data.producers.data} />
  </div>
</section>