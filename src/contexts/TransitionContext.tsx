import { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

interface TransitionContextType {
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/cmd" || location.pathname === "/single") {
      setIsTransitioning(true)
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 1200)
      return () => clearTimeout(timeout)
    }
  }, [location])

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider")
  }
  return context
}
