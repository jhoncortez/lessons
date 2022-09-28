import React, {useState, useEffect} from 'react';
import MeetUpList from "../components/meetups/MeetUpList"

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ]

const AllMeetupsPage = () => {
  const [isLoading, setLoading] = useState(true)
  const [dataLoaded, setDataLoaded] = useState([])

  useEffect(()=>{
    fetch('https://academind-react-project-bd-default-rtdb.firebaseio.com/meetups.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)

          let meetups = []

          for( let key in data) {
            let meetup = {
              id: key,
              ...data[key]
            }
            meetups.push(meetup)
          }

          setLoading(false)
          setDataLoaded(meetups)
        })
  }, [])

  
  
   
  return (
    <section>
      <h1>All Meet ups</h1>
      {/* <ul>
        {DUMMY_DATA.map((meetup) =>{
          return (
          <li key={meetup.key}>{meetup.title}</li>
          )
        })}
      </ul> */}
      {
        isLoading && <section><p>Loading...</p></section>
      }
      {
        dataLoaded && <MeetUpList meetups={dataLoaded} />
      }
      
      
    </section>
  )
}

export default AllMeetupsPage