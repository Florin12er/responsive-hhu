import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation()

  const changeTheme = () => {
    if (localStorage.getItem('color-theme') === 'light') {
      localStorage.setItem('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
    }
    window.location.href = location.pathname;
  }

  return (
    <header className='w-full h-28 flex justify-between items-center px-20 bg-white dark:bg-black bg-opacity-25'>
      <h3 className='font-bold dark:text-white'>HHU</h3>
      <div className="flex items-center gap-16 dark:text-white">
        <a className="text2 cursor-pointer">About Us</a>
        <a className="text2 cursor-pointer">Projects</a>
        <a className="text2 cursor-pointer">Upcoming</a>
        <a className="text2 cursor-pointer">Contact</a>
      </div>
      <div className="flex items-cener gap-8">
        <button className="h-14 px-6 text2 rounded-xl text-white dark:text-black bg-black dark:bg-white">
          Donation
        </button>
        <button onClick={changeTheme} className="h-14 px-4 rounded-xl font-medium bg-black dark:bg-white stroke-white dark:stroke-black">
          {/* <img src='./img/theme_dark.png' alt='theme button' className='w-9' /> */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57141 15.9999C8.57141 20.1026 11.8973 23.4284 16 23.4284V8.57129C11.8973 8.57129 8.57141 11.8972 8.57141 15.9999Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9999 1.14258V3.42829" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9999 28.5713V30.857"  strokeLinecap="round" stroke-linejoin="round"/>
            <path d="M30.857 16H28.5713" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.42854 16H1.14282" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.5143 5.48535L24.8914 7.10821" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.1087 24.8906L5.48584 26.5135" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.5142 26.5135L24.8914 24.8906" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.10857 7.10821L5.48572 5.48535" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
