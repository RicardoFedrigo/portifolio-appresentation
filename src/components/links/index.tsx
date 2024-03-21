import { Github } from "./github"
import { Gmail } from "./gmail"
import { Linkedin } from "./linkedin"

import { useLocation } from "react-router-dom"

export function Links() {
  const pathname = useLocation().pathname

  const textSide = (): string => {
    if (pathname === "/single") return " text-center"
    return "text-left"
  }


  
  return (
    <div className={"links" + textSide()}>
      <div className='links-repository'>
        <div className='title' style={{ fontSize: 30 }}>
          <strong>Repositório e projetos: </strong>
        </div>
        <Github />
      </div>
      <div className='links-social  grid grid-col-2'>
        <div style={{ fontSize: 30 }}>
          <strong>Contato: </strong>
        </div>
        <div className={(pathname === "/single" ? "flex justify-center items-center" : "")}>
          <Linkedin />
          <Gmail />
        </div>
      </div>
    </div>
  )
}
