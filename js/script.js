
const getCountries = async () => {
    try {

        const response = await fetch("https://restcountries.com/v3/all");
        if (!response.ok) {
            throw new Error('Ha surgido un error', response.status);
        }
        const data = await response.json();

        data.sort(function (a, b) {
            const name1 = a.name.common.toUpperCase();
            const name2 = b.name.common.toUpperCase();

            if (name1 > name2) {
                return 1;
            }

            if (name1 < name2) {
                return -1;
            }
            return 0;
        });

        const template = (countriesListId, countries) => { // countriesListId = 'countries-list'
            container = document.getElementById(countriesListId);
            // const ul = document.createElement('ul');
            //container.appendChild(ul);
            container.innerHTML += '<ul></ul>'
            countries.forEach(country => {
                let templateCountry = `
                    <li>
                        <img src="${country.flags[0]}" alt="${country.name.common}" />
                        <p>${country.name.common}</p>
                    </li>
                `
                ul.innerHTML += templateCountry;
            })
        }

        template('countries-list', data);
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
};

getCountries();

function pepito (x) { 
    return Math.pow(x, 2)
}

f(x) = x^2

f(3) = 9

const result = pepito(3)