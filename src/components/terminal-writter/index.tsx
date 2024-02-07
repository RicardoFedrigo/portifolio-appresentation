import { useState, useEffect } from "react"
import "./index.css"

export default function Terminal({ content = "", speed = 1000 }) {
  const [displayedContent, setDisplayedContent] = useState<string>("")
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    /*Create a new setInterval and store its id*/
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey)
          return index
        }
        return index + 1
      })
    }, speed)
  }, [])

  useEffect(() => {
    setDisplayedContent(displayedContent + content[index])
  }, [index])

  return <pre className='type-writer'>{displayedContent}</pre>
}
