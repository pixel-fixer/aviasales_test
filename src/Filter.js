import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="tickets__filter">
        <div className="tickets__filter__header">
          Количество пересадок
        </div>
        <div className='tickets__filter__stops'>
          <div>
            <label htmlFor="stops_all">
              <input id='stops_all' type="checkbox" name="" value=""/><div className="label"></div>
              Все
              <a href="" className='tickets__filter__only'>только</a>
            </label>
          </div>
          <div>
            <label htmlFor="stop_none">
              <input id='stop_none' type="checkbox" name="" value=""/><div className="label"></div>
              Без пересадок
              <a href="" className='tickets__filter__only'>только</a>
            </label>
          </div>
          <div>
            <label htmlFor="stops_1">
              <input id='stops_1' type="checkbox" name="" value=""/><div className="label"></div>
              1 пересадка
              <a href="" className='tickets__filter__only'>только</a>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
