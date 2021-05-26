import React from "react";
import Searchbar from "../components/searchbar/searchbar";
import Movies from "../components/movies/movies";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Searchbar />
      <Movies />
      <Footer />
    </>
  );
}
