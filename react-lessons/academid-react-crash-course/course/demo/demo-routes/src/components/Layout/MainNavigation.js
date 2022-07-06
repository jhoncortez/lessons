import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header>
        <h1>Routes</h1>
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            }}
        >
        <Link to="/">Home</Link> |{" "}
        <Link to="/favorites">Favorites</Link> |{" "}
        <Link to="/new-meetup">New MeetUp</Link>
      </nav>
    </header>
  )
}

export default MainNavigation