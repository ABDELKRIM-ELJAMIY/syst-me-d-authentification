import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};

        if (!fullName.trim()) newErrors.fullName = "Full name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!password.trim()) newErrors.password = "Password is required";
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post("http://localhost:5000/api/auth/register", {
                name: fullName,
                email,
                password
            });
            navigate("/login");
        } catch (error) {
            console.error("Registration failed", error.response.data);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 shadow-md rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

              
                <label className="block font-medium mb-1">Full Name</label>
                <input
                    type="text"
                    className="border p-2 mb-1 w-full rounded"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

             
                <label className="block font-medium mt-3 mb-1">Email</label>
                <input
                    type="email"
                    className="border p-2 mb-1 w-full rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

               
                <label className="block font-medium mt-3 mb-1">Password</label>
                <input
                    type="password"
                    className="border p-2 mb-1 w-full rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

               
                <label className="block font-medium mt-3 mb-1">Confirm Password</label>
                <input
                    type="password"
                    className="border p-2 mb-1 w-full rounded"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

               
                <button type="submit" className="bg-green-500 text-white p-2 mt-4 rounded w-full hover:bg-green-600">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
