import { FormEvent, useRef } from "react"

interface Props {
    onSubmit: (item: object) => void
}

function Form({onSubmit}: Props) {

    const descriptionRef = useRef<HTMLInputElement>(null)
    const amountRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)
    const item = {description: "", amount: 0, category: ""}

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (descriptionRef.current !== null) {
            item.description = descriptionRef.current.value
        }
        if (amountRef.current !== null) {
            item.amount = parseFloat(amountRef.current.value)
        }
        if (categoryRef.current !== null) {
            item.category = categoryRef.current.value
        }
        console.log(item)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input ref={descriptionRef} id="description" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input ref={amountRef} id="amount" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category    
                    </label>
                    <div className="mb-3">
                        <select ref={categoryRef} name="category" id="category">
                            <option value="groceries">Groceries</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category    
                    </label>
                    <div className="mb-3">
                        <select name="category" id="category">
                            <option value="all-categories">All Categories</option>
                            <option value="groceries">Groceries</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form