<script>
	import { modalStore } from '@skeletonlabs/skeleton';

	function triggerSearch() {
		const d = {
			type: 'component',
			component: 'modalSearch',
			position: 'item-start'
		}
		modalStore.trigger(d);
	}
</script>

<svelte:head>
	<title>AniDatabase</title>
</svelte:head>

<img class="object-cover md:object-cover object-right-top w-full h-auto min-h-[300px]" src="/images/anime-girl-4.png"/>
<div class="container p-10 pb-0 mx-auto">
	<div class="container mx-auto flex justify-center -mt-36">
		<div class="card variant-glass-surface">
			<header class="card-header text-center"><h3 class="">The anime database that doesn't take ten seconds to load</h3></header>
			<section class="p-4 text-center">
				<div class="space-y-8">
					<h4 class="text-secondary-300">Search for over 20,000 anime with <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-300">AniDatabase</span></h4>
					<button class="btn p-2 px-3 bg-gradient-to-r from-primary-500 to-primary-400" on:click={triggerSearch}>
						<span class="badge">Search</span>
						<i class="fa-sharp fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
			</section>
		</div>
	</div>
</div>
