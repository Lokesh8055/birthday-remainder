import { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPerson = people.filter((people) => people.id !== id);
    setPeople(newPerson);
  };

  return (
    <main>
      <section className="container">
        <h3 className="center">
          <span className="birthday">{people.length}</span> birthday today
        </h3>
        {people.map((person) => (
          <List key={person.id} {...person} removePerson={removePerson} />
        ))}
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
