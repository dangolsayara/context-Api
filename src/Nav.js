import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import './App.css';

const Nav = () => {
    const [movies,setMovies] =useContext(MovieContext);
    return (
        <div>
            <nav>
                <li><a>Home</a></li>
                <li><a>List of Movies:{movies.length}</a></li>
            </nav>   
        </div>
    )
}

export default Nav
   