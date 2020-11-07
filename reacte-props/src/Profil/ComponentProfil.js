import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import ButtonClick from './ButtonClick'


function ComponentProfil(props){
  function handleClick (e){
    e.preventDefault();
     alert("hi , i'm bill gates");
 }

    return(
        <div>
          <div className='navbar bg-dark rounded text-white' >
                   <h1>{props.name}</h1>
          </div>
        
          <section>
         
             <div className='bio' style={{color:'blue'}}><p> {props.bio}</p>
            
             <img src={props.img}  alt={props.name} />
            </div> 
            <div className='link'> 
            <p className="font-weight-bold"> {props.profession} </p>
           
            <ButtonClick  clickbutton={handleClick} />
            </div> 
            
          </section>        


        </div>
    )

    
}
ComponentProfil.defaultProps={
name :'Bill Gates',
bio: "Bill gates, né le 28 octobre 1955 à Seattle (État de Washington), est un informaticien et entrepreneur américain, pionnier dans le domaine de la micro-informatique. En 1975, à l'âge de 20 ans, il fonde la société de logiciels de micro-informatique Micro-Soft (rebaptisée depuis Microsoft) avec son ami Paul Allen. Son entreprise achète le système d'exploitation QDOS pour en faire le MS-DOS, puis conçoit le système d'exploitation Windows, tous deux en situation de quasi-monopole mondial",
profession:"Président-directeur général"
}


ComponentProfil.propTypes={
  name:PropTypes.string.isRequired,
  bio:PropTypes.string.isRequired,
};


export default ComponentProfil ;