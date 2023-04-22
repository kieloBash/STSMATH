import React from "react";
import { Header } from "../components/Header";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="bg-black flex flex-col">
      <Header></Header>
      <div className="mt-20"></div>
      <section className="flex justify-center items-center w-screen mb-32">
        <div className="grid grid-cols-3 gap-20">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </div>
  );
};

export default Home;
