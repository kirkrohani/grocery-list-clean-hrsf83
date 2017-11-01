import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '', 
      quantity: 0
    }
    this.handleChange = this.handleChange.bind(this); 
    this.handleClick = this.handleClick.bind(this); 
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }); 
  }
  handleClick() {
    this.props.addItem(this.state);  
  }
  render () {
    return (
      <div>
        <input type="text" name="description" placeholder="Item" onChange={this.handleChange} ref="desc"/><br/>
        <input type="text" name="quantity" placeholder="Quantity" onChange={this.handleChange} ref="quantity"/><br/>
        <input type="submit" value="Submit" onClick={this.handleClick}/>
      </div>
    )
  }
}

export default AddGrocery;

