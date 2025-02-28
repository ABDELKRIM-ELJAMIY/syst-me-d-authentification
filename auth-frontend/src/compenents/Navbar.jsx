import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    404.js
                </Link>

                <ul className= "md:flex gap-6  block hidden md:block">
                    <li>
                        <Link to="/Home" className="text-white hover:text-gray-200">
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/dashboard" className="text-white hover:text-gray-200">
                            Dashboard
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/login" className="text-white hover:text-gray-200">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-white hover:text-gray-200">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
