import React, { Component } from 'react';
import TicketLogo from './img/fly_logo.png';

class Ticket extends Component {
  render() {
    const ticket = this.props.ticket;
    return (
      <div className="tickets__list__item">
        <div className="row">
          <div className="tickets__list__item__left">
            <img src={TicketLogo} alt=""/>
            <a href="" className="btn">Купить<br/> за {ticket.price} Р</a>
          </div>
          <div className="tickets__list__item__right">
            <div className="tickets__list__item__time">
              <span className="fly_time fly_start">{ticket.departure_time}</span>
              <div className="fly_bar">
                {ticket.stops > 0 &&
                  <span>{ticket.stops} {ticket.label}</span>
                }
              </div>
              <span className='fly_time fly_end'>{ticket.arrival_time}</span>
            </div>
            <div className="cf"></div>
            <div className="tickets__list__item__citydate left">
              <div className="fly_city">{ticket.origin}, {ticket.origin_name}</div>
              <div className="fly_date">{ticket.departure_date}</div>
            </div>
            <div className="tickets__list__item__citydate right">
              <div className="fly_city">{ticket.destination}, {ticket.destination_name}</div>
              <div className="fly_date">{ticket.arrival_date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TicketList extends Component {
    render() {
      return (
        <div className="tickets__list">
          {this.props.tickets.map( (ticket, index) =>
            <Ticket key={index} ticket= {ticket}/>
          )}
        </div>
      );
  }
}

export default TicketList;
