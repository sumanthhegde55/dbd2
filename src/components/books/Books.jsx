import React, { useContext} from 'react'
import { FunctionsContext } from '../context/FunctionsProvider';
import BookCard from './BookCard';
import Search from './Search';
import { Box, makeStyles } from '@material-ui/core';
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
    // const [page,setPage] = useState(0);
    const {page,setPage,setBookId} = useContext(FunctionsContext);
    
    const classes = useStyles();
    const books = {
        '1':{id:'1',name:'a',author:'a_0',cover:'https://images-na.ssl-images-amazon.com/images/I/51wbVQTpTgL._SX339_BO1,204,203,200_.jpg'},
        '2':{id:'2',name:'b',author:'a_1',cover:"data:image/jpeg;base64,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"},
        '3':{id:'3',name:'c',author:'a_2',cover:"http://books.google.com/books/content?id=7bT5gO7CrVMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
        '4':{id:'4',name:'d',author:'a_3',cover:"http://books.google.com/books/content?id=TXzaywie004C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        '5':{id:'5',name:'e',author:'a_4',cover:"http://books.google.com/books/content?id=2UlLLgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
        '6':{id:'6',name:'f',author:'a_5',cover:"http://books.google.com/books/content?id=yBYmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        '7':{id:'7',name:'g',author:'a_6',cover:"http://books.google.com/books/content?id=LUVOPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
        '8':{id:'8',name:'h',author:'a_7',cover:"https://images-na.ssl-images-amazon.com/images/I/91dDv9WOcFL.jpg"},
        '9':{id:'9',name:'i',author:'a_8',cover:"https://5.imimg.com/data5/FL/IL/MY-49937457/selection_198-500x500.png"},
        // '10':{id:'10',name:'j',author:'a_9'}
    }
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