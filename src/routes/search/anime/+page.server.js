import { error } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	/*const res = await fetch(`${PUBLIC_API_URL}/anime`);

	if (!res.ok) {
		throw error(500, 'Error while fetching anime.');
	}

	const anime = await res.json();*/
	return {
		//anime: anime,
		streamed: {
			demographics: fetchDemographics(fetch),
			genres: fetchGenres(fetch),
			producers: fetchProducers(fetch),
			licensors: fetchLicensors(fetch),
			studios: fetchStudios(fetch),
			themes: fetchThemes(fetch),
			years: fetchYears(fetch)
		}
	};
}

async function fetchDemographics(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/demographic`);
	const demographics = await res.json();
	return demographics;
}

async function fetchGenres(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/genre`);
	const genres = await res.json();
	return genres;
}

async function fetchLicensors(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/licensor`);
	const licensors = await res.json();
	return licensors;
}

async function fetchProducers(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/producer`);
	const producers = await res.json();
	return producers;
}

async function fetchStudios(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/studio`);
	const studios = await res.json();
	return studios;
}

async function fetchThemes(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/theme`);
	const themes = await res.json();
	return themes;
}

async function fetchYears(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/anime/years`);
	const years = await res.json();
	let yearsExpanded = [];
	for (let i = years.min_years; i < years.max_years + 1; i++) {
		yearsExpanded.push(i);
	}
	yearsExpanded = yearsExpanded.sort((a, b) => {
		return b - a;
	});

	return { data: yearsExpanded };
}
