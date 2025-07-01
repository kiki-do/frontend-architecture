import { createLazyFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { t } = useTranslation('', { keyPrefix: 'welcome-page' });

  return (
    <div className="p-2">
      <h3>{t('title')}</h3>
    </div>
  );
}
