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
  const [total, setTotal] = useState(0)

  const handleSubmit = (item: obj) => {
    setItems([...items, item])
    setTotal(total + item.amount)
  }

  const handleDelete = (object: obj) => {
    setItems(items.filter(item => {
      return item.id !== object.id
    }))
    setTotal(total - object.amount)
  }

  const handleSelect = (item: string) => {
    setCategory(item)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}/>
      <Table items={items} category={category} total={total} onDelete={handleDelete} onSelect={handleSelect}/>
    </>
  )
}

export default App
