import React from 'react';
import { Link } from 'react-router-dom'; 

export default function SeriesList({series}){
    const List = series.map( (serie) => {
            return(
                <div className="col-md-4" key={serie.id}>
                    <Link to={`/episode/${serie.id}`}>
                        <img src={serie.image.medium} className="img-fluid"/> 
                    </Link>
                </div>
            );
    });
    
    return(
        <ul>
            {List}
        </ul>
    )
}
