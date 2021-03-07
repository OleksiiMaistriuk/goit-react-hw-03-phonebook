import { useState, useEffect } from 'react';
import PhonebookFormServis from './PhonebookFormServis';
import TodoList from '../PhonebookComponents/ContactList';
import Filter from '../PhonebookComponents/FormFilter';

const PhonebookServis = () => {
  const [todos, setTodos] = useState([]);
  const [filter, chengeFilter] = useState('');

  const handleSubmit = todo => {
    if (
      todos.find(
        ({ name, number }) => name === todo.name || number === todo.number,
      )
    ) {
      alert(`${todo.name} is already in contacts`);
      return;
    }
    setTodos(prevState => [todo, ...prevState]);
  };
  const handleDeleteContact = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  const handleChengeFilter = e => {
    chengeFilter(e.target.value);
  };

  const normalizeFilter = filter.toLowerCase();

  const filtrContactList = todos.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <PhonebookFormServis onSubmit={handleSubmit} />
      {todos.length > 1 && (
        <Filter filter={filter} onChengeFilter={handleChengeFilter} />
      )}

      <TodoList
        todos={filtrContactList}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
};
export default PhonebookServis;
