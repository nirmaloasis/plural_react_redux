import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administrator</h1>
                <p>react redux flux react redux flux react redux flux react redux flux react redux flux </p>
                <Link to="/about" className="btn btn-primary btn-lg">learn more</Link>
             </div>   
        )
    }
}
export default HomePage