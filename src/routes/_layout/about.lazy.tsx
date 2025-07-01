import { createLazyFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

const About = () => {
  const { t } = useTranslation('', { keyPrefix: 'about-page' });

  return (
    <div className="p-2">
      {t('title')}
      <Button>Click me</Button>
    </div>
  );
};

export const Route = createLazyFileRoute('/_layout/about')({
  component: About,
});
