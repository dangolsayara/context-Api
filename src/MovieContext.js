import React , {useState,createContext} from 'react'

export const MovieContext =createContext();

export  const MovieProvider = props => {
    const [movies,setMovies]=useState([
        {
            name: 'Harry Potter',
            price:'$15',
            id:23545
        },
        {
            name: 'Final Destination',
            price:'$20',
            id:23545
        },
        {
            name: 'Spiderman',
            price:'$35',
            id:23545
        }
    ])
    
    return (
        <div>
            <MovieContext.Provider value={[movies ,setMovies]}>
              {props.children}
            </MovieContext.Provider>
        </div>
    )
}
