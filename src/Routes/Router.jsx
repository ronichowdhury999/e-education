import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"
import AboutUs from "../Pages/AboutUs/AboutUs"
import Instructors from "../Pages/Instructors/Instructors"
import ContactUs from "../Pages/ContactUs/ContactUs"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Students from "../Pages/Student/Students"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import Pages from "../Pages/Courses/Pages"
import Categories from "../Pages/Courses/Categories"
import DetailsPage from "../Pages/Courses/DetailsPage"
import Blog from "../Pages/Blog/Blog"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/aboutUs',
                element: <ProtectedRoute>
                    <AboutUs />
                </ProtectedRoute>
            },
            {
                path: '/instructors',
                element: <Instructors />,
                loader: () => fetch('../instructors.json')
            },
            {
                path: '/students',
                element: <Students />
            },
            {
                path: "/pages",
                element: <Pages />,
                loader: () => fetch('../pages.json'),
                children: [
                    {
                        path: "/pages/:category",
                        element: <Categories />,
                        loader: () => fetch("../pages.json")

                    }
                ]
            },
            {
                path: "/details/:detailId",
                element: <DetailsPage/>,
                loader: ()=> fetch("../pages.json")
        
              },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])



export default Router