/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { fetchProperties } from '../utils/api';
import { PropertyList } from '../components/PropertyList';
import { Page } from '../components/Page';

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

  return (
    <Page>
      <PropertyList properties={properties} />
    </Page>
  );
}
