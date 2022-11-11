import type { RouteObject } from 'react-router-dom'
import { AppLayout } from '@components/layouts/AppLayout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: '/profile', element: <div>profile</div> },
    ],
  },
  { path: '*', element: <div>No Match</div> },
]

export { routes }
