import React from "react";
import { useState } from "react";
import { Navbar } from "src/components/Navbar";
import { People } from "src/components/People";
import { Planets } from "src/components/Planets";
import "src/styles/styles.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === "planets" ? <Planets /> : <People />}
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>

    </>
  );
}

export default App;
