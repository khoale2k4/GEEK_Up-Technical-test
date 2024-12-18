import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center animate-fade-in">
                <img
                    src="/sidebar/geekup-logo-general.svg"
                    alt="Logo"
                    className="w-30 h-30 mb-4 animate-bounce-slow"
                />
                <div className="loader mb-4"></div>
                <p className="text-lg text-gray-800 font-semibold animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;
