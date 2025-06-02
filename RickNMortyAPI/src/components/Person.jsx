import React from "react";

const Person = ({ name, age }) => {
  //   return <div>Hello From React</div>;
  return (
    <div>
      Hi I'm {name} and I'm {age} years old
      {age >= 18 ? (
        <p>Yeah, I am getting married</p>
      ) : (
        age > 0 && <p>No, I am not getting married</p>
      )}
    </div>
  );
};

export default Person;
