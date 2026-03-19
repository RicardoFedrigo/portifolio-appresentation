import { useTransition } from "../../contexts/TransitionContext"
import { useLocation } from "react-router-dom"
import "./page-transition.css"

export function PageTransition() {
  const { isTransitioning } = useTransition()
  const location = useLocation()

  return (
    <>
      {isTransitioning && (
        <div className='page-transition-overlay'>
          <div className='transition-content'>
            {location.pathname === "/cmd" && (
              <div className='transition-terminal'>
                <div className='terminal-cursor'>_</div>
                <p className='transition-text'>Initializing Terminal Mode...</p>
              </div>
            )}
            {location.pathname === "/single" && (
              <div className='transition-portfolio'>
                <div className='portfolio-line'></div>
                <p className='transition-text'>Loading Portfolio...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
