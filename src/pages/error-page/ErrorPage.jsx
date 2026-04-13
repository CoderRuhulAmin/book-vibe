import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../components/shared/navbar/Navbar';

const ErrorPage = ({ status = "404", message = "Page Not Found" }) => {
    const navigate = useNavigate();

    return (
        <div>
            <header className='bg-base-200 lg:mb-48 shadow-sm sticky-top'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <main className='h-full bg-danger'>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                        <h1 className="text-9xl font-extrabold text-red-500">{status}</h1>
                        <p className="text-2xl mt-4 text-gray-700">{message}</p>
                        <button
                            className="mt-6 btn btn-primary"
                            onClick={() => navigate('/')}
                        >
                            Go Back Home
                        </button>
                    </div>
                </div>
            </main>
            <footer>
                <h2>Footer Section</h2>
            </footer>
        </div>
    );
};

export default ErrorPage;