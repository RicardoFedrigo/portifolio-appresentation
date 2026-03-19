import { useNavigate } from "react-router-dom"
import { About } from "../../components/about"
import { Experiencies } from "../../components/experiences"
import { Links } from "../../components/links"

import "./index.css"

export function SinglePage() {
  const navigate = useNavigate()

  return (
    <div className='single-page'>
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <div className="indent-8 ml-20 mr-20">
        
        <About />
        <br />
        <Experiencies />
        <br />
        <Links />
      </div>
      <div className='single-page-footer' >
        <footer />
      </div>
    </div>
  )
}
