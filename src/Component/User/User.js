import React, { useState } from 'react';
import './User.css'
const User = (props) => {
const {picture,name,email,phone} = props.user
const [mobile,setPhone] =useState('')
 const addPhone =()=>setPhone(phone);
    return (
        <div className="user-aria">
               <img src={picture.large} alt=""/>
            <div>
               <h2>name: {name.first+ ' ' + name.last}</h2>
               <h4>email:{email}</h4>
               <h5>phone:{mobile}</h5>
               <p>learn about me</p>
                <button className="btn-now" onClick={addPhone}>show mobile phone</button>
               <button className="btn">add me</button>
            </div>
        </div>
    );
};

export default User;

