 import React, { useState, useEffect } from 'react';
import User from './Component/User/User';
 
 const App = () => {
    const [users,setUsers] = useState([])
     useEffect(()=> {
       fetch('https://randomuser.me/api/?results=15')
       .then(res =>res.json())
       .then(data =>setUsers(data.results))
     })
   return (
     <div>
       <h3>Team Builder</h3>
       {
         users.map(user=> <User user={user}></User> )
       }
     </div>
   );
 };
 
 export default App;