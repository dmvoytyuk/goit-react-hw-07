import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice.js";
import Loader from "../Loader/Loader.jsx";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default ContactList;
