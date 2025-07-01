import { Link } from '@tanstack/react-router';

import type { FC } from 'react';

import notFoundGif from '@/assets/image/404.gif';

export const NotFound: FC = () => {
  return (
    <div className="m-auto flex h-full max-w-[500px] flex-col items-center justify-center">
      <img className="rounded-2xl" src={notFoundGif} alt="404" />
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to home</Link>
    </div>
  );
};
