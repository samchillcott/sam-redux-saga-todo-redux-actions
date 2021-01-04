import {
    getTodos,
    addTodo,
    removeTodo,
    completeTodo,
    editTodo
} from '../../redux/actions/todo';

import { connect } from 'react-redux';

const withTodoActions = (WrappedComponent) => connect(
  null, {
    getTodos,
    addTodo,
    removeTodo,
    completeTodo,
    editTodo,
},
)(WrappedComponent);

export default withTodoActions