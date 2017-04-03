
import React from 'react';
import {render} from 'react-dom';
import {boostrap} from 'react-router-bootstrap'

export class App extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1> hello!</h1>
                    </div>

                </div>
            </div>


        
        );
    }
}

render(<App />, document.getElementById("app"));