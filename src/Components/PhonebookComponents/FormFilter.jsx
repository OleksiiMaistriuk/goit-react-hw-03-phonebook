const Filter = ({ filter, onChengeFilter }) => {
  return (
    <div>
      <h3> Find contacts by name </h3>
      <input type="text" value={filter} onChange={onChengeFilter} />
    </div>
  );
};

export default Filter;
