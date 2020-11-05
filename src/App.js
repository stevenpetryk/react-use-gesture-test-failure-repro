import { useState } from "react"
import { useHover } from "react-use-gesture"

function App() {
  const [hovered, setHovered] = useState(false)

  const bindGestures = useHover(() => {
    setHovered(true)
  })

  return (
    <>
      <div {...bindGestures()} className="App">
        hover over me
      </div>
      {hovered && <div data-testid="hovering-indicator">hovering!</div>}
    </>
  )
}

export default App
