import { Link, NavLink } from "react-router-dom"
import Container from "../Container/Container"
import useAuth from "../Hooks/useAuth"
const Navbar = () => {
    const { user, logOut } = useAuth();

    const handelLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const items =
        <>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/"><li><a>Home</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/aboutUs"><li><a>About Us</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/instructors"><li><a>Instructors</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/students"><li><a>Student</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/pages"><li><a>Pages</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/blog"><li><a>Blog</a></li></NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 rounded-lg' : ''} to="/contactUs"><li><a>Contact Us</a></li></NavLink>
        </>
    return (
        <div>
            <Container className="px-0">
                <div className="navbar bg-base-100 fixed right-0 top-0 z-50 lg:px-8">
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
                                {user && <li><a href="https://mail.google.com/mail" target="_blank">
                                    <span className="font-bold">User:</span>
                                    {user?.email || user.displayName}</a></li>}
                               {user?.photoURL && <div className="avatar py-2 ml-4">
                                    <div className="ring-blue-500 ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                        <img src={user?.photoURL} alt="Photo" />
                                    </div>
                                </div>}
                            </ul>
                        </div>
                        <img className="md:w-40 w-32" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="logo" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {items}
                            {user && <li><a href="https://mail.google.com/mail" target="_blank"><span className="font-bold">User :</span> {user?.email || user?.displayName}</a></li>}
                        </ul>
                       {user?.photoURL && <div className="avatar">
                            <div className="ring-blue-500 ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img src={user?.photoURL} alt="Photo" />
                            </div>
                        </div>}
                    </div>
                    <div className="navbar-end">
                        {user
                            ?
                            <button className="btn rounded-full btn-outline border-2 hover:bg-red-500 hover:outline-none hover:border-red-500 border-red-500 ml-2 duration-300" onClick={handelLogOut}>LogOut</button>
                            :
                            <Link className="btn rounded-full btn-outline border-2  hover:bg-red-500 hover:outline-none hover:border-red-500 ml-2 duration-300" to="/login">Login</Link>}
                        <Link to="/register" className="btn rounded-full btn-outline border-2 text-blue-500 hover:bg-red-500 hover:outline-none hover:border-red-500 border-blue-500 ml-2 duration-300">Register</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar