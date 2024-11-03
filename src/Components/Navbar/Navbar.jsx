import { Link, NavLink } from "react-router-dom"
import Container from "../Container/Container"

const Navbar = () => {
    const items =
        <>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/"><li><a>Home</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/aboutUs"><li><a>About Us</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/instructors"><li><a>Instructors</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/student"><li><a>Student</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/pages"><li><a>Pages</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/blog"><li><a>Blog</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/contactUs"><li><a>Contact Us</a></li></NavLink>
        </>
    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {items}
                            </ul>
                        </div>
                        <img className="w-40" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="logo" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {items}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar