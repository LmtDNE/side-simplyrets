/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css({
  alignContent: 'center',
  position: 'sticky',
  top: 0,
  backgroundColor: '#F4F4F4',
  zIndex: 1,
  height: 103,
  padding: 24,
  h1: {
    fontSize: 28,
    fontWeight: 600,
  },
  '@media (max-width: 375px)': {
    padding: '10px 15px',
    height: 63,
    h1: {
      fontSize: 14,
    },
  },
});

export const Header = () => (
  <header css={headerStyle}>
    <h1>Property Listings</h1>
  </header>
);
