import { createLazyFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  const { t } = useTranslation('', { keyPrefix: 'about-page' });

  return <div className="p-2">{t('title')}</div>;
}
