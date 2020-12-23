import React from 'react';
import SeriesList from './SeriesList'

export default function Series(){
    
    const [series, setSeries] = React.useState([]);
    
    React.useEffect( () => {
        recupSeries();
    }, [] );
    
    /*const exampleData = [{name:'malcolm'}, {name:'prison break'}, {name: 'friends'}];
    metAJourLesSeries(exampleData);*/

    const recupSeries = () => {
         fetch("https://api.tvmaze.com/shows/1/seasons")
             .then( function(response){
                 return response.json();
             })
             .then( function(results){
                 //console.log(results); //[{...}, {...}, {...}];
                 setSeries(results);
             }).catch(function(error){
                 
             });
    }
    
    console.log(series);
    
    return(
        <React.Fragment>
            <h2>Series</h2>
            {series.length > 0 &&
                <SeriesList series={series}/>
            }
            {series.length <= 0 && 
                <p>aucun résultat ou chargement...</p>
            }
        </React.Fragment>
    );
}