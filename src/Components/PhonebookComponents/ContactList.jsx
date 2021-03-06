import PropTypes from 'prop-types';

const TodoList = ({ todos, onDeleteContact }) => {
  return (
    <ul>
      {todos.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
