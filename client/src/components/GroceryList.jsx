import React from 'react';
import ReactDOM from 'react-dom'; 
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => {
  return (
      <div>
      {props.list.map((el, index) => {
        return(
          <GroceryItem item={el} key={index} removeItem={props.removeItem}></GroceryItem>
        )
      })}  
    </div>
  )
}

export default GroceryList;