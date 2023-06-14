import styles from "./Table.module.css"

interface Props {
    items: object[]
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
                            <tr>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.category}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table