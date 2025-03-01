import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import white from '../assets/white.jpg';

function Home() {
    return (
        <div className="relative flex flex-col justify-center items-center h-screen bg-[#0f172a] text-white text-center px-6 overflow-hidden">
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
                className="relative z-10 bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-white/20 max-w-3xl"
            >
                <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Bienvenue sur 404.js
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mb-8">
                    Un système d'authentification <span className="text-blue-300 font-bold">sécurisé</span> et moderne basé sur <span className="text-purple-300">JWT</span> et <span className="text-blue-300">OAuth</span>. Accédez en toute sécurité dès maintenant !
                </p>

                {/* Boutons CTA avec animation */}
                <div className="flex space-x-6 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.3 }}
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        <Link to="/register">S'inscrire</Link>
                        
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.3 }}
                        className="px-6 py-3 bg-gray-200 text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition duration-300"
                    >
                        <Link to="/login">Se connecter</Link>
                    </motion.button>
                </div>
            </motion.div>

            {/* Animation décorative */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 w-full flex justify-center"
            >
                {/* <img
                    src={white} 
                    alt="Illustration Authentification"
                    className="w-80 md:w-96 animate-float"
                /> */}
            </motion.div>
        </div>
    );
}

export default Home;
