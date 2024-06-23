import { Outlet } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Footer from "../components/Footer/Footer";
import { API_KEY } from "../../constants/constant";
export const globalApp = createContext();

const Layout = () => {
  const BASE_URL = "https://api.unsplash.com/photos/";
  const [images, setImages] = useState([]);
  const [filter, setImagefilter] = useState("");
  //const handleSearch = (searchValue) => setfilter(searchValue);
  const [photos, setSearchedphotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?client_id=${API_KEY}&per_page=30`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /*  useEffect(() => {
    fetch(`${BASE_URL}?client_id=${API_KEY}&per_page=30`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []); */

  useEffect(() => {
    if (filter) {
      const filterPhoto = images?.filter((image) =>
        image?.alt_description?.toLowerCase().includes(filter.toLowerCase())
      );
      setSearchedphotos(filterPhoto);
    } else {
      setSearchedphotos(images);
    }
  }, [images, filter]);
  //console.log(images);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedImages, setFetchedImages] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?client_id=${API_KEY}&per_page=30`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      setFetchedImages(data);
    } catch (error) {
      //console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    photos,
    filter,
    setImagefilter,
    isLoading,
    setIsLoading,
    fetchedImages,
    setFetchedImages,
  };
  return (
    <globalApp.Provider value={value}>
      <Outlet />
      <Footer />
    </globalApp.Provider>
  );
};

export default Layout;
