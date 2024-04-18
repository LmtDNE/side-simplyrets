/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { Header } from './Header';

const pageStyle = css({
  padding: '0 20px',
  marginTop: 32,
  '@media (max-width: 375px)': {
    padding: '0 15px',
    marginTop: 16,
  },
});

export const Page = ({ children }) => {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            fontFamily: 'Open Sans, sans-serif',
            backgroundColor: '#f4f4f4',
            color: '#333',
          },
          '*': {
            boxSizing: 'border-box',
          },
        }}
      />
      <Header />
      <div css={pageStyle}>{children}</div>
    </>
  );
};
