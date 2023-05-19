import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		person: fetchPerson(params.id, fetch),
		streamed: {
			characters: fetchPersonCharacters(params.id, fetch)
		}
	};
}

async function fetchPerson(id, fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/person/${id}`);
	const person = await res.json();
	return person;
}

async function fetchPersonCharacters(id, fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/person/${id}/characters`);
	const characters = await res.json();
	return characters;
}
