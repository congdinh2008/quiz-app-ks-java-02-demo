import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

const Header = () => {
    const { isAuthenticated, userInformation, logout } = useAuth();

    return (
        <header className="flex items-center justify-between border-b-2 border-gray-300 shadow-md">
            <nav className="w-4/5 mx-auto flex items-center justify-between py-4">
                <Link to="/" className="brand">Quiz App</Link>
                <ul className="flex justify-center">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? "p-4 bg-cyan-500 text-white" : "p-4 hover:bg-cyan-500 hover:text-white"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "p-4 bg-cyan-500 text-white" : "p-4 hover:bg-cyan-500 hover:text-white"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "p-4 bg-cyan-500 text-white" : "p-4 hover:bg-cyan-500 hover:text-white"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin' className={({ isActive }) => isActive ? "p-4 bg-cyan-500 text-white" : "p-4 hover:bg-cyan-500 hover:text-white"}>Dashboard</NavLink>
                    </li>
                </ul>
                {isAuthenticated ? (
                    <div className="user-profile flex justify-center relative">
                        <img src={userInformation?.avatar ?? 'avatar.png'} alt={userInformation?.displayName} className="w-10 h-10 rounded-full" />
                        <ul className="absolute top-full right-0 bg-white border mt-2 shadow-lg w-40">
                            <li>
                                <NavLink className="block p-4 hover:bg-cyan-500 hover:text-white" to="/profile">{userInformation?.displayName}</NavLink>
                            </li>
                            <li>
                                <button className="block p-4 hover:bg-cyan-500 hover:text-white" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <ul className="user-profile flex justify-center">
                        <li>
                            <NavLink className="p-4 hover:bg-cyan-500 hover:text-white" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="p-4 hover:bg-cyan-500 hover:text-white" to="/register">Register</NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header;