import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';

class App extends React.Component{
    render(){

        return(
            <div className="container">
                <Header />
                <div className="row">
                     <div className="col-xs-10 col-xs-offset-1">
                    
                     <h1>hello</h1>
                </div>

                </div>
               

               
                
            </div>

        );
    }


}
render(<App />,
document.getElementById('app')
)
