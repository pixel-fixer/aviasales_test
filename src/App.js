import React, { Component } from 'react';
import logo from './img/Logo.png';
import './index.css';
import Utils from './utils/'

import Data from './tickets.json';

import Filter from './Filter';
import TicketList from './TicketList';


/* PREPARE DATA */
const tickets = Data.tickets;
tickets.forEach((ticket, i) => {
    ticket.label = Utils.plural(ticket.stops, 'пересадка', 'пересадки', 'пересадок');
  }
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tickets: tickets,
      filter: false
    }
  }

  render() {
    return (
      <div className="tickets">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <Filter />
        <TicketList tickets = {this.state.tickets}/>
      </div>
    );
  }
}

export default App;
