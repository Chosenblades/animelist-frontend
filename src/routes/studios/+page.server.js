import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		studios: fetchStudios(fetch)
	};
}

async function fetchStudios(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/studio`);
	const studios = await res.json();
	return studios;
}
