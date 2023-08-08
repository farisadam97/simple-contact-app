import ListContacts from "../components/ContactList/ListContacts";
import SkeletonList from "../components/Skeleton/List";
import AlertComponent from "../components/Alert";
import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/contact";
import { Container } from "@mui/material";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const getAllContact = async () => {
    setIsLoading(true);
    getContacts()
      .then((res) => {
        const { data } = res.data;
        setContacts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setAlertMessage({
          type: "error",
          title: "Error",
          content: "Something wrong",
        });
        setIsLoading(false);
      });
  };

  const deleteContactById = async (id) => {
    deleteContact(id)
      .then(() => {
        getAllContact();
      })
      .catch((error) => {
        setAlertMessage({
          type: "error",
          title: "Error",
          content: "Something wrong",
        });
      });
  };
  useEffect(() => {
    getAllContact();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setAlertMessage();
    }, 3000);
  }, [alertMessage]);

  return (
    <Container disableGutters sx={{ flex: 1, overflow: "auto" }}>
      {alertMessage && (
        <AlertComponent
          type={alertMessage.type}
          title={alertMessage.title}
          content={alertMessage.content}
        />
      )}
      {!isLoading ? (
        contacts.length > 0 ? (
          <ListContacts contacts={contacts} onDelete={deleteContactById} />
        ) : (
          "Something Error"
        )
      ) : (
        <SkeletonList />
      )}
    </Container>
  );
};

export default ContactList;
