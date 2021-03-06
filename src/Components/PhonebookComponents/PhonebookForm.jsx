const PhonebookForm = ({
  number,
  name,
  onFormSubmit,
  onInpuChangeName,
  onInpuChangeNumber,
}) => {
  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={onFormSubmit}>
        <h2>Name</h2>
        <input type="text" value={name} onChange={onInpuChangeName} />

        <h2>Number</h2>
        <input type="text" value={number} onChange={onInpuChangeNumber} />
        <button type="submit"> add contact </button>
      </form>
    </>
  );
};

export default PhonebookForm;
