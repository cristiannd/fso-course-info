const Total = ({ parts }) => {
  const total = parts.reduce(
    (previo, siguiente) => previo + siguiente.exercises,
    0
  )

  return <strong>Total of {total} exercises</strong>
}

export default Total
