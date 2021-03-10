import React from 'react';
import {Link} from 'react-router-dom';

const Home=()=>{
    return(
        <div>
            <Link to="/ComputerNetworksQuiz">Computer Networks</Link>
            <Link>DBMS</Link> 
            <Link>OS</Link>
        </div>
    )
}
export default Home;