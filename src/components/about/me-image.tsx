import "./me-image.css"
import meImageASCII from "../../assets/imgs/ASCII-art.jpeg"
import meImage from "../../assets/imgs/me.jpeg"

import { useLocation } from "react-router-dom"
import { CSSProperties } from "react"

export function MeImg() {
  const pathname = useLocation().pathname

  const correctImage = () => {
    if (pathname === "/single") {
      return meImage
    }
    return meImageASCII
  }

  const styleByPath = (): CSSProperties => {
    if (pathname === "/cmd") return {}

    return { transform: "transform 0.3s ease" }
  }

  const imgZoomClassName = (): string => {
    if (pathname === "/single") return " zoomable-image me-img-single"
    return "me-img-cmd"
  }

  return (
    <div className="'me-img'">
      <img
        src={correctImage()}
        className={imgZoomClassName()}
        style={styleByPath()}
        alt='Image of Ricardo Fedrigo in ascii'
      />
    </div>
  )
}
