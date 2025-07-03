import { useTranslation } from 'react-i18next';

import type { FC } from 'react';

import notFoundGif from '@/assets/image/404.gif';
import { CustomLink } from '@/shared/ui';

export const NotFound: FC = () => {
  const { t } = useTranslation('', { keyPrefix: 'not-found' });
  return (
    <div className="m-auto flex h-full max-w-[500px] flex-col items-center justify-center">
      <img className="rounded-2xl" src={notFoundGif} alt="404" />
      <h1>404</h1>
      <p>{t('title')}</p>
      <CustomLink to="/">{t('home')}</CustomLink>
    </div>
  );
};
