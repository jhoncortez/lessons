import {useState} from 'react'

const States = props => {
    const [person, setPerson] = useState({
        name:"Jon",
        age:"31",
        country:"Colombia"
    })
    const updatePersonName = (nameToChange) => {
        setPerson(previousProps => {
            return {...previousProps, name:nameToChange}
        })
    }
    return (
        <>
          <h1>My name is {person.name}</h1>
          <p>
            I'm {person.age} years old.
          </p>
          <p>
              I'm from {person.colombia}
          </p>
          <button
            type="button"
            onClick={() => updatePersonName("Jonathan Cortes")}
          >Change name</button>
        </>
      )
}


export default States
