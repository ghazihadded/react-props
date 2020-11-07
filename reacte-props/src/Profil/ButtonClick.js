import React from 'react';



function ButtonClick(props){
   
    return (
        <button onClick={e=>props.clickbutton(e)} className='btn-block btn-secondary'>alert</button>
    )
}


export default ButtonClick


