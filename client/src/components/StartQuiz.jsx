import React from "react";

export default function StartQuiz(props) {
//   const prev = props.categories;
//   const setCheck = (index) => {
//     prev[index].checked = !prev[index].checked;
//   };
  return (
    <section className="flex justify-center items-center w-full h-5/6">
      <div className="text-teal-300 drop-shadow-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-600 to-teal-700 opacity-75 px-14 py-12 rounded-lg">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-bold text-3xl mb-8">
            Choose which topics to include:
          </h2>

          <div className="flex justify-evenly">
            {props.categories.map((category, index) => {
              return (
                <div className="flex mr-5" key={index}>
                  <input
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                    onClick={(index)=>category.checked=!category.checked}
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer ml-3"
                    htmlFor="checkboxDefault"
                  >
                    {category.label}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="mt-4 md:mt-8">
            <button
              className="inline-block rounded border border-white bg-white px-12 py-3 text-lg font-medium text-teal-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-teal-400"
              onClick={props.onStart}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
