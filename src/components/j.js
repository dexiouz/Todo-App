import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
class Todo extends Component {
  state = {
    todoItems: [ ],
    newTodo: '',
  }
  handleRemoveAllItems = () => {
    this.setState(() => ({ todoItems: [] }));
  }
  handleRemoveOneItem = (itemToBeRemoved) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.filter( todoItem => todoItem !== itemToBeRemoved )
    }))
  }
  componentDidUpdate(prevProps, prevState){
    if( prevState.todoItems.length !== this.state.todoItems.length){
      const jsonState = JSON.stringify(this.state.todoItems)
      localStorage.setItem('todoItems', jsonState)
    }
  }

  componentDidMount(){
    const itemsFromLocalStorage = localStorage.getItem('todoItems');
    const todoItems = JSON.parse( itemsFromLocalStorage );

    if( todoItems ){
      this.setState(() => ({
        todoItems
      }))
    }
  }
  handleChange = (e) => {
    this.setState({	newTodo:	e.target.value	})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const duplicateItem = this.state.todoItems.filter( todoItem => {
      return todoItem.toLowerCase() === this.state.newTodo.toLowerCase()
     })

    // if( this.state.newTodo && !this.state.todoItems.includes(foundItem[0])){
    //   this.setState((prevState) => {
    //     return {
    //       todoItems: prevState.todoItems.concat(this.state.newTodo),
    //       newTodo: prevState.newTodo = ''
    //     }
    //   })
    // } 

    if( this.state.newTodo && duplicateItem.length == 0){
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
        <h1> Welcome to my todo App </h1>
        {
          this.state.todoItems.map(item => (
            <TodoItems 
              key = { item }
              individualItem={item} 
              handleRemoveOneItem = { this.handleRemoveOneItem }
            />))
        }
        <br/>
        <form onSubmit = { this.handleSubmit }>
          <label htmlFor="">Todo Items</label> <br/>
          <input type="text" value = { this.state.newTodo } onChange = { this.handleChange }/>
          <button>Submit</button>
        </form>
        <button onClick = { this.handleRemoveAllItems }>Remove all items</button>
      </div>
    )
  }
}
export default Todo;