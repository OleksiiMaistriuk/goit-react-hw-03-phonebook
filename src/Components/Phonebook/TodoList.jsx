const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            {/* <button
              className={style.button}
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button> */}
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
