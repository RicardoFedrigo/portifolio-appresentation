import { ReactNode } from "react"

export type SiteForLinkProps = "github" | "linkedin" | "gmail"

export type LinkComponentProps = {
  className: string
  link: string
  icon: ReactNode | any
  message: string
  tagName: string
}
