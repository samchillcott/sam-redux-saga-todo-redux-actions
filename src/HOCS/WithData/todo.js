import { connect } from 'react-redux';

const mapStateToProps = ({
  todos
}) => ({
  todos
});

const withTodoData = (WrappedComponent) => connect(mapStateToProps)(WrappedComponent);

export default withTodoData