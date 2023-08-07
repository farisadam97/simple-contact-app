import ListContacts from "../components/ContactList/ListContacts";
import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/contact";
import { CircularProgress, Container } from "@mui/material";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getAllContact() {
    getContacts()
      .then((res) => {
        const { data } = res.data;
        setContacts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setIsLoading(false);
      });
  }

  function deleteContactById(id) {
    deleteContact(id).then(() => {
      getAllContact();
    });
  }
  useEffect(() => {
    setIsLoading(true);
    getAllContact();
  }, []);

  return (
    <Container disableGutters sx={{ flex: 1, overflow: "auto" }}>
      {!isLoading ? (
        contacts.length > 0 ? (
          <ListContacts contacts={contacts} onDelete={deleteContactById} />
        ) : (
          "Something Error"
        )
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default ContactList;
