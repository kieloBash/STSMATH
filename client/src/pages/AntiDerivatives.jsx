import React, { useState } from "react";
import SideBar from "../components/SideBar";
import PagesHeader from "../components/PagesHeader";

const AntiDerivatives = () => {
  const [score, setScore] = useState(1);
  const topics = [
    {
      title: "Antidifferentiation",
      content: " - involves techniques to learn in solving integrals",
    },
    {
      title: "Separable Differentials",
      content: " - solving to get the particular solution",
    },
    {
      title: "Definite Integrals",
      content: " - solving to the value for a given limit",
    },
  ];
  const percent = (score / 20) * 100;
  return (
    <div className="bg-slate-900 h-screen w-screen">
      <SideBar page={'/antiderivatives'}/>
      <div className="ml-20 flex flex-col">
        <PagesHeader title={"AntiDerivatives"} />
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-0">
            <div className="flex flex-col justify-between text-teal-300 drop-shadow-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-600 to-teal-700 opacity-75 w-72 max-h-96 min-h-56 rounded-md p-4">
              <div className="flex items-center group cursor-pointer mb-4">
                <h1 className="text-3xl font-light mb-2 text-white group-hover:text-teal-300 duration-300">
                  Take a Quiz
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 ml-2 group-hover:ml-5 duration-300 group-hover:stroke-teal-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className="flex justify-evenly items-center flex-1 flex-col cursor-default">
                {score === "N/A" ? (
                  <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-7xl font-bold mb-2">N/A</h1>
                    <div className="w-full h-3 mt-4 bg-teal-100 rounded-full">
                      <div
                        className={`h-full text-xs text-center text-white bg-teal-400 rounded-full`}
                        style={{ width: `${0}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-7xl font-bold mb-2">{score}/20</h1>
                    <div className="w-full h-3 mt-4 bg-teal-100 rounded-full">
                      <div
                        className={`h-full text-xs text-center text-white bg-teal-400 rounded-full`}
                        style={{ width: `${0}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {score !== "N/A" ? (
                  <div className="mt-5 w-full flex justify-end cursor-default">
                    {percent < 60 ? (
                      <span class="flex items-center justify-evenly px-2 py-1 text-xs font-bold text-red-400 bg-transparent border-2 border-red-400 rounded-md">
                        FAILED
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 ml-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ) : (
                      <div>
                        {percent !== 100 ? (
                          <span class="flex items-center justify-evenly px-2 py-1 text-xs font-bold text-green-400 bg-transparent border-2 border-green-400 rounded-md">
                            PASSED
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 ml-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span class="flex items-center justify-evenly px-2 py-1 text-xs font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 rounded-md">
                            PERFECT
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 ml-1"
                            >
                              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mt-5 w-full flex justify-end cursor-default">
                    <span class="flex items-center justify-evenly px-2 py-1 text-xs font-bold text-gray-400 bg-transparent border-2 border-gray-400 rounded-md">
                      NOT YET TAKEN
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between text-teal-300 drop-shadow-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-600 to-teal-700 opacity-75 w-96 max-h-96 min-h-56 rounded-md p-4">
              <div className="flex items-center group cursor-pointer mb-4 justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 mr-2 group-hover:mr-5 duration-300 group-hover:stroke-teal-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
                <h1 className="text-3xl font-light mb-2 text-white group-hover:text-teal-300 duration-300 text-right">
                  Take a Review
                </h1>
              </div>
              {topics.map((topic, index) => {
                return (
                  <div
                    class="flex items-start justify-between mb-2 rounded"
                    key={index}
                  >
                    <span class="p-2 text-white bg-teal-400 rounded-full dark:text-gray-800">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                      </svg>
                    </span>
                    <div class="flex items-center justify-between w-full">
                      <div class="flex flex-col items-start justify-between w-full ml-2 text-sm">
                        <p class="text-gray-700 dark:text-white">
                          <span class="mr-1 font-bold">{topic.title}</span>
                          {topic.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiDerivatives;
