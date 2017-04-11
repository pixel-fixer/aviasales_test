import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="tickets__filter">
        <div className="tickets__filter__header">
          Количество пересадок
        </div>
        <div className='tickets__filter__stops'>
          {this.props.filters.map( (filter, index) =>
            <div key={ filter.number}>
              <label htmlFor={"stop_" + filter.number}>
                <input
                  onChange={() => this.props.setFilter(filter.number)}
                  id={"stop_" + filter.number}
                  type="checkbox"
                  name=""
                  value={filter.number}
                  checked={filter.active}
                  />
                <div className="label"></div>
                {filter.label}
                {filter.number !== 'all' && 
                  <a href="javascript:void(0);" onClick={(e) =>  this.props.setFilter(filter.number, true)} className='tickets__filter__only'>только</a>
                }
              </label>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Filter;
