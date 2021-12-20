import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => {
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

export default Course
