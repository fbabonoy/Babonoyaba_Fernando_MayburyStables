function Admin() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <fieldset className="fieldset  w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend">Add a horse to the Meet the herd page</legend>

                <label className="fieldset-label">Name</label>
                <input type="text" className="input" placeholder="add a name" />

                <label className="fieldset-label">Slug</label>
                <input type="file" className="file-input file-input-ghost" placeholder="my-awesome-page" />
            </fieldset>
        </div>
    )
}

export default Admin