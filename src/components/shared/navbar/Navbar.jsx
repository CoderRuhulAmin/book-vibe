import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <li><NavLink to={'/'} className={({isActive})=>`font-semibold ${isActive ? "text-green-500 border border-green-500":""}`} >Home</NavLink></li>
        <li><NavLink className={({isActive})=>`font-semibold ${isActive ? "text-green-500 border border-green-500":""}`} to={'/books'} >Listed Books</NavLink></li>
        <li><NavLink className={({isActive})=>`font-semibold ${isActive ? "text-green-500 border border-green-500":""}`} to={'/page-to-read'} >Pages to Read</NavLink></li>
    </>
    return (
        <div className="max-lg:collapse w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2 className="text-xl font-bold"><Link to={'/'}>Book Vibe</Link></h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-success text-white">Login</button>
                    <button className="btn btn-accent text-white">SignUp</button>
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;