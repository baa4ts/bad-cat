import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Outlet />
    </main>
  );
};
