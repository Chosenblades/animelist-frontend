import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		people: fetchPeople(fetch)
	};
}

async function fetchPeople(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/person`);
	const people = await res.json();
	return people;
}
