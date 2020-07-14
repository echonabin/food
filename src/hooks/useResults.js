import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchterm) => {
    console.log(searchApi);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchterm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Some thing went wrong!!");
    }
  };
  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage];
};
