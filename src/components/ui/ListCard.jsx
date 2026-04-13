import React from 'react';
import { CiStar } from 'react-icons/ci';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineAccessTime } from 'react-icons/md';
import { SiReadthedocs } from 'react-icons/si';
import { Link } from 'react-router';

const ListCard = ({book}) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="flex bg-base-100 w-full border rounded-lg border-base-300">
            <div className='p-6 m-6 bg-base-200 flex justify-center'>
                <img
                    src={image}
                    alt={bookName} 
                    className='rounded-xl h-40'    
                />

            </div>
            
            <div className="card-body space-y-2">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p className='font-semibold text-lg'>By: {author}</p>
                <div className='flex items-center gap-4'>
                    <strong>Tag</strong>
                    {
                        tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-green-100">{tag}</div>)
                    }
                    <span className='flex items-center gap-2'><MdOutlineAccessTime /> Year of Publishing: {yearOfPublishing}</span>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'><LuUsers /> Publisher: {publisher} </div>
                    <div className='flex items-center gap-2'><SiReadthedocs /> Pages {totalPages} </div>
                </div>
                <div className='divider'></div>
                <div className="card-actions ">
                    <div className='badge p-5 bg-blue-100 rounded-full text-blue-500 font-semibold'>Category: {category}</div>
                    <div className='badge p-5 bg-orange-100 rounded-full text-orange-500 font-semibold'>Rating: {rating} <CiStar /></div>
                    <Link to={`/book-details/${bookId}`} className='btn bg-green-500 rounded-full text-base-200 font-semibold'>View Details</Link>
                </div>
            </div>
        </div>
        
    );
};

export default ListCard;