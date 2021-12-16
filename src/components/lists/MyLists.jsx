import React,{useState} from 'react'
import './style2.css';

const MyLists = () => {

    const [colors,setColors] = useState({'0':0,'1':0,'2':0,'3':0,'4':0});
    
    const handleClick = (e) =>{
       const id = e.target.id;
        let prevId = Object.keys(colors).find((key) => colors[key] == 1);
        if(prevId === id) return;
        const newColors = {'0':0,'1':0,'2':0,'3':0,'4':0,[id] : 1 - colors[id]};
        setColors(newColors);
    }

    return (
        <div className="container" >
           <div className="categories">  
               <div id = '0' className={colors[0] == 0 ? 'buttonPurple' : 'buttonRed'} onClick={handleClick}> Recommendations</div>
               <div id = '1' className={colors[1] == 0 ? 'buttonPurple' : 'buttonRed'} onClick={handleClick} >Wish To Read</div>
               <div id = '2' className={colors[2] == 0 ? 'buttonPurple' : 'buttonRed'} onClick={handleClick} >Currently Reading</div>
               <div id = '3' className={colors[3] == 0 ? 'buttonPurple' : 'buttonRed'} onClick={handleClick} >Finished Reading</div>
               <div id = '4' className={colors[4] == 0 ? 'buttonPurple' : 'buttonRed'} onClick={handleClick} >Wish To Re-Read</div>
           </div>
           <div className="display-side">
                hi
           </div>
        </div>
    )
}

export default MyLists
