import React, { Component } from 'react';


class Date extends Component {
   
    render() {
        cdate = new Date(cts).toString();
        var tickers = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.id} />
        );

        return <div className="tickers-container">
            <ul className="tickers"> {tickers} </ul>
            <p>
              {" "}
              Information updated every minute courtesy of <a href='https://coinmarketcap.com' target='_blank' >
                coinmarketcap.com
              </a>{" "}
            </p>{" "}
          </div>;
    }
}

export default Tickers;