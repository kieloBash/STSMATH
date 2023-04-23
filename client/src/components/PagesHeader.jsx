import React from "react";

const PagesHeader = (props) => {
  return (
    <section class="text-white mb-16">
      <div class="mx-auto max-w-screen-xl px-4 pt-20 flex items-start">
        <div class="mx-auto max-w-6xl text-center">
          <h1 class="bg-gradient-to-r from-teal-300 via-blue-500 to-teal-600 bg-clip-text text-6xl font-extrabold text-transparent">
            <span class="sm:block text-3xl"> {props.title} </span>
            STSMATH REVIEWER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
