import "./me-image.css"
import meImage from "../../assets/ASCII-art.jpeg"
export function MeImg() {
  return (
    <div className='me-img'>
      <img src={meImage} alt='Image of Ricardo Fedrigo in ascii' />
    </div>
  )
}
