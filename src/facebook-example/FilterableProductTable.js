import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import './Products.css';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="products-container">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;