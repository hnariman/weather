import React from "react";

export default function NewComponent() {
  return (
      <section className="display">
    <Consumer>
      {data => 
     <p> {data.name} </p>
     <p> {data.surname} </p>
     <p> {data.position} </p>
      }
    </Consumer>
      </section>
  );
}
