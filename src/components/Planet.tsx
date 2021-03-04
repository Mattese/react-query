import * as React from "react";

interface ComponentProps {
  planet: any;
}

export const Planet: React.FC<ComponentProps> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};
