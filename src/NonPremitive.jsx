
import React, { useState } from 'react';

const ObjectExample = () => {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const changeName = () => {
    setPerson({ ...person, name: 'Jane' }); // Changes the object, causes re-render
    //setPerson(person.name = "Ranveer") // direct mutation of state is prohibited because of this re rending issue.
    //That is why any state management library use immutibulity to avoid this problem.
  };

  console.log("Rendering Object Example");
  const setSameObject = () => {
    setPerson(person); // Same object reference, no re-render
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={setSameObject}>Set Same Object</button>
    </div>
  );
};

export default ObjectExample;
