import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, setHeaders }) {
	return {
		licensors: fetchLicensors(fetch)
	};
}

async function fetchLicensors(fetch) {
	const res = await fetch(`${PUBLIC_API_URL}/licensor`);
	const licensors = await res.json();
	return licensors;
}
