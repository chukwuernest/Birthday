import React from 'react'

const List = ({ people, remove }) => {
  return (
    <>
      {people.map((item) => {
        const { id, name, age, image } = item
        return (
          <article key={id} className='person'>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className='btn' onClick={() => remove(id)}>
                delete
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
