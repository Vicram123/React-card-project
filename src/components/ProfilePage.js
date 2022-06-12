import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FetchUserInfos } from './Api';


function ProfilePage() {
      const [user, setUser] = useState(null);
    
      const { userId } = useParams();
    
    
    useEffect(
        () => {
        FetchUserInfos(userId).then(function (response) {
    // handle success
            console.log(response);
            setUser(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[]
);
  
    return (
        <div className='contact'>
            {user ? <div className='list'>
                <div>
                <p>-name:{user.name}</p>
                <p>-username:{user.username} </p>
                 <p>-email:{user.email} </p>
                </div>
                <div>-Address<ul><li>Street:{user.address.street}</li>
                <li>Suit:{user.address.suite}</li>
                <li>{user.address.city}</li>
                    <li>{user.address.zipcode}</li>
                    <ul>
                <li>lat:{user.address.geo.lat}</li>
                <li>geo:{user.address.geo.lng}</li> </ul>
                </ul>
            <div>
                <p>-Phone:{user.phone}</p>
                        <p>-website:{user.website} </p>
                       <p> -company<ul><li>{user.company.name}</li>
                <li>{user.company.catchPhrase}</li>
                <li>{user.company.bs}</li>
                </ul></p>
                </div>
                  <Link className='custom-btn btn-1 back-link' to='/'>BACK</Link>
                </div>
            </div> : <div></div>}
       </div>
  )
}

export default ProfilePage