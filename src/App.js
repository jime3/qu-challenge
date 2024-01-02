import Layout from "./components/Layout/Layout";
import PlanetList from "./components/Planet/PlanetList";
import Pagination from "./components/Layout/Pagination";

import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1f3969",
      main: "#36307f",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        let allPlanets = [];
        let currentPage2 = 1;

        while (true) {
          const response = await fetch.get(
            `https://swapi.dev/api/planets/?page=${currentPage}`
          );
          const data = await response.json();
          const currentPlanets = data.results;

          // Break the loop if there are no more planets
          if (currentPlanets.length === 0) {
            break;
          }

          allPlanets = allPlanets.concat(currentPlanets);
          currentPage++;
        }
        // Sort the planets by name
        allPlanets.sort((a, b) => a.name.localeCompare(b.name));

        // Set the sorted planets in the state
        setPlanets(allPlanets);

        setTotalPages(Math.ceil(data.count / 10));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [currentPage]);

  function handlePagination(currentPage) {
    setCurrentPage(currentPage);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PlanetList planets={planets} isLoading={isLoading} />
        {!isLoading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={handlePagination}
          />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
