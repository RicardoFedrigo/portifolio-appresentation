import { FaLinkedin } from "react-icons/fa"
import { LinkComponent } from "../link-component"
export function Linkedin() {
  return (
    <>
      <LinkComponent
        className='linkedin'
        tagName='Linkedin'
        icon={<FaLinkedin />}
        link='https://www.linkedin.com/in/ricardo-fedrigo/'
        message='https://www.linkedin.com/in/ricardo-fedrigo/'
      />
    </>
  )
}
