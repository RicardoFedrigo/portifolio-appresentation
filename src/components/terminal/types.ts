import { ReactNode } from "react"

export type TerminalHistoryItem = ReactNode | string
export type TerminalHistory = TerminalHistoryItem[]
export type TerminalPushToHistoryWithDelayProps = {
  content: TerminalHistoryItem
  delay?: number
}

export type TerminalCommands = {
  [command: string]: (flags?: string[]) => void
}

export type TerminalProps = {
  history: TerminalHistory
  promptLabel?: TerminalHistoryItem
  commands: TerminalCommands
}

export type CommandAndFlag = {
  command: string
  flags: string[]
}
