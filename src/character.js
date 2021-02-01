import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css'
import axios from "axios";
import App from './App';
import axios from 'axios';

function RickAndMorty() {
    const [characters, setChars] = useState([]);
    useEffect(() => {
    axios.get('https://rickandmortyapi.com/')
        .then(res =>{
            const newChars = res.data.results;
            setChars(newChars);
        });
     }, []);
      
    return useState([characters]);

}
  
  ReactDOM.render(
    <RickAndMorty />,
    document.getElementById("root")
  );
  