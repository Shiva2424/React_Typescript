import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getUsers } from './Redux Saga/actions/getuser'
import {AppState} from './Redux Saga/store'
import { IUsers } from './Redux Saga/types';
import './UserDataStyle.css'
type stateProp = {
    users: []
}

type userdetailProps = {
    username: string,
    email: string,
    phone: string,
}

function UserData() {
    const [userdetails, setUserDetails] = useState<userdetailProps>({username: '',
        email: '',
        phone: '',});
    const dispatch = useDispatch();
    const {users} = useSelector( (state: AppState) => state.UserReducer)
    console.log('State is:: ', users)

    const getUserDetails = (item:any) => {
        console.log(item)
        // const singleuserdata = users.filter(user => user.name === item )
        // setUserDetails({...userdetails, username: singleuserdata.username,
        //      email: singleuserdata.email, phone: singleuserdata.phone})
        setUserDetails({...userdetails, username: item.username,
             email: item.email, phone: item.phone})
    }


  return (
    <>
    <button style={{marginLeft:'-600px', marginTop:'50px'}} onClick={() => dispatch(getUsers())}>  Get Users </button>
    <div style={{ marginTop:'30px',marginLeft:'50px'}}>
        
    <div style={{display:'flex'}}>
    <div style={{marginRight: '50px'}}>
    {users.map(item => (
        <div style={{marginBottom:'10px',background: 'none'}}>
        <button key={item.id} className='customButton' onClick={() => getUserDetails(item)}>{item.name}</button>
        </div>
    ))}
    </div>
    {
        users.length > 0 &&
        (
            <>
            <div style={{border:'1px solid red',width: '400px'}}>
            <div style={{fontWeight: 800}}> USER DATA</div>
            <div style={{display:'flex',flexDirection: 'column',alignContent:'flex-start',alignItems:'flex-start'}}>
            <p>Name : {userdetails.username}</p>
            <p>Email : {userdetails.email}</p>
            <p>Phone: {userdetails.phone}</p>
            </div>
            </div>
            </>
        )
    }
    </div>
    </div>
    </>
  )
}

export default UserData;