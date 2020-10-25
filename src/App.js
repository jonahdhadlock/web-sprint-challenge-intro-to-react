import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from '../src/components/Character';
import Quote from '../src/components/Quote';
import Information from '../src/components/Information';
import './App.css';

const App = () => {
 const [data, setData] = useState({});
  useEffect(() => {
axios
      .get(
        `https://swapi.dev/api/people/4/`
      )
      .then((results) => {
        console.log("Results from useEffect of SWAPI", results);
        setData(results.data)
      })
      .catch((err) => {
        console.log("Error occured in useEffect of SWAPI: ", err);
      })
     return ()=>{}
  }, []);
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Trispace:wght@100&display=swap" rel="stylesheet" />
      {data !== null ?
        <Character name={data.name} /> : <span></span>
      }
            {data !== null ?
        <Quote /> : <span></span>
      }
      {data !== null ?
        <Information gender={data.gender} height={data.height} mass={data.mass} /> : <span></span>
      }
       </div>
  );
}
export default App;
