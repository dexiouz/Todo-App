import React from 'react';
const TodoItems = (props) => (
  <div>
    {props.individualItem}
    <button
      onClick = {(e) => {
        props.handleRemoveOneItem(props.individualItem)
      }} 
    >Remove</button>
  </div>
)
export default TodoItems;