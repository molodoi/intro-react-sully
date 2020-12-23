import React from 'react';
import { Link } from 'react-router-dom'; 

export default function NavMain(){
   
    return(
        <ul className="d-flex list-unstyled">
            <li className="mx-5"><Link to="/">Home</Link></li>
            <li className="mx-5"><Link to="/series">Series</Link></li>
            <li className="mx-5"><Link to="/contact">Contact</Link></li>
        </ul>
    );
}
