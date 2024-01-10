import React from 'react'


type greetProps = {
name?: string,
count?: number,
isloggedin?: boolean,
person?: {
    first: string,
    last: string
}
}

function Greet(props: greetProps) {
    const { person} = props;
  return (
    <>
    <div>Welcome {props.name}</div>
    {
    props.isloggedin ? (
<div>Welcome {props.name} ! You have {props.count} unread messages</div>
    ) :
    (<div> Welcome WELCOME GUEST</div>)
}
    </>
  )
}

export default Greet;