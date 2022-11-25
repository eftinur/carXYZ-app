import CategoryCards from "../pages/Home/Catagories/CategoryCards";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

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
                element: <CategoryCards />,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/categories/${params.category}`)
                }
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