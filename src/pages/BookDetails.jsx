import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../components/context/BookContext';

// const bookPromise = fetch('/data/booksData.json').then((res) => res.json());

const BookDetails = () => {
    const { id } = useParams();
    // console.log(typeof id);

    // const books = use(bookPromise);
    const books = useLoaderData();
    // console.log(books);

    // const expectedBook = books.find((book) => book.bookId == id);
    const expectedBook = books.find((book) => book.bookId === Number(id));

    // console.log(expectedBook);

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    // const bookContext = useContext(BookContext);
    const {handleReadList, handleWishList} = useContext(BookContext);
    // console.log(handleReadList, handleWishList);


    return (
        <div className="grid grid-cols-2 justify-between items-center lg:card-side bg-base-200 shadow-sm my-12 rounded-lg">
            <div  className="w-full flex justify-center items-center">
                <figure className='rounded-lg'>
                    <img
                        src={image}
                        alt={author}
                        className='h-100 p-6 rounded-lg'
                    />
                </figure>
            </div>
            <div className="card-body bg-white">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <p className='py-2 border-y border-base-300'>{category}</p>
                <p className='py-2'>Review: {review}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge text-green-500 bg-green-100"
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div>
                <div className='divider my-2'></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Number of Pages:</th>
                                <td>{totalPages}</td>
                            </tr>
                            <tr>
                                <th>Publisher:</th>
                                <td>{publisher}</td>
                            </tr>
                            <tr>
                                <th>Year of Publishing:</th>
                                <td>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <th>Rating:</th>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-actions justify-start gap-2">
                    <button onClick={()=>handleReadList(expectedBook)} className="btn btn-outline">Mark as Read</button>
                    <button onClick={()=> handleWishList(expectedBook)} className="btn btn-accent">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;