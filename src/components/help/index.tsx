import "./help.css"

export function Help() {
  return (
    <div className='help'>
      <div style={{ fontSize: "120%" }}>
        <strong>Comandos</strong>.
      </div>
      <div className='commands'>
        <p>
          <strong>about</strong> - Texto descrevendo um pouco sobre mim e minha carreira.
        </p>
        <p>
          <strong>exp</strong> - Texto sobre minhas experiências e areas atuadas.
        </p>
        <p>
          <strong>clear</strong> - Limpa Terminal.{" "}
        </p>
        <p>
          <strong>langs</strong> - Texto descrevendo linguagens de programação e frameworks que
          tenho conhecimento.
        </p>
        <p>
          <strong>links</strong> - Mostra links para contato e mídia sociais como;{" "}
          <a className='link-help' href='https://www.linkedin.com/in/ricardo-fedrigo/'>
            linkedin
          </a>
          ,
          <a className='link-help' href='https://github.com/RicardoFedrigo'>
            github
          </a>{" "}
          e{" "}
          <a className='link-help' href='#'>
            gmail
          </a>
        </p>
        <p>
          <strong>all</strong> - Mostra todas as informações.
        </p>
      </div>
    </div>
  )
}
