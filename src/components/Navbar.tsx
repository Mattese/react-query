import * as React from "react";

interface ComponentProps {
  setPage: (page: string) => void;
}

export const Navbar: React.FC<ComponentProps> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </nav>
  );
};
