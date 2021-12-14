import React, { useContext , useState } from 'react'
import {FunctionsContext} from '../context/FunctionsProvider';
import { categories } from '../constants';
import { useEffect } from 'react';
const Search = () => {
    
    const {setSearchBooks,searchBooks} = useContext(FunctionsContext);

    const [checkedState, setCheckedState] = useState(
        new Array(categories.length).fill(0)
    );
    useEffect(() =>{
        setSearchBooks({
            'bookName':null,
            'authorName':null,
             'categories':[],
             'filterRating':null
        })
    },[])
    const handleChange = (e) =>{

        e.preventDefault();
        const {name,value} = e.target;
        setSearchBooks({
            ...searchBooks,
            [name] : value,
        });
    }

    const handleOnClick = (idx) =>{
        const newCheckedState = checkedState.map((key,index) =>(
            (index === idx) ? 1 - key : key
        ));
        setCheckedState(newCheckedState);
        const checkedCategories = []
        for(let i=0;i<newCheckedState.length;i++){
            if(newCheckedState[i]) checkedCategories.push(categories[i]);
        }
        setSearchBooks({
            ...searchBooks,
            "categories" : checkedCategories
        });
    }
    
    const handleRating = (e) =>{
        const {id} = e.target;
        setSearchBooks({
            ...searchBooks,
            "filterRating":id
        })
    }

    console.log(searchBooks);

    return (
        <div>
            <div className="bookSearch" style={{padding:'20px 0px 20px 10px'}}>
            <label htmlFor="bookName">Name of Book</label>
                <input type="text" name="bookName" defaultValue = {searchBooks['bookName']} onChange={handleChange} style={{marginLeft:'19px'}}/>
            </div><hr/>
            <div className="authorSearch" style={{padding:'10px 0px 20px 10px'}}>
            <label htmlFor="authorName">Name of Author</label>
                <input type="text" name="authorName" defaultValue = {searchBooks['authorName']} onChange={handleChange} style={{marginLeft:'10px'}}/>
            </div><hr/>
            <div style={{marginLeft:'15px'}}>
                <p>Categories</p>
                {
                    categories.map((key, index) => {
                        return (
                            <div className="categories-list-item" style={{paddingBottom:'10px'}}>
                                <input
                                type="checkbox"
                                id={`checkbox-${index}`}
                                name={key}
                                value={key}
                                checked={checkedState[index]}
                                onClick={() =>handleOnClick(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{key}</label>
                            </div>
                        );
                    })
                }
            </div><hr/>
            <p>Filer By Rating</p>
            <span>
                <input type="radio" name="rating" id='4.5' onClick={handleRating}/>
                <label htmlFor=""> > 4.5 star</label>
            </span>
            <span style={{marginLeft:'10px'}}>
                <input type="radio" name="rating" id='4' onClick={handleRating}/>
                <label htmlFor=""> > 4 star</label>
            </span><br/>
            <span>
                <input type="radio" name="rating" id='3.5'onClick={handleRating}/>
                <label htmlFor=""> > 3.5 star</label>
            </span>
            <span style={{marginLeft:'10px'}}>
                <input type="radio" name="rating" id='3' onClick={handleRating}/>
                <label htmlFor=""> > 3 star</label>
            </span><br/>
            <span>
                <input type="radio" name="rating" id='2.5' onClick={handleRating}/>
                <label htmlFor=""> > 2.5 star</label>
            </span>
            <span style={{marginLeft:'10px'}}>
                <input type="radio" name="rating" id='2' onClick={handleRating}/>
                <label htmlFor=""> > 2 star</label>
            </span><br/>
            <div style={{width:'70%'}}>
            <button>Search</button>
            </div>
        </div>
    )
}

export default Search
