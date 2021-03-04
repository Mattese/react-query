import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Planet } from "src/components/Planet";
interface ComponentProps {}

const fetchPlanets = async (queryKey: number) => {
  const result = await axios.get(`https://swapi.dev/api/planets/`, {
    params: { page: queryKey },
  });
  return result.data;
};

export const Planets: React.FC<ComponentProps> = () => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data,
    status,
    isFetching,
    isPreviousData,
  } = useQuery(["planets", page], () => fetchPlanets(page), {
    staleTime: 2000,
    keepPreviousData: true,
  });

  console.log(
    isLoading,
    isError,
    error,
    data,
    status,
    isFetching,
    isPreviousData
  );

  return (
    <>
      <h2>Planets</h2>

      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data ...</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={!data.previous}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((prevPage) => (data?.next ? prevPage + 1 : prevPage))
            }
            disabled={!data.next}
          >
            Next page
          </button>

          <div>
            {data?.results?.map((planet: any, index: number) => (
              <Planet key={index} planet={planet} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
