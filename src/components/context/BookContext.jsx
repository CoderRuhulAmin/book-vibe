import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../../utils/localDB';


export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [readList, setReadList] = useState(()=>getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(()=>getAllWishListFromLocalDB());

    // useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB()
    //     console.log(getReadListFromLocalDB)
    //     setReadList(getReadListFromLocalDB)
    
    // }, []);

    const handleReadList = (currentBook) => {

        addReadListToLocalDB(currentBook);

        const isExistInWishList = wishList.find(
            book => book.bookId === currentBook.bookId,
        )
        if(isExistInWishList){
            setWishList(prev => prev.filter(listItem => listItem.bookId !== currentBook.bookId))
        }


        const isExistBook = readList.find(
            book => book.bookId === currentBook.bookId,
        )
        if(isExistBook){
            toast.error(`The book is already existed to the read list!`)
        }else{
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list successfully!`);
        }
        console.log(currentBook, readList)
    }
    const handleWishList = (currentBook) => {

        addWishListToLocalDB(currentBook);

        const isExistInReadList = readList.find(
            book => book.bookId === currentBook.bookId
        )
        if(isExistInReadList){
            toast.error(`This book is already in read list`);
            return;
        }
        const isExistBook = wishList.find(
            book => book.bookId === currentBook.bookId,
        )
        if(isExistBook){
            toast.error(`The book is already existed to the wish list!`)
        }else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to the wish list successfully!`);
        }
        console.log(currentBook, wishList);
    }

    const data = {
        readList, 
        setReadList, 
        handleReadList,
        wishList,
        setWishList,
        handleWishList
    };
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;
