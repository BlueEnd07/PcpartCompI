import React, { useContext, useState } from "react";
import axios from "axios";
import FetchDataContext from "../context/fetchdatacontext";

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setFetchData } = useContext(FetchDataContext);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    setFetchData(null);

    try {
      const searchItem = event.target.elements.search.value;
      const response = await axios.request({
        method: "GET",
        // url:`https://js-web-scrapper.onrender.com/scrape?product=${searchItem}`,
        url: `    "http://lokesh-rawat.site/scrape?product=${searchItem}`,
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/2023.5.8",
        },
      });

      setFetchData(response.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-box mx-auto max-w-fit">
      <form
        className="flex flex-col gap-10 items-center mx-auto"
        onSubmit={handleSearchSubmit}
      >
        <div className="relative w-full">
          <input
            type="text"
            id="search"
            className="bg-gray-100 border-2 text-3xl font-bold rounded-lg h-20 w-fit mx-auto text-center px-16"
            placeholder="Search PC part (e.g., 4080)..."
          />
        </div>

        {isLoading ? (
          <button
            type="submit"
            className="rounded-lg border-2 text-3xl px-16 py-4 m-10 bg-white animate-pulse cursor-wait"
            disabled={isLoading}
          >Searching.....</button>
        ) : (
          <button
            type="submit"
            className="rounded-lg border-2 text-3xl px-16 py-4 m-10 bg-white hover:bg-gray-300 hover:scale-110 transition-all ease-in-out"
            disabled={isLoading}
          >Search</button>
        )}
      </form>
    </div>
  );
}
