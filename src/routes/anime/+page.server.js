import { PUBLIC_API_URL } from '$env/static/public';

const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
const season = seasons.at(Math.floor((new Date().getMonth() / 12) * 4) % 4); //seasons[Math.floor((new Date().getMonth() / 12) * 4) % 4];
const lastSeason = seasons.at((Math.floor((new Date().getMonth() / 12) * 4) % 4) - 1);
const year = new Date().getFullYear();

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
			thisSeasonAnime: fetchThisSeasonAnime(fetch),
			lastSeasonAnime: getchLastSeasonAnime(fetch)
		}
	};
}

async function fetchThisSeasonAnime(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/anime?seasons=${season}&years=${year}`);
	const anime = await res.json();
	return anime;
}

async function getchLastSeasonAnime(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/anime?seasons=${lastSeason}&years=${year}`);
	const anime = await res.json();
	return anime;
}
