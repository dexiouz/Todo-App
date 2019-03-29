import React from 'react';
import '../stylesheets/TodoItems.css';
const TodoItems = (props) => (
  <div className="todoItems">
    {/* <p title="a todo item" className="individualItems"> */}
      {props.individualItem}
    {/* </p> */}
    <button
      onClick={(e) => {
        props.handleRemoveOneItem(props.individualItem)
      }}
    >Remove</button>
  </div>
)
export default TodoItems;