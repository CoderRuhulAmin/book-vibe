import React, { useContext, useState } from 'react';
import { BookContext } from '../../components/context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';
import { RiArrowDownSFill } from 'react-icons/ri';

const Books = () => {

    const { readList, wishList, handleWishList, handleReadList } = useContext(BookContext);
    console.log(readList, wishList);

    const [sortingType, setSortingType] = useState('');

    console.log('sortingType:',  sortingType);

    return (
        <div className='container mx-auto mt-12'>


            <Tabs>
                <TabList>
                    <div className={`flex justify-between items-center`}>
                        <div>
                            <Tab>Read List: ({readList.length})</Tab>
                            <Tab>Wish List: ({wishList.length})</Tab>
                        </div>
                        <div className='text-end'>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1">Shorting by: {sortingType.toUpperCase()} <RiArrowDownSFill size={16}/></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li onClick={()=>setSortingType('pages')}><a>Pages</a></li>
                                    <li onClick={()=>setSortingType('rating')}><a>Rating</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabList>

                <TabPanel>
                    <div className='my-12'>
                        <ListedReadList readList={readList} sortingType={sortingType} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='my-12'>
                        <ListedWishList wishList={wishList} sortingType={sortingType} handleWishList={handleWishList} handleReadList={handleReadList} />
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;