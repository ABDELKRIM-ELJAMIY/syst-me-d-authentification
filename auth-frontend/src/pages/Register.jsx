import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};
        if (!fullName.trim()) newErrors.fullName = 'Nom complet requis';
        if (!email.trim()) newErrors.email = 'Email requis';
        if (!password.trim()) newErrors.password = 'Mot de passe requis';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                name: fullName,
                email,
                password
            });
            navigate('/login');
        } catch (error) {
            console.error("Échec de l'inscription", error.response ? error.response.data : error.message);
        }
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#0f172a] text-white text-center px-6 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-56 h-56 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 opacity-25 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 max-w-xl w-full"
            >
                <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Inscription
                </h2>
                <form onSubmit={handleRegister} className="text-lg text-gray-300">
                    <div className="mb-4 text-left">
                        <label className="block text-gray-300">Nom complet</label>
                        <div className="flex items-center bg-gray-800 border rounded p-2 mt-2">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full bg-transparent text-white outline-none"
                                required
                            />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-300">Email</label>
                        <div className="flex items-center bg-gray-800 border rounded p-2 mt-2">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent text-white outline-none"
                                required
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-4 flex justify-between gap-4">
                        <div className="w-1/2 text-left">
                            <label className="block text-gray-300">Mot de passe</label>
                            <div className="flex items-center bg-gray-800 border rounded p-2 mt-2">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent text-white outline-none"
                                    required
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div className="w-1/2 text-left">
                            <label className="block text-gray-300">Confirmer</label>
                            <div className="flex items-center bg-gray-800 border rounded p-2 mt-2">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-transparent text-white outline-none"
                                    required
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                        S'inscrire
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-300">Déjà un compte ?</p>
                    <button onClick={() => navigate('/login')} className="text-blue-400 font-semibold mt-2">
                        Se connecter
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

export default Register;
