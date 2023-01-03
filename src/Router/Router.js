import { createBrowserRouter } from "react-router-dom";
import AddAdmin from "../Dashboard/Components/AdminUser/AddAdmin";
import AdminUser from "../Dashboard/Components/AdminUser/AdminUser";
import DoctorAppointments from "../Dashboard/Components/DoctorAppointments/DoctorAppointments";
import AddNurse from "../Dashboard/Components/Nursing/AddNurse/AddNurse";
import AllNurse from "../Dashboard/Components/Nursing/AllNurse/AllNurse";
import Orders from "../Dashboard/Components/Orders/Orders";
import AddCategory from "../Dashboard/Components/Product/AddCategory/AddCategory";
import AddProduct from "../Dashboard/Components/Product/AddProduct/AddProduct";
import AllProduct from "../Dashboard/Components/Product/AllProduct/AllProduct";
import UpdateProduct from "../Dashboard/Components/Product/UpdateProduct/UpdateProduct";
import Dashboard from "../Dashboard/Dashboard";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Main from "../layouts/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Nursing from "../Pages/Nursing/Nursing";
import DoctorPayment from "../Pages/Payments/DoctorPayment";
import Register from "../Pages/Register/Register";
import AmbulanceServices from "../Pages/Services/AmbulanceServices/AmbulanceServices";
import OxygenCylinderServices from "../Pages/Services/OxygenCylinderServices/OxygenCylinderServices";
import Services from "../Pages/Services/Services";
import Shop from "../Pages/Shop/Shop";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/shop',
                element: <PrivateRoute><Shop /></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/nurse',
                element: <PrivateRoute><Nursing /></PrivateRoute>
            },
            {
                path: '/doctor-appointment',
                element: <PrivateRoute><Appointment /></PrivateRoute>
            },
            {
                path: '/ambulance',
                element: <AmbulanceServices />
            },
            {
                path: '/oxygen',
                element: <OxygenCylinderServices />
            },
            {
                path: '/cart',
                element: <PrivateRoute> <Cart /></PrivateRoute>
            },
            {
                path: '/my-account',
                element: <MyAccount />
            },
            {
                path: '/doctor-payment/:id',
                loader: ({ params }) => fetch(`https://medlife-server-devshowmik.vercel.app/bookings/${params.id}`),
                element: <DoctorPayment />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]

    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashBoardLayout /></AdminRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/products',
                element: <AllProduct />
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct />
            },
            {
                path: '/dashboard/add-category',
                element: <AddCategory />
            },
            {
                path: '/dashboard/product/update/:id',
                loader: ({ params }) => fetch(`https://medlife-server-devshowmik.vercel.app/products/${params.id}`),
                element: <UpdateProduct />
            },
            {
                path: '/dashboard/nurse',
                element: <AllNurse />
            },
            {
                path: '/dashboard/doctor-appointments',
                element: <DoctorAppointments />
            },
            {
                path: '/dashboard/add-nurse',
                element: <AddNurse />
            },
            {
                path: '/dashboard/admin',
                element: <AdminUser />
            },
            {
                path: '/dashboard/add-admin',
                element: <AddAdmin />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            }


        ]
    }
])