import React from 'react';

export default function Episode(props){
    
    const id = props.match.params.id;
    
    const [episodes, setEpisodes] = React.useState([]);
    
    React.useEffect( () => {
        recupEpisodes();
    }, [] );
    

    const recupEpisodes = () => {
         fetch(`http://api.tvmaze.com/seasons/${id}/episodes`)
         .then( function(response){
             return response.json();
         })
         .then( function(results){
             setEpisodes(results);
         }).catch(function(error){
             
         });
    }
    
    function list() {
        return episodes.map( (episode) => {
            return(
                <div className="col-md-4" key={episode.id}>
                    {episode.image &&
                        <img src={episode.image.medium} className="img-fluid" /> 
                    }
                </div>
            );
        });
    }
    
    return(
        <React.Fragment>
            <h2>Series</h2>
            {episodes.length > 0 &&
                list()
            }
            {episodes.length <= 0 && 
                <p>aucun résultat ou chargement...</p>
            }
        </React.Fragment>
    )
}
