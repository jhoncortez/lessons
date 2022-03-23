/**
 * the Layout component has <Outlet> and <Link> elements 
 * The <Outlet> renders the current route selected
 * <Link> is used to set the URL and keep track of browsing history
 * we use <Link> instad of <a href=""> for menu links
 */
import {Outlet, Link} from 'react-router-dom'
import Footer from '../template-parts/Footer'

const Layout = () => {
  return (
    <>
        Some logo
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        <Footer />
    </>
    
  )
}

export default Layout