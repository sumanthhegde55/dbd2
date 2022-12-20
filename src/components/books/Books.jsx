import React, { useContext, useState } from 'react'
import { FunctionsContext } from '../context/FunctionsProvider';
import BookCard from './BookCard';
import Search from './Search';
import { Box, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import axios from 'axios';
const useStyles = makeStyles({
    CardRow:{
        display:'flex',
        flexDirection:'row',
        padding:'20px',
        '& > *':{
            paddingLeft: '30px',
            width:'250px'
        }
    }
})
const Books = () => {
    const {page,setPage,setBookId} = useContext(FunctionsContext);
    
    const classes = useStyles();
    const [books,setBooks] = useState({});
    useEffect(() =>{
        const f = async () =>{
            await axios.get('http://192.168.49.2:32004/books')
            .then((res) =>{
                console.log("data received from backend: ",res.data);
                setBooks(res.data);
            })
            .catch((err) => console.log(err)); 
        }
        f();
    },[])
    console.log("books : ",books);
    const no = Object.keys(books).length/6;
    return (
        <div style={{overflow:'none'}}>
            <div style={{textAlign:'center',fontSize:'25px',padding:'10px 0px 20px 0px'}}>Search Your Books Here</div>
            {
                <div className="container">
                <div style={{width:'25vw',border:'2px solid #4A4E69',height:'100%'}}>
                    <Search/>
                </div>
                <div className="displayBooks" style={{left:'auto'}}>
                <div>
                     {
                         <Box className ={classes.CardRow}>
                            {
                                Object.entries(books).slice(page*6,Math.min(page*6 + 3,Object.keys(books).length)).map((book) =>(
                                <div>
                                <BookCard id={book[0]} name={book[1]['name']} author={book[1]['author']} cover ={book[1]['cover']}/>
                                </div>
                                ))
                            }
                        </Box>
                     }
                </div>
                <div>
                     {
                         <Box className ={classes.CardRow}>
                            {
                                Object.entries(books).slice(page*6+3,Math.min((page+1)*6,Object.keys(books).length)).map((book) =>(
                                <div>
                                <BookCard id={book[0]} name={book[1]['name']} author={book[1]['author']} cover ={book[1]['cover']}/>
                                </div>
                                ))
                            }
                        </Box>
                     }
                     </div>
                </div>
                </div>
            }
            <div style={{marginTop:'10px'}}>
                {
                    page + 1 < no ? <button onClick={() =>setPage(page+1)}>Next</button> : null
                }
                {page > 0 ? <button onClick={() =>setPage(page-1)} >Back</button> : null}
            </div>
        </div>
    )
}

export default Books

// id={book[0]} name={book[1]['name']} author={book[1]['author']} cover ={book[1]['cover']}
