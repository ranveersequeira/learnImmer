
import React, { useState } from 'react';

const ObjectExample = () => {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const changeName = () => {
    // setPerson({ ...person, name: "Ranveer" }); // Changes the object, causes re-render

    // person.name = "Ranveer"
    // console.log("set name as Ranveer example without immutibulity")
    // This wont cause rerender because person object is same as previous ( because objects are pass by reference)
    // setPerson(person)
    //That is why any state management library use immutibulity to avoid this problem.
  };

  console.log("Rendering Object Example");
  console.log("person name",person.name);
  const setSameObject = () => {
    setPerson(person); // Same object reference, no re-render
    console.log("setting same object")
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
