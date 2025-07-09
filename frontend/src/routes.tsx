import type { JSX } from 'react';
import { MainPage } from './pages';

interface Route {
  path: string;
  element: JSX.Element;
}

export const ROUTES: Array<Route> = [
  {
    path: '/',
    element: <MainPage />,
  },
];
