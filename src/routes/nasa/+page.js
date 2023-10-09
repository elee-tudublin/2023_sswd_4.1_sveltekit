
/** @type {import('./$types').PageLoad} */
export async function load( { fetch, params }) {

    // URL NASA APOD
    const nasa_URL = `https://api.nasa.gov/planetary/apod?api_key=I5MH6RKPtfsF1usoycxpXgjirhZdcaBu9TfH99999`;

    // Call fetch
    const response = await fetch(nasa_URL);

    // if resonse code 200 (ok)
    if (response.ok) {

        // get json from resonse
        const json = await response.json();

        // return the products array
        return {
                apod: json
            }
        }

    // an error occured - return status code amd mesage
    return {
        status: response.status,
        error: new Error(`Could not load data`)
    };
}


