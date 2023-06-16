import { useState } from "react"
import "./Table.css"

interface obj {
    id: number
    description: string
    amount: number
    category: string
  }

interface Props {
    items: obj[]
    category: string
    total: number
    onDelete: (item: obj) => void
    onSelect: (item: string) => void
}

function Table({items, category, total, onDelete, onSelect}: Props) {

    return (
        <>
            <div className="mb-3 mt-3">
                <div className="mb-3">
                    <select onChange={(event) => onSelect(event.target.value)} name="category" id="category">
                        <option value="all-categories">All Categories</option>
                        <option value="groceries">Groceries</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    {items.length > 0 && 
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                    }                    
                </thead>
                <tbody>
                    {items.map(item => {
                        if (item.category === category || category === "all-categories") {
                            return (
                                <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.category}</td>
                                    <td><button onClick={() => onDelete(item)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        }
                    })}
                    {/* <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default Table