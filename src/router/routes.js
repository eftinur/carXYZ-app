import DashLayout from "../layout/DashLayout";
import Blogs from "../pages/Blogs/Blogs";
import AddACar from "../pages/Dashboard/AddACar/AddACar";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
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
    },
    {
        path: '/dashboard',
        element: <DashLayout></DashLayout>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addacar',
                element: <AddACar></AddACar>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default router;