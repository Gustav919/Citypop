
const CITY_SEARCH_PREFIX = "http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=population&maxrows=1&name_equals=";
const COUNTRY_SEARCH_PREFIX = "http://api.geonames.org/searchJSON?username=weknowit&featureClass=A&orderby=popuation=maxrows=1&name_equals=";
const CITY_WITH_COUNTRY_SEARCH_PREFIX = "http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=population&maxrows=3&country=";
const MAX_CITIES = 3;

type GeoName = {
    name: string;
    population: number;
    countryName: string;
    countryCode: string;
};

type City = {
    name: string;
    population: number;
};

type APIResponse = {
    totalResultsCount: number;
    geonames: GeoName[];
};

/**
 * Fetches some data for a city.
 * @param city the city to search for
 * @returns an object {city?: City, error?: string}. If there is an error the error field will be the error, and the city field will be empty.
 * @see City
 */
async function getDataForCity(city: string): Promise<{ city?: City, error?: string }> {
    try {
        const apiResponse = await fetch(CITY_SEARCH_PREFIX.concat(city));
        const cityResponse: APIResponse = await apiResponse.json();

        if (cityResponse.totalResultsCount <= 0)
            return { error: `No city found with name '${city}'` };

        const geoName = cityResponse.geonames[0];
        return { city: { name: geoName.name, population: geoName.population } };
    } catch (err) {
        return { error: err };
    }
}

/**
 * Getches the name of the top 3 cities with the most population for a given country.
 * @param country the country to search for
 * @returns an object {cities?: string[], error?: string}. If there is an error the error field will be the error, and the cities field will be empty.
 */
async function getTop3CityNamesForCountry(country: string): Promise<{ cities?: string[], error?: string }> {
    try {
        const countryApiResponse = await fetch(COUNTRY_SEARCH_PREFIX.concat(country));
        const countryResponse: APIResponse = await countryApiResponse.json();

        const geoName = countryResponse.geonames[0];
        if (countryResponse.totalResultsCount <= 0 || geoName.name !== geoName.countryName)
            return { error: `No country found with name '${country}'` };

        const citySearchApiResponse = await fetch(CITY_WITH_COUNTRY_SEARCH_PREFIX.concat(geoName.countryCode));
        const citySearchResponse: APIResponse = await citySearchApiResponse.json();

        const cities: string[] = [];
        for (var i = 0; i < Math.min(citySearchResponse.totalResultsCount, MAX_CITIES); i++) {
            const city = citySearchResponse.geonames[i];
            cities.push(city.name.replace(new RegExp('"', 'g'), ''));
        }

        return { cities };
    } catch (err) {
        return { error: err };
    }
}

export { City, getDataForCity, getTop3CityNamesForCountry };