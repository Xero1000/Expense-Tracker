import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

interface obj {
  id: number
  description: string
  amount: number
  category: string
}

function App() {

  const [items, setItems] = useState<obj[]>([])

  const handleSubmit = (item: obj) => {
    setItems([...items, item])
  }

  const handleDelete = (object: obj) => {
    setItems(items.filter(item => {
      return item.id !== object.id 
    }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}/>
      <Table items={items}/>
    </>
  )
}

export default App
