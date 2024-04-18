/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Property } from './Property';

const listCSS = css({
  display: 'grid',
  gridGap: '24px',
  padding: '20px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',

  '@media (min-width: 768px)': {
    maxWidth: '1200px',
    margin: '0 auto',
  },
});

export const PropertyList = ({ properties }) => {
  return (
    <div css={listCSS}>
      {properties.map(property => (
        <Property key={property.mlsId} estate={property} />
      ))}
    </div>
  );
};
