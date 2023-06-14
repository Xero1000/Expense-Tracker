import styles from "./Table.module.css"

interface obj {
    id: number
    description: string
    amount: number
    category: string
  }

interface Props {
    items: obj[]
}

function Table({items}: Props) {
    return (
        <>
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
                        return (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.category}</td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table