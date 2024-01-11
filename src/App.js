import React, { useState } from 'react'
import List from './list'
import Data from './data'

function App() {
  const [people, setPeople] = useState(Data)

  const remove = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays today</h2>
        <List people={people} remove={remove} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
