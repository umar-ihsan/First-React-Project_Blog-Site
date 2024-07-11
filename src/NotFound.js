import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to='/'>
            Return to HomePage
            </Link>
        </div>
     );
}
 
export default NotFound;