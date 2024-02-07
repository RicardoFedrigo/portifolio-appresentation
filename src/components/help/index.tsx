import "./help.css"

export function Help() {
  return (
    <div className='help'>
      <div style={{ fontSize: 30 }}>
        <strong>Comandos</strong>.
      </div>
      <div>
        <p>
          <strong>about</strong> - Texto descrevendo um pouco sobre mim e minha carreira.
        </p>
        <p>
          <strong>exp</strong> - Texto sobre minhas experiências e areas atuadas.
        </p>
        {/* <p>
        <strong>proj</strong> - Texto descrevendo projetos realizados.{" "}
      </p> */}
        <p>
          <strong>lang</strong> - Texto descrevendo linguagens de programação e minha proficiência
          em cada uma.
        </p>
        <p>
          <strong>links</strong> - Mostra links para{" "}
          <a className='link-help' href='https://www.linkedin.com/in/ricardo-fedrigo/'>
            linkedin
          </a>
          ,
          <a className='link-help' href='https://github.com/RicardoFedrigo'>
            github
          </a>{" "}
          e{" "}
          <a className='' href='#'>
            gmail
          </a>
        </p>
        <p>
          <strong>all</strong> - Mostra todas as informações como experiências, sobre e projetos.
        </p>
      </div>
    </div>
  )
}
