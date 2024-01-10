import React from 'react'


type personProps = {
    list: {
        first: string,
        last: string
    }[]
    name: string,
}
function Person(props: personProps) {
  return (
    <div>
        {
        props.list.map((item:any) => (
            <h3>
            {item.first} {item.last}
            </h3>
        ))
}
    </div>
  )
}

export default Person