import "./mode.css"
import { Link } from "react-router-dom"
import TerminalIcon from "../../assets/icons/terminal.png"
import LadingPage from "../../assets/icons/landing-page.png"

export function Mode() {
  return (
    <div className='mode w-full h-auto'>
      <div className='ml-20 mr-20'>
        <div className=' ml-20 text-center text-white-600 text-5xl font-bold h-auto mt-20'>
          <h1>Escolha o modo de apresentação</h1>
        </div>
        <div className='icons-to-mode flex justify-around items-center text-center md:row-auto sm:col-auto mt-36'>
          <div className='zoomable-icons m-2'>
            <Link to='/cmd'>
              <img src={TerminalIcon} className='' alt='Image of terminal linux' />
              <div className='text-center text-white-600 text-3xl font-bold h-auto mt-10'>
                <h1>Terminal mode</h1>
              </div>
            </Link>
          </div>
          <div className='vertical-line'></div>
          <div className=' zoomable-icons w-60 h-50 object-cover m-2'>
            <Link to='/single'>
              <img src={LadingPage} alt='Image of terminal linux' />
              <div className='text-center text-white-600 text-3xl font-bold h-auto mt-10'>

              <h1>Single Page</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
