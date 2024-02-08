import { FaGithub } from "react-icons/fa"
import { LinkComponent } from "../link-component"

export function Github() {
  return (
    <>
      <LinkComponent
        className='github'
        tagName='Github'
        icon={<FaGithub />}
        link='https://github.com/RicardoFedrigo'
        message='https://github.com/RicardoFedrigo'
      />
    </>
  )
}
