import React, { useState, useEffect } from 'react';
import { fetchProperties } from '../utils/api';

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedProperties = localStorage.getItem('properties');
    if (cachedProperties) {
      setProperties(JSON.parse(cachedProperties));
    } else {
      fetchProperties()
        .then(data => {
          localStorage.setItem('properties', JSON.stringify(data));
          setProperties(data);
        })
        .catch(err => {
          setError(err.toString());
        });
    }
  }, []);

  if (error) return <div>An error occurred: {error}</div>;

  return <div>This is where Property List goes</div>;
}
