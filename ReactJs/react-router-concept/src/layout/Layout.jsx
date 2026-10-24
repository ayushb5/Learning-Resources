import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

function Layout() {
    return (
        <div>
            <Navbar />
            <main className="h-screen bg-gray-200">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout