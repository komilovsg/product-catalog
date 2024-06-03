import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/footer.scss';

export default function Footer() {
  const theme = useSelector(state => state.theme.mode);

  return (
    <div>
      <footer className={`footer-body ${theme === "light" ? "light-theme" : "dark-theme"}`} >
  <div className="container px-5 py-8 mx-auto flex justify-between items-center sm:flex-row flex-col">
    <div className='flex flex-wrap gap-5 justify-center items-center'>
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className={`${theme === "light" ? "light-theme" : "dark-theme"}`}>AlifTest</span>
    </a>
    <p className="text-sm text-gray-500">© 2024 AlifTest prog —
      <a href="https://github.com/komilovsg" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@komilovsg</a>
    </p>
    </div>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://www.instagram.com/komilovsg/' className="ml-3 text-gray-500 hover:text-[#b134af]">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href='https://www.linkedin.com/in/komilovsg/' className="ml-3 text-gray-500 hover:text-[#0077B5]">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  )
}
