import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch(`/data/booksData.json`).then((res)=>res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books);
    return (
        <div className='my-12'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books: {books.length}</h2>            
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default AllBooks;