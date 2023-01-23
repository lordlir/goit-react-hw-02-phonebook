export const ContactListItem = ({ onDelContact, name, number, id }) => {
  return (
    <li className="list-item">
      {name}:{number}
      <button onClick={e => onDelContact(id)}>Delete</button>
    </li>
  );
};
