import { BiLogoGmail } from "react-icons/bi"
import { LinkComponent } from "../linkComponent"
export function Gmail() {
  return (
    <>
      <LinkComponent
        className='gmail'
        tagName='Gmail'
        icon={<BiLogoGmail />}
        link='mailto:ricardo.fedrigo1995@gmail.com'
        message='ricardo.fedrigo1995@gmail.com'
      />
    </>
  )
}
