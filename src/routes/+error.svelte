<script>
  import { dev } from '$app/environment';
  import { page } from '$app/stores';
  const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
  const title = offline ? 'Offline' : $page.status;
  const message = offline ? 'Find the internet and try again' : $page.error.message;
</script>

<style>
    pre {
        font-size: 16px;
        background-color: rgba(255, 255, 255, 0.45);
        border-radius: 3px;
        box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
        padding: 0.5em;
        overflow-x: auto;
    }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <div class="container p-10 pb-0 mx-auto">
    <div class="container mx-auto flex justify-center">
      <div class="flex flex-col">
        <p>Something broke..</p>
        <p>Error: {message}</p>
        {#if dev && $page.error.stack}
          <pre class="max-w-prose">{$page.error.stack}</pre>
        {/if}
      </div>

    </div>
  </div>
</section>