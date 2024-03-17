import { useState } from "react";
import css from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook 📱</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
    </div>
  );
}

export default App;
