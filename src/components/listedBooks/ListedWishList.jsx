import ListCard from '../ui/ListCard';

const ListedWishList = ({wishList, sortingType, handleWishList, handleReadList}) => {

    let sortedList = wishList;
    if(sortingType === 'pages'){
        sortedList = [...wishList].sort(
            (a,b)=>a.totalPages - b.totalPages,
        );
    }else if(sortingType === 'rating'){
        sortedList = [...wishList].sort(
            (a,b)=>a.rating - b.rating,
        );
    }

    
    if(wishList.length <= 0){
        return (
            <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
                <h2 className='font-bold text-3xl'>No wish list data found!</h2>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 gap-4'>
            {
                sortedList.map(book => <ListCard key={book.bookId} book={book} handleWishList={handleWishList} handleReadList={handleReadList} />)
            }
        </div>
    );
};

export default ListedWishList;