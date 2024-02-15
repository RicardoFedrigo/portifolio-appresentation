import "./terminal.css"
import { ForwardedRef, forwardRef, useCallback, useEffect, useRef, useState } from "react"
import { CommandAndFlag, TerminalProps } from "./types"
import { WindowsButtons } from "../windows-buttons"

export const Terminal = forwardRef((props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { history = [], promptLabel = ">", commands = {} } = props

  const [isBlinking, setIsBlinking] = useState<boolean>(false)
  const [inputInFocus, setinputInFocus] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>()
  const [input, setInputValue] = useState<string>("")

  useEffect(() => {
    inputRef.current?.focus()
    blinkingInput()
  })

  const blinkingInput = (): void => {
    if (!inputInFocus) {
      setTimeout(() => {
        setIsBlinking(!isBlinking)
      }, 500)
      return
    }
    setIsBlinking(false)
  }

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
    <div className='terminal-window'>
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
              placeholder={isBlinking ? "|" : ""}
              style={{ fontSize: "100%" }}
              onFocus={() => setinputInFocus(true)}
              onBlur={() => setinputInFocus(false)}
              onKeyDown={handleInputKeyDown}
              onChange={handleInputChange}
              // @ts-ignore
              ref={inputRef}
            />
          </div>
        </div>
      </div>
    </div>
  )
})
