import React, { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Country from "./Country";
import "bootstrap/dist/css/bootstrap.css";

const Countryapi = () => {
  const [countries, setCountries] = useState([]);
  const [allcountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const fetchAllCountries = () => {
    return fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
        setCountries(data);
      });
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  // Sorting Countries by Name
  const sortCountryName = [...countries].sort((a, b) =>
    a.name.common > b.name.common ? 1 : -1
  );

  console.log(sortCountryName);

  function createCountry(countryList) {
    return (
      <Country
        key={countryList.id}
        name={countryList.name.common}
        capital={countryList.capital}
        continents={countryList.continents}
        population={countryList.population}
        image={countryList.flags.svg}
        currency={countryList.currencies}
        languages={countryList.languages}
        timezones={countryList.timezones}
        subregion={countryList.subregion}
        countrycode={countryList.idd}
      />
    );
  }

  // Search Country By Name
  const searchOneCountry = (event) => {
    const matchCountry = allcountries.filter((country) => {
      return `${country.name.common}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setSearchCountry(event.target.value);
    setCountries(matchCountry);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel>Search Country</InputLabel>
          <Input
            id="searchCountry"
            type="text"
            autoComplete="off"
            variant="standard"
            style={{ width: 220 }}
            value={searchCountry}
            onChange={searchOneCountry}
          />
        </FormControl>
      </div>

      <div>{sortCountryName.map(createCountry)}</div>
    </div>
  );
};

export default Countryapi;
