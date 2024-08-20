import { useState } from 'react'
import MirrorText from './components/MirrorText'
import ToDoList from './components/ToDoList'
import Counter from './components/Counter'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Counter />
      <MirrorText />
      <ToDoList />
    </>
  )
}

export default App
