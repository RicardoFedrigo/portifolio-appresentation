import { Outlet } from "react-router-dom"
import { TransitionProvider } from "./contexts/TransitionContext"
import { PageTransition } from "./components/page-transition"
import { useTransition } from "./contexts/TransitionContext"

function AppLayoutContent() {
  const { isTransitioning } = useTransition()

  return (
    <>
      <PageTransition />
      <div style={{ opacity: isTransitioning ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <Outlet />
      </div>
    </>
  )
}

export function AppLayout() {
  return (
    <TransitionProvider>
      <AppLayoutContent />
    </TransitionProvider>
  )
}
