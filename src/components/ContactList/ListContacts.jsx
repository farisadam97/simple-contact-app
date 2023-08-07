import ListItemContact from "./ListItemContact";
const ListContacts = (prop) => {
  const { contacts, onDelete } = prop;
  return (
    <>
      {contacts.map((contact) => {
        return (
          <ListItemContact
            key={contact.id}
            data={contact}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default ListContacts;
