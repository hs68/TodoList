import React, { useState } from 'react'
export default function AddTodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or desc cannot be empty");
        }
        else
        props.addTodo(title, desc);
        settitle("");
        setdesc("");

    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <div className="mb-3 row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => { settitle(e.target.value) }} />

                </div>
                <div className="mb-3 row">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => { setdesc(e.target.value) }} />

                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}