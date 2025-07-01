import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Header } from './-component';

const RootLayout = () => (
  <div className="container m-auto mb-24 overflow-hidden px-4">
    <div className="flex h-full flex-col">
      <div className="container">
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  </div>
);

export const Route = createFileRoute('/_layout')({
  component: RootLayout,
});
