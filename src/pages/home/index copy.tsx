import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchBar from "../../components/searchBar";

const Home = () => {
  const [movies, setMovies] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sorting, setSorting] = useState<any>({
    field: "name",
    ascending: true,
  });

  const movieListData = useSelector(
    (state: RootState) => state.movieData?.movieDataList
  );
  console.log("movieListData === ", movieListData);

  const handleSearch = (e: any) => {
    setSearchValue(e?.target?.value);
    if (e?.target?.value === "") {
      setMovies(movieListData);
    } else {
      const filteredData = movies?.filter((item: any) => {
        if (item?.name?.toLowerCase().includes(searchValue.toLowerCase())) {
          return item;
        }
      });
      setMovies(filteredData);
    }
  };
  function applySorting(key: any, ascending: any) {
    setSorting({ key: key, ascending: ascending });
  }

  useEffect(() => {
    const sortedCurrentUsers = [...movies].sort((a, b) => {
      return a[sorting.key]?.localeCompare(b[sorting.key]);
    });

    setMovies(
      sorting.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
    );
  }, [movies, sorting]);

  useEffect(() => {
    setMovies(movieListData);
    // const data1 = [...movies].sort((a, b) => (a.name < b.name ? -1 : 1));
    // const sortedCurrentUsers = [...movies].sort((a, b) => {
    //   return a["name"].localeCompare(b["name"]);
    // });
    // https://blog.logrocket.com/creating-react-sortable-table/
    // https://stackoverflow.com/questions/72254047/sort-table-by-clicking-on-the-column-headerF

    // console.log("data ==== ", sortedCurrentUsers);
  }, []);

  return (
    <div>
      {/* Search Bar */}
      <SearchBar onchange={handleSearch} value={searchValue} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => applySorting("name", !sorting.ascending)}
                >
                  Movie name
                  <div>
                    <svg
                      className="w-3 h-3 ms-1.5 cursor-pointer"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Release Year
              </th>
            </tr>
          </thead>
          <tbody>
            {movies?.map((movieItem: any, movieIndex: number) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={movieIndex}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {movieItem?.name}
                  </th>
                  <td className="px-6 py-4">{movieItem?.des}</td>
                  <td className="px-6 py-4">{movieItem?.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
