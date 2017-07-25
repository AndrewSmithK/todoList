import React from 'react';
import Footer from "./Footer";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const TodoApp = ({ params }) => (
    <div>
        <AddTodo/>
        <VisibleTodoList filter = {params.filter}/>
        <Footer/>
    </div>
);

export default TodoApp;