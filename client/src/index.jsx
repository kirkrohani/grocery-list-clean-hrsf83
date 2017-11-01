import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
    this.addItem = this.addItem.bind(this); 
    this.removeItem = this.removeItem.bind(this); 
  }

  addItem(item) {
    if (this.state.list.length > 0) {
      item.index = this.state.list[this.state.list.length - 1].id + 1; 
    } else {
      item.index = 1; 
    }
    this.setState({
      list: [...this.state.list.concat(item)]
    })
  }

  removeItem(item) {
    var index = this.state.list.findIndex(el => {
      return el.id === item.id; 
    })
    var newData = this.state.list.slice(); 
    newData.splice(index, 1); 
    this.setState({list: newData}); 
  }
  render () {
    return (
      <div>
        <AddGrocery addItem={this.addItem}/>
        <GroceryList list={this.state.list} removeItem={this.removeItem}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));