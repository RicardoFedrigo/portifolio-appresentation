import { useEffect, useMemo } from "react"
import { Terminal } from "../terminal"
import { useTerminal } from "../terminal/controller"
import { Help } from "../help"
import { CommandNotFound } from "../command-not-found/command-not-found"
import Salutation from "../salutation"
import { About } from "../about"
import { Links } from "../links"
import { Langs } from "../langs"
import { Experiencies } from "../experiences"
import { WindowsButtons } from "../windows-buttons"

export default function Body() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal()

  useEffect(() => {
    resetTerminal()

    pushToHistory(
      <>
        <div style={{ fontSize: "130%" }}>
          <strong>Bem vindo!</strong>.
        </div>
        <Salutation />
        <div style={{ fontSize: "120%" }}>
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
