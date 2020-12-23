import React from 'react';


export default function Hello(parentSetMessage){
    const [name, setName] = React.useState('Aucun nom');
   
    return(
        <>
            <h2 onClick={() => { setName('Sulli') }}>Hello {name}</h2>
        </>
    );
}
