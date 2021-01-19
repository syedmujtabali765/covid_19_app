import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {

  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState('pakistan');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://corona.lmao.ninja/v2/countries/${search}`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCountry(resJson);
    }
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => { setSearch(event.target.value) }} />
        </div>

        {!country ? (
        <p className="errorMsg">No Data Found</p>
        ) : (
        <div>
          <br />
          <h1>{ search } </h1>
          <br />
          <h1> Cases: { country.todayCases } </h1>
          <h1>Deaths: { country.deaths } </h1>
          <br />
          <h1>Recovered: { country.recovered } </h1>
          <br />
          <h1>Cases Reported Today: { country.todayCases } </h1>
          <br />
          <h1>Critical: { country.critical } </h1>
        </div>
        )}
      </div>
    </>
  );
}
export default App;


