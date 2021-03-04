import axios from "axios";
import * as React from "react";
import { useQuery } from "react-query";
import { Person } from "src/components/Person";
interface ComponentProps {}

const fetchPeople = async () => {
  const { data } = await axios.get("https://swapi.dev/api/people/");
  return data;
};

export const People: React.FC<ComponentProps> = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data, "data", status, "status");
  return (
    <>
      <h2>People</h2>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data ...</div>}
      {status === "success" && (
        <div>
          {data?.results?.map((person: any, index: number) => (
            <Person key={index} person={person} />
          ))}
        </div>
      )}
    </>
  );
};
