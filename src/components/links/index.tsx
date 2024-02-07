import { Github } from "./github"
import { Gmail } from "./gmail"
import { Linkedin } from "./linkedin"

export function Links() {
  return (
    <div>
      <div>
        <div>
          <div style={{ fontSize: 30 }}>
            <strong>Repositório e projetos: </strong>
          </div>
          <Github />
        </div>
        <div>
          <div style={{ fontSize: 30 }}>
            <strong>Contato: </strong>
          </div>
          <Linkedin />
          <Gmail />
        </div>
      </div>
    </div>
  )
}
