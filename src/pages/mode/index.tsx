import { Link } from "react-router-dom"

export function Mode() {
  return (
    <div className='mode'>
      <div className='choose-mode'>
        <h1>Escolha o modo de apresentação</h1>
      </div>
      <div>
        <Link to='/cmd'>
          <h2>CMD</h2>
        </Link>
      </div>
      <div>
        <Link to='/single'>
          <h2>Single Page</h2>
        </Link>
      </div>
      <div></div>
    </div>
  )
}
