import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        console.log('Logged out');
        navigate("/Home"); 
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
                <p className="mb-4">You are successfully logged in!</p>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
