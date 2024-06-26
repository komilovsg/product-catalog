import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ThemeToggle } from './ui/themeToggle';
import '../styles/header.scss';

export default function Header() {
  const theme = useSelector(state => state.theme.mode);

  return (
    <div>
      <header className={`header-body ${theme === "light" ? "light-theme" : "dark-theme"}`}>
  <div className="container mx-auto flex flex-wrap justify-between p-5 items-center dark-theme:text-white">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className={`${theme === "light" ? "light-theme" : "dark-theme"}`}>AlifTest</span>
    </Link>
   
    <ThemeToggle />

  </div>
</header>
    </div>
  )
}
