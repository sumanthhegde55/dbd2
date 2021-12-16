import React , { useContext, useState} from 'react'
import { FunctionsContext } from '../context/FunctionsProvider';
import { imageUrl } from '../constants';
import logo0 from './0.PNG';
import logo1 from './0.5.PNG';
import logo2 from './1.PNG';
import logo3 from'./1.5.PNG';
import logo4 from './2.PNG';
import logo5 from './2.5.PNG';
import logo6 from './3.PNG';
import logo7 from './3.5.PNG';
import logo8 from './4.PNG';
import logo9 from './4.5.PNG';
import logo10 from './5.PNG';

// import Rating from './Rating';

import {Box} from '@material-ui/core'

const ratings = [
    {
        "user":"Ram Rajan",
        "rating":"4",
        "review":"decent book to read.",
        "image" : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-7.jpg'
    },
    {
        "user":"Mohan Roy",
        "rating":"3.5",
        "review":"got bored with the style of writing of the author",
        "image" : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-7.jpg'
    },
    {
        "user":"Harish Rangaya",
        "rating":"5",
        "review":"excellent book .This book is on my fav list now",
        "image" : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-7.jpg'
    }
]

// this is should be got from database. In code this will be set when open button is pressed (BookCard.jsx)
// currently on pressing i am setting setBookId(book) 
// instead i need to do setBookId(information from database including ratings)

const SingleBook = () => {
    const {bookId,setBookId} = useContext(FunctionsContext);
    const [num,setNum] = useState(logo0);
    const tranformToImage = (e) =>{
        e.preventDefault();
        const n = e.target.value;
        console.log(n);
        switch(n){
            case '0': setNum(logo0);break;
            case '0.5': setNum(logo1);break;
            case '1': setNum(logo2);break;
            case '1.5': setNum(logo3);break;
            case '2': setNum(logo4);break;
            case '2.5': setNum(logo5);break;
            case '3': setNum(logo6);break;
            case '3.5': setNum(logo7);break;
            case '4': setNum(logo8);break;
            case '4.5': setNum(logo9);break;
            case '5': setNum(logo10);break;
        }
        // console.log(num);
    }
    return (
        <div>
            <img src={bookId['cover']} alt="cover"/>
            <p>Name of book : {bookId['name']}</p>
            <p>Author of book : {bookId['author']}</p>
            <label htmlFor="rating">Rating</label>
            <input 
                name="rating" 
                type="number" 
                min="0" max="5" step="0.5" 
                onInput = {tranformToImage} 
                onKeyDown={(e) => {alert("use the arrows to set rating!");e.preventDefault()}}
            />
            <img src={num} alt="rating"/>
            <div style={{paddingTop:'30px'}}>
                <b>REVIEWS</b>
                <Box>
                            {
                                ratings.map((r,index) =>{
                                    return(
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                             <div>
                                                <img src={r.image} alt="profilePic" style={{width:'30px'}}/>
                                                <div>{r.user}</div>
                                            </div>
                                            <div style={{marginLeft:'40px',textAlign:'left'}}>
                                                <p>{r.review}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                </Box>
            </div>
            <button onClick = {() => setBookId({})} style={{marginTop:'30px'}}> Back</button>
        </div>
    )
}

export default SingleBook
