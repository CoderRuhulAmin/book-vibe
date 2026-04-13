import React from 'react';
import HeroImg from '../../assets/images/hero_img.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-full w-full justify-between">
                <img
                    src={HeroImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='space-y-5'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>

                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;