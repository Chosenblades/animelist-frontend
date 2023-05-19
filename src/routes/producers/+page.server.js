import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		producers: fetchProducers(fetch)
	};
}

async function fetchProducers(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/producer`);
	const producers = await res.json();
	return producers;
}
