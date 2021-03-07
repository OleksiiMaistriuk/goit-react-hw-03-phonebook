import PropTypes from 'prop-types';
const PhonebookForm = ({
  number = '',
  name = '',
  onFormSubmit,
  onInpuChangeName,
  onInpuChangeNumber,
}) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={onFormSubmit}>
        <h2>Name</h2>
        <input type="text" value={name} onChange={onInpuChangeName} />

        <h2>Number</h2>
        <input type="text" value={number} onChange={onInpuChangeNumber} />

        <button type="submit"> add contact </button>
      </form>
    </div>
  );
};

export default PhonebookForm;

PhonebookForm.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  onFormSubmit: PropTypes.func.isRequired,
  onInpuChangeName: PropTypes.func.isRequired,
  onInpuChangeNumber: PropTypes.func.isRequired,
};
