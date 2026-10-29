import { NavLink } from "react-router-dom"

function Navbar() {
    const movieId = "tt3896198";
    const navLinks = [
        {
            to: "/",
            content: "Home"
        },
        {
            to: "/about",
            content: "About"
        },
        {
            to: `/movie/${movieId}`,
            content: "Movie"
        },
        {
            to: "/contact-us",
            content: "Contact"
        }
    ];

    return (
        <div className="h-10 px-10 py-0.5 flex justify-between items-center shadow-md">
            <h1 className="text-xl select-none">Example</h1>
            <ul className="flex gap-6">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavLink to={link.to} className={({ isActive }) => isActive ? "text-blue-700 border-b-2" : "hover:text-blue-700 hover:border-b-2"}>
                            {link.content}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button className="px-2 py-0.5 border cursor-pointer hover:bg-gray-100 active:scale-95">Button Example</button>
        </div>
    )
}

export default Navbar