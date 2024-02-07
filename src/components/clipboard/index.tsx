import { RxClipboardCopy } from "react-icons/rx"
import { ClipboardProps } from "./types"

export function Clipboard({ valueToCopy }: ClipboardProps) {
  return (
    <a className='clipboard'>
      <RxClipboardCopy
        onClick={() => {
          navigator.clipboard.writeText(valueToCopy)
        }}
      />
    </a>
  )
}
