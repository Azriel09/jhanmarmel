import "./styles/contacts.css";
import "./styles/main-styles.css";

export default function Contact({ contacts }) {
  return (
    <div className="contact page" ref={contacts}>
      <h2 className="page-header">Contact</h2>
    </div>
  );
}
