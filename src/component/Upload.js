import React, { useState } from "react";
import { imageUpload } from "../api/Api"

export default function Upload(){
    const [upload, setUpload] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData();
        form.append("image", upload);
        const res = await imageUpload(form);
        console.log(upload);
        console.log(res);
    }
    const handleImage = (event) => {
        setUpload(event.target.files[0]);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="upload" onChange={handleImage}/>
                <button type="submit">submit</button>
            </form>
        </>
    )
}