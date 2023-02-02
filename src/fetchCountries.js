const fetchCountryFields = 'name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}?fields=${fetchCountryFields}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}