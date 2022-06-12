import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Button({id}) {
  

  
    return (
        

        <NavLink className={'custom-btn btn-1'} to={`/users/${id}`}>MORE DETAILS</NavLink>
  );
}
