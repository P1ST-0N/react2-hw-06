import "../../../node_modules/modern-normalize/modern-normalize.css";
import css from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";

function App() {
  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook 📱</h1>
      <ContactForm />
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
    </div>
  );
}

export default App;
