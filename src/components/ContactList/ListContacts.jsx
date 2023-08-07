import ListItemContact from "./ListItemContact";
const ListContacts = (prop) => {
  const { contacts } = prop;
  return (
    <>
      {contacts.map((contact) => {
        // console.log("contact", contact);
        return <ListItemContact key={contact.id} data={contact} />;
      })}
    </>
  );
};

export default ListContacts;
