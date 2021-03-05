import { useState } from 'react';
import PhonebookForm from './Components/Phonebook/PhonebookForm';
import TodoList from './Components/Phonebook/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const handleSubmit = todo => {
    setTodos(prevState => [todo, ...prevState]);
  };
  return (
    <div>
      <PhonebookForm onSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};
export default App;
