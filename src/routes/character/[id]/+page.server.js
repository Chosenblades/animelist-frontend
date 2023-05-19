import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		character: fetchCharacter(params.id, fetch),
		streamed: {
			animeography: fetchCharacterAnimeography(params.id, fetch),
			voiceactors: fetchCharacterVoiceActors(params.id, fetch)
		}
	};
}

async function fetchCharacter(id, fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/character/${id}`);
	const character = await res.json();
	return character;
}

async function fetchCharacterAnimeography(id, fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/character/${id}/anime`);
	const anime = await res.json();
	return anime;
}

async function fetchCharacterVoiceActors(id, fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/character/${id}/people`);
	const people = await res.json();
	return people;
}
