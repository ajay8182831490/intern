import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [value, setValue] = useState('');

    const [credentials, setCredentials] = useState({ title: "", content: "" })
    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();




        const { title, content } = credentials

        const response = await fetch("http://localhost:3600/v1/user/post/createPost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, content })
        });
        const json = await response.json()


        if (json.success) {
            console.log("hete")
            history("/MyAccount");
        }













    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <div className='createblog'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' placeholder="title name" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <input type="text" className="form-control" id="content" name='content' placeholder="content" onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form >

            </div>
        </div>
    )
}

export default CreateBlog
