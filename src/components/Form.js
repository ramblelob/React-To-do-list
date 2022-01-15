import React from 'react';
import TodoList from './TodoList';

function Form({ setInputText, todos, setTodos, inputText}) {
const inputTextHandler = (e) => {
  console.log(e.target.value);
  setInputText(e.target.value);
};

const submitToDoHandler = (e) => {
  e.preventDefault();
  setTodos([
    ...todos,{text: inputText, completed: false, id: Math.random() * 1000}
  ]);
  setInputText("");
};

    return (
      <form>
          <input 
          value={inputText}
          onChange={inputTextHandler} 
          type="text" 
          className="todo-input" />
          <button onClick={submitToDoHandler} className="todo-button" type="submit">
            <i className="fa-regular fa-square-plus"></i>
          </button>
          <div className="select">
              <select name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
              </select>
          </div>
      </form>
    );
  }
  
  export default Form;