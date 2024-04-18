/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerCss = css({
  display: 'inline-block',
  width: 315,
  bold: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 4,
  },
  p: {
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 4,
  },
  h3: {
    fontSize: 26,
    marginBottom: 4,
    fontWeight: 700,
  },
  small: {
    color: '#979797',
    fontSize: 14,
  },
});

const imageCSS = css({
  width: 315,
  height: 280,
  borderRadius: 4,
});

export const Property = ({ estate }) => {
  const { address, property, listPrice, listDate, photos } = estate;
  return (
    <div css={containerCss}>
      <img src={photos[0]} alt='Property' css={imageCSS} />
      <bold>{`${property.bedrooms} BR | ${property.bathsFull + (property.bathsHalf ? 0.5 * property.bathsHalf : 0)} Bath | ${property.area} Sq Ft`}</bold>
      <h3>${listPrice}</h3>
      <p>{address.full}</p>
      <small>Listed on {new Date(listDate).toLocaleDateString()}</small>
    </div>
  );
};
