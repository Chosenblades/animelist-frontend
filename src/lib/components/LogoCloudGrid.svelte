<script>
  export let values;
  export let type;
</script>


<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
  {#each values as value}
    <a href="/search/anime?{type}={value}" class="logo-item">{value}</a>
  {/each}
</div>
