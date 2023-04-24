import React, { useState } from "react";
import SideBar from "../components/SideBar";
import HeadingPage from "../components/HeadingPage";
import StartQuiz from "../components/StartQuiz";

const Quiz = () => {
  const [start, setStart] = useState(false);
  const categories = [
    { label: "Exponent", checked: false },
    { label: "Natural Lograithm", checked: false },
    { label: "Logarithm", checked: false },
    { label: "Trigonometric", checked: false },
  ];
  const onStart = () => {
    console.log(categories)
    setStart(!start);
  };
  return (
    <div className="bg-slate-900 h-screen w-screen">
      <SideBar page={"/"} />
      <div className="ml-20 mr-3 flex flex-col h-full">
        <div className="">
          <HeadingPage name={"AntiDerivatives"} page={"Quiz"} />
        </div>
        {start ? (
          <></>
        ) : (
          <>
            <StartQuiz categories={categories} onStart={onStart}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
