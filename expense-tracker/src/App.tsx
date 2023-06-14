import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {

  const [items, setItems] = useState<object[]>([])

  const handleSubmit = (item: object) => {
    setItems([...items, item])
  }

  return (
    <>
      <Form onSubmit={handleSubmit}/>
      <Table items={items}/>
    </>
  )
}

export default App
