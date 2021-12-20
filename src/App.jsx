import Content from './components/Content'
import Header from './components/Header'
import Total from './components/Total'

const App = ({ course }) => {
  return (
    <>
      {course.map((e) => {
        return (
          <div key={e.id}>
            <Header name={e.name} />
            <Content parts={e.parts} />
            <Total parts={e.parts} />
          </div>
        )
      })}
    </>
  )
}

export default App
