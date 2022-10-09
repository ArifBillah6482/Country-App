import { useEffect } from "react";
import { useState } from "react";
import Countries from "./countries";
import SearchCountry from "./search";
import "./style.css";
/////////////////////////
const CountriesProject = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);
  /////////////////////////
  let fake = 1;
  if (fake > 100) {
    console.log(isLoading);
    console.log(error);
  } else {
    fake = 1;
  }
  /////////////////////////
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  /////////////////////////
  const searchCountryFunc = (text) => {
    let value = text.toLowerCase();
    const filteredCountries = countries.filter((data) => {
      const countryName = data.name.common.toLowerCase();
      return countryName.includes(value);
    });
    setFilterCountries(filteredCountries);
  };
  ////////////////////////
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <div>
        <h1 className="headerText">
          Country App <br />
        </h1>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <SearchCountry searchCountry={searchCountryFunc} />
        </div>

        {isLoading && <h3 className="loading">Loading...</h3>}
        {error && <p className="loading">{error.message}</p>}
      </div>
      {/*  */}

      {countries && <Countries countries={filterCountries} />}
    </div>
  );
};
/////////////////////////
export default CountriesProject;
