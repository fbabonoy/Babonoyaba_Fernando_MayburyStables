import { useEffect, useState } from "react"

function Admin() {
    let [displayMore, setDisplayMore] = useState(false)

    useEffect(()=>{
        // load 
        // add 
        // delete
    }, [])

    function handleClick() {
        setDisplayMore((showBtn)=>{
            return !showBtn
        })
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div>
                <fieldset className="fieldset  w-xs bg-base-200 border border-base-300 p-4 rounded-box">


                    <legend className="fieldset-legend">Meet the herd list</legend>
                    <label className="fieldset-label">Search</label>
                    <div className="flex justify-between">
                        <input type="search" className="input w-9/15" />
                        <button className="bnt bg-cyan-800 w-3/9 rounded-2xl" onClick={handleClick}>{displayMore ? "Hide " : ""}Add Horse</button>
                    </div>
                </fieldset>


                {displayMore && <fieldset className="fieldset  w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <label className="fieldset-label">Name</label>
                    <input type="text" className="input" placeholder="add a name" />

                    <label className="fieldset-label">Slug</label>
                    <input type="file" className="file-input file-input-ghost" placeholder="my-awesome-page" />
                </fieldset>
                }

            </div>

            <div>
                
            </div>
        </div>
    )
}


export default Admin