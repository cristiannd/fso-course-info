import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
