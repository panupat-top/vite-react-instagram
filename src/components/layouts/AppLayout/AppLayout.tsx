import { Outlet } from 'react-router-dom'

import { Sidebar } from '@components/layouts/Sidebar'

export function AppLayout() {
  return (
    <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#fafafa]'>
      <Sidebar />
      <div className='h-full ml-80'>
        <Outlet />
      </div>
    </div>
  )
}
