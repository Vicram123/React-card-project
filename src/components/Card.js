import React, { useEffect, useState } from 'react'


import {FetchUsers } from './Api';
import Button from './Button';



export default function Card() {
    const [users, setUsers] = useState(null);
    

    useEffect(
        () => {
        FetchUsers().then(function (response) {
    // handle success
            console.log(response);
            setUsers(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[]
);
    
    return (
        
        <div className='container '>
        <div className='row'>
                <div className='col-sm-10'> 
                    
                {users ? users.map((user)=>   <div className='col-sm-3'> 
        <div className="card-body" >
           <div class="res-circle">
           <div className="circle-txt">{user.name[0]}</div>
           </div>         
                <div className="card ">
                <h1 className="card-text">{user.name}</h1>
                <p className='italic'>{user.email}</p>
                            <p className='link'><span>{user.website}</span></p>
                <Button id={user.id} /> 
                  
              
              </div>
                    </div>  
                      
        </div>   ):<div></div>}
    
          </div>    
      </div>
</div>
    )
}