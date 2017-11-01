import React from 'react';
import ReactDOM from 'react-dom'; 

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.remove = this.remove.bind(this); 
  }

  remove() {
    this.props.removeItem(this.props.item); 
  }
  render() {
    return (
      <span onClick={this.remove}>{this.props.item.description} {this.props.item.quantity}<br/></span>
    )
  }
  
}

export default GroceryItem;