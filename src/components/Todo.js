import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
import '../stylesheets/Todo.css';
class Todo extends Component {
  state = {
    todoItems: [4, 6, 7, 9],
    newTodo: '',
  }
  handleRemoveAllItems = () => {
    this.setState(() => ({ todoItems: [] }));
  }
  handleRemoveOneItem = (itemToBeRemoved) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.filter(todoItem => todoItem !== itemToBeRemoved)
    }))
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems)
      localStorage.setItem('todoItems', jsonState)
    }
  }

  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem('todoItems');
    const todoItems = JSON.parse(itemsFromLocalStorage);

    if (todoItems) {
      this.setState(() => ({
        todoItems
      }))
    }
  }
  handleChange = (e) => {
    this.setState({ newTodo: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const duplicateItem = this.state.todoItems.filter(todoItem => {
      if (isNaN(todoItem)) {
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase()
      } else {
        return todoItem === this.state.newTodo
      }
    })


    // if( this.state.newTodo && !this.state.todoItems.includes(foundItem[0])){
    //   this.setState((prevState) => {
    //     return {
    //       todoItems: prevState.todoItems.concat(this.state.newTodo),
    //       newTodo: prevState.newTodo = ''
    //     }
    //   })
    // } 

    if (this.state.newTodo && duplicateItem.length == 0) {
      this.setState((prevState) => {
        return {
          todoItems: prevState.todoItems.concat(this.state.newTodo),
          newTodo: prevState.newTodo = ''
        }
      })
    }
  }



  render() {
    return (
      <div className="container">
        <Header title="MY TODO TITLE" />

        <h1 className="title">Welcome to my todo App </h1>

        <div className="wrapper">
          <div className="forms">
            <form onSubmit={this.handleSubmit} className>
              <input type="text" value={this.state.newTodo} onChange={this.handleChange} placeholder="enter items" />
              <button>Submit</button>
            </form>
          </div>

          <div className="cover">
            <button onClick={this.handleRemoveAllItems} className="removeButton"> Remove all items </button>

            <div className="todos">
              {
                this.state.todoItems.map(item => (
                  <TodoItems
                    key={item}
                    individualItem={item}
                    handleRemoveOneItem={this.handleRemoveOneItem}
                  />))
              }
            </div>
          </div>

        </div>

      </div>
    )
  }
}
export default Todo;



