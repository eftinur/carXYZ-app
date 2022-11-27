import Blogs from "../pages/Blogs/Blogs";
import CategoryCards from "../pages/Home/Catagories/CategoryCards";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/categories/:category',
                element: <PrivateRoute><CategoryCards /></PrivateRoute>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/categories/${params.category}`)
                }
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
        ]
    }
])

export default router;