import React from "react";
import { ArrowRight, BookOpen, Newspaper, Search } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-14">
        {/* Content */}
        <div className="z-10">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Newspaper size={17} />
            Your Daily Dose of News
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Find Your{" "}
            <span className="text-blue-500">Favourite</span>
            <br />
            Newspaper to Read
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore a wide collection of newspapers and discover the stories
            that matter to you. Stay updated with the latest news in Story,
            Tech & Science.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500">
              <Search size={19} />
              Explore Newspapers
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3.5 font-semibold transition hover:bg-white/10">
              <BookOpen size={19} />
              Browse Categories
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold">12+</p>
              <p className="text-sm text-slate-400">Newspapers</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-slate-400">Categories</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-slate-400">Articles</p>
            </div>
          </div>
        </div>

        {/* Newspaper Visual */}
        <div className="relative flex min-h-[380px] items-center justify-center lg:min-h-[500px]">
          {/* Main newspaper card */}
          <div className="relative w-full max-w-md rotate-2 rounded-2xl bg-white p-4 shadow-2xl">
            <div className="border-b-2 border-slate-900 pb-3">
              <p className="text-center font-serif text-3xl font-black text-slate-900">
                DAILY NEWS
              </p>
              <p className="mt-1 text-center text-xs text-slate-500">
                THE WORLD • TECHNOLOGY • SCIENCE
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="col-span-2 h-28 rounded-lg bg-slate-800 p-4">
                <p className="font-serif text-xl font-bold text-white">
                  Latest Stories From Around The World
                </p>
              </div>

              <div className="h-28 rounded-lg bg-blue-100 p-3">
                <p className="text-sm font-bold text-blue-900">
                  Technology
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Discover the latest tech news.
                </p>
              </div>

              <div className="h-28 rounded-lg bg-green-100 p-3">
                <p className="text-sm font-bold text-green-900">Science</p>
                <p className="mt-2 text-xs text-slate-600">
                  Explore new discoveries.
                </p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-2 right-0 flex h-32 w-32 rotate-6 items-center justify-center rounded-full bg-blue-600 text-center shadow-xl sm:right-4">
            <div>
              <BookOpen className="mx-auto mb-2" size={25} />
              <p className="text-sm font-bold leading-tight">
                Read What
                <br />
                You Love
              </p>
            </div>
          </div>

          {/* Small floating cards */}
          <div className="absolute left-0 top-8 hidden rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:block">
            <Newspaper className="text-blue-400" size={25} />
          </div>

          <div className="absolute right-8 top-0 hidden rounded-xl bg-blue-600/20 p-4 backdrop-blur-md sm:block">
            <BookOpen className="text-blue-300" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;