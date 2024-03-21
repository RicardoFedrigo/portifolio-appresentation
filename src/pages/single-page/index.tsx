import { About } from "../../components/about"
import { Experiencies } from "../../components/experiences"
import { Links } from "../../components/links"

import "./index.css"

export function SinglePage() {
  return (
    <div className='single-page'>
      <div>
        <About />
        <br />
        <Experiencies />
        <br />
        <Links />
      </div>
      <div className='single-page-footer'>
        <footer />
      </div>
    </div>
  )
}
