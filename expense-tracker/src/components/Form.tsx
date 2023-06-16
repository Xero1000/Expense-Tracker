import { useState } from "react"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"

interface obj {
    id: number
    description: string
    amount: number
    category: string
  }

interface Props {
    onSubmit: (item: obj) => void
}

function Form({onSubmit}: Props) {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [id, setId] = useState(1)

    const item = {id: id, description: "", amount: 0, category: ""}

    const submit = (data: FieldValues) => {
        item.description = data.description
        item.amount = data.amount 
        item.category = data.category
        onSubmit(item)
        setId(id + 1)
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input {...register("description", { minLength: 3 })} id="description" type="text" className="form-control" />
                    {errors.description?.type === "minLength" && <p className="text-danger">Description should be at least 3 characters.</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input {...register("amount", { required: true })} id="amount" type="text" className="form-control" />
                    {errors.amount?.type === "required" && <p className="text-danger">Amount is required.</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category    
                    </label>
                    <div className="mb-3">
                        <select {...register("category")} name="category" id="category">
                            <option value="groceries">Groceries</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form