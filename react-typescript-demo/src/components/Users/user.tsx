import React, { useEffect, useState } from 'react'

function User() {
    const [users,setUsers] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((result) => setUsers(result.map((item : {name: String}) => item.name)))
        .catch((err) => {setError("Error fetching users")})
    })
  return (
    <>
    <div>Users</div>
    {error &&  <p>{error}</p>}
    {
        users.map((user) => (
            <p key={user}> {user}</p>
        ))
    }
    </>
  )
}

export default User;