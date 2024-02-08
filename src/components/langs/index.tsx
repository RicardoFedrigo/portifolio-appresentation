import {
  FaNode,
  FaJava,
  FaPhp,
  FaDocker,
  FaLinux,
  FaVuejs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNestjs,
  SiCplusplusbuilder,
  SiCsharp,
  SiBun,
  SiMongodb,
  SiAngular,
  SiAmazonsqs,
  SiLodash,
} from "react-icons/si"
import { FaGolang } from "react-icons/fa6"
import { DiPostgresql, DiRedis, DiJqueryLogo } from "react-icons/di"
import { GiChargingBull } from "react-icons/gi"

import { FrameWorks } from "./frame-work-component"
// import { FrameWorks } from "./frame-work-component"

export function Langs() {
  return (
    <div className='langs'>
      <div className='main-langs'>
        <div style={{ fontSize: "120%" }}>Principais stacks: </div>
        <ul>
          <li>
            <a href='https://nodejs.org/en'>
              <FaNode /> Node.js
            </a>
            <dl style={{ fontSize: "60%" }}>
              <FrameWorks frameWorkName='node' />
            </dl>
          </li>

          <li>
            <a href='https://www.typescriptlang.org'>
              <SiTypescript /> Typescript
            </a>
            <dl style={{ fontSize: "60%" }}>
              <FrameWorks frameWorkName='typescript' />
            </dl>
          </li>
        </ul>
      </div>
      <div className='other-langs'>
        <div style={{ fontSize: "120%" }}>Também tenho conhecimento em: </div>
        <ul>
          <li>
            <a href='https://www.java.com/pt-BR/'>
              <FaJava className='other-langs-icon' style={{ marginBottom: "0.3%" }} /> JAVA
            </a>
            <dl style={{ fontSize: "60%" }}>
              <FrameWorks frameWorkName='java' />
            </dl>
          </li>
          <li>
            <a href='https://www.php.net'>
              <FaPhp className='other-langs-icon' style={{ marginBottom: "0.1%" }} /> PHP
            </a>
          </li>
        </ul>
      </div>
      <div className='other-langs'>
        <div style={{ fontSize: "120%" }}>Outras linguagens e frameworks: </div>
        <div className='other-langs-frameworks' style={{ fontSize: "75%" }}>
          <FaDocker /> Docker <FaLinux /> Linux <SiNestjs /> Nest.js <SiCplusplusbuilder /> C/C++{" "}
          <SiBun /> Bun <FaVuejs /> Vue.js <FaGitAlt /> Git <DiPostgresql /> Postgresql{" "}
          <SiMongodb /> MongoDb <SiAmazonsqs /> SQS (aws) <DiRedis /> Redis <GiChargingBull />{" "}
          Bull.js <SiLodash /> Lodash.js <FaBootstrap /> Bootstrap <DiJqueryLogo /> Jquery
        </div>
      </div>
      <div className='learn-langs'>
        <div style={{ fontSize: "120%" }}>Atualmente que estou aprendendo: </div>
        <ul>
          <li>
            <a href='https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/'>
              <SiCsharp /> C#
            </a>
          </li>
          <li>
            <a href='https://go.dev'>
              <FaGolang /> Golang
            </a>
          </li>
          <li>
            <a href='https://angular.io'>
              <SiAngular /> Angular
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
