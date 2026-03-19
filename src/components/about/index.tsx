import { MeImg } from "./me-image"

export function About() {
  return (
    <div className='about'>
      <div>
        <MeImg />
      </div>

      <div style={{ fontSize: 30, textAlign: "center" }}>
        <strong>Ricardo Fedrigo</strong>.
      </div>

      <div>
        <p>
          {"   "}Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas na Universidade
          Vencedor do 1º lugar no 2º Hackathon Agrotec Campo Mourão, escolhido como programador dos
          times. Apaixonado por conversar sobre design patterns, novas soluções e abordagens
          inovadoras.
        </p>
        <p>
          {"   "}Trabalho com Node.js há 4 anos, criando, mantendo e revisando APIs seguindo o
          padrão REST. Possuo experiência com Vue.js, React.js e PHP (5.6 e 7) no front-end, e com
          TypeScript, Nest.js, PostgreSQL no backend. Experiente em criação de microsserviços
          utilizando Docker e Docker-compose para preparar ambientes de deploy, com testes
          realizados por ferramentas como Jest e Supertest.
        </p>
        <p>
          {"   "}Priorizo ser resiliente no ambiente corporativo, prezando sempre pela integração e
          bem-estar entre membros da equipe. Convicto de que uma equipe comunicativa e unida sempre
          apresenta melhor resultado e produtividade.
        </p>
      </div>
    </div>
  )
}
