import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const {id}=useParams();
    const newId=id.trim();
    console.log({id})
    const navigate = useNavigate(); 


    

    const {data:blog, isPending,error}= useFetch(`http://localhost:8000/blogs/${newId}`)
    return ( 
        <div className="blog-detail">
            
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (<article>
               <h2>{blog.title}</h2>
               <p>Written by {blog.author}</p>
               <div>{blog.body}</div>
            
              
            </article>)}
        </div>
     );
}
 
export default BlogDetail;