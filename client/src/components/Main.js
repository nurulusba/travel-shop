import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';

import App from './App';


class Main extends Component {
       componentDidMount() {
        this.LoadingBar.complete();
       }    
    render() {
        return(
            <div>
            <div>
            <LoadingBar
              height={2}
              color='#667db6'
              onRef={ref => (this.LoadingBar = ref)}
            />
          </div>
            <App />
            </div>
        )
    }
}

export default Main;