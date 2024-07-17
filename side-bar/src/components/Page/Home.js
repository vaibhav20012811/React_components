import React from "react";

export default function Home() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-gray-50 sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-indigo-400 sm:block">
              Increase Conversion.
            </strong>
          </h1>

          <p className="mt-4 text-gray-50 sm:text-xl/relaxed ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded bg-indigo-300 px-12 py-3 text-sm font-medium text-black shadow hover:bg-indigo-400 focus:outline-none focus:ring active:bg-indigo-300 sm:w-auto"
              href="/"
            >
              Get Started
            </button>

            <button className="block w-full rounded px-12 py-3 text-sm font-medium bg-gray-600 text-gray-50 shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-600 sm:w-auto ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <h1>Hello</h1>
    </section>
  );
}
