import { useState, useRef, ChangeEvent } from "react";
import MeetTheHerd from "./MeetTheHerd";

function Admin() {
    const [displayMore, setDisplayMore] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    const inputTitle = useRef<HTMLInputElement | null>(null);
    const image = useRef<HTMLInputElement | null>(null);

    async function uploadImage() {
        if (!file || !title) {
            alert("Please select a file and enter a title.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);  
        formData.append("title", title); 

        try {
            const response = await fetch("http://localhost:8081/herd", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Upload successful!", data);


            setDisplayMore((showBtn) => !showBtn);
            inputTitle.current!.value = ""
            image.current!.value = ""

        } catch (error) {
            console.error("Error uploading image", error);
        }
    }

    function handleClick() {
        setDisplayMore((showBtn) => !showBtn);
    }

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]); // Store the selected file
        }
    }

    function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value); // Store the input title
    }

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div>
                <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <legend className="fieldset-legend">Meet the herd list</legend>
                    <label className="fieldset-label">Search</label>
                    <div className="flex justify-between">
                        <input type="search" className="input w-9/15" />
                        <button className="bnt bg-cyan-800 w-3/9 rounded-2xl" onClick={handleClick}>
                            {displayMore ? "Hide " : ""}Add Horse
                        </button>
                    </div>
                </fieldset>

                {displayMore && (
                    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                        <label className="fieldset-label">Name</label>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Add a name" 
                            onChange={handleTitleChange} 
                            ref={inputTitle}
                        />

                        <label className="fieldset-label">Image</label>
                        <input 
                            type="file" 
                            className="file-input file-input-ghost" 
                            onChange={handleFileChange} 
                            ref={image}
                        />

                        <button className="btn bg-green-600 mt-3" onClick={uploadImage}>
                            Upload
                        </button>
                    </fieldset>
                )}
                <MeetTheHerd change={displayMore}></MeetTheHerd>

            </div>
        </div>
    );
}

export default Admin;
