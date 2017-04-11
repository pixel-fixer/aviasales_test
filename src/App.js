import React, { Component } from 'react';
import logo from './img/Logo.png';
import './index.css';

import Utils from './utils/'
import _ from 'lodash';

import Data from './tickets.json';

import Filter from './Filter';
import TicketList from './TicketList';


/* PREPARE DATA */
let tickets_raw = Data.tickets;

tickets_raw.forEach((ticket, i) => {
    ticket.label = Utils.plural(ticket.stops, 'пересадка', 'пересадки', 'пересадок');
    ticket.departure_date = Utils.ru_date(ticket.departure_date);
    ticket.arrival_date = Utils.ru_date(ticket.arrival_date);
  }
);

let tickets  = _.sortBy(tickets_raw, 'price');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tickets: tickets,
      filters: [
        {number: 'all', active: false, label: 'Все'},
        {number: 0, active: false, label: 'Без пересадок'},
        {number: 1, active: false, label: '1 пересадка'},
        {number: 2, active: false, label: '2 пересадки'},
        {number: 3, active: false, label: '3 пересадки'}
      ],
      ticketStops: []
    }
  }
  setFilter = (filterVal, isOnly) => {

    let new_state = this.state;
    new_state.tickets = tickets;

    _.each(new_state.filters, (v, i) =>{
      if(isOnly || filterVal === 'all')
        new_state.filters[i].active = false;
      if(filterVal === v.number)
        new_state.filters[i].active = v.active ? false : true;
    })

    if(filterVal !== 'all')
      new_state.filters[0].active = false;

    new_state.ticketStops = [];
    new_state.filters.forEach( (v) => {
      if(v.active == true)
        new_state.ticketStops.push(v.number);
    });

    if(filterVal !== 'all'){
      let sorted_tickets = [];
      _.each(tickets, (v) => {
        if(new_state.ticketStops.includes(v.stops))
          sorted_tickets.push(v);
      });
      new_state.tickets = sorted_tickets;
    }
    this.setState(new_state.tickets);

  }

  render() {
    return (
      <div className="tickets">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <Filter filters={this.state.filters} setFilter={this.setFilter}/>
        <TicketList tickets={this.state.tickets}/>
      </div>
    );
  }
}

export default App;
