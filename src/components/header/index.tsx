import NameHead from "./name-head"
import LanguageChange from "./language-change"
import "./index.css"

export default function Header() {
  return (
    <header>
      <nav className='border-b-2 '>
        <div className='flex justify-between items-center mx-auto'>
          <NameHead />
          <div className='flex items-center lg:order-2'>
            <a
              href='#'
              className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
            >
              Log in
            </a>
            <a
              href='#'
              className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              Get started
            </a>
            <LanguageChange />
          </div>
        </div>
      </nav>
    </header>
  )
}
