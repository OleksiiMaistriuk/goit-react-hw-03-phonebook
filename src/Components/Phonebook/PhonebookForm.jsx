import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const PhonebookForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      name,
      number,
    };
    onSubmit(newTodo);
    setName('');
    setNumber('');
  };
  const handleInpuChangeName = e => {
    setName(e.target.value);
  };

  const handleInpuChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input type="text" value={name} onChange={handleInpuChangeName} />

        <h2>Number</h2>
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleInpuChangeNumber}
        />
        <button type="submit"> add contact </button>
      </form>
    </div>
  );
};

export default PhonebookForm;
