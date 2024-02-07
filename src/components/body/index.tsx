import { useEffect, useMemo } from "react"
import { Terminal } from "../terminal"
import { useTerminal } from "../terminal/controller"
import { Help } from "../help"
import { CommandNotFound } from "../command-not-found/command-not-found"
import Salutation from "../salutation"
import { About } from "../about"
import { Links } from "../links"

export default function Body() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal()

  useEffect(() => {
    resetTerminal()

    pushToHistory(
      <>
        <div style={{ fontSize: 30 }}>
          <strong>Bem vindo!</strong>.
        </div>
        <Salutation />
        <div style={{ fontSize: 20 }}>
          Para mais informações digite{" "}
          <span style={{ color: "green" }}>
            <strong>help.</strong>
          </span>
        </div>
      </>,
    )
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
      },
      links: async () => {
        pushToHistory(<Links />)
      },
      all: async () => {
        pushToHistory(
          <>
            <About />
            <Links />
          </>,
        )
      },
      commandNotFound: async () => {
        pushToHistory(<CommandNotFound />)
      },
      exp: () => {
        alert("Falta implementar as linguagens de programacao")
      },
      lang: () => {
        alert("Falta implementar as linguagens de programacao")
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
