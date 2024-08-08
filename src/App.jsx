import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import ComplexReduxStateComponent from './ComplexState'
import PrimitiveExample from './Primitive'
import ObjectExample from './NonPremitive'


function App() {

  return (
    <>
      <TodoList/>
      {/* <ComplexReduxStateComponent /> */}
      {/* <PrimitiveExample /> */}
      {/* <ObjectExample /> */}
    </>
  )
}

export default App
