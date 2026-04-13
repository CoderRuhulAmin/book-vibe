import React from 'react';
import Navbar from '../../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <header className='bg-base-200 shadow-sm sticky-top top-0'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <main className='h-full bg-danger'>
                <div className='container mx-auto'>
                    <Outlet />
                </div>
            </main>
            <footer>
                <h2>Footer Section</h2>
            </footer>
        </div>
    );
};

export default Home;