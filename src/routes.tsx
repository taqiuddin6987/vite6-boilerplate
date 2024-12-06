/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));

export const routeObjects: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
];
