import { useState } from 'react'
import './Annually.css'

export default function Annually(){
    
    const[toggle,setToggle]=useState(false);
    const handleClick=()=>{
        if(toggle==true){
            setToggle(false)
            
        }else{
            setToggle(true)
        }
    }

    return<div id='all'>
    <div className="title"><h1>Our Pricing</h1></div>
    <div className="toggle">
        <p>Annually</p>
        <div className="slider"><input onClick={handleClick} type="checkbox" name="toggle" id="toggle" /></div>
        <p>Montly</p>
    </div>
    
    
    <div className="container">
        <div className="head-container-left">
            <p className='title'>Basic</p>
            <h5>$ <span id='price'>{toggle==true?'19.99':'199.99'}</span> </h5>
            <hr/>  
            <p>1 TB Storage</p>      
            <hr />
            <p>5 users Allowed</p>           
            <hr />        
            <p>send up to 10 GB</p> 
            <hr /> 
            <button className='btn'>Learn more</button>
        </div>
        <div className="head-container">
            <p className='title'>Professional</p>
            <h5>$ <span id='price'>{toggle==true?'24.99':'249.99'}</span> </h5>
            <hr/>  
            <p>1 TB Storage</p>      
            <hr />
            <p>5 users Allowed</p>           
            <hr />        
            <p>send up to 10 GB</p> 
            <hr /> 
            <button className='btn'>Learn more</button>
        </div>
        <div className="head-container-right">
            <p className='title'>Master</p>
            <h5>$ <span id='price'>{toggle==true?'39.99':'399.99'}</span> </h5>
            <hr/>  
            <p>1 TB Storage</p>      
            <hr />
            <p>5 users Allowed</p>           
            <hr />        
            <p>send up to 10 GB</p> 
            <hr /> 
            <button className='btn'>Learn more</button>
        </div>
    </div>
    
    </div>
}