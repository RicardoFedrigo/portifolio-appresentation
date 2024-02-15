import "./index.css"

import Body from "../../components/body"
// import { WindowsButtons } from "../../components/windows-buttons"

export default function Home() {
  return (
    <div>
      {/* <header className='header'>
        <WindowsButtons />
      </header> */}
      <main>
        <div id='body'>
          <Body />
        </div>
      </main>
    </div>
  )
}
