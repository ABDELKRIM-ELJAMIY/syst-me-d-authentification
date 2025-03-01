import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = { email: '', password: '' };
        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return newErrors.email === '' && newErrors.password === '';
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            console.log('Login successful');
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="p-5 relative flex flex-col justify-center items-center h-screen bg-[#0f172a] text-white text-center px-6 overflow-hidden">
            {/* Effets lumineux en fond */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 opacity-25 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Carte en glassmorphism */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 max-w-2xl w-full"
            >
                <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Connexion
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="text-lg text-gray-300 max-w-2xl w-full">
                    <div className="mb-4 text-left">
                        <label className="block text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mt-2 bg-gray-800 text-white border rounded"
                            required
                        />
                        {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
                    </div>
                    <div className="mb-6 text-left">
                        <label className="block text-gray-300">Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 mt-2 bg-gray-800 text-white border rounded"
                            required
                        />
                        {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                        Se connecter
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-300">Ou connectez-vous avec</p>
                    <div className="flex justify-center space-x-2 mt-2">
                        <button className="bg-red-500 text-white p-2 rounded">Google</button>
                        <button className="bg-black text-white p-2 rounded">GitHub</button>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-300">Pas encore de compte ?</p>
                    <button onClick={() => navigate('/register')} className="text-blue-400 font-semibold mt-2">
                        Créer un compte
                    </button>
                </div>

                {/* Go to Home Button */}
                <div className="mt-4 text-center">
                    <button
                        onClick={goToHome}
                        className="text-blue-400 font-semibold mt-2"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
