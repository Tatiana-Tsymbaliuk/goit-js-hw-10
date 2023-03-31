import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { countryСardTeemplate, countryListTemplate } from './templates';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputSearch = document.querySelector("#search-box")
const countryInfo = document.querySelector(".country-info");
const countryList = document.querySelector(".country-list");

inputSearch.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

function onInputCountry() {
        const countryName = inputSearch.value;
        if (countryName === '') {
                countryInfo.innerHTML = '';
                countryList.innerHTML = '';
                return;
        }

        fetchCountries(countryName)
.then(countrys => {
      if (countrys.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
        return;
      }

      if (countrys.length <= 10) {
        const listMarkup = countrys.map(country => countryListTemplate(country));
        countryList.innerHTML = listMarkup.join('');
        countryInfo.innerHTML = '';
      }

      if (countrys.length === 1) {
        const markup = countrys.map(country => countryСardTeemplate(country));
        countryInfo.innerHTML = markup.join('');
        countryList.innerHTML = '';
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
      return error;
    });        
}


//        




