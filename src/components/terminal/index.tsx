import "./terminal.css"
import { ForwardedRef, forwardRef, useCallback, useEffect, useRef, useState } from "react"
import { CommandAndFlag, TerminalProps } from "./types"

export const Terminal = forwardRef((props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { history = [], promptLabel = ">", commands = {} } = props

  const inputRef = useRef<HTMLInputElement>()
  const [input, setInputValue] = useState<string>("")

  useEffect(() => {
    inputRef.current?.focus()
  })

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const spreadCommands = (input: string): CommandAndFlag => {
    const [command, ...flags] = input.toLowerCase().split(" ")

    return { command, flags }
  }

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { command, flags } = spreadCommands(input.toLowerCase())

      console.log({ command, flags })
      if (e.key === "Enter") {
        const commandToExecute = commands?.[command]
        if (commandToExecute) {
          commandToExecute?.(flags)
        } else {
          commands?.commandNotFound(flags)
        }

        setInputValue("")
      }
    },
    [commands, input],
  )

  return (
    <div className='terminal' ref={ref} onClick={focusInput}>
      {history.map((line, index) => (
        <>
          <div className='terminal__line' key={`terminal-line-${index}-${line}`}>
            {line}
          </div>
          <br />
        </>
      ))}
      <div className='terminal__prompt'>
        <div className='terminal__prompt__label'>{promptLabel}</div>
        <div className='terminal__prompt__input'>
          <input
            type='text'
            value={input}
            style={{ fontSize: 20 }}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            // @ts-ignore
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  )
})
function pushToHistory() {
  throw new Error("Function not implemented.")
}
