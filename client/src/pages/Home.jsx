import React from "react";
import { Header } from "../components/Header";
import Cards from "../components/Cards";

const Home = () => {
  const cards = [{ name: "Derivatives", link:'/STSMATH/derivatives' },{ name: "Anti Derivatives", link:'/STSMATH/antiderivatives' },{ name: "Conic Sections", link:'/STSMATH/conic' },];
  return (
    <div className="bg-gradient-to-b from-black via-black to-blue-900 flex flex-col">
      <Header></Header>
      <div className="mt-20"></div>
      <section className="flex justify-center items-center w-screen mb-32">
        <div className="grid grid-cols-3 gap-20">
          {cards.map((card, index) => {
            return <Cards key={index} name={card.name} link={card.link} />;
          })}
        </div> 
      </section>
    </div>
  );
};

export default Home;
