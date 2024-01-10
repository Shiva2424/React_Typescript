import React, { useContext } from 'react'
import {nameContext} from './UseContextDemo'

function Comp1() {
    const {name, age} = useContext(nameContext);
  return (
    <>
    <div>Comp1</div>
    <div>My name is {name}. Age is {age}</div>
    </>
  )
}

export default Comp1