import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		characters: fetchCharacters(fetch)
	};
}

async function fetchCharacters(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/character`);
	const characters = await res.json();
	return characters;
}
