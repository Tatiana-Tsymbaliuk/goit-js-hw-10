export function countryСardTeemplate({ flags, name, capital, population, languages }) {
  return `
    <div class="country-info__container">
      <div class="country-info__wrapper">
        <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="50" />
        <h2 class="country-info__name">${name.official}</h2>
      </div>
      <p><span class="country-info__weight">Capital:</span> ${capital}</p>
      <p><span class="country-info__weight">Population:</span> ${population}</p>
      <p><span class="country-info__weight">Languages:</span> ${Object.values(languages)}</p>
    </div>
  `;
}

export function countryListTemplate({ flags, name }) {
  return `
  <p class="country-list__item">
    <img class="country-list__flags" src="${flags.svg}" alt="${name.official}" width="25" /> ${name.official}</p>
  `;
}