import './App.css';
import axios from 'axios';
import {useState} from "react";


function App() {

    const  [countries, setCountries] = useState ([])

    async function getCountries(){

        try {
            const result = await axios.get('https://restcountries.com/v3.1/all')
            console.log(result.data);
            setCountries(result.data);
        } catch (e){
            console.error(e);
        }
    }

    return (
        <>
            <h1>  Maak je applicatie hier! </h1>

            <button type= 'button' onClick= {getCountries}>getCountries</button>

            {countries.length  > 0 &&
                countries.map( (country) => {
                return ( <li key = {country.name?.common} className='countryInfo'>
                        <img height='30' width='50' src={country.flags.svg} alt='flag not found'/>
                        <p className={countryColor(country.region)}>{country.name.common}</p>
                        <p> Has a population of {country.population} people</p>
                    </li>

                );}
                )
            }

        </>
    )
}

export default App
