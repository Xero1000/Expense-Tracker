

function Form() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input id="description" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input id="amount" type="text" className="form-control" />
                </div>
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