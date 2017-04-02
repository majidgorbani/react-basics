import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
    render(){

        return(
            <div>

                this is an app
                
            </div>

        );
    }


}
render(<App />,
document.getElementById('app')
)
