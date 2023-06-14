import styles from "./Table.module.css"

interface obj {
    id: number
    description: string
    amount: number
    category: string
  }

interface Props {
    items: obj[]
    category: string
    onDelete: (id: number) => void
    onSelect: (item: string) => void
}

function Table({items, category, onDelete, onSelect}: Props) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category    
                </label>
                <div className="mb-3">
                    <select onChange={(event) => onSelect(event.target.value)} name="category" id="category">
                        <option value="all-categories">All Categories</option>
                        <option value="groceries">Groceries</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        if (item.category === category || category === "all-categories") {
                            return (
                                <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.category}</td>
                                    <td><button onClick={() => onDelete(item.id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table