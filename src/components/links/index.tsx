import { Github } from "./github"
import { Gmail } from "./gmail"
import { Linkedin } from "./linkedin"

export function Links() {
  return (
    <div className='links'>
      <div className='links-repository'>
        <div className='title' style={{ fontSize: 30 }}>
          <strong>Repositório e projetos: </strong>
        </div>
        <Github />
      </div>
      <div className='links-social'>
        <div style={{ fontSize: 30 }}>
          <strong>Contato: </strong>
        </div>
        <Linkedin />
        <Gmail />
      </div>
    </div>
  )
}
