import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {


    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')
    const [isPending,setIsPending]=useState(false)
    const navigate = useNavigate();
    


   const handleSubmit=(e)=>{
      e.preventDefault();
      const blog={title,body,author}
      
      fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(blog)
        
      })
      navigate('/');

      console.log('new blog added')

   }


    return ( 
        <div className="create">
            <form className="blog-form" onSubmit={handleSubmit}>
                <label htmlFor="blogTitle">Blog Title:</label>
                <br />
                <input type="text" id="blogTitle" className="input-field" value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
                <br />
                <br />
                <label htmlFor="blogBody">Blog Body:</label>
                <textarea id="blogBody" className="textarea-field" value={body} onChange={(e)=>{setBody(e.target.value)}} required></textarea>
                <br />
                <br />
                <label htmlFor="blogAuthor">Blog Author:</label>
                <input type="text" id="blogAuthor" className="input-field" value={author} onChange={(e)=>{setAuthor(e.target.value)}} required />
                
                <button type="submit" className="submit-button">Submit</button>
                
            </form>
        </div>
     );
}
 
export default Create;
