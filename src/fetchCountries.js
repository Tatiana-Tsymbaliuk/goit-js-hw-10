export function fetchCountries(name) {
        const url = 'https://restcountries.com/v3.1/name/';
        const filter = '?fields=name,capital,population,flags,languages';
        return fetch(`${url}${name}${filter}`).then(res => {
                if (!res.ok) {
                        throw new Error(res.status);
                }

                return res.json();
        })
}


