import * as React from "react";

interface ComponentProps {
  person: any;
}

export const Person: React.FC<ComponentProps> = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
};
