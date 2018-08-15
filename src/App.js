import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers.js';
import Clock from "react-live-clock";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Cryptocurrency Ticker</h2>
                </div>
                <div className="DateDiv">
                    <div class="jumbotron">
                        <div class="container">
                            <h2 class="display-5"> 
                            <Clock
                                format={'HH:mm:ss'}
                                ticking={true}
                                timezone={'Af/Nairobi'} />
                                </h2>
                            
                        </div>
                    </div>
                </div>
                <Tickers />
            </div>
        );
    }
}

export default App;