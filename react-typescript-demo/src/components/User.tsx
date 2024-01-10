import React, { useState } from 'react'


type AuthUser = {
    name: string,
    email: string
}

function User() {
  
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = ()=> {
    setUser({name: 'Shiva', email: 'Shiva234@gmail.com'})
  }

  const handleLogout = ()=> {
    setUser({name : '', email: ''})
  }
    return (
    <>
    <button onClick={handleLogin}>login</button>
    <button onClick={handleLogout}>logout</button>
    <div> Name is : { user?.name}   and Email is : {user?.email}</div>
    </>
  )
}

export default User