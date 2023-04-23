import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const tabs = [
    {
      icon: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z",
      name: "Quiz",
      link: "/",
    },
    {
      icon: "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z",
      name: "Review",
      link: "/",
    },
    {
      icon: "M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09",
      name: "Formula",
      link: "/",
    },
  ];

  return (
    <>
      <>
        <div
          className={`h-screen ${
            toggleSidebar ? "w-36" : "w-16"
          } duration-500 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 shadow-lg shadow-slate-700 absolute top-0 left-0 flex flex-col items-center justify-between py-5`}
        >
          <div className="flex flex-col justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={`w-7 h-7 stroke-teal-500 hover:stroke-teal-200 cursor-pointer mb-14 duration-500  ${
                  toggleSidebar ? "rotate-90 ml-20" : "rotate-0"
                }`}
                onClick={(e) => {
                  setToggleSidebar(!toggleSidebar);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={` ${
                    toggleSidebar
                      ? "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      : "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  }`}
                />
              </svg>
            </div>
            <Link to={props.page}>
              <div className="cursor-pointer hover:scale-[1.1] focus:scale-[1.1] bg-transparent border-teal-500 hover:border-teal-300 duration-200 border-2 rounded-md p-1 flex justify-evenly items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" //"#14b8a6" //#5eead4
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="w-8 h-8 stroke-teal-500 hover:stroke-teal-300 transition-colors duration-100 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <p
                  className={`${
                    toggleSidebar
                      ? "text-sm font-semibold mt-1 text-teal-500 "
                      : "opacity-0 text-[0px]"
                  } duration-500 `}
                >
                  Dashboard
                </p>
              </div>
            </Link>
            <div className="bg-teal-800 h-[1px] w-5/6 mt-5 mb-5"></div>
            <div className=" grid grid-cols-1 gap-5">
              {tabs.map((tab, index) => {
                return (
                  <Link to={tab.link}>
                    <div
                      key={index}
                      className="cursor-pointer hover:scale-[1.1] focus:scale-[1.1] bg-transparent border-teal-500 hover:border-teal-300 duration-200 border-2 rounded-md p-1 flex justify-evenly items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" //"#14b8a6" //#5eead4
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8 stroke-teal-500 hover:stroke-teal-300 transition-colors duration-100 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={tab.icon}
                        />
                      </svg>
                      <p
                        className={`${
                          toggleSidebar
                            ? "text-sm font-semibold mt-1 text-teal-500 "
                            : "opacity-0 text-[0px]"
                        } duration-500 `}
                      >
                        {tab.name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <Link to="/">
            <div
              className={`${
                toggleSidebar ? "px-5 py-2" : "p-2"
              } duration-500 border-2 rounded-full border-teal-500 cursor-pointer hover:scale-[1.1] focus:scale-[1.1]r `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 stroke-teal-500 hover:stroke-teal-300 transition-colors duration-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </>
    </>
  );
};

export default SideBar;
