<script>
  import LogoCloudGrid from "$lib/components/LogoCloudGrid.svelte";
  export let data;
</script>

<section>
  <div class="container p-10 mx-auto">
    <LogoCloudGrid type="studios" values={data.studios.data} />
  </div>
</section>