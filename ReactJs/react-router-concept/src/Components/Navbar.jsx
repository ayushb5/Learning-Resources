import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="h-10 px-10 py-0.5 flex justify-between items-center shadow-md">
            <h1 className="text-xl select-none">Example</h1>
            <ul className="flex gap-4">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-700 border-b-2" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-700 border-b-2" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-blue-700 border-b-2" : ""}>Contact Us</NavLink>
                </li>
            </ul>
            <button className="px-2 py-0.5 border cursor-pointer hover:bg-gray-100 active:scale-95">Button Example</button>
        </div>
    )
}

export default Navbar