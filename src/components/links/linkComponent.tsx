import "./linkComponent.css"

import { LinkComponentProps } from "./types"
import { Clipboard } from "../clipboard"

export function LinkComponent({ className, link, icon, message, tagName }: LinkComponentProps) {
  return (
    <div className={className} style={{ whiteSpace: "nowrap" }}>
      <p>
        <a href={link}>
          <strong>
            {icon} {tagName}
          </strong>{" "}
          - <i className='externLink'>{message}</i>
        </a>
        <Clipboard valueToCopy={message} />
      </p>
    </div>
  )
}
