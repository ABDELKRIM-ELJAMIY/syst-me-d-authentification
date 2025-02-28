import React from 'react';

const ComingSoon = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="text-center text-white p-8 bg-opacity-70 rounded-lg">
                <h1 className="text-4xl font-bold mb-4">Our E-Commerce Platform is Coming Soon!</h1>
                <div className="mb-4 text-xl">
                    <p>Stay tuned for updates.</p>
                </div>
                <div className="mb-8">
                    <p className="text-lg">Sign up for early access!</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 rounded-l-md text-black"
                    />
                    <button className="p-2 bg-blue-600 rounded-r-md text-white">
                        Subscribe
                    </button>
                </div>
                <div className="animate-pulse">
                    <p>Countdown Timer (To be added)</p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
