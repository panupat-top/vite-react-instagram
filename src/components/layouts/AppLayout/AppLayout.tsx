import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      navbar
      <Outlet />
      footer
    </div>
  )
}
