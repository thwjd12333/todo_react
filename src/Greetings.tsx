import React from "react"
import "./Greetings.scss"
type GreetingsProps = {
  name: string
  mark: string
  optional?: string
  onClick: (name: string) => void // 아무것도 리턴하지 않는다는 함수를 의미합니다.
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name)
  return (
    <div className="test">
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div className="test22">testset</div>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  )
}

Greetings.defaultProps = {
  mark: "!",
}

export default Greetings
