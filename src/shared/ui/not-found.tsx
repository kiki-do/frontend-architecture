import type { FC } from 'react';

export const NotFound: FC = () => {
  return (
    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

NotFound.displayName = 'NotFound';
