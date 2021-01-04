import { connect } from 'react-redux';

import {
    getTodos,
    addTodo,
    removeTodo,
    completeTodo,
    editTodo
} from '../../redux/actions/todo';

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