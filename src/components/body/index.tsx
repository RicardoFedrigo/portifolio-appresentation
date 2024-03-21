import { useEffect, useMemo } from "react"
import { Terminal } from "../terminal"
import { useTerminal } from "../terminal/controller"
import { Help } from "../help"
import { CommandNotFound } from "../command-not-found/command-not-found"
import { About } from "../about"
import { Links } from "../links"
import { Langs } from "../langs"
import { Experiencies } from "../experiences"
// import { WindowsButtons } from "../windows-buttons"
import { useNavigate } from "react-router-dom"
import { SalutationCmd } from "../salutation-cmd"

export default function Body() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal()

  const navigate = useNavigate()

  useEffect(() => {
    resetTerminal()

    pushToHistory(<SalutationCmd />)
  }, [])

  const commands = useMemo(
    () => ({
      about: async () => {
        pushToHistory(<About />)
      },
      help: async () => {
        pushToHistory(<Help />)
      },
      clear: async () => {
        resetTerminal()
        pushToHistory(<SalutationCmd />)
      },
      links: async () => {
        pushToHistory(<Links />)
      },
      all: async () => {
        pushToHistory(
          <>
            <About />
            <Experiencies />
            <Links />
          </>,
        )
      },
      commandNotFound: async () => {
        pushToHistory(<CommandNotFound />)
      },
      exp: () => {
        pushToHistory(<Experiencies />)
      },
      langs: () => {
        pushToHistory(<Langs />)
      },
      exit: () => {
        setTimeout(() => {
          navigate("/")
        }, 1500)
        pushToHistory("Returning to home ...")
      },
    }),
    [pushToHistory],
  )

  return (
    <div className='App'>
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>{">"}</>}
        commands={commands}
      />
    </div>
  )
}
