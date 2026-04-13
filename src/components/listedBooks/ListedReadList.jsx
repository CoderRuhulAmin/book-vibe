import React, { useContext, useEffect, useState } from 'react';
import ListCard from '../ui/ListCard';
import { BookContext } from '../context/BookContext';

const ListedReadList = ({sortingType}) => {

    const { readList, handleReadList, handleWishList } = useContext(BookContext);
    
    const [sortedList, setSortedList] = useState(readList)
        useEffect(()=>{
            if(sortingType){
                if(sortingType === 'pages'){
                    const sortedData = [...readList].sort(
                        (a,b)=>a.totalPages - b.totalPages,
                    );
                    console.log(sortedData)
                    setSortedList(sortedData)
                }else if(sortingType === 'rating'){
                    const sortedData = [...readList].sort(
                        (a,b)=>a.rating - b.rating,
                    );
                    console.log(sortedData)
                    setSortedList(sortedData)
                }
            }
        }, [sortingType, readList])


    if (readList.length <= 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
                <h2 className='font-bold text-3xl'>No read list data found!</h2>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 gap-4 space-y-5'>
            {
                sortedList.map(book => <ListCard key={book.bookId} book={book} handleReadList={handleReadList} handleWishList={handleWishList} />)
            }
        </div>
    );
};

export default ListedReadList;