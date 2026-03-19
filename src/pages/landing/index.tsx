import "./landing.css"
import { Link } from "react-router-dom"

export function Landing() {
  return (
    <div className='landing'>
      <div className='landing-bg'></div>

      <div className='landing-content'>
        <div className='landing-hero'>
          <h1 className='landing-title'>
            <span className='hero-word'>Bem vindo ao meu portifoli</span>
          </h1>
          <p className='landing-subtitle'>
            Escolha como você quer explorar meu trabalho e experiência
          </p>
        </div>

        <div className='landing-cta-container'>
          <Link to='/cmd' className='landing-cta landing-cta-cmd'>
            <div className='cta-icon'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <polyline points='4 17 10 11 4 5'></polyline>
                <line x1='12' y1='19' x2='20' y2='19'></line>
              </svg>
            </div>
            <div className='cta-content'>
              <h2>Terminal Mode</h2>
              <p>Interactive terminal experience</p>
            </div>
            <div className='cta-arrow'>→</div>
          </Link>

          <div className='landing-divider'>
            <span>or</span>
          </div>

          <Link to='/single' className='landing-cta landing-cta-single'>
            <div className='cta-icon'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <rect x='3' y='3' width='18' height='18' rx='2'></rect>
                <line x1='9' y1='9' x2='15' y2='9'></line>
                <line x1='9' y1='15' x2='15' y2='15'></line>
                <line x1='15' y1='9' x2='15' y2='15'></line>
              </svg>
            </div>
            <div className='cta-content'>
              <h2>Single Page</h2>
              <p>Elegant portfolio view</p>
            </div>
            <div className='cta-arrow'>→</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
