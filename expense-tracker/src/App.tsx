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
  const [category, setCategory] = useState("all-categories")

  const handleSubmit = (item: obj) => {
    setItems([...items, item])
  }

  const handleDelete = (id: number) => {
    setItems(items.filter(item => {
      return item.id !== id 
    }))
  }

  const handleSelect = (item: string) => {
    setCategory(item)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}/>
      <Table items={items} category={category} onDelete={handleDelete} onSelect={handleSelect}/>
    </>
  )
}

export default App
