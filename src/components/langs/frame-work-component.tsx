import { FrameWorksProps, FrameworkType } from "./types"

export function FrameWorks({ frameWorkName }: FrameWorksProps) {
  const frameWorks = new Map<string, FrameworkType[]>()

  frameWorks.set("node", [
    {
      name: "jest (back-end)",
      link: "https://jestjs.io/pt-BR/",
    },
    {
      name: "express",
      link: "https://expressjs.com/pt-br/",
    },
    {
      name: "sequelize",
      link: "https://sequelize.org",
    },
    {
      name: "react",
      link: "https://react.dev",
    },
    {
      name: "swagger",
      link: "https://swagger.io",
    },
    {
      name: "Super Test",
      link: "https://www.npmjs.com/package/supertest",
    },
    {
      name: "Faker-br",
      link: "https://www.npmjs.com/package/faker-br",
    },
    {
      name: "Chai.js",
      link: "https://www.chaijs.com",
    },
    {
      name: "Sinon.js",
      link: "https://sinonjs.org",
    },
    {
      name: "Mocha.js",
      link: "https://mochajs.org",
    },
  ])

  frameWorks.set("typescript", [
    {
      name: "Nest.js",
      link: "https://nestjs.com",
    },
    {
      name: "typeorm",
      link: "https://typeorm.io",
    },
  ])

  frameWorks.set("java", [
    {
      name: "spring boot",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      name: "JUnit",
      link: "https://junit.org/junit5/",
    },
  ])

  return (
    <div className='frameworks'>
      {frameWorkName && (
        <>
          <b>frameworks:</b>
          {frameWorks.get(frameWorkName)?.map((f, index) => (
            <a key={`${f.name}-${index}`} href={f.link}>
              {" "}
              {f.name},
            </a>
          ))}
        </>
      )}
    </div>
  )
}
