import React, { useEffect, useState } from 'react';
import './style.css';

function ApiCall() {
  const api = 'https://covid19.mathdro.id/api/countries/INDIA';
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(items);
  return <div>Just Check Console!</div>;
}

export default ApiCall;
