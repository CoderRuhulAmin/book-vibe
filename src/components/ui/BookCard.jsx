import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/book-details/${book.bookId}`} className="card bg-base-100 w-full shadow-sm">
            <div className='p-6 bg-base-200 flex justify-center'>
                <img
                    src={book.image}
                    alt={book.bookName} 
                    className='rounded-xl h-60'    
                />

            </div>
            
            <div className="card-body space-y-2">
                <div className='flex items-center gap-4'>
                    {
                        book.tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-green-100">{tag}</div>)
                    }
                </div>
                <h2 className="card-title text-2xl">{book.bookName}</h2>
                <p className='font-semibold text-lg'>By: {book.author}</p>
                <div className='border-t border-dashed'></div>
                <div className="card-actions justify-between">
                    <div className="font-semibold">{book.category}</div>
                    <div className="font-semibold flex items-center gap-2">{book.rating} <CiStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;