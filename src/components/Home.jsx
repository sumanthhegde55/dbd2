import React, {useContext} from 'react'
import { FunctionsContext } from './context/FunctionsProvider';
import NavBar from './NavBar';
import Books from './books/Books';
import SingleBook from './books/SingleBook';
import MyLists from './lists/MyLists';
import { AccountContext } from './context/AccountProvider';

const Home = () => {
    const {books,bookId} = useContext(FunctionsContext);
    const {account} = useContext(AccountContext);
    return (
        <>
            <div>
            <NavBar/>
            </div>
            <div style={{paddingTop:'50px'}}>
            {account ? books ? Object.keys(bookId).length !== 0 ? <SingleBook /> : <Books/> : <MyLists/> : null}
            </div>
        </>
    )
}

export default Home
