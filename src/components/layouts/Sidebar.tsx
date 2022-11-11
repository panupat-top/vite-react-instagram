import { NavLink } from 'react-router-dom'
import { GrSearch, GrCompass } from 'react-icons/gr'
import {
  IoChatbubbleEllipsesOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoAddCircleOutline,
} from 'react-icons/io5'

export function Sidebar({}: any) {
  const menus = [
    {
      icon: <IoHomeOutline className='w-[26px] h-[26px]' />,
      title: 'หน้าหลัก',
      path: '/',
    },
    {
      icon: <GrSearch className='w-[26px] h-[26px]' />,
      title: 'ค้นหา',
      path: '/',
    },
    {
      icon: <GrCompass className='w-[26px] h-[26px]' />,
      title: 'สำรวจ',
      path: '/',
    },
    {
      icon: <IoChatbubbleEllipsesOutline className='w-[26px] h-[26px]' />,
      title: 'ข้อความ',
      path: '/',
    },
    {
      icon: <IoHeartOutline className='w-[26px] h-[26px]' />,
      title: 'การแจ้งเตือน',
      path: '/',
    },
    {
      icon: <IoAddCircleOutline className='w-[26px] h-[26px]' />,
      title: 'สร้าง',
      path: '/',
    },
  ]

  return (
    <div className='fixed flex flex-col left-0 w-80 bg-white border-r h-full z-10 px-4'>
      <div className='flex items-center h-[100px] ml-4'>
        <img
          className='w-[120px]'
          src='https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg'
          alt='logo'
        />
      </div>

      <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
        <ul className='flex flex-col py-4 space-y-3'>
          {menus.map(menu => (
            <li>
              <NavLink to={menu.path}>
                <div className='grid grid-cols-[60px_1fr] items-center h-12 focus:outline-none hover:bg-[#fafafa] hover:rounded-3xl text-white-600'>
                  <span className='inline-flex justify-center items-center'>
                    {menu.icon}
                  </span>
                  <span className='ml-2 text-lg truncate'>{menu.title}</span>
                </div>
              </NavLink>
            </li>
          ))}

          <li>
            <div className='grid grid-cols-[60px_1fr] items-center h-12 focus:outline-none hover:bg-[#fafafa] hover:rounded-3xl text-white-600'>
              <span className='inline-flex justify-center items-center'>
                <div className='w-[32px] h-[32px] bg-slate-100 rounded-full' />
              </span>
              <span className='ml-2 text-lg truncate'>โปรไฟล์</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
