import ListContacts from "../components/ContactList/ListContacts";
import { useEffect, useState } from "react";
import { getContact } from "../api/contact";
import { CircularProgress, Container } from "@mui/material";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getContact()
      .then((res) => {
        const { data } = res.data;
        setContacts(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        contacts.length > 0 ? (
          <ListContacts contacts={contacts} />
        ) : (
          "Something Error"
        )
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ContactList;
