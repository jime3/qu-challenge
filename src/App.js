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
  const postsPerPage = 10;

  useEffect(() => {
    //Note: I had to get all the planets to be able to sort them because the API does not have any parameters to sort them by any attribute
    const getData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        const totalCount = data.count;
        const totalPages = Math.ceil(totalCount / 10);

        let allPlanets = [];

        // Fetch data for each page
        for (let page = 1; page <= totalPages; page++) {
          const pageResponse = await fetch(
            `https://swapi.dev/api/planets/?page=${page}`
          );
          const pageData = await pageResponse.json();
          const currentPlanets = pageData.results;
          allPlanets = allPlanets.concat(currentPlanets);
        }
        // Sort the planets by name
        allPlanets.sort((a, b) => a.name.localeCompare(b.name));

        setPlanets(allPlanets);

        setTotalPages(6);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handlePagination = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const getPlanetsToShow = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    return planets.slice(startIndex, endIndex);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PlanetList planets={getPlanetsToShow()} isLoading={isLoading} />
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
